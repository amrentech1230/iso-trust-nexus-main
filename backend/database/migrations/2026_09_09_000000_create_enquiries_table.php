<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('enquiries', function (Blueprint $table) {
            $table->id();

            // Human-friendly reference returned to the user (e.g. TBC-123456).
            $table->string('reference')->unique();

            // Contact details.
            $table->string('first_name');
            $table->string('last_name');
            $table->string('email');
            $table->string('phone')->nullable();
            $table->string('company');
            $table->string('country')->nullable();

            // Enquiry details.
            $table->string('service');
            $table->string('standard')->nullable();
            $table->string('employees')->nullable();
            $table->text('message');
            $table->boolean('consent')->default(false);

            // Attribution / source (from the SPA's captureSource()).
            $table->string('utm_source')->nullable();
            $table->string('utm_medium')->nullable();
            $table->string('utm_campaign')->nullable();
            $table->string('utm_term')->nullable();
            $table->string('utm_content')->nullable();
            $table->string('referrer')->nullable();
            $table->string('landing_path')->nullable();

            // Request metadata.
            $table->string('ip_address', 45)->nullable();
            $table->string('user_agent')->nullable();

            // Lightweight workflow status for the admin view.
            $table->string('status')->default('new');

            $table->timestamps();

            $table->index('email');
            $table->index('service');
            $table->index('status');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('enquiries');
    }
};
