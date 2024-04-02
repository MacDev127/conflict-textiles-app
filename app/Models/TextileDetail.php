<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TextileDetail extends Model
{
    use HasFactory;
    protected $fillable = [
        'image',
        'location',
        'title',
        'type',
        'description',
        'year_produced',
        'size',
        'materials',
        'provenance',
        'country_of_origin',
        'authenticity',
        'maker',
        'owner',
        'photographer',
        'gallery_image_id',

    ];

    public function galleryImage()
    {
        return $this->belongsTo(GalleryImage::class);
    }

}
