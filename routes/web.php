<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\EventController;
use App\Models\Event;
use App\Http\Controllers\TextileDetailController;
use App\Models\TextileDetail;





/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


// ----------------Controller Routes------------//

// Event Controller

Route::get('/events', [EventController::class, 'index']);

// Textile Details Controller

Route::get('/textile-details', [TextileDetailController::class, 'index']);


// ---------------Controller Routes-------------------//



// ------------Page Routes-------------//

//Home page

Route::get('/home', function () {
    $events = Event::all(); // Fetch all events from the database
    return Inertia::render('Home/Home', ['events' => $events]);
})->name('home');

// Event Details page

Route::get('/details', function (){
    return Inertia::render('Details/EventDetails');
    })->name('details');

// Textile Details Page
Route::get('/textiledetails', function () {
    $textileDetails = TextileDetail::all();
    return Inertia::render('TextileDetails/TextileDetails', ['textileDetails' => $textileDetails]);
})->name('textiledetails');

// -------------------Page Routes----------------//










// Bolier plate laravel Routes
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


Route::get('/users', function(){
    return Inertia::render('Users/Index');
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
