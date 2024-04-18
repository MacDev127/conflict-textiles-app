<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EnsureUserIsResearcher
{
    public function handle(Request $request, Closure $next): Response
    {
        if (!auth()->user()->is_researcher) {
            return redirect('home')->with('error', 'Access restricted to researchers.');
        }
        return $next($request);
    }
}
