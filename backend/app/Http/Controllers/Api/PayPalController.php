<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Course;
use App\Models\Enrollment;
use App\Models\Order;
use App\Services\PayPalService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Throwable;

class PayPalController extends Controller
{
    public function __construct(private readonly PayPalService $paypal) {}

    /**
     * Step 1: create a PayPal order for a course.
     *
     * The amount is taken from the database (never from the request body) so
     * the price cannot be tampered with client-side. We record a pending
     * order locally and return the PayPal order id to the browser.
     */
    public function createOrder(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'courseSlug' => ['required', 'string', 'exists:courses,slug'],
            'customerName' => ['nullable', 'string', 'max:255'],
            'customerEmail' => ['nullable', 'email', 'max:255'],
        ]);

        $course = Course::where('slug', $validated['courseSlug'])
            ->where('is_active', true)
            ->firstOrFail();

        try {
            $paypalOrder = $this->paypal->createOrder($course);
        } catch (Throwable $e) {
            Log::error('PayPal createOrder failed', ['error' => $e->getMessage()]);

            return response()->json([
                'message' => 'Unable to start the payment. Please try again later.',
            ], 502);
        }

        Order::create([
            'course_id' => $course->id,
            'paypal_order_id' => $paypalOrder['id'],
            'status' => Order::STATUS_PENDING,
            'amount_minor' => $course->price_minor,
            'currency' => $course->currency,
            'customer_name' => $validated['customerName'] ?? null,
            'customer_email' => $validated['customerEmail'] ?? null,
        ]);

        return response()->json([
            'id' => $paypalOrder['id'],
            'status' => $paypalOrder['status'],
        ]);
    }

    /**
     * Step 2: capture the PayPal order after the buyer approves it.
     *
     * We verify the captured amount matches what we expected, mark the order
     * paid, and create an enrollment. Returns the enrollment reference so the
     * frontend can redirect to the receipt page.
     */
    public function captureOrder(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'orderId' => ['required', 'string'],
            'customerName' => ['nullable', 'string', 'max:255'],
            'customerEmail' => ['nullable', 'email', 'max:255'],
        ]);

        $order = Order::where('paypal_order_id', $validated['orderId'])->first();

        if (! $order) {
            return response()->json(['message' => 'Unknown order.'], 404);
        }

        // Idempotency: if we already processed this order, return its enrollment.
        if ($order->isPaid() && $order->enrollment) {
            return response()->json([
                'status' => 'paid',
                'reference' => $order->enrollment->reference,
            ]);
        }

        try {
            $capture = $this->paypal->captureOrder($validated['orderId']);
        } catch (Throwable $e) {
            Log::error('PayPal captureOrder failed', ['error' => $e->getMessage()]);
            $order->update(['status' => Order::STATUS_FAILED]);

            return response()->json([
                'message' => 'We could not confirm your payment. You have not been charged twice; please contact us if the amount was deducted.',
            ], 502);
        }

        $status = $capture['status'] ?? null;
        $capturedMinor = $this->paypal->extractCapturedMinor($capture);

        // Guard against tampering: the captured amount must match our record.
        if ($status !== 'COMPLETED' || $capturedMinor !== $order->amount_minor) {
            $order->update([
                'status' => Order::STATUS_FAILED,
                'paypal_payload' => $capture,
            ]);

            return response()->json([
                'message' => 'Payment verification failed.',
            ], 422);
        }

        $enrollment = DB::transaction(function () use ($order, $capture) {
            $order->update([
                'status' => Order::STATUS_PAID,
                'paypal_capture_id' => $this->paypal->extractCaptureId($capture),
                'paypal_payload' => $capture,
                'paid_at' => now(),
            ]);

            return Enrollment::create([
                'order_id' => $order->id,
                'course_id' => $order->course_id,
                'reference' => Enrollment::generateReference(),
                'customer_name' => $order->customer_name,
                'customer_email' => $order->customer_email,
                'status' => 'active',
            ]);
        });

        return response()->json([
            'status' => 'paid',
            'reference' => $enrollment->reference,
        ]);
    }

    /**
     * Optional PayPal webhook endpoint for asynchronous confirmation.
     *
     * NOTE: production use should verify the webhook signature against
     * PAYPAL_WEBHOOK_ID via PayPal's verify-webhook-signature endpoint before
     * trusting the payload. Left as a stub so the route exists.
     */
    public function webhook(Request $request): JsonResponse
    {
        Log::info('PayPal webhook received', ['type' => $request->input('event_type')]);

        return response()->json(['received' => true]);
    }
}
