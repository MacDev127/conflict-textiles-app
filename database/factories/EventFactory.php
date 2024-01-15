<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Event;



class EventFactory extends Factory
{
    protected $model = Event::class;

    public function definition():array
    {
        return [
            'image' => $this->faker->imageUrl(640, 480, 'cats'), 
            'title' => $this->faker->sentence,
            'time' => $this->faker->time,
            'date' => $this->faker->date,
            'description' => $this->faker->paragraph,
        ];
    }

}
