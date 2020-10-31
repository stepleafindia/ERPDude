<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBillItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bill_items', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('sale_id');
            $table->unsignedBigInteger('product_id');
            $table->decimal('quantity',10,2)->default(1);
            $table->decimal('selling_price',10,2);           
            $table->decimal('discount',10,2)->default(0);
            $table->decimal('unit_price',10,2)->nullable()->default(null);            
            $table->unsignedBigInteger('gst_tax_id')->nullable()->default(null);
            $table->decimal('igst',10,2)->nullable()->default(null);
            $table->decimal('sgst',10,2)->nullable()->default(null);
            $table->decimal('cgst',10,2)->nullable()->default(null);
            $table->decimal('net_amount',10,2); 
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
        Schema::dropIfExists('bill_items');
    }
}
