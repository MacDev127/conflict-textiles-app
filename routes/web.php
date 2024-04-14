<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


//Controllers
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\GalleryImagesController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\CollectionPageImageController;
use App\Http\Controllers\EmailSignUpController;
use App\Http\Controllers\EventRegisterController;
use App\Http\Controllers\SearchController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\AboutController;
use App\Http\Controllers\ContactController;








///Admin / Dashboard functionality

//Image
Route::post('/admin/gallery-images/store', [GalleryImagesController::class, 'store'])
    ->name('gallery-images.store')
    ->middleware('is_admin');



//------------------------------Textiles------------------------------------------///

// Route to show the edit form for a textile
Route::get('/admin/textileDetail/{id}/edit', [GalleryImagesController::class, 'edit'])
    ->name('admin.textileDetail.edit')
    ->middleware('is_admin');


//update Textile
Route::put('/textileDetail/{id}', [GalleryImagesController::class, 'update'])->name('textileDetail.update');


//Delete Textile
Route::delete('/textileDetail/{id}', [GalleryImagesController::class, 'destroy'])->name('textileDetail.destroy');



//-------------------------------Textiles-----------------------------------///


//----------------------Events---------------///

// Route to show the form to add a new event
Route::get('/admin/events/create', [EventController::class, 'create'])
    ->name('admin.events.create')
    ->middleware('is_admin');

// Route to show the edit form for an event
Route::get('/admin/events/{id}/edit', [EventController::class, 'edit'])
    ->name('admin.events.edit')
    ->middleware('is_admin');

// Route to post the data to add a new event
Route::post('/admin/events', [EventController::class, 'store'])
    ->name('admin.events.store')
    ->middleware('is_admin');

// update event
Route::put('/events/{id}', [EventController::class, 'update'])->name('event.update');

//Delete Event
Route::delete('/events/{id}', [EventController::class, 'destroy'])->name('event.destroy');

//----------------------Events---------------///


//----------------------Dashboards---------------///


/// main dashboard
Route::get('/dashboard', [DashboardController::class, 'index'])
    ->middleware(['auth', 'is_admin'])
    ->name('dashboard');

//events dashboard
Route::get('/events-dashboard', [DashboardController::class, 'eventsDashboard'])
    ->middleware(['auth', 'is_admin'])
    ->name('admin.events-dashboard');

//textiles dashboard
Route::get('/textiles-dashboard', [DashboardController::class, 'textilesDashboard'])
    ->middleware(['auth', 'is_admin'])
    ->name('admin.textiles-dashboard');

///-------Admin / Dashboard functionality--------

//----------------------Dashboards---------------///


// Event Controller
Route::get('/events', [EventController::class, 'index']);

// show textileDetails of image
Route::get('/textile-details/{id}', [GalleryImagesController::class, 'showTextileDetail'])->name('textile-details.show');

//Gallery images Controller
Route::get('/galleryImages', [GalleryImagesController::class, 'index'])->name('galleryImages');

//Home Controller
Route::get('/', [HomeController::class, 'index'])->name('home');

// Collection page Controller
Route::get('/collectionPageImages', [CollectionPageImageController::class, 'index'])->name('collectionPageImages');

//Email Sign up
Route::post('/email-signup', [EmailSignUpController::class, 'store']);


// Route to show registration form
Route::get('/event/{eventId}/registerPage', [EventRegisterController::class, 'showRegistrationForm'])->name('event.registerPage');

// Route to handle event register form submission
Route::post('/event/{eventId}/eventRegister', [EventRegisterController::class, 'store'])->name('event.eventRegister.store');






// --------------------------------------Page Routes Start-----------------------------------------------------------------//
//About Page
Route::get('/about', [AboutController::class, 'index'])->name('about');
//About Page
Route::get('/contact', [ContactController::class, 'index'])->name('contact');

//Event Route
Route::get('/events/{id}', [EventController::class, 'show'])->name('events.show');

// Events Page
Route::get('/events', [EventController::class, 'events'])->name('events');

// Collection Page
Route::get('/collection', [CollectionPageImageController::class, 'index'])->name('collection');

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

// Fetch specific images for the Wall Hanging collection page
Route::get('/installation', [GalleryImagesController::class, 'installation'])->name('installation');

// --------------------------------------Page Routes End-----------------------------------------------------------------//


//----------search functionality----------//

Route::get('/search', [GalleryImagesController::class, 'search'])->name('gallery_images.search');
Route::get('/search-page', [SearchController::class, 'index'])->name('search-page');

//----------search functionality----------//


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
// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

//------- Bolier plate laravel Routes-----//
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
