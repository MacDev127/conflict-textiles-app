<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\About;
use App\Models\TextileDetail;
use Inertia\Inertia;



class AboutController extends Controller
{
    public function index()
    {
        $textileDetails = TextileDetail::all()->map(function ($textileDetail) {
            if ($textileDetail->image) {
                // Ensure that the asset helper generates a URL for the image.
                $textileDetail->image = asset('storage/' . $textileDetail->image);
            }
            return $textileDetail;
        });
        return Inertia::render('About/About', ['textileDetails' => $textileDetails]);
    }
    


}
