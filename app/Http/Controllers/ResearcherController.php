<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Bookmark;
use Inertia\Inertia;



class ResearcherController extends Controller
{

    public function index()
    {
        $userId = auth()->id(); // Ensure you're using the authenticated user's ID

        $bookmarks = Bookmark::where('user_id', $userId)->with([
            'galleryImage' => function ($query) {
                $query->select(['id', 'image', 'title', 'description']);
            }

        ])->get()->map(function ($bookmark) {
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
        $exists = Bookmark::where('user_id', $userId)
            ->where('gallery_image_id', $galleryImageId)
            ->exists();

        if (!$exists) {
            Bookmark::create([
                'user_id' => $userId,
                'gallery_image_id' => $galleryImageId,
            ]);


            return back()->with('success', 'Bookmark added successfully!');

        }
        return back()->with('error', 'Bookmark already exists!');
    }

    public function getBookmarks()
    {
        // This retrieves only the bookmarks associated with the authenticated user.

        $bookmarks = auth()->user()->bookmarks()->with('galleryImage')->get();

        return Inertia::render('Researcher/Bookmarks', ['bookmarks' => $bookmarks]);
    }


    public function deleteBookmark($id)
    {
        $bookmark = Bookmark::where('id', $id)->where('user_id', auth()->id())->first();

        // Check if the bookmark exists.
        if ($bookmark) {
            $bookmark->delete();
            return response()->json(['success' => 'Bookmark removed successfully.']);
        }

        // Delete the bookmark directly without checking if the current user owns it.
        $bookmark->delete();
    }
}



