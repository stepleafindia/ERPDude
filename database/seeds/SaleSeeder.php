<?php

use Illuminate\Database\Seeder;

class SaleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::unprepared("CREATE OR REPLACE FUNCTION getBillCounts(dateFrom DATETIME, dateUpto DATETIME) RETURNS INT
        BEGIN	
            DECLARE	billCount INT;
            SET billCount =(select count(id) from sales WHERE created_at BETWEEN dateFrom AND dateUpto);		
            RETURN billCount;
        END;");
    }
}
