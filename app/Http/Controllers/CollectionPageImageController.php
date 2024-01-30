<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CollectionPageImage;
use Inertia\Inertia;

class CollectionPageImageController extends Controller
{
    public function index(){
          

        $images = CollectionPageImage::all();
        // dd($images);
        return Inertia::render('Collection/Collection', ['collectionPageImages' => $images->toArray()]);
    }
    
}
