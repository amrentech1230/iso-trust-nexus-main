<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    */

    'paypal' => [
        // "sandbox" for testing, "live" for production.
        'mode' => env('PAYPAL_MODE', 'sandbox'),

        'sandbox' => [
            'client_id' => env('PAYPAL_SANDBOX_CLIENT_ID'),
            'client_secret' => env('PAYPAL_SANDBOX_CLIENT_SECRET'),
            'base_url' => 'https://api-m.sandbox.paypal.com',
        ],

        'live' => [
            'client_id' => env('PAYPAL_LIVE_CLIENT_ID'),
            'client_secret' => env('PAYPAL_LIVE_CLIENT_SECRET'),
            'base_url' => 'https://api-m.paypal.com',
        ],

        // Currency used when creating PayPal orders.
        'currency' => env('PAYPAL_CURRENCY', 'GBP'),

        // Optional: secret used to verify PayPal webhook signatures.
        'webhook_id' => env('PAYPAL_WEBHOOK_ID'),
    ],

];
