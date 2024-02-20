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
                'commissioned_by' => "Conflict Textiles",
                'venue' => "Ulster University",
                'curator' => "Roberta Bacic and Conflict Textiles team",
                'facilitator' => " Paula Devine",
                'outcome' => "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a varius felis, sed ullamcorper felis. Sed eu fermentum orci. Donec euismod ut dolor vehicula cursus. Aliquam tincidunt euismod sapien, eu rutrum eros feugiat nec. Donec scelerisque tellus sit amet fermentum consequat. Praesent malesuada ex eu sapien scelerisque dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus dignissim nisi vel libero suscipit facilisis. Curabitur gravida luctus arcu, ac lobortis dolor. Fusce vestibulum elit dui, sit amet mattis urna eleifend non. Ut eleifend accumsan ligula, at vulputate est vulputate nec. Mauris metus elit, feugiat rutrum lacinia a, rutrum id ante. Mauris vel risus lacus.",
                'document_url' => "comming soon",
                'textile_url' => "/public/images/collections/arp1.jpg",
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'image' => '/images/misc/event1.jpg', 
                'location' => 'Letterkenny',
                'event_time' => Carbon::createFromTime(19, 0, 0), // 7:00 PM
                'event_date' => Carbon::createFromDate(2024, 6, 1)->format('j,n,y'), // January 1, 2024
                'title' => 'From Displacement to Empowerment',
                'description' => 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
                'type' => 'Exhibition',
                'commissioned_by' => "Conflict Textiles",
                'venue' => "Ulster University",
                'curator' => "Roberta Bacic and Conflict Textiles team",
                'facilitator' => " Paula Devine",
                'outcome' => "Brillant Event",
                'document_url' => "comming soon",
                'textile_url' => "https://picsum.photos/seed/picsum/200/300",
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
                'description' => "This rotating exhibition is a collaboration between Conflict Textiles collection, ARK (Access, Research and Knowledge) and the McClay Library at Queen’s University Belfast.\n\nTwo core pillars of ARK from which this collaboration has grown include:\n1) Conflict Archive on the Internet (CAIN). Conflict Textiles online archive has been designed, developed and supported by CAIN and is an associated site of CAIN since 2008.\n\n2) Its suite of three annual public attitudes surveys, particularly the Northern Ireland Life and Times survey (NILT). A short film by Conflict Textiles and ARK \"Refugees and asylum seekers in Northern Ireland\" (2021) complemented the NILT 2020 survey results on public attitudes to refugees and asylum seekers in Northern Ireland.",
                'commissioned_by' => "ARK/ Conflict Textiles",
                'venue' => "McClay Library, Queens University, Belfast
                10 College Park Ave, Belfast BT7 1LP",
                'curator' => "Roberta Bacic and Conflict Textiles team",
                'facilitator' => " Paula Devine",
                'outcome' => "Brillant Event",
                'document_url' => "comming soon",
            'textile_url' => "https://picsum.photos/seed/picsum/200/300",

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
                'commissioned_by' => "Conflict Textiles",
                'venue' => "Ulster University",
                'curator' => "Roberta Bacic and Conflict Textiles team",
                'facilitator' => " Paula Devine",
                'outcome' => "Brillant Event",
                'document_url' => "comming soon",
                 'textile_url' => "https://picsum.photos/seed/picsum/200/300",
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
                'commissioned_by' => "Conflict Textiles",
                'venue' => "Ulster University",
                'curator' => "Roberta Bacic and Conflict Textiles team",
                'facilitator' => " Paula Devine",
                'outcome' => "Brillant Event",
                'document_url' => "comming soon",
                  'textile_url' => "https://picsum.photos/seed/picsum/200/300",
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
                'commissioned_by' => "Conflict Textiles",
                'venue' => "Ulster University",
                'curator' => "Roberta Bacic and Conflict Textiles team",
                'facilitator' => " Paula Devine",
                'outcome' => "Brillant Event",
                'document_url' => "comming soon",
                 'textile_url' => "https://picsum.photos/seed/picsum/200/300",
                'created_at' => now(),
                'updated_at' => now(),
            ],
          
        ]);
    }
}
