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
            ['img' => '/images/arpillera/arp1.jpg', 'title' => 'En el lado “bueno” de la valla 2 / On the “Good" Side of the Fence 2'],
            ['img' => '/images/arpillera/arp2.jpg', 'title' => 'Cueca chilena y Cueca Sola / Chilean Cueca and Cueca Sola'],
            ['img' => '/images/arpillera/arp3.jpg', 'title' => ' Nuestros/as desaparecidos/as / Our Disappeared'],
            ['img' => '/images/arpillera/arp4.jpg', 'title' => ' Violar es un crimen / Rape is a crime'],
            ['img' => '/images/arpillera/arp6.jpg', 'title' => 'La cueca sola / Dancing cueca alone,'],
            ['img' => '/images/arpillera/arp7.jpg', 'title' => ' Mi Guernica / My Gernika'],
            ['img' => '/images/arpillera/arp8.jpg', 'title' => 'Dónde están los desaparecidos? / Where are the "disappeared"?'],
            ['img' => '/images/arpillera/arp9.jpg', 'title' => ' The word that caused the outbreak of war - “Freedom"'],
            ['img' => '/images/arpillera/arp10.jpg', 'title' => 'Cacerolazo / Women banging their pots'],
            ['img' => '/images/arpillera/arp11.jpg', 'title' => 'Vida en Nuestra Población / Life in Our Poor Neighbourhood'],
            ['img' => '/images/arpillera/arp12.jpg', 'title' => 'Violencia en Ayacucho/Violence in Ayacucho'],
            ['img' => '/images/arpillera/arp13.jpg', 'title' => 'Asociación Kuyanakuy, Ayer - Hoy / Yesterday - Today'],
            ['img' => '/images/arpillera/arp14.jpg', 'title' => 'Bebés robados / Stolen Babies'],
            ['img' => '/images/arpillera/arp15.jpg', 'title' => 'Catalina Larrere'],
            ['img' => '/images/arpillera/arp16.jpg', 'title' => 'Escuela en la población / School in a población'],
            ['img' => '/images/arpillera/arp17.jpg', 'title' => 'Aleppo school / Escuela en Aleppo, Siria '],
            ['img' => '/images/arpillera/arp18.jpg', 'title' => 'Any time and everywhere - Anna Franks universality'],
            ['img' => '/images/arpillera/arp19.jpg', 'title' => 'Auf der Flucht 1945 / Fleeing in 1945'],
            ['img' => '/images/arpillera/arp20.jpg', 'title' => 'Caminemos juntos / Let us walk together'],
            ['img' => '/images/arpillera/arp21.jpg', 'title' => 'Cimarrón / Runaway slave '],
            ['img' => '/images/arpillera/arp22.jpg', 'title' => 'Collection of arpillera style figures '],
            ['img' => '/images/arpillera/arp23.jpg', 'title' => 'Cultures from the Heart'],
            ['img' => '/images/arpillera/arp24.jpg', 'title' => 'Desplazamiento / Displacement'],
            ['img' => '/images/arpillera/arp25.jpg', 'title' => 'En memoria de Teresa Durán / In memory of Teresa Durán'],
            ['img' => '/images/arpillera/arp26.jpg', 'title' => 'Digital Death'],
            ['img' => '/images/arpillera/arp27.jpg', 'title' => 'Día de Visita / Day of Visit'],
            ['img' => '/images/arpillera/arp29.jpg', 'title' => 'Violeta Morales life story'],
            ['img' => '/images/arpillera/arp30.jpg', 'title' => 'We are seeds'],
            ['img' => '/images/arpillera/arp33.jpg', 'title' => 'A special place in our hearts'],
            ['img' => '/images/arpillera/arp31.jpg', 'title' => 'Through the Barricades'],
            ['img' => '/images/arpillera/arp32.jpg', 'title' => 'Retorno/Return'],
           
        ]);
    }
}
