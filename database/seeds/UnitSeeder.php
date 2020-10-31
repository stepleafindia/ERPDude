<?php

use Illuminate\Database\Seeder;

class UnitSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       // Truncate Before.
       DB::table('units')->truncate();
       $currentDateTime=\Carbon\Carbon::now('Asia/Kolkata')->toDateTimeString();

       $data=[
           [
               'name'=>'Kilo Gram',
               'code'=>'KG',
               'created_at'=>$currentDateTime,
               'updated_at'=>$currentDateTime
           ],
           [
               'name'=>'Milli Gram',
               'code'=>'MG',
               'created_at'=>$currentDateTime,
               'updated_at'=>$currentDateTime
           ],
           [
               'name'=>'Items',
               'code'=>'Itm',
               'created_at'=>$currentDateTime,
               'updated_at'=>$currentDateTime
           ],
           [
              'name'=>'Litres',
              'code'=>'ltr',
              'created_at'=>$currentDateTime,
              'updated_at'=>$currentDateTime
           ]           
       ];

       DB::table('units')->insert($data);
    }
}
