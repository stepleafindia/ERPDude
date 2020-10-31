<?php

use Illuminate\Database\Seeder;

class ProductSubCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Truncate Before.
        DB::table('product_sub_categories')->truncate();
        $currentDateTime=\Carbon\Carbon::now('Asia/Kolkata')->toDateTimeString();

        $data=[
            [
                'name'=>'Packaged food ',
                'created_at'=>$currentDateTime,
                'updated_at'=>$currentDateTime
            ],
            [
                'name'=>'Luxary Mobiles',
                'created_at'=>$currentDateTime,
                'updated_at'=>$currentDateTime
            ],
            [
                'name'=>'Hardwares',
                'created_at'=>$currentDateTime,
                'updated_at'=>$currentDateTime
            ],
        ];

        DB::table('product_sub_categories')->insert($data);
    }
}
