<?php

use Illuminate\Database\Seeder;

class GstTaxSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Truncate Before.
        DB::table('gst_taxes')->truncate();
        $currentDateTime=\Carbon\Carbon::now('Asia/Kolkata')->toDateTimeString();

        $data=[
            [
                'name'=>'GST18%',
                'type'=>'Inclusive',
                'sgst'=>'9.00',
                'cgst'=>'9.00',
                'igst'=>'18.00',
                'created_at'=>$currentDateTime,
                'updated_at'=>$currentDateTime
            ]
        ];

        DB::table('gst_taxes')->insert($data);
    }
}
