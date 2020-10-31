<?php

use Illuminate\Database\Seeder;

class BrandSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         // Truncate Before.
         DB::table('brands')->truncate();
         $currentDateTime=\Carbon\Carbon::now('Asia/Kolkata')->toDateTimeString();
 
         $data=[
             [
                 'name'=>'Agri',
                 'created_at'=>$currentDateTime,
                 'updated_at'=>$currentDateTime
             ],
             [
                 'name'=>'HP',
                 'created_at'=>$currentDateTime,
                 'updated_at'=>$currentDateTime
             ],
             [
                 'name'=>'Dell',
                 'created_at'=>$currentDateTime,
                 'updated_at'=>$currentDateTime
             ],
             [
                'name'=>'Apple',
                'created_at'=>$currentDateTime,
                'updated_at'=>$currentDateTime
             ],
             [
                'name'=>'Panasonic',
                'created_at'=>$currentDateTime,
                'updated_at'=>$currentDateTime
             ],
             [
                'name'=>'Micromax',
                'created_at'=>$currentDateTime,
                'updated_at'=>$currentDateTime
             ],
         ];
 
         DB::table('brands')->insert($data);
    }
}
