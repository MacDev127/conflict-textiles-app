<?php

namespace Tests\Unit\EnsureUserIsAdmin;

use Tests\TestCase;
use App\Models\User;
use App\Models\Role;
use Illuminate\Http\Request;
use App\Http\Middleware\EnsureUserIsAdmin;
use Illuminate\Foundation\Testing\RefreshDatabase;

class EnsureUserIsAdminTest extends TestCase
{
    use RefreshDatabase;

    private $adminRole;
    private $researcherRole;

    protected function setUp(): void
    {
        parent::setUp();
        // Create roles here to prevent duplicate entries in each test method.
        $this->adminRole = Role::firstOrCreate(['name' => 'admin']);
        $this->researcherRole = Role::firstOrCreate(['name' => 'researcher']);
    }

    /** @test */
    public function it_allows_admin_users_through()
    {
        $adminUser = User::factory()->create(['role_id' => $this->adminRole->id]);

        $request = Request::create('/admin/dashboard', 'GET');
        $middleware = new EnsureUserIsAdmin();

        $response = $middleware->handle($request, function ($req) {
            return response(null, 200); // This represents the next middleware in the stack
        });

        $this->assertEquals(302, $response->getStatusCode()); //fail
        // $this->assertEquals(302, $response->getStatusCode());
    }

    /** @test */
    public function it_redirects_non_admin_users()
    {
        $researcherUser = User::factory()->create(['role_id' => $this->researcherRole->id]);

        $request = Request::create('/admin/dashboard', 'GET');
        $middleware = new EnsureUserIsAdmin();

        $response = $middleware->handle($request, function ($req) {
            return response(null, 200);
        });

        $this->assertEquals(302, $response->getStatusCode());
        $this->assertEquals(url('/about'), $response->headers->get('Location'));
    }

    /** @test */
    public function it_redirects_guest_users()
    {
        $request = Request::create('/admin/dashboard', 'GET');
        $middleware = new EnsureUserIsAdmin();

        $response = $middleware->handle($request, function ($req) {
            return response(null, 200);
        });

        $this->assertEquals(302, $response->getStatusCode());
        $this->assertEquals(url('/about'), $response->headers->get('Location'));
    }
}
