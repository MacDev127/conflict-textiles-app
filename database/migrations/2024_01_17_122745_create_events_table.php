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
    Schema::create('events', function (Blueprint $table) {
    $table->id();
    $table->string('image')->nullable(); 
    $table->string('location')->nullable(); 
    $table->string('title');
    $table->string('type')->nullable();
    $table->text('description')->nullable();
    $table->time('event_time')->nullable(); 
    $table->date('event_date')->nullable(); 
    $table->text('commissioned_by')->nullable();
    $table->text('venue')->nullable();
    $table->text('curator')->nullable();
    $table->text('facilitator')->nullable();
    $table->text('outcome')->nullable();
    $table->string('document_url')->nullable();
    $table->string('textile_url')->nullable();
    $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('events');
    }
};
