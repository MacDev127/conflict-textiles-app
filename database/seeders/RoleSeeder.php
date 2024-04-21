<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Role;


class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $roles = [
            'user',
            'admin',
            'researcher'
        ];

        foreach ($roles as $roleName) {
            Role::firstOrCreate(['name' => $roleName]); // Ensures each role is only created if it doesn't already exist
        }
    }
}
