<?php

namespace Tests\Unit\EventFunctionality;

use PHPUnit\Framework\TestCase;
use App\Models\Event;


class EventFunctionalityTest extends TestCase
{
    /**
     * Test that the Event model can be instantiated.
     *
     * @return void
     */
    public function test_event_can_be_instantiated()
    {
        $event = new Event();
        $this->assertInstanceOf(Event::class, $event);
    }

    /**
     * Test that the Event model has the expected fillable attributes.
     *
     * @return void
     */
    public function test_event_has_fillable_attributes()
    {
        $event = new Event();
        $fillableAttributes = [
            'title',
            'event_time',
            'location',
            'type',
            'event_date',
            'commissioned_by',
            'venue',
            'curator',
            'outcome',
            'document_url',
            'textile_url',
            'image',
            'facilitator',
            'description',
        ];
        $this->assertEquals($fillableAttributes, $event->getFillable());
    }
}
