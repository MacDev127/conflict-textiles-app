<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Inertia\Inertia;
use Illuminate\Http\Request;



class EventController extends Controller
{
    //
    // public function index()
    // {

    //     $events = Event::all(); // Retrieve all items from the database
    //     // dd($events);
    //     return Inertia::render('Home/Home', ['events' => $events->toArray()]);
    // }
    public function show($id)
    {
        $event = Event::findOrFail($id);
        return Inertia::render('EventDetails/EventDetails', ['event' => $event]);
    }
    
}

