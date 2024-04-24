<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Search;
use Inertia\Inertia;
use App\Models\GalleryImage;



class SearchController extends Controller
{

    //-------------------Search functionality----------------///

    public function search(Request $request)
    {
        $images = GalleryImage::query()
            ->when($request->filled('type'), function ($query) use ($request) {
                return $query->where('type', $request->type);
            })
            ->when($request->filled('maker'), function ($query) use ($request) {
                return $query->where('maker', $request->maker);
            })
            ->when($request->filled('country_of_origin'), function ($query) use ($request) {
                return $query->where('country_of_origin', $request->country_of_origin);
            })
            ->when($request->filled('keyword'), function ($query) use ($request) {
                return $query->where('title', 'LIKE', '%' . $request->keyword . '%');
            })
            ->when($request->filled('date_start') && $request->filled('date_end'), function ($query) use ($request) {
                $startYear = $request->date_start;
                $endYear = $request->date_end;

                return $query->where('year_produced', '>=', $startYear)
                    ->where('year_produced', '<=', $endYear);
            })
            ->get()
            ->map(function ($image) {
                $image->img = asset('storage/' . $image->image);
                return $image;
            });


        return Inertia::render('Search/Search', [
            'galleryImages' => $images,
        ]);
    }

}
