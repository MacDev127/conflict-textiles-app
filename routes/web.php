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
use App\Http\Controllers\EventRegisterController;
use App\Http\Controllers\SearchController;


//Models
use App\Models\Event;
use App\Models\GalleryImage;
use App\Models\TextileDetail;
use App\Models\Arpillera;
use App\Models\CollectionPageImage;
use App\Models\EventRegister;
use App\Models\Search;





///admin functionality

// Route to show the form to add a new textile
Route::get('/admin/textiles/create', [TextileDetailController::class, 'create'])
    ->name('admin.textiles.create')
    ->middleware('is_admin');

// Route to post the data to add a new textile
Route::post('/admin/textiles/create', [TextileDetailController::class, 'store'])
    ->name('admin.textiles.store')
    ->middleware('is_admin');

// Route to show the form to add a new event
Route::get('/admin/events/create', [EventController::class, 'create'])
    ->name('admin.events.create')
    ->middleware('is_admin');

// Route to post the data to add a new event
Route::post('/admin/events', [EventController::class, 'store'])

    ->name('admin.events.store')
    ->middleware('is_admin');

///admin functionality




// ----------------Controller Routes------------//

// Event Controller
Route::get('/events', [EventController::class, 'index']);

// Textile Details Controller
Route::get('/textile-details/{id}', [TextileDetailController::class, 'show'])->name('textile-details.show');

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

// Route to handle the form submission
Route::post('/event/{eventId}/eventRegister', [EventRegisterController::class, 'store'])->name('event.eventRegister.store');






// --------------------------------------Page Routes Start-----------------------------------------------------------------//

//Dashboard


Route::get('/dashboard', function () {
    return Inertia::render('Admin/Dashboard');
})->middleware(['auth', 'is_admin'])->name('dashboard');

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

require __DIR__.'/auth.php';
