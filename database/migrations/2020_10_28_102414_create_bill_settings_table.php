<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBillSettingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bill_settings', function (Blueprint $table) {
            $table->id();           
            $table->string("vendor_name",400);
            $table->string("vendor_logo",400)->nullable()->default(null);
            $table->string("address_1",400)->nullable()->default(null);
            $table->string("address_2",400)->nullable()->default(null);
            $table->string("phone_1",20)->nullable()->default(null);
            $table->string("phone_2",20)->nullable()->default(null);
            $table->string("email",300)->nullable()->default(null);           
            $table->string("gstin",40)->nullable()->default(null);
            $table->string('bill_date_format',30)->nullable()->default(null);
            $table->string('quoted_text',400)->nullable()->default(null);
            $table->string('declaration',1200)->nullable()->default(null);          
            $table->string('company_bank_account',400)->nullable()->default(null);
            $table->string('company_bank_name',400)->nullable()->default(null);
            $table->string('company_bank_ifsc',400)->nullable()->default(null);
            $table->string('company_bank_branch',400)->nullable()->default(null);
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
        Schema::dropIfExists('bill_settings');
    }
}
