<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\About;
use Inertia\Inertia;



class AboutController extends Controller
{

    public function index()
    {

        return Inertia::render('About/About');
    }


}
