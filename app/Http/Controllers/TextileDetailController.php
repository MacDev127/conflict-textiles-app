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
    
    $textileDetail = TextileDetail::where('gallery_image_id', $id)->firstOrFail();
    return Inertia::render('TextileDetails/TextileDetail', ['textileDetail' => $textileDetail]);


}
public function create()
{
    // Render a form for creating a new textile
    return Inertia::render('Admin/Textiles/Create');
}

public function store(Request $request)
{
    // Handle the form submission to add a new textile
    // Validate and store the textile, then redirect or respond accordingly
}





    /*
    |--------------------------------------------------------------------------
    | index method: 
    |--------------------------------------------------------------------------
    |
    | -  index method: This method is used to fetch and return all records from the textile_details table in the database.
    | $textileDetails = TextileDetail::all(); is using Laravel's Eloquent ORM to retrieve all entries from the database table associated with the TextileDetail model.

    | -  return Inertia::render('TextileDetails/TextileDetails', ['textileDetails' => $textileDetails]); is then passing this data to an Inertia.js React component located at resources/js/Pages/TextileDetails/TextileDetails.
     The data is sent as props to the component, allowing the frontend to access and display all textile details.

    */
    /*
    |--------------------------------------------------------------------------
    | show method: 
    |--------------------------------------------------------------------------
    |
    |  - show method: This method is responsible for fetching and returning a specific textile detail by its unique ID.

    |  - $textileDetail = TextileDetail::findOrFail($id); attempts to find a single TextileDetail record by the provided ID. 
    If no record is found, Laravel automatically throws a 404 error, indicating that the resource doesn't exist.

    | -  return Inertia::render('TextileDetails/TextileDetail', ['textileDetail' => $textileDetail]); passes the found textile detail to the Inertia.js React component located at resources/js/Pages/TextileDetails/TextileDetail. 
    This is then used to display the specific details of the selected textile on the frontend.
    */
}