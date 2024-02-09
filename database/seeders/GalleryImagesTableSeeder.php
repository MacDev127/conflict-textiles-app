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
            ['img' => '/images/collections/arp1.jpg', 'title' => 'En el lado “bueno” de la valla 2 / On the “Good" Side of the Fence 2', 'type' => 'arpillera'],
            ['img' => '/images/collections/arp2.jpg', 'title' => 'Cueca chilena y Cueca Sola / Chilean Cueca and Cueca Sola','type' => 'arpillera'],
            ['img' => '/images/collections/arp3.jpg', 'title' => ' Nuestros/as desaparecidos/as / Our Disappeared','type' => 'arpillera'],
            ['img' => '/images/collections/arp4.jpg', 'title' => ' Violar es un crimen / Rape is a crime','type' => 'arpillera'],
            ['img' => '/images/collections/arp6.jpg', 'title' => 'La cueca sola / Dancing cueca alone,','type' => 'arpillera'],
            ['img' => '/images/collections/arp7.jpg', 'title' => ' Mi Guernica / My Gernika','type' => 'arpillera'],
            ['img' => '/images/collections/arp8.jpg', 'title' => 'Dónde están los desaparecidos? / Where are the "disappeared"?','type' => 'arpillera'],
            ['img' => '/images/collections/arp9.jpg', 'title' => ' The word that caused the outbreak of war - “Freedom"','type' => 'arpillera'],
            ['img' => '/images/collections/arp10.jpg', 'title' => 'Cacerolazo / Women banging their pots','type' => 'arpillera'],
            ['img' => '/images/collections/arp11.jpg', 'title' => 'Vida en Nuestra Población / Life in Our Poor Neighbourhood','type' => 'arpillera'],
            ['img' => '/images/collections/arp12.jpg', 'title' => 'Violencia en Ayacucho/Violence in Ayacucho','type' => 'arpillera'],
            ['img' => '/images/collections/arp13.jpg', 'title' => 'Asociación Kuyanakuy, Ayer - Hoy / Yesterday - Today','type' => 'arpillera'],
            ['img' => '/images/collections/arp14.jpg', 'title' => 'Bebés robados / Stolen Babies','type' => 'arpillera'],
            ['img' => '/images/collections/arp15.jpg', 'title' => 'Catalina Larrere','type' => 'arpillera'],
            ['img' => '/images/collections/arp16.jpg', 'title' => 'Escuela en la población / School in a población','type' => 'arpillera'],
            ['img' => '/images/collections/arp17.jpg', 'title' => 'Aleppo school / Escuela en Aleppo, Siria ','type' => 'arpillera'],
            ['img' => '/images/collections/arp18.jpg', 'title' => 'Any time and everywhere - Anna Franks universality','type' => 'arpillera'],
            ['img' => '/images/collections/arp19.jpg', 'title' => 'Auf der Flucht 1945 / Fleeing in 1945','type' => 'arpillera'],
            ['img' => '/images/collections/arp20.jpg', 'title' => 'Caminemos juntos / Let us walk together','type' => 'arpillera'],
            ['img' => '/images/collections/arp21.jpg', 'title' => 'Cimarrón / Runaway slave ','type' => 'arpillera'],
            ['img' => '/images/collections/arp22.jpg', 'title' => 'Collection of arpillera style figures ','type' => 'arpillera'],
            ['img' => '/images/collections/arp23.jpg', 'title' => 'Cultures from the Heart','type' => 'arpillera'],
            ['img' => '/images/collections/arp24.jpg', 'title' => 'Desplazamiento / Displacement','type' => 'arpillera'],
            ['img' => '/images/collections/arp25.jpg', 'title' => 'En memoria de Teresa Durán / In memory of Teresa Durán','type' => 'arpillera'],
            ['img' => '/images/collections/arp26.jpg', 'title' => 'Digital Death','type' => 'arpillera'],
            ['img' => '/images/collections/arp27.jpg', 'title' => 'Día de Visita / Day of Visit','type' => 'arpillera'],
            ['img' => '/images/collections/arp29.jpg', 'title' => 'Violeta Morales life story','type' => 'arpillera'],
            ['img' => '/images/collections/arp30.jpg', 'title' => 'We are seeds','type' => 'arpillera'],
            ['img' => '/images/collections/arp33.jpg', 'title' => 'A special place in our hearts','type' => 'arpillera'],
            ['img' => '/images/collections/arp31.jpg', 'title' => 'Through the Barricades','type' => 'arpillera'],
            ['img' => '/images/collections/arp32.jpg', 'title' => 'Retorno/Return','type' => 'arpillera'],

            //Banners
            ['img' => '/images/collections/banner1.jpg', 'title' => 'Bienvenida a las personas refugiadas / Welcome Refugees','type' => 'banner'],
            ['img' => '/images/collections/banner2.jpg', 'title' => 'Con-textualizando la memoria / Contextualising memory outcome banner','type' => 'banner'],
            ['img' => '/images/collections/banner3.jpg', 'title' => 'It’s No ******* Computer Game!!','type' => 'banner'],
            ['img' => '/images/collections/banner4.jpg', 'title' => 'Threads for Corporate Justice','type' => 'banner'],
            ['img' => '/images/collections/banner5.jpg', 'title' => 'Threads of Empowerment: Conflict Textiles’ International Journey','type' => 'banner'],
            ['img' => '/images/collections/banner6.jpg', 'title' => 'War-Torn Children banner featuring Broken Rifle 2 and Després de les onades','type' => 'banner'],
            ['img' => '/images/collections/banner7.jpg', 'title' => 'We cannot walk alone – Refugee week 2021 outcome banner','type' => 'banner'],

            //Quilts
            ['img' => '/images/collections/quilt1.jpg', 'title' => '25 Years of Peacemaking','type' => 'quilt'],
            ['img' => '/images/collections/quilt2.jpg', 'title' => 'A man with three wives','type' => 'quilt'],
            ['img' => '/images/collections/quilt3.jpg', 'title' => 'A picture of Germany','type' => 'quilt'],
            ['img' => '/images/collections/quilt4.jpg', 'title' => 'A Quilt for the world','type' => 'quilt'],
            ['img' => '/images/collections/quilt5.jpg', 'title' => '25 Alzheimers 2: Lost Memories of New York','type' => 'quilt'],
            ['img' => '/images/collections/quilt6.jpg', 'title' => 'As a War Bride to USA','type' => 'quilt'],
            ['img' => '/images/collections/quilt7.jpg', 'title' => 'Broken Promises','type' => 'quilt'],
            ['img' => '/images/collections/quilt8.jpg', 'title' => 'Circle of Sacred Sisters','type' => 'quilt'],
            ['img' => '/images/collections/quilt9.jpg', 'title' => 'Egyptian Gods','type' => 'quilt'],
            ['img' => '/images/collections/quilt10.jpg', 'title' => 'Events of 1989','type' => 'quilt'],
            ['img' => '/images/collections/quilt11.jpg', 'title' => 'Events of 1992','type' => 'quilt'],
            ['img' => '/images/collections/quilt12.jpg', 'title' => 'Events of 1994','type' => 'quilt'],
            ['img' => '/images/collections/quilt13.jpg', 'title' => 'Events of 1998','type' => 'quilt'],
            ['img' => '/images/collections/quilt14.jpg', 'title' => 'Events of 2005','type' => 'quilt'],
            ['img' => '/images/collections/quilt15.jpg', 'title' => 'Friendship Quilt','type' => 'quilt'],

            //Embroidered Cloth
            ['img' => '/images/collections/ec1.jpg', 'title' => 'Los trabajos colectivos son fuente de resistencia / Collective work is a source of resistance
            ','type' => 'embroidered-cloth'],
            ['img' => '/images/collections/ec2.png', 'title' => 'Un corazón como el de todos / A heart like everyone else','type' => 'embroidered-cloth'],
        

        ]);
}
}