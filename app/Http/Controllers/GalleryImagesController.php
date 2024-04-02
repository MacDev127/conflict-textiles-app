<?php

namespace App\Http\Controllers;

use App\Models\GalleryImage;
use App\Models\TextileDetail;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;



class GalleryImagesController extends Controller
{

    public function index()
    {
        // dd($images);
        // Retrieve all GalleryImage records and associated textileDetail relationship from the database in one query.
        $images = GalleryImage::with('textileDetail')->get(); // This will eager load the related textile details

        return Inertia::render('Home/Home', ['galleryImages' => $images->toArray()]);

    }

    public function arpillera()
    {
        // Fetch specific images for the Arpillera collection
        $arpilleraImages = GalleryImage::where('type', 'arpillera')->get()->map(function ($image) {
            $image->img = asset('storage/' . $image->image);
            return $image;
        });
        return Inertia::render('Arpillera/Arpillera', ['galleryImages' => $arpilleraImages]);
    }
    public function banner()
    {
        // Fetch specific images for the banner collection
        $bannerImages = GalleryImage::where('type', 'banner')->get()->map(function ($image) {
            $image->img = asset('storage/' . $image->image);
            return $image;
        });


        return Inertia::render('Banner/Banner', ['galleryImages' => $bannerImages]);
    }

    public function quilt()
    {
        // Fetch specific images for the quilt collection
        $quiltImages = GalleryImage::where('type', 'quilt')->get()->map(function ($image) {
            $image->img = asset('storage/' . $image->image);
            return $image;
        });
        return Inertia::render('Quilt/Quilt', ['galleryImages' => $quiltImages]);
    }

    // Fetch specific images for the quilt collection
    public function embroideredCloth()
    {
        $embroideredClothImages = GalleryImage::where('type', 'embroidered-cloth')->get()->map(function ($image) {

        });
        return Inertia::render('EmbroideredCloth/EmbroideredCloth', ['galleryImages' => $embroideredClothImages]);
    }
    public function wallHanging()
    {
        $wallHangingImages = GalleryImage::where('type', 'wall-hanging')->get()->map(function ($image) {
            $image->img = asset('storage/' . $image->image);
            return $image;
        });
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
                $startYear = $request->date_start;
                $endYear = $request->date_end;

                return $query->where('year_produced', '>=', $startYear)
                    ->where('year_produced', '<=', $endYear);
            })
            ->get();


        return Inertia::render('Search/Search', [
            'galleryImages' => $images,
        ]);
    }

    public function showCollection()
    {

        // Retrieve a unique list of countries from the 'country_of_origin' field
        $countries = GalleryImage::distinct()->pluck('country_of_origin')->sort()->values();
        // dd($countries);

        //render the countries via the dropdown (advanced search) on the collection page
        return Inertia::render('Collection/Collection', [
            'countries' => $countries

        ]);
    }



    public function store(Request $request)
    {
        //  validate the image data
        $validatedData = $request->validate([
            'image' => 'required|image|max:1024',
            'type' => 'nullable|string',
            'title' => 'nullable|string',
            'maker' => 'nullable|string',
            'country_of_origin' => 'nullable|string',
            'year_produced' => 'nullable|string',

        ]);

        //create the GalleryImage
        $galleryImage = new GalleryImage($validatedData);

        // Handle the file upload
        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('gallery_images', 'public'); // Store in the "public" disk
            $galleryImage->image = $path;
            $galleryImage->save();

            // Create a new TextileDetail associated with the uploaded GalleryImage
            $textileDetail = new TextileDetail(['gallery_image_id' => $galleryImage->id,]);

            $textileDetail->save();


            return redirect()->back()->with('success', 'Image uploaded successfully.');
        }

        return redirect()->back()->with('error', 'There was a problem uploading the image.');
    }





    //---------------------Search functionality-----------------------------//

}
