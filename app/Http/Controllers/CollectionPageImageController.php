<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CollectionPageImage;
use Inertia\Inertia;
use App\Models\GalleryImage;


class CollectionPageImageController extends Controller
{
    public function index()
    {


        $collectionPageImages = CollectionPageImage::all(); //pass all the collection page images to the $collectionPageImages variable
        // Advanced search country of origin
        $countries = GalleryImage::distinct()->pluck('country_of_origin')->sort()->values(); // pass the list of values from country_of_origin column to $countries variable
        $type = GalleryImage::distinct()->pluck('type')->sort()->values(); // pass the list of values from country_of_origin column to $countries variable

        return Inertia::render('Collection/Collection', [
            'collectionPageImages' => $collectionPageImages,
            'countries' => $countries,
            "type" => $type,
        ]);
    }



}

/*
|--------------------------------------------------------------------------
| CollectionPageImageController
|--------------------------------------------------------------------------
|this controller retrieves all collection page images and distinct countries of origin, 
|then renders the 'Collection/Collection' view template using Inertia.js, passing along the retrieved data. 
| 
| 
|
|
*/
