<?php

namespace Tests\Feature\Email;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Subscriber;


class EmailSignupTest extends TestCase
{
    use RefreshDatabase;


    //This test verifies the functionality of the email signup process when provided with valid data.
    //Action: Posts valid name and email to /email-signup.
    //Assertions:Checks response status is 200 and Verifies the database has the submitted email.
    public function test_email_signup_with_valid_data()
    {
        $response = $this->post('/email-signup', [
            'name' => 'John Doe',
            'email' => 'john.doe@example.com'
        ]);

        $response->assertStatus(200);
        $this->assertDatabaseHas('subscribers', [
            'email' => 'john.doe@example.com'
        ]);
    }

    //This test checks the application's ability to handle duplicate email entries correctly, which should trigger a validation error.
    //Setup: Pre-inserts a subscriber into the database.
    //Action: Attempts to sign up again with the same email.
    //Assertions:Expects session errors for the 'email' field indicating a duplicate entry.
    public function test_email_signup_with_duplicate_email()
    {
        Subscriber::create([
            'name' => 'Jane Doe',
            'email' => 'jane.doe@example.com'
        ]);

        $response = $this->post('/email-signup', [
            'name' => 'Jane Doe',
            'email' => 'jane.doe@example.com'
        ]);

        $response->assertSessionHasErrors('email');
    }
}