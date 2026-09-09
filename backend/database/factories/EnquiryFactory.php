<?php

namespace Database\Factories;

use App\Models\Enquiry;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Enquiry>
 */
class EnquiryFactory extends Factory
{
    protected $model = Enquiry::class;

    public function definition(): array
    {
        return [
            'reference' => 'TBC-'.str_pad((string) $this->faker->unique()->numberBetween(0, 999999), 6, '0', STR_PAD_LEFT),
            'first_name' => $this->faker->firstName(),
            'last_name' => $this->faker->lastName(),
            'email' => $this->faker->safeEmail(),
            'phone' => $this->faker->phoneNumber(),
            'company' => $this->faker->company(),
            'country' => $this->faker->country(),
            'service' => $this->faker->randomElement([
                'ISO Certification',
                'Cyber Essentials / Cyber Essentials Plus',
                'Training',
                'Inspection',
            ]),
            'standard' => $this->faker->randomElement(['ISO 9001', 'ISO 27001', 'ISO 14001', null]),
            'employees' => $this->faker->randomElement(['1–10', '11–50', '51–200', '201–500', '500+']),
            'message' => $this->faker->paragraph(),
            'consent' => true,
            'status' => 'new',
        ];
    }
}
