<?php

namespace Tests\Unit\Models;

use Tests\TestCase;
use App\Models\Role;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;

class RoleFunctionalityTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function a_role_can_be_created()
    {
        $roleData = ['name' => 'admin'];

        // Attempt to find the first record with name 'admin' or create it
        $role = Role::firstOrCreate(['name' => $roleData['name']]);

        // Assertions to ensure the role was retrieved or created correctly
        $this->assertNotNull($role);
        $this->assertEquals($roleData['name'], $role->name);
    }


    /** @test */
    public function a_role_can_have_many_users()
    {
        $role = Role::create(['name' => 'editor']);

        $user1 = User::factory()->create(['role_id' => $role->id]);
        $user2 = User::factory()->create(['role_id' => $role->id]);

        // Assertions to ensure the relationship is working
        $this->assertEquals(2, $role->users->count());
        $this->assertTrue($role->users->contains($user1));
        $this->assertTrue($role->users->contains($user2));
    }
}
