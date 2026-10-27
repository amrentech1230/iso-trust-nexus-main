<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class CareerApplication extends Model
{
    protected $fillable = [
        'reference',
        'name',
        'designation',
        'experience',
        'location',
        'email',
        'mobile',
        'country',
        'message',
        'qualifications',
        'attachments',
        'source',
        'consented_at',
        'status',
    ];

    protected function casts(): array
    {
        return [
            'qualifications' => 'array',
            'attachments' => 'array',
            'source' => 'array',
            'consented_at' => 'datetime',
        ];
    }

    public static function generateReference(): string
    {
        do {
            $reference = 'CA-'.strtoupper(Str::random(10));
        } while (static::where('reference', $reference)->exists());

        return $reference;
    }

    protected static function booted(): void
    {
        static::deleting(function (CareerApplication $application): void {
            foreach ($application->attachments ?? [] as $attachment) {
                if (! empty($attachment['path'])) {
                    Storage::disk('local')->delete($attachment['path']);
                }
            }
        });
    }
}
