<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Event;
use App\Models\GalleryImage;

use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $events = Event::all()->map(function ($event) {
            if ($event->image) {
                $event->image = asset('storage/' . $event->image);
            }
            return $event;
        });

        return Inertia::render('Admin/Dashboards/Dashboard/Dashboard', ['events' => $events]);
    }
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
