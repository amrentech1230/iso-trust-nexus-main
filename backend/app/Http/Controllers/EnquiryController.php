<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreEnquiryRequest;
use App\Models\Enquiry;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class EnquiryController extends Controller
{
    /**
     * Store a public enquiry submitted from the React SPA and return a
     * reference matching the frontend's expected shape: { reference }.
     */
    public function store(StoreEnquiryRequest $request): JsonResponse
    {
        $data = $request->validated();
        $source = $data['source'] ?? [];

        $reference = $this->generateReference();

        $enquiry = Enquiry::create([
            'reference' => $reference,
            'first_name' => $data['firstName'],
            'last_name' => $data['lastName'],
            'email' => $data['email'],
            'phone' => $data['phone'] ?? null,
            'company' => $data['company'],
            'country' => $data['country'] ?? null,
            'service' => $data['service'],
            'standard' => $data['standard'] ?? null,
            'employees' => $data['employees'] ?? null,
            'message' => $data['message'],
            'consent' => (bool) ($data['consent'] ?? false),
            'utm_source' => $source['utmSource'] ?? null,
            'utm_medium' => $source['utmMedium'] ?? null,
            'utm_campaign' => $source['utmCampaign'] ?? null,
            'utm_term' => $source['utmTerm'] ?? null,
            'utm_content' => $source['utmContent'] ?? null,
            'referrer' => $source['referrer'] ?? null,
            'landing_path' => $source['landingPath'] ?? null,
            'ip_address' => $request->ip(),
            'user_agent' => (string) $request->userAgent(),
            'status' => 'new',
        ]);

        // Hook point: dispatch a notification / push to a CRM (e.g. Zoho Bigin)
        // here, e.g. EnquiryReceived::dispatch($enquiry);

        return response()->json([
            'reference' => $enquiry->reference,
            'message' => 'Enquiry received.',
        ], 201);
    }

    /**
     * Admin: list recent enquiries (paginated). Protected by AdminToken.
     */
    public function index(Request $request): JsonResponse
    {
        $enquiries = Enquiry::query()
            ->latest()
            ->paginate((int) $request->integer('per_page', 25));

        return response()->json($enquiries);
    }

    /**
     * Generate a unique, human-friendly reference like "TBC-482913".
     */
    private function generateReference(): string
    {
        do {
            $reference = 'TBC-'.str_pad((string) random_int(0, 999999), 6, '0', STR_PAD_LEFT);
        } while (Enquiry::where('reference', $reference)->exists());

        return $reference;
    }
}
