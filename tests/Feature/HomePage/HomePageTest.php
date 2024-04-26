<?php

namespace Tests\Feature\HomePage;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Event;
use App\Models\GalleryImage;
use App\Models\User;


class HomePageTest extends TestCase
{
    /** @test */
    public function homepage_displays_correctly_with_events_and_images()
    {
        Event::factory()->count(5)->create(['event_date' => now()->addDays(1)]); // Create 5 future events
        GalleryImage::factory()->count(3)->create(); // Create 3 gallery images

        $response = $this->get('/'); // Making a GET request to the homepage

        $response->assertStatus(200);
        $response->assertInertia(function ($page) {
            return $page->component('Home/Home')
                ->has('events', 5) // Ensure 5 events are passed to the view
                ->has('galleryImages', 3); // Ensure 3 images are passed to the view
        });
    }

    /** @test */
    public function language_changes_correctly_and_redirects()
    {
        $user = User::factory()->create(); // Create a user if user needs to be authenticated
        $langCode = 'fr'; // Example language code

        $response = $this->actingAs($user)->get("/change-language/{$langCode}"); // Change language route

        $response->assertRedirect('/'); // Assert it redirects to homepage or previous page
        $this->assertEquals(session('lang_code'), $langCode); // Check if session has the right lang code
        $this->assertEquals(app()->getLocale(), $langCode); // Check if app locale was set correctly
    }
}
