<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

/**
 * Minimal bearer-token guard for admin endpoints. Compares the
 * Authorization: Bearer <token> header against ADMIN_API_TOKEN in .env.
 *
 * This is intentionally simple. For production, replace with Laravel Sanctum
 * or Passport and proper user accounts.
 */
class AdminToken
{
    public function handle(Request $request, Closure $next): Response
    {
        $expected = config('services.admin.token');

        if (empty($expected) || $request->bearerToken() !== $expected) {
            return response()->json(['message' => 'Unauthorized.'], 401);
        }

        return $next($request);
    }
}
