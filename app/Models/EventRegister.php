<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EventRegister extends Model
{
    use HasFactory;
    protected $fillable = [ 'name', 'email', 'number', 'gender', 'birthDate'];
    
     protected $table = 'events_register';
        
    

}
