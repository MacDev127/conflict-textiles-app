<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;



namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

// Middleware to ensure only users with a 'researcher' role can access specific routes.
class EnsureUserIsResearcher
{
    public function handle($request, Closure $next)
    {
        $user = Auth::user(); // Retrieve authenticated user
        Log::info('Access Attempt:', ['email' => $user->email, 'role' => $user->role->name]); // Log user access attempt

        // Check if the user is authenticated and has the 'researcher' role
        if ($user && $user->role && $user->role->name === 'researcher') {
            return $next($request); // Allow request to proceed
        }

        // Log and redirect non-researcher users to the '/about' page with an error message
        Log::warning('Unauthorized Access:', ['email' => $user->email, 'attempted_access' => 'Researcher Dashboard']);
        return redirect('/')->with('error', 'You do not have access to this section.');
    }
}
