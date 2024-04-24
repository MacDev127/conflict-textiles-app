<?php

namespace Tests\Feature\EventRegisterForm;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use App\Models\EventRegister;

use Tests\TestCase;

class EventRegisterFormTest extends TestCase
{
    use RefreshDatabase; // Refresh the database before each test

    /** @test */
    public function it_should_submit_registration_form_with_valid_data()
    {
        // Prepare valid registration data
        $validData = [
            'name' => 'John Doe',
            'email' => 'john@example.com',
            'number' => '1234567890',
            'gender' => 'Male',
        ];

        // Mock event ID
        $eventId = 1;

        // Make a POST request to submit the registration form with valid data
        $response = $this->post("/event/{$eventId}/eventRegister", $validData);

        // Assert that the form submission was successful
        $response->assertRedirect();

        // Assert that the registration data was stored in the database (assuming your application stores registration data)
        $this->assertDatabaseHas('events_register', $validData);
    }

    /** @test */


    /** @test */
    public function it_should_render_registration_form()
    {
        // Mock event ID
        $eventId = 1;

        // Make a GET request to show the registration form
        $response = $this->get("/event/{$eventId}/registerPage");

        // Assert that the registration form is rendered
        $response->assertStatus(200)->assertViewIs('app'); // Update the view name to match your Inertia component name
    }
}
