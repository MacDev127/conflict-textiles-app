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





    public function store(LoginRequest $request)
    {
        try {
            // Validate the request using the rules defined in LoginRequest
            $request->validated();

            // Attempt to authenticate the user
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
            } else {
                // Authentication failed, throw ValidationException with error message
                throw ValidationException::withMessages([
                    'email' => [trans('auth.failed')],
                ]);
            }
        } catch (ValidationException $e) {
            // If validation fails, redirect back with error messages
            return redirect()->back()->withErrors($e->errors())->withInput();
        }
    }



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
