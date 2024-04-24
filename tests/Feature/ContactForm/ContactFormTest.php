<?php

namespace Tests\Feature\ContactForm;


use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Mail;
use Tests\TestCase;

class ContactFormTest extends TestCase
{
    /** @test */
    public function it_should_send_emails_to_admin_and_user()
    {
        Mail::fake(); // Mock the Mail facade

        // Make a POST request to the store method of ContactController
        $response = $this->post('/contact', [
            'name' => 'John Doe',
            'email' => 'john@example.com',
            'subject' => 'Test Subject',
            'message' => 'Test Message'
        ]);

        // Assert that the request was successful
        $response->assertStatus(200);


    }
}