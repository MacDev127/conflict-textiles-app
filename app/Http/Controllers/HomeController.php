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
        $images = GalleryImage::all();
        // dd($images);

        //translations
        $locale = App::getLocale(); // Get the current locale (language setting) of the app
        $translations = trans('messages'); // Retrieve translation strings based on the current locale

        return Inertia::render('Home/Home', [
            'events' => $events,
            'galleryImages' => $images,

            //translations
            'locale' => $locale, // Pass the current locale to the component
            'translations' => trans('messages'), // Retrieve translation strings based on the current locale

        ]);
    }
    public function changeLanguage($langcode)
    {
        App::setLocale($langcode); // Set the application's locale to the given langcode
        session()->put('lang_code', $langcode); // Store the langcode in the session
        return redirect()->back(); // Redirect back to the previous page
    }
}
