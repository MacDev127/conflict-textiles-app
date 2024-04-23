<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        // 'is_admin',
        // 'is_researcher',
        'role_id'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    public function bookmarks()
    {
        return $this->hasMany(Bookmark::class);
    }

    public function role()
    {
        return $this->belongsTo(Role::class);
    }
    public function isAdmin()
    {
        return $this->role && $this->role->name === 'admin';
    }

    public function isResearcher()
    {
        return $this->role && $this->role->name === 'researcher';
    }

    // redirection issue that took 3 days to figure out
    // You didnt handle the roles properly you were checking the role to look for a simple string input as opposed to the "name" attribute



}
