<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('textile_details', function (Blueprint $table) {
            $table->id();
            $table->string('maker');
            $table->string('country_of_origin');
            $table->date('date');   
            $table->string('image');
            $table->string('title');
            $table->string('size');
            $table->string('materials');      
            $table->string('owner');
            $table->text('provenance');
            $table->string('location');
            $table->string('authenticity');
            $table->string('photographer');
            $table->string('type');
            $table->text('description');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('textile_details');
    }
};