<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Carbon\Carbon;

class EventFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => $this->faker->sentence,
            'event_date' => Carbon::tomorrow(),
            'location' => $this->faker->city,
            'description' => $this->faker->paragraph,
            'image' => 'events/' . $this->faker->image('public/storage/events', 640, 480, null, false)
        ];
    }
}

