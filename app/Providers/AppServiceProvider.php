<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;
use App\Models\GalleryImage;

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
     */
    public function boot(): void
    {
          // Share countries with all Inertia responses. absolute lifesaver!!
          Inertia::share('countries', function () {
            return GalleryImage::distinct()->pluck('country_of_origin')->sort()->values();
        });
    }
}
