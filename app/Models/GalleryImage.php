<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GalleryImage extends Model
{
    use HasFactory;
    protected $fillable = [
        'image', 
        'title', 
        'type', 
        'year_produced', 
        'country_of_origin', 
        'maker',
       
    ];

    public function textileDetail()
    {
        // Assuming one gallery image is associated with one textile detail
        return $this->hasOne(TextileDetail::class);
    }
    
}
