<?php

namespace App\Http\Controllers;

use App\Models\GalleryImage;
use Inertia\Inertia;
use Illuminate\Http\Request;


class GalleryImagesController extends Controller
{

public function index()
{
    // $images = GalleryImage::all();
    // dd($images);
    $images = GalleryImage::with('textileDetail')->get(); // This will eager load the related textile details


    return Inertia::render('Home/Home', ['galleryImages' => $images->toArray()]);

    // return Inertia::render('Collection', ['galleryImages' => $images]);

}

}
