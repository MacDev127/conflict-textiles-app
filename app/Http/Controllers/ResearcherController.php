<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Bookmark;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;


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

        return Inertia::render('Bookmarks/Bookmarks', [
            'bookmarks' => $bookmarks
        ]);
    }

    public function toggleBookmark(Request $request, $galleryImageId)
    {
        $userId = auth()->user()->id;
        $bookmark = Bookmark::where('user_id', $userId)
            ->where('gallery_image_id', $galleryImageId)
            ->first();

        if ($bookmark) {
            $bookmark->delete();
            $isBookmarked = false;
        } else {
            Bookmark::create([
                'user_id' => $userId,
                'gallery_image_id' => $galleryImageId,
            ]);
            $isBookmarked = true;
        }

        // Return the new bookmark status with Inertia
        // return Inertia::render('YourComponentHere', [
        //     'isBookmarked' => $isBookmarked
        // ]);
        return Redirect::back();

    }


    public function getBookmarks()
    {
        $bookmarks = auth()->user()->bookmarks()->with('galleryImage')->get();
        return Inertia::render('Bookmarks/Bookmarks', ['bookmarks' => $bookmarks]);
    }

    public function deleteBookmark($id)
    {
        $bookmark = Bookmark::where('id', $id)->where('user_id', auth()->id())->first();
        if ($bookmark) {
            $bookmark->delete();
            return redirect()->back()->with('success', 'Bookmark removed successfully.');
        }
        return redirect()->back()->with('error', 'Failed to delete the bookmark.');
    }
}
