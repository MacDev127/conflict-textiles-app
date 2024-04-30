<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Validation\ValidationException;


class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    // public function store(LoginRequest $request): RedirectResponse
    // {
    //     $request->authenticate();

    //     $request->session()->regenerate();

    //     return redirect()->intended(RouteServiceProvider::HOME);
    // }


    public function store(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);
        if (Auth::attempt($request->only('email', 'password'), $request->filled('remember'))) {
            $request->session()->regenerate();
            $user = Auth::user();

            \Log::info('Authenticated user role:', ['role' => $user->role->name ?? 'undefined']);

            switch ($user->role->name) {
                case 'admin':
                    \Log::info('Redirecting admin to metrics dashboard');
                    return redirect()->intended('/metrics-dashboard');
                case 'researcher':
                    \Log::info('Redirecting researcher to researcher dashboard');
                    return redirect()->intended('/');
                default:
                    \Log::info('Redirecting to default home');
                    return redirect()->intended('/');
            }
        }
    }

    // protected function redirectTo()
    // {
    //     $user = auth()->user();
    //     if ($user->isAdmin()) {
    //         return '/metrics-dashboard';
    //     } elseif ($user->isResearcher()) {
    //         return '/researcher-dashboard';
    //     }
    //     return '/'; // Default path
    // }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
