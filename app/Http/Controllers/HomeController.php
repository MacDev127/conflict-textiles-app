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
        $locale = App::getLocale();
        $translations = trans('messages');

        return Inertia::render('Home/Home', [
            'events' => $events,
            'galleryImages' => $images,
            //translations

            'locale' => $locale,
            // 'messages' => $translations,
            // 'translations' => $translations,
            'translations' => trans('messages'),

        ]);
    }
    public function changeLanguage($langcode)
    {
        App::setLocale($langcode);
        session()->put('lang_code', $langcode);
        return redirect()->back();
    }
}
