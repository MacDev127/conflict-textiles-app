<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;
use App\Models\GalleryImage;
use App\Models\Bookmark; // Make sure to import your Bookmark model

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     * This method is called after all services have been registered, meaning you can access them here.
     * We are using this method to share data globally with all Inertia responses, ensuring that
     * it is available on the client side whenever an Inertia request is made.
     *
     * 'countries' shares a unique sorted list of 'country_of_origin' from the GalleryImage model,
     * which can be used to populate dropdowns or filters across the application.
     *
     * 'bookmarkedItems' shares a list of IDs for gallery images that the currently authenticated user
     * has bookmarked. This allows the client-side application to easily determine which items
     * should be marked as bookmarked, enhancing user experience by maintaining state across visits.
     */
    public function boot(): void
    {
        // Share countries with all Inertia responses
        Inertia::share('countries', function () {
            return GalleryImage::distinct()->pluck('country_of_origin')->sort()->values();
        });

        // Share bookmarked items with all Inertia responses
        Inertia::share('bookmarkedItems', function () {
            if (auth()->check()) { // Check if the user is authenticated
                // Fetching bookmarks only for the logged-in user
                return Bookmark::where('user_id', auth()->id())
                    ->get()
                    ->pluck('gallery_image_id'); // Collecting only the IDs for simplicity
            }
            return []; // Return an empty array if no user is authenticated
        });
    }
}
