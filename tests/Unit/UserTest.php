<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Models\User;
use App\Models\Role;
use Illuminate\Foundation\Testing\RefreshDatabase;

class UserTest extends TestCase
{
    use RefreshDatabase; // This trait will roll back database changes after each test

    protected function setUp(): void
    {
        parent::setUp();
        // Setting up roles here to avoid repetition in each test
        Role::firstOrCreate(['name' => 'admin']);
        Role::firstOrCreate(['name' => 'researcher']);
    }

    /** @test */
    public function user_has_role()
    {
        $role = Role::where('name', 'admin')->first();
        $user = User::factory()->create(['role_id' => $role->id]);

        $this->assertTrue($user->role->name === 'admin');
    }

    /** @test */
    public function is_admin()
    {
        $role = Role::where('name', 'admin')->first();
        $user = User::factory()->create(['role_id' => $role->id]);

        $this->assertTrue($user->isAdmin());
    }

    /** @test */
    public function is_researcher()
    {
        $role = Role::where('name', 'researcher')->first();
        $user = User::factory()->create(['role_id' => $role->id]);

        $this->assertTrue($user->isResearcher());
    }
}
