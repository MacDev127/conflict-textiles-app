<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\User;
use App\Models\Role;

class UserRoleDashboardTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        // Ensuring that roles are created only once
        $roles = ['admin', 'editor', 'viewer'];
        foreach ($roles as $roleName) {
            Role::firstOrCreate(['name' => $roleName]);
        }
    }

    /** @test */
    public function user_role_dashboard_displays_users_and_roles()
    {
        $admin = User::factory()->create(['role_id' => Role::where('name', 'admin')->first()->id]);

        $response = $this->actingAs($admin)->get('/admin/user-role-dashboard');

        $response->assertStatus(200);
        $response->assertInertia(
            fn($page) => $page
                ->component('Admin/Dashboards/UserRoleDashboard/UserRoleDashboard')
                ->has('users')
                ->has('roles')
        );
    }

    /** @test */
    public function it_assigns_a_role_to_a_user()
    {
        $admin = User::factory()->create(['role_id' => Role::where('name', 'admin')->first()->id]);
        $user = User::factory()->create();
        $role = Role::where('name', 'editor')->first();

        $response = $this->actingAs($admin)->post('/admin/users/assign-role', [
            'user_id' => $user->id,
            'role_id' => $role->id
        ]);

        $response->assertRedirect();
        $this->assertDatabaseHas('users', [
            'id' => $user->id,
            'role_id' => $role->id
        ]);
        $response->assertSessionHas('success');
    }

    /** @test */
    public function it_creates_a_new_user_with_valid_data()
    {
        $admin = User::factory()->create(['role_id' => Role::where('name', 'admin')->first()->id]);

        $response = $this->actingAs($admin)->post('/admin/users/create', [
            'name' => 'New User',
            'email' => 'newuser@example.com',
            'password' => 'password',
            'password_confirmation' => 'password',
            'role_id' => Role::where('name', 'viewer')->first()->id
        ]);

        $response->assertRedirect('/admin/user-role-dashboard');
        $this->assertDatabaseHas('users', ['email' => 'newuser@example.com']);
        $response->assertSessionHas('success', 'User created successfully!');
    }
}
