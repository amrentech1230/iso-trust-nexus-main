<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * An order tracks a single PayPal checkout attempt for a course. It is
     * created in "pending" state when the PayPal order is created, and moved
     * to "paid"/"failed" once the capture result is known.
     */
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->foreignId('course_id')->constrained()->cascadeOnDelete();

            // The PayPal order id returned by the create-order call.
            $table->string('paypal_order_id')->nullable()->unique();
            // The PayPal capture id returned once the payment is captured.
            $table->string('paypal_capture_id')->nullable();

            $table->string('status')->default('pending'); // pending | paid | failed | refunded

            // Snapshot of the amount at time of purchase (minor units).
            $table->unsignedInteger('amount_minor');
            $table->string('currency', 3)->default('GBP');

            // Buyer details captured at checkout.
            $table->string('customer_name')->nullable();
            $table->string('customer_email')->nullable();

            // Raw PayPal payloads for auditing / dispute handling.
            $table->json('paypal_payload')->nullable();

            $table->timestamp('paid_at')->nullable();
            $table->timestamps();

            $table->index('status');
            $table->index('customer_email');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
