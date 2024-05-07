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
        // Retrieve the ID of the currently authenticated user
        $userId = auth()->id();

        // Retrieve all bookmarks for the user, including associated gallery images
        $bookmarks = Bookmark::where('user_id', $userId)->with([
            'galleryImage' => function ($query) {

                // Select only necessary fields from the galleryImage to optimize the query
                $query->select(['id', 'image', 'title', 'description']);
            }
        ])->get()->map(function ($bookmark) {
            // Map through each bookmark to modify the image path using Laravel's asset helper
            if ($bookmark->galleryImage && $bookmark->galleryImage->image) {

                // Prepend the storage path to the image URL to make it accessible in the web browser
                $bookmark->galleryImage->image = asset('storage/' . $bookmark->galleryImage->image);
            }
            return $bookmark;  // Return the modified bookmark object
        });

        // Render the 'Bookmarks/Bookmarks' Inertia component, passing the modified bookmarks as a prop
        return Inertia::render('Bookmarks/Bookmarks', [
            'bookmarks' => $bookmarks
        ]);
    }


    public function toggleBookmark(Request $request, $galleryImageId)
    {
        // Retrieve the ID of the currently authenticated user
        $userId = auth()->user()->id;

        // Look for an existing bookmark that matches the current user and the specified gallery image
        $bookmark = Bookmark::where('user_id', $userId)
            ->where('gallery_image_id', $galleryImageId)
            ->first();

        // Check if the bookmark already exists
        if ($bookmark) {

            // If it exists, delete the bookmark (i.e., user is unbookmarking the image
            $bookmark->delete();
            $isBookmarked = false;
        } else {

            // If no bookmark exists, create a new one (i.e., user is bookmarking the image)
            Bookmark::create([
                'user_id' => $userId,
                'gallery_image_id' => $galleryImageId,
            ]);
            $isBookmarked = true; // Set flag to true (red) indicating the image is now bookmarked
        }


        // return Redirect::back();
        return Inertia::render('Bookmarks', ['isBookmarked' => $isBookmarked]);


    }


    public function getBookmarks()
    {
        // Retrieve all bookmarks for the currently authenticated user, including associated gallery images
        $bookmarks = auth()->user()->bookmarks()->with('galleryImage')->get();

        // Render the 'Bookmarks/Bookmarks' Inertia component, passing the retrieved bookmarks as a prop
        return Inertia::render('Bookmarks/Bookmarks', ['bookmarks' => $bookmarks]);
    }

    public function deleteBookmark($id)
    {
        // Attempt to retrieve a bookmark by its ID that also belongs to the currently authenticated user
        $bookmark = Bookmark::where('id', $id)->where('user_id', auth()->id())->first();

        if ($bookmark) {
            // If the bookmark exists, delete it from the database
            $bookmark->delete();

            // Redirect the user back to the previous page with a success message
            return redirect()->back()->with('success', 'Bookmark removed successfully.');
        }

        // If the bookmark could not be found or deleted, redirect back with an error message
        return redirect()->back()->with('error', 'Failed to delete the bookmark.');
    }

}
