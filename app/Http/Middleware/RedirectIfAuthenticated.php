<?php

namespace App\Http\Middleware;

use App\Providers\RouteServiceProvider;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Log;


class RedirectIfAuthenticated
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, string ...$guards): Response
    {
        $guards = empty($guards) ? [null] : $guards;

        foreach ($guards as $guard) {
            if (Auth::guard($guard)->check()) {
                // Get the authenticated user
                $user = Auth::guard($guard)->user();
                Log::info('User is already authenticated', ['user_id' => $user->id, 'user_role' => $user->role]);


                // Redirect based on user role
                if ($user->isAdmin()) {
                    return redirect('/metrics-dashboard');
                } elseif ($user->isResearcher()) {
                    return redirect('/researcher-dashboard');
                }

                // Default redirect if no specific role is found
                return redirect('/');
            }
        }

        return $next($request);
    }
}
