<?php

use Illuminate\Database\Seeder;

class TaxSettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Truncate Before.
        DB::table('tax_settings')->truncate();

        $currentDateTime=\Carbon\Carbon::now('Asia/Kolkata')->toDateTimeString();

        $taxSettings=array(
            ['name'=>'IGST(18%)','value'=>'18.00','created_at'=>$currentDateTime,'updated_at'=>$currentDateTime],
            ['name'=>'CGST(9%)','value'=>'9.00','created_at'=>$currentDateTime,'updated_at'=>$currentDateTime],
            ['name'=>'SGST(9%)','value'=>'9.00','created_at'=>$currentDateTime,'updated_at'=>$currentDateTime],
        );
        DB::table('tax_settings')->insert($taxSettings);
    }
}
