<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Str;

class Enrollment extends Model
{
    use HasFactory;

    protected $fillable = [
        'order_id',
        'course_id',
        'reference',
        'customer_name',
        'customer_email',
        'status',
    ];

    public function order(): BelongsTo
    {
        return $this->belongsTo(Order::class);
    }

    public function course(): BelongsTo
    {
        return $this->belongsTo(Course::class);
    }

    /**
     * Generate a unique, non-sequential public reference such as
     * "TRB-9F2C4A7B".
     */
    public static function generateReference(): string
    {
        do {
            $reference = 'TRB-'.strtoupper(Str::random(8));
        } while (static::where('reference', $reference)->exists());

        return $reference;
    }

    public function toApiArray(): array
    {
        $this->loadMissing('course');

        return [
            'reference' => $this->reference,
            'status' => $this->status,
            'customerName' => $this->customer_name,
            'customerEmail' => $this->customer_email,
            'course' => $this->course ? [
                'slug' => $this->course->slug,
                'code' => $this->course->code,
                'title' => $this->course->title,
            ] : null,
            'purchasedAt' => $this->created_at?->toIso8601String(),
        ];
    }
}
