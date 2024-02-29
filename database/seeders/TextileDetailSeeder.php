<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use App\Models\GalleryImage;


class TextileDetailSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
// Retrieve all gallery images
$galleryImages = GalleryImage::all();   

foreach ($galleryImages as $galleryImage){
    DB::table('textile_details')->insert([
        [
            'gallery_image_id' => $galleryImage->id, 
            // Insert a new textile detail for each gallery image

            'image' => $galleryImage->img, // Use the image path from the gallery image
            'location' => 'Belfast',
            'date' => Carbon::createFromDate(2024, 6, 1)->format('Y-m-d'), // should output '2024-06-01'
            'title' => $galleryImage->title,
            'size' => 'It is a long established',
            'materials' => 'Exhibition',
            'provenance' => "Conflict Textiles",
            'country_of_origin' => "Ulster University",
            'authenticity' => "Roberta Bacic and Conflict Textiles team",
            'type' => $galleryImage->type,
            'maker' => "Lorem ipsum dolor sit amet",
            'owner' => "comming soon",
            'photographer' => "Paddy Joe",
            'description' => "description goes in here",
            
        ],
      
      
    ]);
}
        

      
     
        
    }
}
