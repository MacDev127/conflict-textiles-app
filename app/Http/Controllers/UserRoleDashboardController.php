<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\User;
use App\Models\Role;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;




class UserRoleDashboardController extends Controller
{
    public function index()
    {
        $users = User::all(); // Get all users
        $roles = Role::all(); // Get all roles

        // Return the Inertia response with the data
        return inertia('Admin/Dashboards/UserRoleDashboard/UserRoleDashboard', ['users' => $users, 'roles' => $roles]);

    }

    public function assignRole(Request $request)
    {
        logger()->info('Received role assignment request:', $request->all());

        // Validate the incoming request data
        $validator = Validator::make($request->all(), [
            'user_id' => 'required|exists:users,id',
            'role_id' => 'required|exists:roles,id'
        ]);

        if ($validator->fails()) {
            return redirect()
                ->back()
                ->withErrors($validator)
                ->withInput();
        }

        // Find the user by user_id
        $user = User::findOrFail($request->input('user_id'));
        // Assign the new role_id to the user
        $user->role_id = $request->input('role_id');
        $user->save();

        return redirect()->back()->with('success', 'Role assigned successfully!');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => ['required', 'confirmed', Password::defaults()],
            'role_id' => 'required|exists:roles,id',
        ]);

        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
            'role_id' => $validated['role_id'],
        ]);

        // Redirect or return a response
        return redirect('/admin/user-role-dashboard')->with('success', 'User created successfully!');
    }

}


/*
|--------------------------------------------------------------------------
| UserRole Dashboard controller
|--------------------------------------------------------------------------
|
| The UserRoleDashboardController manages users and roles in the admin dashboard. 
| It lists users and their roles, assigns roles, and creates new users with assigned roles, 
| streamlining user management for admins.
|
*/

