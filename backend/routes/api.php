<?php

use App\Http\Controllers\EnquiryController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Public enquiry submission endpoint. The React SPA's enquiry form posts to
| POST /api/public/enquiry (see src/lib/crm/bigin.ts on the frontend).
|
*/

Route::prefix('public')->group(function () {
    Route::post('/enquiry', [EnquiryController::class, 'store'])
        ->middleware('throttle:20,1'); // basic rate limit: 20 requests/min per IP
});

// Admin listing of submitted enquiries. Guarded by a simple bearer token
// (ADMIN_API_TOKEN in .env). Replace with real auth (Sanctum) for production.
Route::middleware(\App\Http\Middleware\AdminToken::class)->prefix('admin')->group(function () {
    Route::get('/enquiries', [EnquiryController::class, 'index']);
});
