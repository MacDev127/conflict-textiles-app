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
            ['img' => '/images/arpillera/arp1.jpg', 'title' => 'Arp 1'],
            ['img' => '/images/arpillera/arp2.jpg', 'title' => 'Arp 2'],
            ['img' => '/images/arpillera/arp3.jpg', 'title' => 'Arp 3'],
            ['img' => '/images/arpillera/arp4.jpg', 'title' => 'Arp 4'],
            ['img' => '/images/arpillera/arp6.jpg', 'title' => 'Arp 6'],
            ['img' => '/images/arpillera/arp7.jpg', 'title' => 'Arp 7'],
            ['img' => '/images/arpillera/arp8.jpg', 'title' => 'Arp 8'],
            ['img' => '/images/arpillera/arp9.jpg', 'title' => 'Arp 9'],
            ['img' => '/images/arpillera/arp10.jpg', 'title' => 'Arp 10'],
            ['img' => '/images/arpillera/arp11.jpg', 'title' => 'Arp 11'],
            ['img' => '/images/arpillera/arp12.jpg', 'title' => 'Arp 12'],
            ['img' => '/images/arpillera/arp13.jpg', 'title' => 'Arp 13'],
            ['img' => '/images/arpillera/arp14.jpg', 'title' => 'Arp 14'],
            ['img' => '/images/arpillera/arp15.jpg', 'title' => 'Arp 15'],
            ['img' => '/images/arpillera/arp16.jpg', 'title' => 'Arp 16'],
           
        ]);
    }
}
