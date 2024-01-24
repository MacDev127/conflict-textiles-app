<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Symfony\Component\HttpFoundation\Response;


class Language
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        {
            if(session()->has("lang_code")){ // Check if the session has a lang_code set
                App::setLocale(session()->get("lang_code")); // Set the app's locale to the 'lang_code' from the session
            }
            return $next($request); // Pass the request to the next middleware in the stack or to the app's controller
        }
    }
}
