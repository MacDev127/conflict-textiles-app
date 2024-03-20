<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\App;
use App\Models\Event;
use App\Models\GalleryImage;

class HomeController extends Controller
{
    public function index()
    {
        $events = Event::all()->map(function ($event) {
            if ($event->image) {
            // Use Laravel's asset() helper to generate a full URL for the image.
            // The 'storage/' prefix is needed because the images are stored in the storage/app/public directory,
            // which is linked to the public/storage directory.
                $event->image = asset('storage/' . $event->image);
            }
            return $event;
        });
        // Retrieve all gallery images from the database (seems to be used elsewhere on the homepage)
        $images = GalleryImage::all();

        // Get the current language setting of the application
        $locale = App::getLocale();
         // Retrieve translation strings based on the current locale
        $translations = trans('messages');
    

    // Render the Home component with Inertia, passing the modified events, gallery images,
    // current locale, and translation strings as props

        return Inertia::render('Home/Home', [
            'events' => $events,
            'galleryImages' => $images,
            'locale' => $locale,
            'translations' => $translations,
        ]);
    }
    public function changeLanguage($langcode)
    {
        App::setLocale($langcode); // Set the application's locale to the given langcode
        session()->put('lang_code', $langcode); // Store the langcode in the session
        return redirect()->back(); // Redirect back to the previous page
    }
}
