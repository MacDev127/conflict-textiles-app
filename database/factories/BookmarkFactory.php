<?php

namespace Database\Factories;

use App\Models\Bookmark;
use App\Models\GalleryImage;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class BookmarkFactory extends Factory
{
    protected $model = Bookmark::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'user_id' => User::factory(),  // This will create a User if not provided
            'gallery_image_id' => GalleryImage::factory(),  // This will create a GalleryImage if not provided
        ];
    }
}
