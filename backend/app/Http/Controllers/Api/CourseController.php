<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Course;
use Illuminate\Http\JsonResponse;

class CourseController extends Controller
{
    /**
     * List active courses (prices, currency) for the training pages.
     */
    public function index(): JsonResponse
    {
        $courses = Course::query()
            ->where('is_active', true)
            ->orderBy('title')
            ->get()
            ->map->toApiArray();

        return response()->json(['data' => $courses]);
    }

    /**
     * Show a single course by slug.
     */
    public function show(Course $course): JsonResponse
    {
        abort_unless($course->is_active, 404);

        return response()->json(['data' => $course->toApiArray()]);
    }
}
