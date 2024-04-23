<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;



class EnsureUserIsAdmin
{
    public function handle(Request $request, Closure $next)
    {
        $user = Auth::user();
        if ($user && $user->role && $user->role->name === 'admin') {
            return $next($request);
        }

        // Redirect non-admins to a common page with an error message
        return redirect('/about')->with('error', 'You do not have administrative access.');
    }
}
