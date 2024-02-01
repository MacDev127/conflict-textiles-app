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
            ['img' => '/images/collectionPage/embroidered-cloth.png', 'title' => 'Embroidered Cloth', 'type' => 'Embroidered Cloth'],
            ['img' => '/images/collectionPage/fabric-print.png', 'title' => 'Fabric Print', 'type' => 'Fabric Print'],
            ['img' => '/images/collectionPage/headscarf.png', 'title' => 'Headscarf', 'type' => 'Headscarf'],
            ['img' => '/images/collectionPage/installation.png', 'title' => 'Installation', 'type' => 'Installation'],
            ['img' => '/images/collectionPage/memorabilla.jpg', 'title' => 'Memorabilla', 'type' => 'Memorabilla'],
            ['img' => '/images/collectionPage/memory-textile.jpg', 'title' => 'Memory Textile', 'type' => 'Memory Textile'],
            ['img' => '/images/collectionPage/painting.png', 'title' => 'Painting', 'type' => 'Painting'],
            ['img' => '/images/collectionPage/quilt.png', 'title' => 'Quilt', 'type' => 'Quilt'],
            ['img' => '/images/collectionPage/roundel.jpg', 'title' => 'Roundel', 'type' => 'Roundel'],
            ['img' => '/images/collectionPage/story-cloth.png', 'title' => 'Story Cloth', 'type' => 'Story Cloth'],
            ['img' => '/images/collectionPage/wall-hanging.png', 'title' => 'Wall Hanging', 'type' => 'Wall Hanging'],
        
        ]);
    }
}
