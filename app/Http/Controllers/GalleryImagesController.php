<?php

namespace App\Http\Controllers;

use App\Models\GalleryImage;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

use Illuminate\Support\Facades\Storage;



class GalleryImagesController extends Controller
{

    public function index()
    {

        $galleryImages = GalleryImage::all();
        return Inertia::render('Home/Home', ['galleryImages' => $galleryImages]);


    }

    public function arpillera()
    {
        // Fetch specific images for the Arpillera collection
        $arpilleraImages = GalleryImage::where('type', 'arpillera')->paginate(10)->through(function ($image) {
            $image->img = asset('storage/' . $image->image);
            return $image;
        });
        return Inertia::render('Arpillera/Arpillera', ['galleryImages' => $arpilleraImages]);
    }
    public function banner()
    {
        // Fetch specific images for the banner collection with pagination
        $bannerImages = GalleryImage::where('type', 'banner')->paginate(10)->through(function ($image) {
            $image->img = asset('storage/' . $image->image);
            return $image;
        });


        return Inertia::render('Banner/Banner', ['galleryImages' => $bannerImages]);
    }

    public function quilt()
    {
        // Fetch specific images for the quilt collection
        $quiltImages = GalleryImage::where('type', 'quilt')->paginate(10)->through(function ($image) {
            $image->img = asset('storage/' . $image->image);
            return $image;
        });
        return Inertia::render('Quilt/Quilt', ['galleryImages' => $quiltImages]);
    }

    // Fetch specific images for the quilt collection
    public function embroideredCloth()
    {
        $embroideredClothImages = GalleryImage::where('type', 'embroidered-cloth')->paginate(10)->through(function ($image) {

        });
        return Inertia::render('EmbroideredCloth/EmbroideredCloth', ['galleryImages' => $embroideredClothImages]);
    }
    public function wallHanging()
    {
        $wallHangingImages = GalleryImage::where('type', 'wall-hanging')->paginate(10)->through(function ($image) {
            $image->img = asset('storage/' . $image->image);
            return $image;
        });
        return Inertia::render('WallHanging/WallHanging', ['galleryImages' => $wallHangingImages]);
    }
    public function installation()
    {
        $installationImages = GalleryImage::where('type', 'installation')->paginate(10)->through(function ($image) {
            $image->img = asset('storage/' . $image->image);
            return $image;
        });
        return Inertia::render('Installation/Installation', ['galleryImages' => $installationImages]);
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
            'image' => 'required|image|max:1024|unique:gallery_images,image',
            'type' => 'nullable|string',
            'title' => 'nullable|string',
            'maker' => 'nullable|string',
            'country_of_origin' => 'nullable|string',
            'year_produced' => 'nullable|string',
            'size' => 'nullable|string',
            'materials' => 'nullable|string',
            'provenance' => 'nullable|string',
            'owner' => 'nullable|string',
            'photographer' => 'nullable|string',
            'authenticity' => 'nullable|string',
            'description' => 'nullable|string',
            'location' => 'nullable|string',

        ]);


        //create the GalleryImage
        $galleryImage = new GalleryImage($validatedData);

        // Handle the file upload
        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('gallery_images', 'public'); // Store in the "public" disk
            $galleryImage->image = $path;
            $galleryImage->save();



            return redirect()->back()->with('success', 'Image uploaded successfully.');
        }

        return redirect()->back()->with('error', 'There was a problem uploading the image.');
    }

    public function update(Request $request, $id)
    {

        // Retrieve the existing gallery image.
        $galleryImage = GalleryImage::findOrFail($id);

        $validatedData = $request->validate([
            'image' => 'file|mimes:jpg,jpeg,png,gif|max:1024',
            'location' => 'nullable|string',
            'title' => 'nullable|string|max:255',
            'type' => 'nullable|string',
            'year_produced' => 'nullable|string',
            'size' => 'nullable|string',
            'materials' => 'nullable|string',
            'provenance' => 'nullable|string',
            'country_of_origin' => 'nullable|string',
            'authenticity' => 'nullable|string',
            'maker' => 'nullable|string',
            'owner' => 'nullable|string',
            'photographer' => 'nullable|string',
            'description' => 'nullable|string',
        ]);

        // Check if a new image file is uploaded.
        if ($request->hasFile('image')) {
            $request->validate([
                'image' => 'file|mimes:jpg,jpeg,png,gif|max:1024',
            ]);
            $path = $request->file('image')->store('gallery_images', 'public');
            $galleryImage->image = $path;
        }

        // Update the gallery image with validated data.
        $galleryImage->update($validatedData);

        // If there was a new image, save the updated gallery image.
        if ($request->hasFile('image')) {
            $galleryImage->save();
        }

        return redirect()->route('admin.textiles-dashboard')->with('message', 'Textile updated successfully.');

    }

    // Deletes a specific gallery image record based on the provided ID, then redirects to the textiles dashboard with a success message.
    public function destroy($id)
    {
        $galleryImage = GalleryImage::findOrFail($id);
        $galleryImage->delete();

        return redirect()->route('admin.textiles-dashboard')->with('message', 'Textile deleted successfully.');
    }

    // Fetches a specific gallery image by its ID and renders the edit textile view in the admin dashboard with this image data.
    public function edit($id)
    {
        $galleryImage = GalleryImage::findOrFail($id);

        return Inertia::render('Admin/DashboardComponents/EditTextile/EditTextile', compact('galleryImage'));
    }

    // Retrieves detailed information for a specific textile by its ID, ensures the image URL is correctly formatted, and returns this data to the textile details view.
    public function showTextileDetail($id)
    {
        $galleryImage = GalleryImage::findOrFail($id);

        if (!empty($galleryImage->image)) {
            $galleryImage->image = asset('storage/' . $galleryImage->image);
        }

        return Inertia::render('TextileDetails/TextileDetail', ['textileDetail' => $galleryImage]);
    }

    // Fetches a specific textile by its ID for administrative viewing, formats the image URL, and returns this data to the admin show textile view.
    public function showAdminTextile($id)
    {
        $textile = GalleryImage::findOrFail($id);
        if ($textile->image) {
            $textile->image = asset('storage/' . $textile->image);
        }

        return Inertia::render('Admin/ShowTextile/ShowTextile', [
            'textile' => $textile,
        ]);
    }



}
