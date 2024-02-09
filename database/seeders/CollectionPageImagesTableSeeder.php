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
            ['img' => '/images/collectionPage/arpillera.png', 'title' => 'Arpillera', 'type' => 'arpillera'],
            ['img' => '/images/collectionPage/banner.jpg', 'title' => 'Banner', 'type' => 'banner'],
            ['img' => '/images/collectionPage/embroidered-cloth.png', 'title' => 'Embroidered Cloth', 'type' => 'embroidered-cloth'],
            ['img' => '/images/collectionPage/fabric-print.png', 'title' => 'Fabric Print', 'type' => 'fabric-print'],
            ['img' => '/images/collectionPage/headscarf.png', 'title' => 'Headscarf', 'type' => 'headscarf'],
            ['img' => '/images/collectionPage/installation.png', 'title' => 'Installation', 'type' => 'installation'],
            ['img' => '/images/collectionPage/memorabilla.jpg', 'title' => 'Memorabilla', 'type' => 'memorabilla'],
            ['img' => '/images/collectionPage/memory-textile.jpg', 'title' => 'Memory Textile', 'type' => 'memory-textile'],
            ['img' => '/images/collectionPage/painting.png', 'title' => 'Painting', 'type' => 'painting'],
            ['img' => '/images/collectionPage/quilt.png', 'title' => 'Quilt', 'type' => 'quilt'],
            ['img' => '/images/collectionPage/roundel.jpg', 'title' => 'Roundel', 'type' => 'roundel'],
            ['img' => '/images/collectionPage/story-cloth.png', 'title' => 'Story Cloth', 'type' => 'story-cloth'],
            ['img' => '/images/collectionPage/wall-hanging.png', 'title' => 'Wall Hanging', 'type' => 'wall-hanging'],
        
        ]);
    }
}
