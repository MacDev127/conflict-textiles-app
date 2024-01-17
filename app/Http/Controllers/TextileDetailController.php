<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TextileDetail;
use Inertia\Inertia;


class TextileDetailController extends Controller
{
    public function index()
{
    $textileDetails = TextileDetail::all();
    // dd($textileDetails);

    return Inertia::render('TextileDetails/TextileDetails', ['textileDetails' => $textileDetails]);
}
}
