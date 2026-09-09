<?php

namespace App\Providers;

use App\Services\PayPalService;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        // Bind the PayPal client as a singleton so its access token can be
        // reused across a single request lifecycle.
        $this->app->singleton(PayPalService::class, fn () => new PayPalService);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
