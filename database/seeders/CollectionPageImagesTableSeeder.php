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
            ['img' => '/images/arpillera/arp1.jpg', 'title' => 'En el lado “bueno” de la valla 2 / On the “Good" Side of the Fence 2'],
            ['img' => '/images/arpillera/arp2.jpg', 'title' => 'Cueca chilena y Cueca Sola / Chilean Cueca and Cueca Sola'],
            ['img' => '/images/arpillera/arp3.jpg', 'title' => ' Nuestros/as desaparecidos/as / Our Disappeared'],
        ]);
    }
}
