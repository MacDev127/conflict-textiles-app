<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Search;
use Inertia\Inertia;


class SearchController extends Controller
{
    public function index()
    {
        // You can pass default data or just render the component
        return Inertia::render('Search/Search', [
            'images' => []
        ]);
    }

}
