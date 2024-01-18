<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Event;
use App\Models\GalleryImage;


class HomeController extends Controller
{
    public function index()
    {
        $events = Event::all();
        $images = GalleryImage::all(); 
        // dd($images); 

        return Inertia::render('Home/Home', [
            'events' => $events,
            'galleryImages' => $images,
        ]);
    }
}
