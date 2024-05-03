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
        // Fetch only upcoming events, i.e., events whose date is today or in the future.
        $events = Event::where('event_date', '>=', now())
            ->orderBy('event_date', 'asc') // Optional: Order by event date ascending
            ->get()
            ->map(function ($event) {
                if ($event->image) {
                    $event->image = asset('storage/' . $event->image); // Ensuring the image URL is correctly formed
                }
                return $event;
            });
        return Inertia::render('Home/Home', ['events' => $events]); // Changed 'events' to 'upcomingEvents' if needed in React component
    }


    //get event data from the database and pass to the events page
    public function events()
    {
        // Fetch only upcoming events, paginate them, and use a map to modify the image path.
        $upcomingEvents = Event::where('event_date', '>=', now())
            ->orderBy('event_date', 'asc')
            ->paginate(6)
            ->through(function ($event) {
                if ($event->image) {
                    $event->image = asset('storage/' . $event->image);  // Modify image URL
                }
                return $event;
            });


        return Inertia::render('Events/Events', [
            'type' => 'events',
            'upcomingEvents' => $upcomingEvents,
        ]);
    }

    public function previousEvents()
    {
        $previousEvents = Event::where('event_date', '<', now())
            ->orderBy('event_date', 'desc')
            ->paginate(6)

            ->map(function ($event) {
                if ($event->image) {
                    $event->image = asset('storage/' . $event->image);
                }
                return $event;
            });

        return Inertia::render('Events/PreviousEvents', [
            'previousEvents' => $previousEvents,
        ]);
    }


    public function show($id)
    {
        $event = Event::findOrFail($id); // Retrieve the event by its ID or throw an exception if not found.

        // Check if the image path exists and prepend the storage URL
        if ($event->image) {
            $event->image = asset('storage/' . $event->image);
        }

        return Inertia::render('EventDetails/EventDetails', [
            'event' => $event,
        ]); // Pass the event data to the React component.
    }


    //-------------------admin functionality------------------

    public function create()
    {
        // Render a form in the admin databse for creating a new event
        return Inertia::render('Admin/Dashboard/Component/CreateEvent/CreateEvent');
    }

    public function store(Request $request)
    {

        // Validate the request

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

        // Redirect or return response
        return redirect()->route('admin.events-dashboard');
    }

    // Delete event from admin dashboard
    public function destroy($id)
    {
        $event = Event::findOrFail($id);
        $event->delete();

        // You can add additional logic here if you need to do more when an event is deleted,
        // such as clearing caches, updating related models, etc.

        return redirect()->route('admin.events-dashboard')->with('message', 'Event deleted successfully.');
    }

    // update event from admin dashboard

    public function update(Request $request, $id)
    {
        // Log::info($request->all());

        // Retrieve the existing event
        $event = Event::findOrFail($id);

        $validatedData = $request->validate([
            'title' => 'nullable|string|max:255',
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
            'image' => 'nullable|image|max:1024',
        ]);

        // Check if a new image file is uploaded.
        if ($request->hasFile('image')) {
            $request->validate([
                'image' => 'file|mimes:jpg,jpeg,png,gif|max:1024',
            ]);
            $path = $request->file('image')->store('gallery_images', 'public');
            $event->image = $path;
        }

        // If there was a new image, save the updated gallery image.
        if ($request->hasFile('image')) {
            $event->save();
        }

        // Update the event with validated data.
        $event->update($validatedData);



        return redirect()->route('admin.events-dashboard')->with('message', 'Event updated successfully.');
    }

    public function edit($id)
    {
        $event = Event::findOrFail($id);

        // Optionally, you can add code here to handle if the event has images or other related data

        return Inertia::render('Admin/DashboardComponents/EditEvent/EditEvent', compact('event'));
    }

    public function showAdmin($id)
    {
        $event = Event::findOrFail($id);
        if ($event->image) {
            $event->image = asset('storage/' . $event->image);
        }

        return Inertia::render('Admin/ShowEvents/ShowEvents', [
            'event' => $event,
        ]);
    }


}




