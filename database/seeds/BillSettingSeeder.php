<?php

use Illuminate\Database\Seeder;

class BillSettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Truncate Before.
        DB::table('bill_settings')->truncate();
        $currentDateTime=\Carbon\Carbon::now('Asia/Kolkata')->toDateTimeString();

        $data=[
            [
                "vendor_name"=>"CODESENSE SOFT SOLUTIONS PVT LTD.",
                "address_1"=>"RG COMPLEX, 2ND FLOOR, TELUNGUPALAYAM PIRIVU",
                "address_2"=>"COIMBATORE–641039. TAMILNADU.",
                "phone_1"=>"+91 95244 76114",
                "email"=>"info@codesensesoftsolutions.com",
                "gstin"=>"GSTIN0456875986",
                "vendor_logo"=>"default.jpg",
                "bill_date_format"=>"Y-m-d H:i:s",
                "quoted_text"=>"Thank You! have a nice day!",
                "created_at"=> $currentDateTime,
                "updated_at" =>  $currentDateTime
            ],
        ];

        DB::table("bill_settings")->insert($data);



    }
}
