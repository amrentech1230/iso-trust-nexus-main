<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

/**
 * Creates the initial Filament admin user.
 *
 * Credentials are read from the environment so no password is committed:
 *   ADMIN_EMAIL     (default: admin@traibcert.org.uk)
 *   ADMIN_PASSWORD  (default: password — CHANGE IMMEDIATELY)
 *
 * Prefer running `php artisan make:filament-user` for an interactive prompt.
 */
class AdminUserSeeder extends Seeder
{
    public function run(): void
    {
        $email = env('ADMIN_EMAIL', 'admin@traibcert.org.uk');
        $password = env('ADMIN_PASSWORD', 'password');

        User::updateOrCreate(
            ['email' => $email],
            [
                'name' => env('ADMIN_NAME', 'TRAIBCERT Admin'),
                'password' => Hash::make($password),
                'email_verified_at' => now(),
            ],
        );

        $this->command?->warn("Admin user ready: {$email}");
        if ($password === 'password') {
            $this->command?->warn('Default password in use — change it after first login!');
        }
    }
}
