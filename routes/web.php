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
use App\Http\Controllers\EmailSignUpController;


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

//Email Sign up
Route::post('/email-signup', [EmailSignUpController::class, 'store']);





// --------------------------------------Page Routes Start-----------------------------------------------------------------//

//Home page
Route::get('/', function () {
    $events = Event::all(); // Fetch all events from the database table
    $locale = App::getLocale(); // Get the current locale
    $translations = trans('messages'); // Get the translation strings

    return Inertia::render('Home/Home', [
        'events' => $events, // pass events to the home page and render
        'translations' => $translations, // Pass the translations to the component

    ]);
})->name('home');


// Event Details page
// Route::get('/details', function (){ 
//     return Inertia::render('Details/EventDetails');
//     })->name('details');

 //Event details page
Route::get('/events/{id}', [EventController::class, 'show'])->name('events.show');


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

// Events Page
Route::get('/events', [EventController::class, 'events'])->name('events');


 // Fetch specific images for the Arpillera collection page
 Route::get('/arpillera', [GalleryImagesController::class, 'arpillera'])->name('arpillera');

 // Fetch specific images for the Banner collection page
 Route::get('/banner', [GalleryImagesController::class, 'banner'])->name('banner');

 // Fetch specific images for the Quilt collection page
 Route::get('/quilt', [GalleryImagesController::class, 'quilt'])->name('quilt');

 // Fetch specific images for the Embroidered Cloth collection page
 Route::get('/embroidered-cloth', [GalleryImagesController::class, 'embroideredCloth'])->name('embroidered-cloth');

 // Fetch specific images for the Wall Hanging collection page
 Route::get('/wall-hanging', [GalleryImagesController::class, 'wallHanging'])->name('wall-hanging');

// --------------------------------------Page Routes End-----------------------------------------------------------------//


// --------Change language Route-----/
Route::get('/change-language/{lang}', "App\Http\Controllers\HomeController@changeLanguage");


//------- Bolier plate laravel Routes-----//
Route::get('/welcome', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

//------- Bolier plate laravel Routes-----//
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

//------- Bolier plate laravel Routes-----//
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
