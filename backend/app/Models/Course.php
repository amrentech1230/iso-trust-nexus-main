<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Course extends Model
{
    use HasFactory;

    protected $fillable = [
        'slug',
        'code',
        'title',
        'discipline',
        'category',
        'summary',
        'price_minor',
        'currency',
        'is_active',
    ];

    protected function casts(): array
    {
        return [
            'price_minor' => 'integer',
            'is_active' => 'boolean',
        ];
    }

    public function orders(): HasMany
    {
        return $this->hasMany(Order::class);
    }

    /**
     * Human-friendly decimal price (e.g. 495.00) derived from minor units.
     */
    public function getPriceAttribute(): float
    {
        return round($this->price_minor / 100, 2);
    }

    /**
     * Shape returned to the React frontend.
     */
    public function toApiArray(): array
    {
        return [
            'slug' => $this->slug,
            'code' => $this->code,
            'title' => $this->title,
            'category' => $this->category,
            'price' => $this->price,
            'priceMinor' => $this->price_minor,
            'currency' => $this->currency,
            'isActive' => $this->is_active,
        ];
    }
}
