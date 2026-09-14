<?php

namespace App\Models;

use Filament\Models\Contracts\FilamentUser;
use Filament\Panel;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

/**
 * Admin user for the Filament panel.
 *
 * Implements FilamentUser so we can control who is allowed to reach /admin.
 */
class User extends Authenticatable implements FilamentUser
{
    use HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    /**
     * Determine whether this user may access the given Filament panel.
     *
     * By default every registered user can log in. To restrict access (e.g.
     * only @traibcert.org.uk addresses), tighten the check below.
     */
    public function canAccessPanel(Panel $panel): bool
    {
        return true;

        // Example: restrict to company email addresses.
        // return str_ends_with($this->email, '@traibcert.org.uk');
    }
}
