<?php

namespace Tests\Feature\EventsAndTextilesDashboards;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use App\Models\User;
use App\Models\Event;
use App\Models\GalleryImage;
use App\Models\Role;

use Tests\TestCase;

class EventsAndTextilesDashboardsTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();
        $adminRole = Role::firstOrCreate(['name' => 'admin']);
        $this->admin = User::factory()->create(['role_id' => $adminRole->id]);

    }

    /** @test */
    public function testEventsDashboardDisplaysCorrectly()
    {
        $event = Event::factory()->count(5)->create();

        $response = $this->actingAs($this->admin)->get('/events-dashboard');

        $response->assertOk();
        $response->assertInertia(
            fn($page) => $page
                ->component('Admin/Dashboards/EventsDashboard/EventsDashboard')
                ->has('events', 5)
        );
    }

    /** @test */
    public function testTextilesDashboardDisplaysCorrectly()
    {
        $images = GalleryImage::factory()->count(5)->create();

        // Make sure to use the authenticated admin
        $response = $this->actingAs($this->admin)->get('/textiles-dashboard');

        $response->assertOk();
        $response->assertInertia(
            fn($page) => $page
                ->component('Admin/Dashboards/TextileDashboard/TextileDashboard')
                ->has('galleryImages', 5)
        );

    }


}
