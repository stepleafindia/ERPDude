<?php

use Illuminate\Database\Seeder;

class ProductCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Truncate Before.
        DB::table('product_categories')->truncate();
        $currentDateTime=\Carbon\Carbon::now('Asia/Kolkata')->toDateTimeString();

        $data=[
            [
                'name'=>'Vegitables',
                'created_at'=>$currentDateTime,
                'updated_at'=>$currentDateTime
            ],
            [
                'name'=>'Grocery Items',
                'created_at'=>$currentDateTime,
                'updated_at'=>$currentDateTime
            ],
            [
                'name'=>'Snacks',
                'created_at'=>$currentDateTime,
                'updated_at'=>$currentDateTime
            ],
            [
                'name'=>'Mobiles',
                'created_at'=>$currentDateTime,
                'updated_at'=>$currentDateTime
            ],
            [
                'name'=>'Laptops',
                'created_at'=>$currentDateTime,
                'updated_at'=>$currentDateTime
            ],
            [
                'name'=>'Destops',
                'created_at'=>$currentDateTime,
                'updated_at'=>$currentDateTime
            ],
            [
                'name'=>'Computer Hardwares',
                'created_at'=>$currentDateTime,
                'updated_at'=>$currentDateTime
            ],
        ];

        DB::table('product_categories')->insert($data);
    }
}
