<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::table('gallery_images', function (Blueprint $table) {
            $table->string('exhibited_at')->nullable();
            $table->string('publications')->nullable();
        });
    }

    public function down(): void
    {
        Schema::table('gallery_images', function (Blueprint $table) {
            $table->dropColumn('exhibited_at');
            $table->dropColumn('publications');
        });
    }
};
