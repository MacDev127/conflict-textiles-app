<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;
use App\Models\Event;
use App\Models\GalleryImage;
use App\Models\User;


class HomeController extends Controller
{
    public function index()
    {
        \Log::info('Current User:', ['user' => Auth::user()]);

        // Fetch only upcoming events, i.e., events whose date is today or in the future.
        $events = Event::where('event_date', '>=', now())
            ->orderBy('event_date', 'asc')
            ->get()
            ->take(6)
            ->map(function ($event) {
                if ($event->image) {

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

        $authUser = Auth::user(); // Get the currently authenticated user

        // Render the Home component with Inertia, passing the modified events, gallery images,
        // current locale, and translation strings as props
        return Inertia::render('Home/Home', [
            'authUser' => Auth::user(),
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


