<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCompaniesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('companies', function (Blueprint $table) {
            $table->id();
            $table->string('name',120);
            $table->string('logo',220);
            $table->string('email',320)->nullable()->default(null);
            $table->string('contact_number',25)->nullable()->default(null);
            $table->string('alter_contact_number',25)->nullable()->default(null);
            $table->string('website',320)->nullable()->default(null);
            $table->string('address',800)->nullable()->default(null);
            $table->string('pin_code',30)->nullable()->default(null);
            $table->unsignedBigInteger('country_id')->nullable()->default(null);
            $table->unsignedBigInteger('state_id')->nullable()->default(null);  
            $table->string('gstin',40)->nullable()->default(null); 
            $table->timestamps();
            $table->softDeletes(); 
            // $table->foreign('country_id')->references('id')->on('countries')->onDelete('set null');
            //$table->foreign('state_id')->references('id')->on('states')->onDelete('set null');   
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('companies');
    }
}
