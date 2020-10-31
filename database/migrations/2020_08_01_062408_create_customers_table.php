<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCustomersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->id();
            $table->string('name',120); 
            $table->string('email',180)->nullable()->default(null);
            $table->string('contact_number',25)->nullable()->default(null);
            $table->string('mobile_number',25)->nullable()->default(null);
            $table->string('address',600)->nullable()->default(null); 
            $table->string('city',200)->nullable()->default(null);             
            $table->string('pin_code',30)->nullable()->default(null);          
            $table->unsignedBigInteger('state_id')->nullable()->default(null);  
            $table->unsignedBigInteger('country_id')->nullable()->default(null);
            $table->string('fax',16)->nullable()->default(null);          
            $table->string('customer_group',40)->nullable()->default(null);
            $table->decimal('opening_balance',10,2)->nullable()->default(null);            
            $table->decimal('credit_limit',10,2)->nullable()->default(null);
            $table->integer('due_days')->nullable()->default(null);
            $table->string('sales_type',60)->nullable()->default(null);
            $table->string('gstin',40)->nullable()->default(null);
            $table->string('pan_no',40)->nullable()->default(null);
            $table->string('print_name',200)->nullable()->default(null);          
            $table->string('contact_person',200)->nullable()->default(null);          
            $table->tinyInteger('status')->default(1);
            $table->boolean('sms_alert')->default(1);
            $table->timestamps();
            $table->softDeletes();  
            //$table->foreign('country_id')->references('id')->on('countries')->onDelete('set null');
            //$table->foreign('state_id')->references('id')->on('states')->onDelete('set null');
            $table->index('email');
            $table->index('contact_number');
            $table->index('mobile_number');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {       
        Schema::dropIfExists('customers');
    }
}
