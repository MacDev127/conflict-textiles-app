<?php

namespace Tests\Feature\EventFunctionality;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\Event;
use App\Models\User;
use App\Models\Role;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\UploadedFile;

class EventFunctionalityTest extends TestCase
{
    use RefreshDatabase;

    protected $admin;

    public function setUp(): void
    {
        parent::setUp();

        // Create an admin role if it's not dynamically created in the database
        $adminRole = Role::firstOrCreate(['name' => 'admin']);
        $this->admin = User::factory()->create(['role_id' => $adminRole->id]);
    }


    /** @test */
    public function home_page_shows_upcoming_events()
    {
        Event::factory()->count(5)->create([
            'event_date' => now()->addDays(1), // Future events
            'image' => 'path/to/fake/image.jpg'
        ]);

        $response = $this->actingAs($this->admin)->get('/');

        $response->assertStatus(200);
        $response->assertInertia(fn($page) => $page
            ->component('Home/Home')
            ->has('events', 5)); // Assuming 'events' is the correct variable name
    }

    /** @test */

    public function events_page_paginates_upcoming_events()
    {
        Event::factory()->count(10)->create(['event_date' => now()->addDay()]);

        $response = $this->actingAs($this->admin)->get('/events');

        $response->assertStatus(200);
        $response->assertInertia(
            fn($page) => $page
                ->component('Events/Events')
                ->has('upcomingEvents')
                ->has('upcomingEvents.data', 6)  // Check that the 'data' array has 6 items
                ->where('upcomingEvents.total', 10)  // Total 10 items
                ->where('upcomingEvents.last_page', 2)  // Total should result in 2 pages
                ->where('upcomingEvents.current_page', 1)  // Ensure we are looking at the first page
        );
    }




    /** @test */
    public function previous_events_page_shows_past_events()
    {
        Event::factory()->count(3)->create(['event_date' => now()->subDays(1)]);

        $response = $this->actingAs($this->admin)->get('/events/previousEvents');

        $response->assertStatus(200);
        $response->assertInertia(fn($page) => $page
            ->component('Events/PreviousEvents')
            ->has('previousEvents', 3));
    }

    /** @test */
    /** @test */
    public function can_view_individual_event_details()
    {
        $event = Event::factory()->create([
            'event_date' => now()->addDay(),
            'image' => 'path/to/fake/image.jpg'
        ]);

        // Ensure the route includes a slash before the event ID
        $response = $this->actingAs($this->admin)->get("/events/show/{$event->id}");

        $response->assertStatus(200);
        $response->assertInertia(fn($page) => $page
            ->component('EventDetails/EventDetails')
            ->has('event')
            ->where('event.title', $event->title));
    }


    /** @test */
    public function admin_can_create_an_event()
    {
        Storage::fake('public');
        $file = UploadedFile::fake()->image('event.jpg');

        $eventData = [
            'title' => 'New Event',
            'event_date' => now()->addDay()->toDateString(),
            'image' => $file,
            // Add other necessary fields
        ];

        $response = $this->actingAs($this->admin)->post('/admin/events', $eventData);

        $response->assertRedirect(); // Assuming a redirect happens after creation
        $this->assertDatabaseHas('events', [
            'title' => 'New Event',
            // Check other fields as necessary
        ]);
    }

    /** @test */
    public function admin_can_update_an_event()
    {
        $event = Event::factory()->create();
        $updateData = [
            'title' => 'Updated Event',
            // Other fields as needed
        ];

        $response = $this->actingAs($this->admin)->put("/events/{$event->id}", $updateData);

        $response->assertRedirect(); // Optionally check for specific redirect route
        $this->assertDatabaseHas('events', ['id' => $event->id, 'title' => 'Updated Event']);
    }

    /** @test */
    public function admin_can_delete_an_event()
    {
        $event = Event::factory()->create();

        $response = $this->actingAs($this->admin)->delete("/events/{$event->id}");

        $response->assertRedirect(); // Optionally check for specific redirect route
        $this->assertDatabaseMissing('events', ['id' => $event->id]);
    }

}
