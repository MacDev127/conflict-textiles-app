<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Event;
use App\Models\TextileDetail;

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
      
        $textileDetail = TextileDetail::all();

        return Inertia::render('Admin/Dashboards/TextileDashboard/TextileDashboard', ['textileDetail' => $textileDetail]);
    }
}
