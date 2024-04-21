<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EnsureUserIsResearcher
{
    public function handle(Request $request, Closure $next): Response
    { {
            $user = auth()->user();
            if ($user && $user->role && $user->role->name == 'researcher') {
                return $next($request);
            }
            return redirect('/about')->with('error', 'You do not have access to this section.');
        }
    }
}
