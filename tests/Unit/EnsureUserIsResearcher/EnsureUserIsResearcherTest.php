<?php

namespace Tests\Unit\EnsureUserIsResearcher;

use Tests\TestCase;
use App\Models\User;
use App\Models\Role;
use Illuminate\Http\Request;
use App\Http\Middleware\EnsureUserIsResearcher;
use Illuminate\Foundation\Testing\RefreshDatabase;

class EnsureUserIsResearcherTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function it_allows_researcher_users_through()
    {
        $researcherRole = Role::firstOrCreate(['name' => 'researcher']);
        $researcherUser = User::factory()->create(['role_id' => $researcherRole->id]);

        $request = Request::create('/researcher/dashboard', 'GET');
        $middleware = new EnsureUserIsResearcher();
        $this->actingAs($researcherUser); // Authenticate the user

        $response = $middleware->handle($request, function ($req) {
            return response(null, 200);
        });

        $this->assertEquals(200, $response->getStatusCode());
    }

    /** @test */
    public function it_redirects_non_researcher_users()
    {
        $adminRole = Role::firstOrCreate(['name' => 'admin']);
        $adminUser = User::factory()->create(['role_id' => $adminRole->id]);

        $request = Request::create('/researcher/dashboard', 'GET');
        $middleware = new EnsureUserIsResearcher();
        $this->actingAs($adminUser); // Authenticate the user

        $response = $middleware->handle($request, function ($req) {
            return response(null, 200);
        });

        $this->assertEquals(302, $response->getStatusCode());
        $this->assertEquals(url('/about'), $response->headers->get('Location'));
    }



}