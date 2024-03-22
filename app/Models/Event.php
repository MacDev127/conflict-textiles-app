<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;
    protected $fillable = [
        'title', 'event_time', 'location', 'type', 'event_date',
        'commissioned_by', 'venue', 'curator', 'outcome', 'document_url',
        'textile_url', 'image', 'facilitator', 'description', // Added here
    ];
    
    
}
