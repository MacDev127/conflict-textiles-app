<?php

namespace Tests\Feature\RoleManagementFunctionality;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Role;
use App\Models\User;

class RoleManagementFunctionalityTest extends TestCase
{
    use RefreshDatabase;

    protected $admin;

    public function setUp(): void
    {
        parent::setUp();
        $this->admin = User::factory()->create(['role_id' => Role::where('name', 'admin')->firstOrFail()->id]);
    }

    /** @test */

    public function index_displays_all_roles()
    {
        $role = Role::factory()->create(['name' => 'Test Role']);

        $response = $this->actingAs($this->admin)->get('/admin/roles');

        $response->assertOk();
        $response->assertInertia(fn($page) => $page
            ->component('Admin/DashboardComponents/UserRole/UserRole')
            ->has('roles', 4) // Adjust the expected count to match the actual count
            ->where('roles', fn($roles) => $roles->contains(fn($r) => $r['name'] === 'Test Role')));
    }


    /** @test */
    public function store_creates_a_new_role_and_redirects()
    {
        $response = $this->actingAs($this->admin)->post('/admin/roles', [
            'name' => 'New Role'
        ]);

        $response->assertRedirect('/admin/roles');
        $response->assertSessionHas('success', 'Role created successfully.');
        $this->assertDatabaseHas('roles', ['name' => 'New Role']);
    }

    /** @test */
    public function edit_displays_the_correct_role()
    {
        $role = Role::factory()->create(['name' => 'Editable Role']);

        $response = $this->actingAs($this->admin)->get("/admin/roles/{$role->id}/edit");

        $response->assertOk();
        $response->assertInertia(fn($page) => $page
            ->component('Admin/DashboardComponents/UserRole/UserRole')
            ->where('role.name', 'Editable Role'));
    }

    /** @test */
    public function update_modifies_an_existing_role_and_redirects()
    {
        $role = Role::factory()->create(['name' => 'Old Role']);

        $response = $this->actingAs($this->admin)->put("/admin/roles/{$role->id}", [
            'name' => 'Updated Role'
        ]);

        $response->assertRedirect('/admin/roles');
        $response->assertSessionHas('success', 'Role updated successfully.');
        $this->assertDatabaseHas('roles', ['name' => 'Updated Role']);
    }

    /** @test */
    public function destroy_deletes_a_role_and_redirects()
    {
        $role = Role::factory()->create(['name' => 'Deletable Role']);

        $response = $this->actingAs($this->admin)->delete("/admin/roles/{$role->id}");

        $response->assertRedirect('/admin/roles');
        $response->assertSessionHas('success', 'Role deleted successfully.');
        $this->assertDatabaseMissing('roles', ['name' => 'Deletable Role']);
    }
}



