<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;


// class EnsureUserIsResearcher
// {
//     public function handle(Request $request, Closure $next)
//     {
//         $user = Auth::user();
//         if ($user && $user->role && $user->role->name === 'researcher') {
//             return $next($request);
//         }

//         return redirect('/events')->with('error', 'You do not have access to researcher resources.');
//     }
// }



namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class EnsureUserIsResearcher
{
    public function handle($request, Closure $next)
    {
        $user = Auth::user();
        Log::info('Access Attempt:', ['email' => $user->email, 'role' => $user->role->name]);

        if ($user && $user->role && $user->role->name === 'researcher') {
            return $next($request);
        }

        Log::warning('Unauthorized Access:', ['email' => $user->email, 'attempted_access' => 'Researcher Dashboard']);
        return redirect('/about')->with('error', 'You do not have access to this section.');
    }
}
