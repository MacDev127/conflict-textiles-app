<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Validator;


use Illuminate\Http\Request;
use App\Models\EventRegister;
use App\Models\Event;
use Inertia\Inertia;



class EventRegisterController extends Controller
{
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:events_register,email',
            'number' => 'required|string|unique:events_register,number',
            'gender' => 'string',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }



        EventRegister::create($validator->validated());

        // Redirect back with success message
        return back()->with('status', 'Registration successful!');
    }

    public function showRegistrationForm($eventId)
    {
        $event = Event::find($eventId);
        $type = $event ? $event->type : 'Event';  // Default to 'Event' if not found

        return Inertia::render('EventRegister/EventRegister', [
            'eventId' => $eventId,
        ]);
    }

}
