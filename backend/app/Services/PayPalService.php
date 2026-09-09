<?php

namespace App\Services;

use App\Models\Course;
use Illuminate\Http\Client\PendingRequest;
use Illuminate\Support\Facades\Http;
use RuntimeException;

/**
 * Thin wrapper around the PayPal Orders v2 REST API.
 *
 * All credentials live in config/services.php (sourced from .env) and never
 * leave the server. The React frontend only ever exchanges opaque PayPal
 * order IDs with our own API.
 *
 * @see https://developer.paypal.com/docs/api/orders/v2/
 */
class PayPalService
{
    private ?string $accessToken = null;

    /**
     * Resolve the active PayPal config block (sandbox or live).
     *
     * @return array{client_id: ?string, client_secret: ?string, base_url: string}
     */
    private function config(): array
    {
        $mode = config('services.paypal.mode', 'sandbox');
        $config = config("services.paypal.$mode");

        if (empty($config['client_id']) || empty($config['client_secret'])) {
            throw new RuntimeException(
                "PayPal credentials for mode [$mode] are not configured. ".
                'Set the relevant PAYPAL_* values in your .env file.'
            );
        }

        return $config;
    }

    public function currency(): string
    {
        return config('services.paypal.currency', 'GBP');
    }

    /**
     * Fetch (and cache for this request) an OAuth2 access token.
     */
    private function accessToken(): string
    {
        if ($this->accessToken) {
            return $this->accessToken;
        }

        $config = $this->config();

        $response = Http::asForm()
            ->withBasicAuth($config['client_id'], $config['client_secret'])
            ->post("{$config['base_url']}/v1/oauth2/token", [
                'grant_type' => 'client_credentials',
            ]);

        if ($response->failed()) {
            throw new RuntimeException('Unable to authenticate with PayPal: '.$response->body());
        }

        return $this->accessToken = $response->json('access_token');
    }

    private function client(): PendingRequest
    {
        $config = $this->config();

        return Http::withToken($this->accessToken())
            ->baseUrl($config['base_url'])
            ->acceptJson()
            ->asJson();
    }

    /**
     * Create a PayPal order for the given course.
     *
     * @return array{id: string, status: string}
     */
    public function createOrder(Course $course): array
    {
        $amount = number_format($course->price_minor / 100, 2, '.', '');

        $response = $this->client()->post('/v2/checkout/orders', [
            'intent' => 'CAPTURE',
            'purchase_units' => [[
                'reference_id' => $course->slug,
                'description' => mb_substr($course->title, 0, 127),
                'amount' => [
                    'currency_code' => $course->currency ?: $this->currency(),
                    'value' => $amount,
                ],
            ]],
            'application_context' => [
                'brand_name' => config('app.name', 'TRAIBCERT'),
                'user_action' => 'PAY_NOW',
                'shipping_preference' => 'NO_SHIPPING',
            ],
        ]);

        if ($response->failed()) {
            throw new RuntimeException('PayPal create-order failed: '.$response->body());
        }

        return [
            'id' => $response->json('id'),
            'status' => $response->json('status'),
        ];
    }

    /**
     * Capture (finalise) a previously created PayPal order.
     *
     * Returns the full capture payload so the caller can verify the amount
     * and persist the capture id.
     *
     * @return array<string, mixed>
     */
    public function captureOrder(string $paypalOrderId): array
    {
        $response = $this->client()->post("/v2/checkout/orders/{$paypalOrderId}/capture");

        if ($response->failed()) {
            throw new RuntimeException('PayPal capture-order failed: '.$response->body());
        }

        return $response->json();
    }

    /**
     * Extract the capture id from a capture response payload.
     */
    public function extractCaptureId(array $capture): ?string
    {
        return $capture['purchase_units'][0]['payments']['captures'][0]['id'] ?? null;
    }

    /**
     * Extract the captured amount (as minor units) from a capture payload.
     */
    public function extractCapturedMinor(array $capture): ?int
    {
        $value = $capture['purchase_units'][0]['payments']['captures'][0]['amount']['value'] ?? null;

        return $value === null ? null : (int) round(((float) $value) * 100);
    }
}
