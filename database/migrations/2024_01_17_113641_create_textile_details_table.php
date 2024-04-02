<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    
    public function up(): void
    {
        Schema::create('textile_details', function (Blueprint $table) {
            $table->id();
            $table->string('maker')->nullable();
            $table->string('country_of_origin')->nullable();
            $table->string('year_produced')->nullable();   
            $table->string('image')->nullable();
            $table->string('title')->nullable();
            $table->string('size')->nullable();
            $table->string('materials')->nullable();      
            $table->string('owner')->nullable();
            $table->text('provenance')->nullable();
            $table->string('location')->nullable();
            $table->string('authenticity')->nullable();
            $table->string('photographer')->nullable();
            $table->string('type')->nullable();
            $table->text('description')->nullable();
            $table->timestamps();
            $table->foreignId('gallery_image_id')->constrained('gallery_images')->onDelete('cascade');


        });
    }

   
    public function down(): void
    {
        Schema::dropIfExists('textile_details');
    }
};
