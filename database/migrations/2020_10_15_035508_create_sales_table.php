<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSalesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sales', function (Blueprint $table) {
            $table->id();
            $table->string('bill_no',30)->unique();
            $table->decimal('gross_amount',8,2);
            $table->decimal('total_discount',8,2)->nullable()->default(null);
            $table->string('gst_type',30)->nullable()->default(null);
            $table->decimal('sgst',8,2)->nullable()->default(null);
            $table->decimal('cgst',8,2)->nullable()->default(null);
            $table->decimal('igst',8,2)->nullable()->default(null);
            $table->decimal('net_amount',8,2)->nullable()->default(null);
            $table->decimal('round_off',8,2)->nullable()->default(null);           
            $table->string('payment_option',60)->default('Cash');
            $table->decimal('paid_amount',8,2)->nullable()->default(null);
            $table->decimal('remaining_balance',8,2)->nullable()->default(null);
            $table->string('remarks',600)->nullable()->default(null);
            $table->unsignedBigInteger('customer_id')->nullable()->default(null);
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
        Schema::dropIfExists('sales');
    }
}
