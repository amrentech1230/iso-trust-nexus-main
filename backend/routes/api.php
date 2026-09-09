<?php

use App\Http\Controllers\Api\CourseController;
use App\Http\Controllers\Api\EnrollmentController;
use App\Http\Controllers\Api\PayPalController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| These routes are consumed by the React (TanStack Start) training pages.
| All routes are stateless JSON endpoints prefixed with /api.
|
*/

// Public course catalogue (prices, metadata) used to render the buy buttons.
Route::get('/courses', [CourseController::class, 'index']);
Route::get('/courses/{course:slug}', [CourseController::class, 'show']);

// PayPal payment flow. The client never sees the PayPal secret; it only
// exchanges opaque order IDs with these endpoints.
Route::prefix('paypal')->group(function () {
    Route::post('/create-order', [PayPalController::class, 'createOrder']);
    Route::post('/capture-order', [PayPalController::class, 'captureOrder']);
    // PayPal server-to-server webhook (optional, for async confirmation).
    Route::post('/webhook', [PayPalController::class, 'webhook']);
});

// Enrollment lookup for the success/receipt page.
Route::get('/enrollments/{enrollment:reference}', [EnrollmentController::class, 'show']);
