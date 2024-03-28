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

//test

public function about(){
    $textileDetail = TextileDetail::all()->map(function ($textileDetail) {
        if ($textileDetail->image) {
            $textileDetail->image = asset('storage/' . $textileDetail->image);
        }
        return $textileDetail;
    });
    return Inertia::render('About/About', ['textileDetail' => $textileDetail]);
}

//test
public function create()
{
    // Render a form for creating a new textile
    return Inertia::render('Admin/Textiles/Create');
}

public function store(Request $request)
{
        // Validate the request
        $validatedData = $request->validate([
        'image' => 'nullable|image|max:1024',
        'location' => 'nullable|string',
        'title' => 'required|string|max:255',
        'type' => 'nullable|string',
        'description' => 'nullable|string',
        'year_produced' => 'nullable|string',
        'size' => 'nullable|string',
        'materials' => 'nullable|string',
        'provenance' => 'nullable|string',
        'country_of_origin' => 'nullable|string',
        'authenticity' => 'nullable|string',
        'maker' => 'nullable|string',
        'owner' => 'nullable|string',
        'photographer' => 'nullable|string',
    ]);

    $textileDetail= new TextileDetail($validatedData);

    // Handle file upload for the image (if applicable)
    if ($request->hasFile('image')) {
        $path = $request->file('image')->store('textiles', 'public');
        $textileDetail->image = $path;
        // $validatedData['image'] = $path;
    }
    $textileDetail->save();

    // Create a new textile detail record
    // $textileDetail = TextileDetail::create($validatedData);

    // Redirect to a given route or return a success response
    return redirect()->route('admin.textiles-dashboard')->with('message', 'Textile created successfully.');
}




public function update(Request $request, $id)
{
    $textileDetail = TextileDetail::findOrFail($id);

    $validatedData = $request->validate([
        'image' => 'nullable|image|max:1024',
        'location' => 'nullable|string',
        'title' => 'required|string|max:255',
        'type' => 'nullable|string',

        'year_produced' => 'nullable|string',
        'size' => 'nullable|string',
        'materials' => 'nullable|string',
        'provenance' => 'nullable|string',
        'country_of_origin' => 'nullable|string',
        'authenticity' => 'nullable|string',
        'maker' => 'nullable|string',
        'owner' => 'nullable|string',
        'photographer' => 'nullable|string',
        'description' => 'nullable|string',

       


      
    ]);

    // if ($request->hasFile('image')) {
    //     $path = $request->file('image')->store('textiles', 'public');
    //     $validatedData['image'] = $path;
    // }

    $textileDetail = TextileDetail::findOrFail($id);
    $textileDetail->update($validatedData);

    return redirect()->route('admin.textiles.index')->with('message', 'Textile updated successfully.');

}


public function destroy($id)
{
    $textileDetail = TextileDetail::findOrFail($id);
    $textileDetail->delete();

    // Optional: Delete associated files from storage

    return redirect()->route('admin.textiles.index')->with('message', 'Textile deleted successfully.');
}

public function edit($id)
{
    $event = TextileDetail::findOrFail($id);

    // Optionally, you can add code here to handle if the event has images or other related data

    return Inertia::render('Admin/DashboardComponents/EditEvent/EditEvent', compact('event'));
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