<?php

namespace Database\Seeders;

use App\Models\Course;
use Illuminate\Database\Seeder;

class CourseSeeder extends Seeder
{
    /**
     * Seed the training courses.
     *
     * IMPORTANT: the price_minor values below are PLACEHOLDERS only. Replace
     * them with TRAIBCERT's real course fees before going live. Prices are in
     * minor units (pence), so 49500 = £495.00. They intentionally match the
     * slugs used by the React frontend in src/data/courses.ts.
     */
    public function run(): void
    {
        $courses = [
            ['slug' => 'iso-9001', 'code' => 'ISO 9001:2015', 'title' => 'ISO 9001:2015 Quality Management Training', 'category' => 'Quality', 'price_minor' => 49500],
            ['slug' => 'iso-14001', 'code' => 'ISO 14001:2026', 'title' => 'ISO 14001 Environmental Management Training', 'category' => 'Environment', 'price_minor' => 49500],
            ['slug' => 'iso-45001', 'code' => 'ISO 45001:2018', 'title' => 'ISO 45001:2018 Occupational Health & Safety Training', 'category' => 'Safety', 'price_minor' => 49500],
            ['slug' => 'iso-22000', 'code' => 'ISO 22000:2018', 'title' => 'ISO 22000:2018 Food Safety Management Training', 'category' => 'Quality', 'price_minor' => 49500],
            ['slug' => 'iso-27001', 'code' => 'ISO/IEC 27001:2022', 'title' => 'ISO/IEC 27001:2022 Information Security Training', 'category' => 'Security', 'price_minor' => 59500],
            ['slug' => 'iso-41001', 'code' => 'ISO 41001:2018', 'title' => 'ISO 41001:2018 Facility Management Training', 'category' => 'Service', 'price_minor' => 45000],
            ['slug' => 'iso-20000-1', 'code' => 'ISO/IEC 20000-1:2018', 'title' => 'ISO/IEC 20000-1:2018 IT Service Management Training', 'category' => 'Service', 'price_minor' => 45000],
            ['slug' => 'iso-22301', 'code' => 'ISO 22301:2019', 'title' => 'ISO 22301:2019 Business Continuity Training', 'category' => 'Risk', 'price_minor' => 49500],
            ['slug' => 'iso-31000', 'code' => 'ISO 31000:2018', 'title' => 'ISO 31000:2018 Risk Management Training', 'category' => 'Risk', 'price_minor' => 45000],
            ['slug' => 'iso-50001', 'code' => 'ISO 50001:2018', 'title' => 'ISO 50001:2018 Energy Management Training', 'category' => 'Environment', 'price_minor' => 45000],
            ['slug' => 'iso-17025', 'code' => 'ISO/IEC 17025:2017', 'title' => 'ISO/IEC 17025:2017 Testing & Calibration Laboratories Training', 'category' => 'Laboratory', 'price_minor' => 55000],
            ['slug' => 'iso-17043', 'code' => 'ISO/IEC 17043:2010', 'title' => 'ISO/IEC 17043:2010 Proficiency Testing Training', 'category' => 'Laboratory', 'price_minor' => 55000],
            ['slug' => 'iso-13528', 'code' => 'ISO 13528:2015', 'title' => 'ISO 13528:2015 Statistical Methods for Proficiency Testing', 'category' => 'Laboratory', 'price_minor' => 55000],
        ];

        foreach ($courses as $course) {
            Course::updateOrCreate(
                ['slug' => $course['slug']],
                array_merge($course, [
                    'currency' => 'GBP',
                    'is_active' => true,
                ]),
            );
        }
    }
}
