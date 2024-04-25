<?php

namespace Database\Factories;

use App\Models\GalleryImage;
use Illuminate\Database\Eloquent\Factories\Factory;

class GalleryImageFactory extends Factory
{
    protected $model = GalleryImage::class;

    public function definition()
    {
        return [
            'country_of_origin' => $this->faker->country,
            'image' => $this->faker->imageUrl,
            'title' => $this->faker->sentence,
            'description' => $this->faker->paragraph

            // Add other fields as necessary
        ];
    }
}
