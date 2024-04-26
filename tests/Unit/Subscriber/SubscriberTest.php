<?php

namespace Tests\Unit\Models;

use Tests\TestCase;
use App\Models\Subscriber;
use Illuminate\Foundation\Testing\RefreshDatabase;

class SubscriberTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function a_subscriber_can_be_created()
    {
        $subscriberData = [
            'name' => 'John Doe',
            'email' => 'john.doe@example.com'
        ];

        // Create subscriber
        $subscriber = Subscriber::create($subscriberData);

        // Fetch the subscriber back
        $fetchedSubscriber = Subscriber::first();

        // Assertions to ensure data was saved correctly
        $this->assertNotNull($fetchedSubscriber);
        $this->assertEquals($subscriberData['name'], $fetchedSubscriber->name);
        $this->assertEquals($subscriberData['email'], $fetchedSubscriber->email);
    }

    /** @test */
    public function a_subscriber_can_be_updated()
    {
        $subscriber = Subscriber::create([
            'name' => 'Jane Doe',
            'email' => 'jane.doe@example.com'
        ]);

        // Update the subscriber
        $subscriber->update([
            'name' => 'Jane Roe'
        ]);

        // Re-fetch the subscriber
        $updatedSubscriber = Subscriber::first();

        // Check that the name was updated correctly
        $this->assertEquals('Jane Roe', $updatedSubscriber->name);
        $this->assertEquals('jane.doe@example.com', $updatedSubscriber->email);
    }

    /** @test */
    public function a_subscriber_can_be_deleted()
    {
        $subscriber = Subscriber::create([
            'name' => 'John Doe',
            'email' => 'john.doe@example.com'
        ]);

        // Delete the subscriber
        $subscriber->delete();

        // Assert no subscribers exist
        $this->assertDatabaseMissing('subscribers', [
            'id' => $subscriber->id
        ]);
    }
}
