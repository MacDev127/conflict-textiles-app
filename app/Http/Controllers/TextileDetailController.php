<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TextileDetail;
use Inertia\Inertia;


class TextileDetailController extends Controller
{
        // This method will fetch and return all textile details
    public function index()
{
    $textileDetails = TextileDetail::all();
    // dd($textileDetails);

    return Inertia::render('TextileDetails/TextileDetails', ['textileDetails' => $textileDetails]);
}
    // This method will fetch and return a specific textile detail by ID
    public function show($id)
{
    $textileDetail = TextileDetail::findOrFail($id);
    return Inertia::render('TextileDetails/TextileDetail', ['textileDetail' => $textileDetail]);
}
}

// Show method explanation
// $id is the parameter that will be passed from the route.
// TextileDetail::findOrFail($id) will try to find a TextileDetail by its ID and will throw a 404 exception if it's not found.
// Inertia::render('TextileDetails/TextileDetail', ['textileDetail' => $textileDetail]) will pass the found textileDetail to your React component, 
// which you should name accordingly (e.g., TextileDetail.js or TextileDetail.jsx in your resources/js/Pages/TextileDetails directory).