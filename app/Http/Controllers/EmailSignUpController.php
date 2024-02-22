<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Subscriber;
use Inertia\Inertia;

class EmailSignUpController extends Controller
{
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:subscribers,email',
        ]);
    
        Subscriber::create($validatedData);
    
        // Flash a success message to the session
        $request->session()->flash('success', 'Subscription successful! Thanks for signing up.');
    
        return redirect()->back(303);
    }
    
    

}
