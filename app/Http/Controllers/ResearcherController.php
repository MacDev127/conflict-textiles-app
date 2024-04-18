<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Bookmark;
use Inertia\Inertia;



class ResearcherController extends Controller
{

    public function index()
    {
        $bookmarks = Bookmark::with([
            'galleryImage' => function ($query) {
                // Make sure to include the 'id' field as it's needed for the relationship
                $query->select(['id', 'image', 'title', 'description']);
            }
        ])->get()->map(function ($bookmark) {
            // Add the full URL to the image, if it exists
            if ($bookmark->galleryImage && $bookmark->galleryImage->image) {
                $bookmark->galleryImage->image = asset('storage/' . $bookmark->galleryImage->image);
            }
            return $bookmark;
        });

        return Inertia::render('Admin/Dashboards/ResearchDashboard/ResearchDashboard', [
            'bookmarks' => $bookmarks
        ]);
    }


    public function bookmark(Request $request, $galleryImageId)
    {
        $userId = auth()->user()->id;

        // Check if the bookmark already exists
        $exists = Bookmark::where('user_id', $userId)
            ->where('gallery_image_id', $galleryImageId)
            ->exists();

        if (!$exists) {
            // Create a new bookmark
            Bookmark::create([
                'user_id' => $userId,
                'gallery_image_id' => $galleryImageId,
            ]);

            // return response()->json(['message' => 'Textile bookmarked successfully.']);
        }

        // return response()->json(['message' => 'Textile already bookmarked.']);
    }

    public function getBookmarks()
    {
        $bookmarks = auth()->user()->bookmarks()->with('galleryImage')->get();

        // Transform bookmarks as needed for the front-end
        // ...

        return Inertia::render('Researcher/Bookmarks', ['bookmarks' => $bookmarks]);
    }


    public function deleteBookmark($id)
    {
        $bookmark = Bookmark::find($id);

        // Check if the bookmark exists.
        if (!$bookmark) {
            return response()->json(['message' => 'Bookmark not found.'], 404);
        }

        // Delete the bookmark directly without checking if the current user owns it.
        $bookmark->delete();
    }
}



