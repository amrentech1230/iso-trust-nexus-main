<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return response()->json([
        'service' => 'TRAIBCERT API',
        'status' => 'ok',
    ]);
});
