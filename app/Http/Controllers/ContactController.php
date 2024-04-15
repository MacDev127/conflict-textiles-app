<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;
use Inertia\Inertia;
use Illuminate\Support\Facades\Mail;
use App\Mail\AdminNotification;
use App\Mail\UserConfirmation;


class ContactController extends Controller
{
    public function index()
    {
        return Inertia::render('Contact/Contact');
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'subject' => 'required|string|max:255',
            'message' => 'required|string'
        ]);

        // Send email to the admin
        Mail::to('ap1900@hotmail.co.uk')->send(new AdminNotification($validatedData));

        // Send confirmation email to the user
        Mail::to($validatedData['email'])->send(new UserConfirmation($validatedData));

        return Inertia::render('Contact/Contact');
    }

}
