<?php

namespace Tests\Unit\EventRegister;

use Tests\TestCase;
use App\Models\EventRegister;
use Illuminate\Foundation\Testing\RefreshDatabase;

class EventRegisterTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function it_can_create_an_event_registration()
    {
        $registrationData = [
            'name' => 'John Doe',
            'email' => 'john.doe@example.com',
            'number' => '1234567890',
            'gender' => 'Male',

        ];

        // Create an event registration
        $eventRegistration = EventRegister::create($registrationData);

        // Fetch the event registration back from the database to verify it was saved correctly
        $fetchedRegistration = EventRegister::first();

        // Assertions to ensure data was saved correctly
        $this->assertNotNull($fetchedRegistration);
        $this->assertEquals($registrationData['name'], $fetchedRegistration->name);
        $this->assertEquals($registrationData['email'], $fetchedRegistration->email);
        $this->assertEquals($registrationData['number'], $fetchedRegistration->number);
        $this->assertEquals($registrationData['gender'], $fetchedRegistration->gender);
    }
}
