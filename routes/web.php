<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


//Controllers
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TextileDetailController;
use App\Http\Controllers\GalleryImagesController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\CollectionPageImageController;

//Models
use App\Models\Event;
use App\Models\GalleryImage;
use App\Models\TextileDetail;
use App\Models\Arpillera;
use App\Models\CollectionPageImage;;







// ----------------Controller Routes------------//

// Event Controller
Route::get('/events', [EventController::class, 'index']);

// Textile Details Controller
Route::get('/textile-details/{id}', [TextileDetailController::class, 'show'])->name('textile-details.show');

//Gallery images Controller
Route::get('/galleryImages', [GalleryImagesController::class, 'index'])->name('galleryImages');

//Home Controller
Route::get('/home', [HomeController::class, 'index'])->name('home');

// Collection page Controller
Route::get('/collectionPageImages', [HomeController::class, 'index'])->name('collectionPageImages');



// -----------------------------Page Routes-----------------------------------//

//---------------------------------Home page--------------------------------------------\\

Route::get('/', function () {
    $events = Event::all(); // Fetch all events from the database table
    $galleryImages = GalleryImage::all(); // Fetch all gallery images from the database
    $locale = App::getLocale(); // Get the current locale
    $translations = trans('messages'); // Get the translation strings

    return Inertia::render('Home/Home', [
        'events' => $events,
        'galleryImages' => $galleryImages, // Pass the galleryImages to the component
        'translations' => $translations, // Pass the translations to the component

    ]);
})->name('home');
//---------------------------------Home page--------------------------------------------\\


// Event Details page
Route::get('/details', function (){ 
    return Inertia::render('Details/EventDetails');
    })->name('details');

// Textile Details Page
Route::get('/textiledetails', function () {
    $textileDetails = TextileDetail::all(); // Fetch all records from the database table.
    return Inertia::render('TextileDetails/TextileDetail', ['textileDetails' => $textileDetails]); // Render the TextileDetail component with the fetched data.
})->name('textiledetails'); 

// Collection Page
Route::get('/collection', function (){ 
    $collectionPageImages = CollectionPageImage::all(); 
    return Inertia::render('Collection/Collection', ['collectionPageImages' => $collectionPageImages]);
    })->name('collection');


// Arpillera Items page
Route::get('/arpillera', function () { 
    $galleryImages = GalleryImage::all(); 
    return Inertia::render('Arpillera/Arpillera', ['galleryImages' => $galleryImages]);
})->name('arpillera');

// Banner Items page
Route::get('/banner', function (){ 
    return Inertia::render('Banner/Banner');
    })->name('banner');

// Quilt Items page
Route::get('/quilt', function (){ 
    return Inertia::render('Quilt/Quilt');
    })->name('quilt');

// Wall Hanging Items page
Route::get('/wall-hanging', function (){ 
    return Inertia::render('Wall Hanging/WallHanging');
    })->name('wall-hanging');

// -------------------Page Routes----------------//




    // --------Change language Route-----/
    Route::get('/change-language/{lang}', "App\Http\Controllers\HomeController@changeLanguage");
    // -----Change language Route----/



// Bolier plate laravel Routes
Route::get('/welcome', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});




Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
