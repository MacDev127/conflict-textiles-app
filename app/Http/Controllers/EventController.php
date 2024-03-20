<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;



class EventController extends Controller
{
    
    //get event data from the database and pass to the home page
  public function home()
  {
    $events = Event::all()->map(function ($event) {
        if ($event->image) {
            $event->image = asset('storage/' . $event->image);
        }
        return $event;
    });
    return Inertia::render('Home/Home', ['events' => $events]);
}


    //get event data from the database and pass to the events page
public function events()
{
    $events = Event::all()->map(function ($event) {
        if ($event->image) {
            $event->image = asset('storage/' . $event->image);
        }
        return $event;
    });
    return Inertia::render('Events/Events', ['events' => $events]);
}
public function show($id)
{
    $event = Event::findOrFail($id); // Retrieve the event by its ID or throw an exception if not found.

     // Check if the image path exists and prepend the storage URL
     if ($event->image) {
        $event->image = asset('storage/' . $event->image);
    }

    return Inertia::render('EventDetails/EventDetails', ['event' => $event]); // Pass the event data to the React component.
}


//admin functionality

public function create()
{
    // Render a form for creating a new textile
    return Inertia::render('Admin/Events/CreateEvent');
}

public function store(Request $request)
{
    // Log::info($request->all());

    $validatedData = $request->validate([
        'title' => 'required|string|max:255',
        'event_time' => 'nullable|regex:/^\d{2}:\d{2}(:\d{2})?$/', // Allowing nullable and validating format HH:MM or HH:MM:SS
        'location' => 'nullable|string',
        'type' => 'nullable|string',
        'event_date' => 'nullable|date', // Allowing nullable
        'commissioned_by' => 'nullable|string',
        'venue' => 'nullable|string',
        'curator' => 'nullable|string',
        'facilitator' => 'nullable|string',
        'description' => 'nullable|string',
        'outcome' => 'nullable|string',
        'document_url' => 'nullable|string', // Allowing nullable, consider using 'nullable|url' if you expect a URL format
        'textile_url' => 'nullable|string',
        'image' => 'nullable|image|max:1024', // Image field is optional; validate if present
    ]);

    $event = new Event($validatedData);
    if ($request->hasFile('image')) {
        $path = $request->file('image')->store('events', 'public');
        $event->image = $path; // Assign the path to the event's image attribute
        
    }

    $event->save();

    return redirect()->route('dashboard');
}
    
}




