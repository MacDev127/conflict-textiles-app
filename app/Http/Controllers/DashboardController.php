<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Event;
use Illuminate\Support\Facades\Log;

use App\Models\GalleryImage;

use Inertia\Inertia;

class DashboardController extends Controller
{

    public function eventsDashboard()
    {

        $events = Event::all();

        return Inertia::render('Admin/Dashboards/EventsDashboard/EventsDashboard', ['events' => $events]);
    }
    public function textilesDashboard()
    {

        $galleryImages = GalleryImage::all()->map(function ($image) {
            if ($image->image) {
                $image->image = asset('storage/gallery_images/' . $image->image);
            }
            return $image;
        });

        return Inertia::render('Admin/Dashboards/TextileDashboard/TextileDashboard', ['galleryImages' => $galleryImages]);
    }

}

/*
|--------------------------------------------------------------------------
| DashBoard controller
|--------------------------------------------------------------------------
|DashboardController manages data presentation in dashboards, with tests focusing on:
|Events Dashboard Test: Ensures accurate retrieval and display of all events.
|Textiles Dashboard Test: Validates retrieval and display of textiles or gallery images, similar to the events dashboard.

|
*/