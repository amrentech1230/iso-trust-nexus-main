<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * An enrollment is created once an order has been successfully paid. It
     * represents the learner's access to a purchased course and is what the
     * React success/receipt page looks up via its public reference.
     */
    public function up(): void
    {
        Schema::create('enrollments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('order_id')->constrained()->cascadeOnDelete();
            $table->foreignId('course_id')->constrained()->cascadeOnDelete();

            // Public, shareable reference shown on the receipt page (not the
            // sequential id, to avoid enumeration).
            $table->string('reference')->unique();

            $table->string('customer_name')->nullable();
            $table->string('customer_email')->nullable();

            $table->string('status')->default('active'); // active | cancelled
            $table->timestamps();

            $table->index('customer_email');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('enrollments');
    }
};
