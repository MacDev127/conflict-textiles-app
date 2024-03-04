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
            ['img' => '/images/collections/arp1.jpg', 'title' => 'En el lado “bueno” de la valla 2 / On the “Good" Side of the Fence 2', 'type' => 'arpillera', 'maker' => 'Antonia Amador', 'country_of_origin' => 'Catalonia', 'date' => '2016-01-01'],
            ['img' => '/images/collections/arp2.jpg', 'title' => 'Cueca chilena y Cueca Sola / Chilean Cueca and Cueca Sola','type' => 'arpillera', 'maker' => ' Aurora Ortiz', 'country_of_origin' => 'Chile', 'date' => '2022-01-01'],
            ['img' => '/images/collections/arp3.jpg', 'title' => ' Nuestros/as desaparecidos/as / Our Disappeared','type' => 'arpillera', 'maker' => 'Violeta Morales', 'country_of_origin' => 'Chile', 'date' => '1988-01-01'],
            ['img' => '/images/collections/arp4.jpg', 'title' => ' Violar es un crimen / Rape is a crime','type' => 'arpillera','maker' => ' MH, Mujeres Creativas workshop', 'country_of_origin' => 'Peru', 'date' => '2008-01-01'],
            ['img' => '/images/collections/arp6.jpg', 'title' => 'La cueca sola / Dancing cueca alone,','type' => 'arpillera','maker' => 'Violeta Morales', 'country_of_origin' => 'Chile', 'date' => '1989-01-01'],
            ['img' => '/images/collections/arp7.jpg', 'title' => ' Mi Guernica / My Gernika','type' => 'arpillera','maker' => 'Edurne Mestraitua', 'country_of_origin' => 'Basque Country', 'date' => '2017-01-01'],
            ['img' => '/images/collections/arp8.jpg', 'title' => 'Dónde están los desaparecidos? / Where are the "disappeared"?','type' => 'arpillera','maker' => ' Irma Müller', 'country_of_origin' => 'Chile', 'date' => '1985-01-01'],
            ['img' => '/images/collections/arp9.jpg', 'title' => 'The word that caused the outbreak of war - “Freedom"','type' => 'arpillera','maker' => 'Sabah Obido', 'country_of_origin' => 'Syria', 'date' => '2020-01-01'],
            ['img' => '/images/collections/arp10.jpg', 'title' => 'Cacerolazo / Women banging their pots','type' => 'arpillera','maker' => '  Felicia', 'country_of_origin' => 'Chile', 'date' => '1988-01-01'],
            ['img' => '/images/collections/arp11.jpg', 'title' => 'Vida en Nuestra Población / Life in Our Poor Neighbourhood','type' => 'arpillera','maker' => 'Taller Recoleta', 'country_of_origin' => 'Chile', 'date' => '1982-01-01'],
            ['img' => '/images/collections/arp12.jpg', 'title' => 'Violencia en Ayacucho/Violence in Ayacucho','type' => 'arpillera','maker' => ' Anonymous', 'country_of_origin' => 'Peru', 'date' => '2008-01-01'],
            ['img' => '/images/collections/arp13.jpg', 'title' => 'Ayer - Hoy / Yesterday - Today','type' => 'arpillera','maker' => 'Asociación Kuyanakuy', 'country_of_origin' => 'Peru', 'date' => '200-01-012-01-01'],
            ['img' => '/images/collections/arp14.jpg', 'title' => 'Bebés robados / Stolen Babies','type' => 'arpillera','maker' => 'Antonia Amador', 'country_of_origin' => 'Chile', 'date' => '2016-01-01'],
            ['img' => '/images/collections/arp15.jpg', 'title' => 'Catalina Larrere','type' => 'arpillera','maker' => 'Aurora Ortiz', 'country_of_origin' => 'Chile', 'date' => '2020-01-01'],
            ['img' => '/images/collections/arp16.jpg', 'title' => 'Escuela en la población / School in a población','type' => 'arpillera','maker' => '  Anonymous', 'country_of_origin' => 'Chile', 'date' => '1980-01-01'],
            ['img' => '/images/collections/arp17.jpg', 'title' => 'Aleppo school / Escuela en Aleppo, Siria ','type' => 'arpillera','maker' => 'Linda Adams', 'country_of_origin' => 'England', 'date' => '2016-01-01'],
            ['img' => '/images/collections/arp18.jpg', 'title' => 'Any time and everywhere - Anna Franks universality','type' => 'arpillera','maker' => 'Heidi Drahota', 'country_of_origin' => 'Germany', 'date' => '2011-01-01'],
            ['img' => '/images/collections/arp19.jpg', 'title' => 'Auf der Flucht 1945 / Fleeing in 1945','type' => 'arpillera','maker' => 'Mara Loytved-Hardegg', 'country_of_origin' => 'Germany', 'date' => '2010-01-01'],
            ['img' => '/images/collections/arp20.jpg', 'title' => 'Caminemos juntos / Let us walk together','type' => 'arpillera','maker' => 'Fundació Ateneu Sant Roc members', 'country_of_origin' => 'Catalonia', 'date' => '2021-01-01'],
            ['img' => '/images/collections/arp21.jpg', 'title' => 'Cimarrón / Runaway slave ','type' => 'arpillera','maker' => 'Antonia Amador', 'country_of_origin' => 'Chile', 'date' => '2016-01-01'],
            ['img' => '/images/collections/arp22.jpg', 'title' => 'Collection of arpillera style figures ','type' => 'arpillera', 'maker' => 'Antonia Amador', 'country_of_origin' => 'Chile', 'date' => '2016-01-01'],
            ['img' => '/images/collections/arp23.jpg', 'title' => 'Cultures from the Heart','type' => 'arpillera','maker' => 'Antonia Amador', 'country_of_origin' => 'Chile', 'date' => '2016-01-01'],
            ['img' => '/images/collections/arp24.jpg', 'title' => 'Desplazamiento / Displacement','type' => 'arpillera','maker' => 'Mujeres tejiendo sueños y sabores de paz, Mampuján', 'country_of_origin' => 'Colombia', 'date' => '2010-01-01'],
            ['img' => '/images/collections/arp25.jpg', 'title' => 'En memoria de Teresa Durán / In memory of Teresa Durán','type' => 'arpillera','maker' => 'Linda Adams', 'country_of_origin' => 'England', 'date' => '2011-01-01'],
            ['img' => '/images/collections/arp26.jpg', 'title' => 'Digital Death','type' => 'arpillera','maker' => 'Deborah Stockdale', 'country_of_origin' => 'Ireland', 'date' => '2014-01-01'],
            ['img' => '/images/collections/arp27.jpg', 'title' => 'Día de Visita / Day of Visit','type' => 'arpillera','maker' => ' Victoria Diaz Caro', 'country_of_origin' => 'Chile', 'date' => '1988-01-01'],
            ['img' => '/images/collections/arp29.jpg', 'title' => 'Violeta Morales life story','type' => 'arpillera','maker' => 'Violeta Morales', 'country_of_origin' => 'Chile', 'date' => '1990-01-01'],
            ['img' => '/images/collections/arp30.jpg', 'title' => 'We are seeds','type' => 'arpillera','maker' => ' London Mexico Solidarity in collaboration with four other solidarity groups', 'country_of_origin' => 'UK', 'date' => '2016-01-01'],
            ['img' => '/images/collections/arp33.jpg', 'title' => 'A special place in our hearts','type' => 'arpillera','maker' => 'Linda Adams', 'country_of_origin' => 'England', 'date' => '2009-01-01'],
            ['img' => '/images/collections/arp31.jpg', 'title' => 'Through the Barricades','type' => 'arpillera','maker' => ' Jacqui Hill', 'country_of_origin' => 'Northern Ireland', 'date' => '2013-01-01'],
            ['img' => '/images/collections/arp32.jpg', 'title' => 'Retorno/Return','type' => 'arpillera','maker' => 'Mujeres tejiendo sueños y sabores de paz, Mampuján', 'country_of_origin' => 'Colombia', 'date' => '2013-01-01'],

            //Banners
            ['img' => '/images/collections/banner1.jpg', 'title' => 'Bienvenida a las personas refugiadas / Welcome Refugees','type' => 'banner','maker' => ' Participants at the International Arpilleras Forum', 'country_of_origin' => 'Basque Country', 'date' => '2016-01-01'],
            ['img' => '/images/collections/banner2.jpg', 'title' => 'Con-textualizando la memoria / Contextualising memory outcome banner','type' => 'banner','maker' => 'Participants in the Contextualising memory workshop programme', 'country_of_origin' => 'Northern Ireland / UK / Colombia ', 'date' => '2021-01-01'],
            ['img' => '/images/collections/banner3.jpg', 'title' => 'It’s No ******* Computer Game!!','type' => 'banner','maker' => 'Thalia and Ian Campbell', 'country_of_origin' => 'Wales', 'date' => '2012-01-01'],
            
            ['img' => '/images/collections/banner4.jpg', 'title' => 'Threads for Corporate Justice','type' => 'banner','maker' => ' Jacqui Hill', 'country_of_origin' => 'Northern Ireland', 'date' => '2013-01-01'],
            ['img' => '/images/collections/banner5.jpg', 'title' => 'Threads of Empowerment: Conflict Textiles’ International Journey','type' => 'banner','maker' => ' Ana Zlatkes', 'country_of_origin' => 'Argentina', 'date' => '2023-01-01'],
            ['img' => '/images/collections/banner6.jpg', 'title' => 'War-Torn Children banner featuring Broken Rifle 2 and Després de les onades','type' => 'banner','maker' => 'Trócaire Activists', 'country_of_origin' => 'Ireland', 'date' => '2022-01-01'],
            ['img' => '/images/collections/banner7.jpg', 'title' => 'We cannot walk alone – Refugee week 2021 outcome banner','type' => 'banner','maker' => ' Refugee week Participants', 'country_of_origin' => 'Northern Ireland', 'date' => '2021-01-01'],

            //Quilts
            ['img' => '/images/collections/quilt1.jpg', 'title' => '25 Years of Peacemaking','type' => 'quilt','maker' => ' Women Together', 'country_of_origin' => 'Northern Ireland', 'date' => '1995-01-01' ],
            ['img' => '/images/collections/quilt2.jpg', 'title' => 'A man with three wives','type' => 'quilt','maker' => ' Weya, Chitsanzara Knitting Group', 'country_of_origin' => ' Zimbabwe', 'date' => '1995-01-01'],
            ['img' => '/images/collections/quilt3.jpg', 'title' => 'A picture of Germany','type' => 'quilt','maker' => 'Asylum Seekers in Germany', 'country_of_origin' => 'Germany', 'date' => '1995-01-01'],
            ['img' => '/images/collections/quilt4.jpg', 'title' => 'A Quilt for the world','type' => 'quilt','maker' => ' Workshop "Art of Survival", Women in One World', 'country_of_origin' => 'Germany', 'date' => '1995-01-01'],
            ['img' => '/images/collections/quilt5.jpg', 'title' => '25 Alzheimers 2: Lost Memories of New York','type' => 'quilt','maker' => ' Irene MacWilliam', 'country_of_origin' => 'Northern Ireland', 'date' => '1995-01-01'],
            ['img' => '/images/collections/quilt6.jpg', 'title' => 'As a War Bride to USA','type' => 'quilt','maker' => ' Refugee week Participants', 'country_of_origin' => 'Northern Ireland', 'date' => '2021-01-01'],
            ['img' => '/images/collections/quilt7.jpg', 'title' => 'Broken Promises','type' => 'quilt','maker' => ' Mary Good', 'country_of_origin' => 'Northern Ireland', 'date' => '2000-01-01'],
            ['img' => '/images/collections/quilt8.jpg', 'title' => 'Circle of Sacred Sisters','type' => 'quilt','maker' => ' Columbus, Ohio chapter of the Women of Color Quilters Network', 'country_of_origin' => 'USA', 'date' => '1995-01-01'],
            ['img' => '/images/collections/quilt9.jpg', 'title' => 'Egyptian Gods','type' => 'quilt','maker' => 'Anonymous', 'country_of_origin' => 'Egypt', 'date' => '2010-01-01'],
            ['img' => '/images/collections/quilt10.jpg', 'title' => 'Events of 1989','type' => 'quilt','maker' => 'Irene MacWilliam', 'country_of_origin' => 'Northern Ireland', 'date' => '1989-01-01'],
            ['img' => '/images/collections/quilt11.jpg', 'title' => 'Events of 1992','type' => 'quilt','maker' => 'Irene MacWilliam', 'country_of_origin' => 'Northern Ireland', 'date' => '1993-01-01'],
            ['img' => '/images/collections/quilt12.jpg', 'title' => 'Events of 1994','type' => 'quilt','maker' => 'Irene MacWilliam', 'country_of_origin' => 'Northern Ireland', 'date' => '1995-01-01'],
            ['img' => '/images/collections/quilt13.jpg', 'title' => 'Events of 1998','type' => 'quilt','maker' => 'Irene MacWilliam', 'country_of_origin' => 'Northern Ireland', 'date' => '2999-01-01'],
            ['img' => '/images/collections/quilt14.jpg', 'title' => 'Events of 2005','type' => 'quilt','maker' => 'Irene MacWilliam', 'country_of_origin' => 'Northern Ireland', 'date' => '2005-01-01'],
            ['img' => '/images/collections/quilt15.jpg', 'title' => 'Friendship Quilt','type' => 'quilt','maker' => '  Women from cross community groups', 'country_of_origin' => 'Northern Ireland', 'date' => '2000-01-01'],
            ['img' => '/images/collections/quilt16.jpg', 'title' => 'Guatemalan Textiles','type' => 'quilt','maker' => '  Anonymous', 'country_of_origin' => 'Guatemala', 'date' => '1990-01-01'],
            ['img' => '/images/collections/quilt17.jpg', 'title' => 'Hilvanando la busqueda / Stitching the search','type' => 'quilt','maker' => 'Nicole Drouilly', 'country_of_origin' => 'Chile', 'date' => '2014-01-01'],
            ['img' => '/images/collections/quilt18.jpg', 'title' => 'Ireland: The Great Hunger 1845-1848 ','type' => 'quilt','maker' => 'The Wigham family and the Dublin & Waterford Quakers', 'country_of_origin' => 'Northern Ireland', 'date' => '1996-01-01'],
            ['img' => '/images/collections/quilt19.jpg', 'title' => 'Kaderimiz - Our Fate','type' => 'quilt','maker' => 'Culture Bridge for migrant Women project', 'country_of_origin' => 'Germany', 'date' => '1995-01-01'],
            ['img' => '/images/collections/quilt20.jpg', 'title' => ' Limavady Borough Millennium Quilt','type' => 'quilt','maker' => ' Womens Institutes, Womens groups & community organisations from the Limavady area', 'country_of_origin' => 'Northern Ireland', 'date' => '2009-01-01'],
            ['img' => '/images/collections/quilt21.jpg', 'title' => 'Love Across the Waves -Grá Thar na dTonn','type' => 'quilt','maker' => ' Arranmore and Tir Boghaine Womens Groups facilitated by Deborah Stockdale', 'country_of_origin' => 'Republic of Ireland', 'date' => '2008-01-01'],
            ['img' => '/images/collections/quilt22.jpg', 'title' => 'Majellas Quilt','type' => 'quilt','maker' => 'Inner Wheel Club of Londonderry', 'country_of_origin' => 'Northern Ireland', 'date' => '2006-01-01'],
            ['img' => '/images/collections/quilt23.jpg', 'title' => 'Northern Ireland Peace Quilt','type' => 'quilt','maker' => 'Women Together', 'country_of_origin' => 'Northern Ireland', 'date' => '1994-01-01'],
            ['img' => '/images/collections/quilt24.jpg', 'title' => 'Northern Ireland Reconciliation Quilt','type' => 'quilt','maker' => 'Women Together', 'country_of_origin' => 'Northern Ireland', 'date' => '1995-01-01'],
            ['img' => '/images/collections/quilt25.jpg', 'title' => 'Northern Ireland: Reconciliation','type' => 'quilt','maker' => '  Quakers in Northern Ireland ', 'country_of_origin' => 'Northern Ireland', 'date' => '1996-01-01'],

            //Embroidered Cloth
            ['img' => '/images/collections/ec1.jpg', 'title' => 'Los trabajos colectivos son fuente de resistencia / Collective work is a source of resistance ','type' => 'embroidered-cloth', 'maker' => 'Anonymous', 'country_of_origin' => 'Mexico', 'date' => '2018-01-01'],
            ['img' => '/images/collections/ec2.png', 'title' => 'Un corazón como el de todos / A heart like everyone else','type' => 'embroidered-cloth', 'maker' => 'Jhonatan/Edwin ', 'country_of_origin' => 'Colombia', 'date' => '2019-01-01'],

            //Wall hangings
            ['img' => '/images/collections/wh1.jpg', 'title' => 'Anti Apartheid ','type' => 'wall-hanging', 'maker' => ' Aberystwyth Anti-Apartheid Group', 'country_of_origin' => 'Wales', 'date' => '1989-01-01'],
            ['img' => '/images/collections/wh2.jpg', 'title' => 'Blutspur / Blood trail','type' => 'wall-hanging', 'maker' => 'Heidi Drahota', 'country_of_origin' => 'Germany', 'date' => '2011-01-01'],
            ['img' => '/images/collections/wh3.jpg', 'title' => 'Brigits Dream ','type' => 'wall-hanging', 'maker' => 'Deborah Stockdale ', 'country_of_origin' => 'Republic of Ireland', 'date' => '1996-01-01'],
            ['img' => '/images/collections/wh4.jpg', 'title' => 'Children connecting with the past through embroidery','type' => 'wall-hanging', 'maker' => 'Children from Limavady Community Development Initiative (LCDI) Afterschool Club', 'country_of_origin' => 'Northern Ireland', 'date' => '2022-01-01'],
            ['img' => '/images/collections/wh5.jpg', 'title' => 'Children on the Edge ','type' => 'wall-hanging', 'maker' => 'Irene MacWilliam ', 'country_of_origin' => 'Northern Ireland', 'date' => '2016-01-01'],
            ['img' => '/images/collections/wh6.jpg', 'title' => 'Civil War','type' => 'wall-hanging', 'maker' => 'Mrs. Saroj, Gujarat ', 'country_of_origin' => 'India', 'date' => '1995-01-01'],
            ['img' => '/images/collections/wh7.jpg', 'title' => 'Continuum','type' => 'wall-hanging', 'maker' => 'Eileen Harrisson ', 'country_of_origin' => 'Northern Ireland', 'date' => '2014-01-01'],
            ['img' => '/images/collections/wh8.jpg', 'title' => 'Da capo al fine','type' => 'wall-hanging', 'maker' => 'Mara Loytved-Hardegg', 'country_of_origin' => 'Germany', 'date' => '2009-01-01'],
            ['img' => '/images/collections/wh9.jpg', 'title' => 'Daily Life in Zambia','type' => 'wall-hanging', 'maker' => ' Fatima ', 'country_of_origin' => 'Zambia', 'date' => '2009-01-01'],
            ['img' => '/images/collections/wh10.jpg', 'title' => 'Daily Life in Zambia II','type' => 'wall-hanging', 'maker' => 'Anonymous ', 'country_of_origin' => 'Zambia', 'date' => '2010-01-01'],
            ['img' => '/images/collections/wh11.jpg', 'title' => 'Derry Dolls - Past to Present','type' => 'wall-hanging', 'maker' => 'Women from the Peace Barriers Program, Bogside and Brandywell Initiative, Derry', 'country_of_origin' => 'Northern Ireland', 'date' => '2022-01-01'],
            ['img' => '/images/collections/wh12.jpg', 'title' => 'Disappeared','type' => 'wall-hanging', 'maker' => 'Irene MacWilliam', 'country_of_origin' => 'Northern Ireland', 'date' => '2013-01-01'],
            ['img' => '/images/collections/wh13.jpg', 'title' => 'Earthquake','type' => 'wall-hanging', 'maker' => 'Irene MacWilliam', 'country_of_origin' => 'Northern Ireland', 'date' => '2012-01-01'],
            ['img' => '/images/collections/wh14.jpg', 'title' => 'Executed at dawn','type' => 'wall-hanging', 'maker' => 'Irene MacWilliam', 'country_of_origin' => 'Northern Ireland', 'date' => '2009-01-01'],
            ['img' => '/images/collections/wh15.jpg', 'title' => 'Fern Woman','type' => 'wall-hanging', 'maker' => 'Deborah Stockdale', 'country_of_origin' => 'Republic of Ireland', 'date' => '2005-01-01'],
            ['img' => '/images/collections/wh16.jpg', 'title' => 'Frederick Meeting House Panel 1','type' => 'wall-hanging', 'maker' => ' Frederick Street Quaker Meeting House, Belfast', 'country_of_origin' => 'Northern Ireland', 'date' => '2000-01-01'],
            ['img' => '/images/collections/wh17.jpg', 'title' => 'Frederick Meeting House Panel 2','type' => 'wall-hanging', 'maker' => ' Frederick Street Quaker Meeting House, Belfast', 'country_of_origin' => 'Northern Ireland', 'date' => '2000-01-01'],
            ['img' => '/images/collections/wh18.jpg', 'title' => 'Frederick Meeting House Panel 3','type' => 'wall-hanging', 'maker' => ' Frederick Street Quaker Meeting House, Belfast', 'country_of_origin' => 'Northern Ireland', 'date' => '2000-01-01'],
            ['img' => '/images/collections/wh19.jpg', 'title' => 'Gegossenes Blei / Cast lead ','type' => 'wall-hanging', 'maker' => 'Heidi Drahota', 'country_of_origin' => 'Germany', 'date' => '2009-01-01'],
            ['img' => '/images/collections/wh20.jpg', 'title' => 'John Hume, Peacemaker ','type' => 'wall-hanging', 'maker' => 'Deborah Stockdale', 'country_of_origin' => 'Republic of Ireland', 'date' => '2022-01-01'],
        

        ]);
}
}