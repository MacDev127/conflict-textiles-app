<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\TextileDetail;
use Faker\Generator as Faker;




class TextileDetailFactory extends Factory
{
    
    protected $model = TextileDetail::class;

    
    public function definition(): array
    {
        return [
            'maker' => $this->faker->company,
            'country_of_origin' => $this->faker->country,
            'year' => $this->faker->year,
            'size' => $this->faker->randomElement(['Small', 'Medium', 'Large']),
            'materials' => $this->faker->word,
            'owner' => $this->faker->name,
            'provenance' => $this->faker->sentence,
            'description' => $this->faker->paragraph,
        ];
    }
}
