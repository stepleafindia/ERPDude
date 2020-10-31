<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGstTaxesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('gst_taxes', function (Blueprint $table) {
            $table->id();
            $table->string('name',200);
            $table->string('type',200);
            $table->decimal('cgst',5,2)->default(0);
            $table->decimal('igst',5,2)->default(0);
            $table->decimal('sgst',5,2)->default(0);
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
        Schema::dropIfExists('gst_taxes');
    }
}
