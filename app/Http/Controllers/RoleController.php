<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Role;
use Illuminate\Validation\Rule;



class RoleController extends Controller
{
    public function index()
    {
        $roles = Role::all();
        return inertia('Admin/DashboardComponents/UserRole/UserRole', ['roles' => $roles]);  // Update to the correct path
    }


    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'unique:roles,name'],
        ]);

        Role::create([
            'name' => $request->name,
        ]);

        return redirect()->route('admin.roles.index')
            ->with('success', 'Role created successfully.');
    }

    public function edit(Role $role)
    {
        return inertia('Admin/DashboardComponents/UserRole/UserRole', ['role' => $role]);
    }

    public function update(Request $request, Role $role)
    {
        // $request->validate([
        //     'name' => ['required', 'string', Role::unique('roles', 'name')->ignore($role->id)],
        // ]);
        $request->validate([
            'name' => ['required', 'string', Rule::unique('roles')->ignore($role->id)],
        ]);

        $role->update([
            'name' => $request->name,
        ]);

        return redirect()->route('admin.roles.index')
            ->with('success', 'Role updated successfully.');
    }

    public function destroy(Role $role)
    {
        $role->delete();

        return redirect()->route('admin.roles.index')
            ->with('success', 'Role deleted successfully.');
    }
}


/*
|--------------------------------------------------------------------------
| Role controller
|--------------------------------------------------------------------------
|
|RoleController oversees CRUD operations for roles, with tests covering:
|Index Test: Validates retrieval and display of all roles.
|Create Role Test: Ensures proper addition of new roles, validating unique constraints.
|Edit Role Test: Verifies retrieval of a specific role for editing.
|Update Role Test: Validates correct processing of role updates, including validation.
|Delete Role Test: Confirms deletion of roles and appropriate system updates.

|
*/
