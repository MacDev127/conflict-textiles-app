<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CollectionPageImagesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('collection_page_images')->insert([
            ['img' => '/images/collectionPage/arpillera.png', 'title' => 'Arpillera'],
            ['img' => '/images/collectionPage/banner.jpg', 'title' => 'Banner'],
            ['img' => '/images/collectionPage/embroidered-cloth.png', 'title' => 'Embroidered Cloth'],
            ['img' => '/images/collectionPage/fabric-print.png', 'title' => 'Fabric Print'],
            ['img' => '/images/collectionPage/headscarf.png', 'title' => 'Headscarf'],
            ['img' => '/images/collectionPage/installation.png', 'title' => 'Installation'],
            ['img' => '/images/collectionPage/memorabilla.jpg', 'title' => 'Memorabilla'],
            ['img' => '/images/collectionPage/memory-textile.jpg', 'title' => 'Memory Textile'],
            ['img' => '/images/collectionPage/painting.png', 'title' => 'Painting'],
            ['img' => '/images/collectionPage/quilt.png', 'title' => 'Quilt'],
            ['img' => '/images/collectionPage/roundel.jpg', 'title' => 'Roundel'],
            ['img' => '/images/collectionPage/story-cloth.png', 'title' => 'Story Cloth'],
            ['img' => '/images/collectionPage/wall-hanging.jpg', 'title' => 'Wall Hanging'],
        
        ]);
    }
}
