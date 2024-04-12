<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\EventRegister;
// use App\Models\Event;
use Inertia\Inertia;



class EventRegisterController extends Controller
{
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:events_register,email',
            'number' => 'required|string',
            'gender' => 'string',
            // 'birthDate' => 'string',

        ]);

        EventRegister::create($validatedData);

        // Redirect back with success message
        return back()->with('status', 'Registration successful!');
    }

    public function showRegistrationForm($eventId)
    {
        // Optionally, retrieve the event details to pass to the view
        // $event = Event::findOrFail($eventId);

        return Inertia::render('EventRegister/EventRegister', [
            'eventId' => $eventId, // Pass additional props as needed
            // 'event' => $event, // If you need to pass the event data
        ]);

    }
}
