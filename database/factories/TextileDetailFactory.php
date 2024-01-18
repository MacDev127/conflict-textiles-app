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
            'image' => $this->faker->imageUrl(),
            'maker' => $this->faker->name,
            'authenticity' => $this->faker->randomElement(['Original', 'Replica']),
            'type' => $this->faker->randomElement(['Arpillera', 'Quilt', 'Banner', 'Wall Hanging']),
            'location' => $this->faker->country,
            'title' => $this->faker->words(3, true),
            'country_of_origin' => $this->faker->country,
            'date' => $this->faker->date(),
            'size' => $this->faker->randomElement(['Small', 'Medium', 'Large']),
            'materials' => $this->faker->word,
            'owner' => $this->faker->name,
            'photographer' => $this->faker->name,
            'provenance' => $this->faker->sentence,
            'description' => $this->faker->paragraph,
            'textile_detail_id' => $this->faker->
        ];
    }
}
