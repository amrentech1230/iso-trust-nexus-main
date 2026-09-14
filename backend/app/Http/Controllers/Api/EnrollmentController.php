<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Enrollment;
use Illuminate\Http\JsonResponse;

class EnrollmentController extends Controller
{
    /**
     * Look up an enrollment by its public reference. Used by the React
     * success/receipt page.
     */
    public function show(Enrollment $enrollment): JsonResponse
    {
        return response()->json(['data' => $enrollment->toApiArray()]);
    }
}
