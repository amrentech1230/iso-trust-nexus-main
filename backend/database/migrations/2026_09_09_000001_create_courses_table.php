<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * The courses table mirrors the training courses shown on the React
     * training pages. Prices live server-side so the amount charged can
     * never be tampered with from the browser.
     */
    public function up(): void
    {
        Schema::create('courses', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->unique();
            $table->string('code');
            $table->string('title');
            $table->string('discipline')->nullable();
            $table->string('category')->nullable();
            $table->text('summary')->nullable();

            // Money is stored as integer minor units (e.g. pence) to avoid
            // floating point rounding errors.
            $table->unsignedInteger('price_minor')->default(0);
            $table->string('currency', 3)->default('GBP');

            $table->boolean('is_active')->default(true);
            $table->timestamps();

            $table->index(['category', 'is_active']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('courses');
    }
};
