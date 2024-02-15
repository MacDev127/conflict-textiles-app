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
                'event_time' => Carbon::createFromTime(19, 0, 0), // 7:00 PM
                'event_date' => Carbon::createFromDate(2024, 6, 1)->format('j,n,y'), // January 1, 2024
                'title' => 'Threads of Empowerment: Conflict Textiles’ International Journey',
                'description' => 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
                'type' => 'Exhibition',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'image' => '/images/misc/event1.jpg', 
                'location' => 'Letterkenny',
                'event_time' => Carbon::createFromTime(19, 0, 0), // 7:00 PM
                'event_date' => Carbon::createFromDate(2024, 6, 1)->format('j,n,y'), // January 1, 2024
                'title' => 'From Displacement to Empowerment',
                'type' => 'Exhibition',
                'description' => 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'image' => '/images/misc/event2.jpg', 
                'location' => 'Belfast',
                'type' => 'Exhibition',
                'event_time' => Carbon::createFromTime(19, 0, 0), // 7:00 PM
                'event_date' => Carbon::createFromDate(2024, 6, 3)->format('j,n,y'), // January 1, 2024
                'title' => 'ARK / Conflict Textiles',
                'description' => '	This rotating exhibition is a collaboration between Conflict Textiles collection, ARK (Access, Research and Knowledge) and the McClay Library at Queen’s University Belfast. The primary goal of ARK, Northern Ireland’s social policy hub, is to increase the accessibility and use of academic data and research. It is based across the campuses of Ulster University and Queens University Belfast.Two core pillars of ARK from which this collaboration has grown include:
                1) Conflict Archive on the Internet (CAIN). Conflict Textiles online archive has been designed, developed and supported by CAIN and is an associated site of CAIN since 2008.
                2) Its suite of three annual public attitudes surveys, particularly the Northern Ireland Life and Times survey (NILT). A short film by Conflict Textiles and ARK "Refugees and asylum seekers in Northern Ireland" (2021) complemented the NILT 2020 survey results on public attitudes to refugees and asylum seekers in Northern Ireland.
                Findings from the latest NILT Survey, themed on Political Attitudes in Northern Ireland 25 Years after the Agreement, were launched at a seminar titled Political priorities, attitudes and identities since the Agreement onThursday 1 June, 2.30-4.00 pm, in the Senate Room, Queen’s University Belfast. (Presentation slides are available in the Documents section below).
                 Prior to the seminar, four textiles from Conflict Textiles collection, highlighting key issues on identity and society in Northern Ireland via textile language, were launched at 1pm in the McClay Library, Queens University. This marked the beginning of the new ARK / Conflict Textiles collaboration. (The launch event was by invitation only).',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'image' => '/images/misc/event6.jpg', 
                'location' => 'Madrid',
                'type' => 'Conference',
                'event_time' => Carbon::createFromTime(19, 0, 0), // 7:00 PM
                'event_date' => Carbon::createFromDate(2024, 6, 1)->format('j,n,y'), // January 1, 2024
                'title' => ' Mapping Memory: History, Texts and Cultures',
                'description' => 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'image' => '/images/misc/event4.jpg', 
                'location' => 'Cork',
                'type' => 'Work Shop',
                'event_time' => Carbon::createFromTime(19, 0, 0), // 7:00 PM
                'event_date' => Carbon::createFromDate(2024, 6, 1)->format('j,n,y'), // January 1, 2024
                'title' => ' Inclusive Global Histories',
                'description' => 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'image' => '/images/misc/event5.jpg', 
                'location' => 'Dublin',              
                'type' => 'Work Shop',
                'title' => 'The Workhouse Through the Times',
                'event_time' => Carbon::createFromTime(19, 0, 0), // 7:00 PM
                'event_date' => Carbon::createFromDate(2024, 6, 1)->format('j,n,y'), // January 1, 2024
                'description' => 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
                'created_at' => now(),
                'updated_at' => now(),
            ],
          
        ]);
    }
}
