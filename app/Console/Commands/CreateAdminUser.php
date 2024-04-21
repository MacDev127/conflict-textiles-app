<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\User;
use App\Models\Role;
use Illuminate\Support\Facades\Hash;

class CreateAdminUser extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:admin {email}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Assign admin role to a user or create a new admin user.';
    /**
     * Execute the console command.
     */
    public function handle()
    {
        $email = $this->argument('email');
        $user = User::where('email', $email)->first();

        if (!$user) {
            $name = $this->ask('Enter the name of the user');
            $password = $this->secret('Enter a secure password');
            $role = Role::where('name', 'admin')->firstOrFail();

            $user = User::create([
                'name' => $name,
                'email' => $email,
                'password' => Hash::make($password),
                'role_id' => $role->id,
            ]);
        } else {
            $user->role_id = Role::where('name', 'admin')->firstOrFail()->id;
            $user->save();
        }

        $this->info('Admin role assigned successfully.');
    }
}
