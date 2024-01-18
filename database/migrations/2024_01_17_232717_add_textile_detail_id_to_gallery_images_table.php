<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddTextileDetailIdToGalleryImagesTable extends Migration
{
    public function up()
    {
        Schema::table('gallery_images', function (Blueprint $table) {
            $table->unsignedBigInteger('textile_detail_id')->nullable()->after('id');
            $table->foreign('textile_detail_id')->references('id')->on('textile_details')->onDelete('set null');
        });
    }

    public function down()
    {
        Schema::table('gallery_images', function (Blueprint $table) {
            $table->dropForeign(['textile_detail_id']);
            $table->dropColumn('textile_detail_id');
        });
    }
}

