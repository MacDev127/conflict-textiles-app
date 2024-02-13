<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;



class EventSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('events')->insert([
            [
                'image' => '/images/misc/test9.jpg', 
                'location' => 'Belfast',
                'title' => 'Exhibition',
                'event_time' => Carbon::createFromTime(19, 0, 0), // 7:00 PM
                'event_date' => Carbon::createFromDate(2024, 6, 1)->format('j,n,y'), // January 1, 2024
                'description' => 'Threads of Empowerment: Conflict Textiles’ International Journey',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'image' => '/images/misc/event1.jpg', 
                'location' => 'Letterkenny',
                'title' => 'Exhibition',
                'event_time' => Carbon::createFromTime(19, 0, 0), // 7:00 PM
                'event_date' => Carbon::createFromDate(2024, 6, 1)->format('j,n,y'), // January 1, 2024
                'description' => 'From Displacement to Empowerment',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'image' => '/images/misc/event2.jpg', 
                'location' => 'Belfast',
                'title' => 'Exhibition',
                'event_time' => Carbon::createFromTime(19, 0, 0), // 7:00 PM
                'event_date' => Carbon::createFromDate(2024, 6, 3)->format('j,n,y'), // January 1, 2024
                'description' => 'ARK / Conflict Textiles',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'image' => '/images/misc/event6.jpg', 
                'location' => 'Madrid',
                'title' => 'Conference',
                'event_time' => Carbon::createFromTime(19, 0, 0), // 7:00 PM
                'event_date' => Carbon::createFromDate(2024, 6, 1)->format('j,n,y'), // January 1, 2024
                'description' => ' Mapping Memory: History, Texts and Cultures',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'image' => '/images/misc/event4.jpg', 
                'location' => 'Cork',
                'title' => 'Work Shop',
                'event_time' => Carbon::createFromTime(19, 0, 0), // 7:00 PM
                'event_date' => Carbon::createFromDate(2024, 6, 1)->format('j,n,y'), // January 1, 2024
                'description' => 'This is a sample event description.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'image' => '/images/misc/event5.jpg', 
                'location' => 'Dublin',
                'title' => 'Work Shop',
                'event_time' => Carbon::createFromTime(19, 0, 0), // 7:00 PM
                'event_date' => Carbon::createFromDate(2024, 6, 1)->format('j,n,y'), // January 1, 2024
                'description' => 'This is a sample event description.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
          
        ]);
    }
}
