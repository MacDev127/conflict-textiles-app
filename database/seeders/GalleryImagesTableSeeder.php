<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class GalleryImagesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('gallery_images')->insert([
            ['img' => '/images/img1.jpg', 'title' => 'Image 1'],
            ['img' => '/images/img2.jpg', 'title' => 'Image 2'],
            ['img' => '/images/img2.jpg', 'title' => 'Image 3'],
            ['img' => '/images/img4.jpg', 'title' => 'Image 4'],
            ['img' => '/images/img5.jpg', 'title' => 'Image 5'],
            ['img' => '/images/img6.jpg', 'title' => 'Image 6'],
            ['img' => '/images/img7.jpg', 'title' => 'Image 7'],
            ['img' => '/images/img8.jpg', 'title' => 'Image 8'],
            ['img' => '/images/img9.jpg', 'title' => 'Image 9'],
            ['img' => '/images/img10.jpg', 'title' => 'Image 10'],
            ['img' => '/images/img11.jpg', 'title' => 'Image 11'],
            ['img' => '/images/img12.jpg', 'title' => 'Image 12'],
            ['img' => '/images/img14.jpg', 'title' => 'Image 14'],
        ]);
    }
}
