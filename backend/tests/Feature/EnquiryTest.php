<?php

namespace Tests\Feature;

use App\Models\Enquiry;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class EnquiryTest extends TestCase
{
    use RefreshDatabase;

    private function validPayload(array $overrides = []): array
    {
        return array_merge([
            'firstName' => 'Ada',
            'lastName' => 'Lovelace',
            'email' => 'ada@example.com',
            'phone' => '+44 20 7946 0000',
            'company' => 'Analytical Engines Ltd',
            'country' => 'United Kingdom',
            'service' => 'ISO Certification',
            'standard' => 'ISO 27001',
            'employees' => '11–50',
            'message' => 'We need ISO 27001 across two sites within six months.',
            'consent' => true,
            'source' => [
                'utmSource' => 'google',
                'utmMedium' => 'cpc',
                'landingPath' => '/contact/enquiry',
            ],
        ], $overrides);
    }

    public function test_it_stores_an_enquiry_and_returns_a_reference(): void
    {
        $response = $this->postJson('/api/public/enquiry', $this->validPayload());

        $response->assertCreated()
            ->assertJsonStructure(['reference', 'message']);

        $reference = $response->json('reference');
        $this->assertMatchesRegularExpression('/^TBC-\d{6}$/', $reference);

        $this->assertDatabaseHas('enquiries', [
            'reference' => $reference,
            'email' => 'ada@example.com',
            'company' => 'Analytical Engines Ltd',
            'utm_source' => 'google',
            'landing_path' => '/contact/enquiry',
        ]);
    }

    public function test_it_validates_required_fields(): void
    {
        $response = $this->postJson('/api/public/enquiry', []);

        $response->assertStatus(422)
            ->assertJsonValidationErrors(['firstName', 'lastName', 'email', 'company', 'service', 'message']);
    }

    public function test_it_requires_consent(): void
    {
        $response = $this->postJson('/api/public/enquiry', $this->validPayload(['consent' => false]));

        $response->assertStatus(422)->assertJsonValidationErrors('consent');
    }

    public function test_it_rejects_honeypot_submissions(): void
    {
        $response = $this->postJson('/api/public/enquiry', $this->validPayload(['companyWebsite' => 'http://spam.example']));

        $response->assertStatus(422)->assertJsonValidationErrors('companyWebsite');
    }

    public function test_admin_listing_requires_a_token(): void
    {
        Enquiry::factory()->count(3)->create();

        $this->getJson('/api/admin/enquiries')->assertStatus(401);

        config(['services.admin.token' => 'secret-token']);

        $this->getJson('/api/admin/enquiries', ['Authorization' => 'Bearer secret-token'])
            ->assertOk()
            ->assertJsonStructure(['data', 'total']);
    }
}
