<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Validates the enquiry payload sent by the React SPA's EnquiryForm.
 *
 * The frontend sends camelCase keys and a nested `source` object:
 *   { firstName, lastName, email, phone, company, country, service,
 *     standard?, employees?, message, consent, recaptchaToken?,
 *     source: { utmSource?, utmMedium?, utmCampaign?, utmTerm?,
 *               utmContent?, referrer?, landingPath? } }
 */
class StoreEnquiryRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'firstName' => ['required', 'string', 'max:100'],
            'lastName' => ['required', 'string', 'max:100'],
            'email' => ['required', 'email:rfc', 'max:255'],
            'phone' => ['nullable', 'string', 'max:50'],
            'company' => ['required', 'string', 'max:200'],
            'country' => ['nullable', 'string', 'max:100'],
            'service' => ['required', 'string', 'max:100'],
            'standard' => ['nullable', 'string', 'max:150'],
            'employees' => ['nullable', 'string', 'max:50'],
            'message' => ['required', 'string', 'max:5000'],
            'consent' => ['accepted'],
            'recaptchaToken' => ['nullable', 'string'],

            // Honeypot: must be empty. Bots fill it; the form hides it from users.
            'companyWebsite' => ['nullable', 'prohibited'],

            'source' => ['nullable', 'array'],
            'source.utmSource' => ['nullable', 'string', 'max:255'],
            'source.utmMedium' => ['nullable', 'string', 'max:255'],
            'source.utmCampaign' => ['nullable', 'string', 'max:255'],
            'source.utmTerm' => ['nullable', 'string', 'max:255'],
            'source.utmContent' => ['nullable', 'string', 'max:255'],
            'source.referrer' => ['nullable', 'string', 'max:1000'],
            'source.landingPath' => ['nullable', 'string', 'max:500'],
        ];
    }

    public function messages(): array
    {
        return [
            'consent.accepted' => 'Please confirm we can contact you about this enquiry.',
            'companyWebsite.prohibited' => 'Your submission was flagged as spam.',
        ];
    }
}
