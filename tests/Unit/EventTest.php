<?php

namespace Tests\Unit;

use PHPUnit\Framework\TestCase;
use App\Models\Event;
use Illuminate\Foundation\Testing\RefreshDatabase;

class EventTest extends TestCase
{
    use RefreshDatabase;

    public function testDatabaseHasSeededEvents()
    {
        // Seed the database with 10 events.
        // Event::factory(10)->create();

        // Assert that there are 10 records in the 'events' table.
        // $this->assertDatabaseCount('events', 10);
    }
}
