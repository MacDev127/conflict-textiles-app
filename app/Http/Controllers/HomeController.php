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
        $events = Event::all();
        $images = GalleryImage::all(); // This seems to be extra data not present in the route closure
    
        $locale = App::getLocale(); // Get the current locale (language setting) of the app
        $translations = trans('messages'); // Retrieve translation strings based on the current locale
    
        return Inertia::render('Home/Home', [
            'events' => $events,
            'galleryImages' => $images, // Make sure you need this data in the frontend.
    
            //translations
            'locale' => $locale, // Pass the current locale to the component
            'translations' => $translations, // Pass the translation strings to the component
        ]);
    
    }
    public function changeLanguage($langcode)
    {
        App::setLocale($langcode); // Set the application's locale to the given langcode
        session()->put('lang_code', $langcode); // Store the langcode in the session
        return redirect()->back(); // Redirect back to the previous page
    }
}
