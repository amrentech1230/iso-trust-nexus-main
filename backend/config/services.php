<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    */

    'admin' => [
        // Bearer token for the admin enquiry-listing endpoint.
        'token' => env('ADMIN_API_TOKEN'),
    ],

    'recaptcha' => [
        // Optional reCAPTCHA v3 secret for server-side verification.
        'secret' => env('RECAPTCHA_SECRET'),
    ],

];
