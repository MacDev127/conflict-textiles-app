<?php
namespace Database\Factories;

use App\Models\CollectionPageImage;
use Illuminate\Database\Eloquent\Factories\Factory;

class CollectionPageImageFactory extends Factory
{
    protected $model = CollectionPageImage::class;

    public function definition()
    {
        return [
            // Assume your model has fields like 'title' and 'image_path'
            'title' => $this->faker->sentence,
            'type' => $this->faker->sentence,
            'img' => $this->faker->imageUrl,
        ];
    }
}
