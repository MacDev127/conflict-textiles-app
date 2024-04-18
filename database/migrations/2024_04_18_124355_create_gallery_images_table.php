<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('gallery_images', function (Blueprint $table) {
            $table->id();
            $table->string('image');
            $table->string('title')->nullable();
            $table->timestamps();
            $table->string('type')->nullable();
            $table->string('maker')->nullable();
            $table->string('country_of_origin')->nullable();
            $table->string('year_produced')->nullable();
            $table->string('size')->nullable();
            $table->string('materials')->nullable();
            $table->string('owner')->nullable();
            $table->text('provenance')->nullable();
            $table->string('location')->nullable();
            $table->string('authenticity')->nullable();
            $table->string('photographer')->nullable();
            $table->text('description')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('gallery_images');
    }
};
