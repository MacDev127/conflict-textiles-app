<?php

namespace App\Http\Controllers;

use App\Models\GalleryImage;
use Inertia\Inertia;
use Illuminate\Http\Request;


class GalleryImagesController extends Controller
{

public function index()
{
    // dd($images);
    // Retrieve all GalleryImage records and associated textileDetail relationship from the database in one query.
    $images = GalleryImage::with('textileDetail')->get(); // This will eager load the related textile details

    return Inertia::render('Home/Home', ['galleryImages' => $images->toArray()]);

}

public function arpillera() {
    // Fetch specific images for the Arpillera collection
    $arpilleraImages = GalleryImage::where('type', 'arpillera')->get();
    return Inertia::render('Arpillera/Arpillera', ['galleryImages' => $arpilleraImages]);
}
public function banner() {
    // Fetch specific images for the banner collection
    $bannerImages = GalleryImage::where('type', 'banner')->get();
    return Inertia::render('Banner/Banner', ['galleryImages' => $bannerImages]);
}

}
