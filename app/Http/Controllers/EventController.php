<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Inertia\Inertia;
use Illuminate\Http\Request;



class EventController extends Controller
{
    
    //get event data from the database and pass to the home page
  public function home()
{
    $events = Event::all();
    return Inertia::render('Home/Home', ['events' => $events->toArray()]);
}

    //get event data from the database and pass to the events page
public function events()
{
    $events = Event::all();
    return Inertia::render('Events/Events', ['events' => $events->toArray()]);
}
public function show($id)
{
    $event = Event::findOrFail($id); // Retrieve the event by its ID or throw an exception if not found.
    return Inertia::render('EventDetails/EventDetails', ['event' => $event]); // Pass the event data to the React component.
}
    
}

