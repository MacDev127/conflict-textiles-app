<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bookmark extends Model
{
    use HasFactory;
    protected $fillable = ['user_id', 'gallery_image_id'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function galleryImage()
    {
        return $this->belongsTo(GalleryImage::class);
    }
}
