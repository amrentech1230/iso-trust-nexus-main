<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('career_applications', function (Blueprint $table) {
            $table->id();
            $table->string('reference')->unique();
            $table->string('name');
            $table->string('designation');
            $table->unsignedTinyInteger('experience');
            $table->string('location');
            $table->string('email');
            $table->string('mobile');
            $table->string('country');
            $table->text('message')->nullable();
            $table->json('qualifications')->nullable();
            $table->json('attachments')->nullable();
            $table->json('source')->nullable();
            $table->timestamp('consented_at');
            $table->string('status')->default('new');
            $table->timestamps();

            $table->index('email');
            $table->index('status');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('career_applications');
    }
};
