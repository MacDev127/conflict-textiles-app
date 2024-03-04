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
public function quilt() {
    // Fetch specific images for the quilt collection
    $quiltImages = GalleryImage::where('type', 'quilt')->get();
    return Inertia::render('Quilt/Quilt', ['galleryImages' => $quiltImages]);
}
    // Fetch specific images for the quilt collection
public function embroideredCloth() {
    $embroideredClothImages = GalleryImage::where('type', 'embroidered-cloth')->get();
    return Inertia::render('EmbroideredCloth/EmbroideredCloth', ['galleryImages' => $embroideredClothImages]);
}
public function wallHanging() {
    $wallHangingImages = GalleryImage::where('type', 'wall-hanging')->get();
    return Inertia::render('WallHanging/WallHanging', ['galleryImages' => $wallHangingImages]);
}


//-------------------Search functionality----------------///

public function search(Request $request)
{
    $images = GalleryImage::query()
    ->when($request->filled('type'), function ($query) use ($request) {
        return $query->where('type', $request->type);
    })
    ->when($request->filled('maker'), function ($query) use ($request) {
        return $query->where('maker', $request->maker);
    })
    ->when($request->filled('country_of_origin'), function ($query) use ($request) {
        return $query->where('country_of_origin', $request->country_of_origin);
    })
    ->when($request->filled('keyword'), function ($query) use ($request) {
        return $query->where('title', 'LIKE', '%' . $request->keyword . '%');
    })
    ->when($request->filled('date_start') && $request->filled('date_end'), function ($query) use ($request) {
        $startYear = date('Y', strtotime($request->date_start));
        $endYear = date('Y', strtotime($request->date_end));
        
        // Assuming 'date' is the name of your column that contains the date values
        return $query->whereYear('date', '>=', $startYear)
                     ->whereYear('date', '<=', $endYear);
    })
    ->get();

return Inertia::render('Search/Search', ['images' => $images]);
}



//---------------------Search functionality-----------------------------//

}
