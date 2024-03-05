<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CollectionPageImage;
use Inertia\Inertia;
use App\Models\GalleryImage;


class CollectionPageImageController extends Controller
{
    public function index(){
          

        $collectionPageImages = CollectionPageImage::all();
        // Advanced search country of origin
        $countries = GalleryImage::distinct()->pluck('country_of_origin')->sort()->values();

        return Inertia::render('Collection/Collection', [
            'collectionPageImages' => $collectionPageImages,
            'countries' => $countries
        ]);
    }

    
    
}
