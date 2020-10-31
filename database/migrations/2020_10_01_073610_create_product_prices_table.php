<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductPricesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_prices', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('product_id');
            $table->decimal('mrp',8,2)->nullable()->default(null);;
            $table->decimal('cost_price',8,2);
            $table->decimal('selling_price',8,2);            
            $table->decimal('discount_percentage',5,2)->nullable()->default(null);
            $table->unsignedBigInteger('sales_gst_tax_id')->nullable()->default(null);
            $table->timestamps();
            $table->softDeletes(); 
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product_prices');
    }
}
