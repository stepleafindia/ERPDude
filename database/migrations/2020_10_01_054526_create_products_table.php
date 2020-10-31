<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name',400);
            $table->string('hsn',120)->nullable()->default(null);
            $table->string('barcode',60)->nullable()->default(null);
            $table->string('barcode_type',60)->nullable()->default(null);
            $table->unsignedBigInteger('category_id');
            $table->unsignedBigInteger('sub_category_id')->nullable()->default(null);
            $table->unsignedBigInteger('brand_id');
            $table->unsignedBigInteger('unit_id');
            $table->string('style',600)->nullable()->default(null);
            $table->string('image',200)->nullable()->default(null);
            $table->tinyInteger('status')->default(1);
            $table->timestamps();
            $table->softDeletes();  
            $table->index('barcode');
            //$table->index('hsn');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
