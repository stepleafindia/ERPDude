<?php

use Illuminate\Database\Seeder;

class StateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Truncate Before.
        DB::table('states')->truncate();
        //$currentDateTime=\Carbon\Carbon::now('Asia/Kolkata')->toDateTimeString();
        /*$statesDB=DB::connection('pgsql')->table('states')->selectRaw('states.country_id,states.name,states.is_union_territory')                               
                               ->get();
        $states=[];
        foreach($statesDB as $state){
            $states[]=array(
                'name'=>$state->name,
                'country_id'=>$state->country_id,
                'is_union_territory'=>$state->is_union_territory,
                'created_at'=>$currentDateTime,
                'updated_at'=>$currentDateTime
            );
        }

        DB::table('states')->insert($states);*/

        DB::statement("INSERT INTO `states` (`id`, `name`, `country_id`, `is_union_territory`, `created_at`, `updated_at`, `deleted_at`) VALUES
        (1, 'Andhra Pradesh', 103, 0, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
        (2, 'Arunachal Pradesh', 103, 0, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
        (3, 'Assam', 103, 0, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
        (4, 'Bihar', 103, 0, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
        (5, 'Chhattisgarh', 103, 0, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
        (6, 'Goa', 103, 0, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
        (7, 'Gujarat', 103, 0, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
        (8, 'Haryana', 103, 0, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
        (9, 'Himachal Pradesh', 103, 0, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
        (10, 'Jharkhand', 103, 0, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
        (11, 'Karnataka', 103, 0, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
        (12, 'Kerala', 103, 0, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
        (13, 'Madhya Pradesh', 103, 0, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
        (14, 'Maharashtra', 103, 0, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
        (15, 'Manipur', 103, 0, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
        (16, 'Meghalaya', 103, 0, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
        (17, 'Mizoram', 103, 0, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
        (18, 'Nagaland', 103, 0, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
        (19, 'Odisha', 103, 0, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
        (20, 'Punjab', 103, 0, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
        (21, 'Rajasthan', 103, 0, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
        (22, 'Sikkim', 103, 0, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
        (23, 'Tamil Nadu', 103, 0, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
        (24, 'Telangana', 103, 0, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
        (25, 'Tripura', 103, 0, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
        (26, 'Uttar Pradesh', 103, 0, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
        (27, 'Uttarakhand', 103, 0, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
        (28, 'West Bengal', 103, 0, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
        (29, 'Andaman and Nicobar Islands', 103, 1, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
        (30, 'Chandigarh', 103, 1, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
        (31, 'Dadra and Nagar Haveli and Daman and Diu', 103, 1, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
        (32, 'Delhi', 103, 1, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
        (33, 'Jammu and Kashmir', 103, 1, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
        (34, 'Ladakh', 103, 1, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
        (35, 'Lakshadweep', 103, 1, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL),
        (36, 'Puducherry', 103, 1, '2020-08-01 05:16:57', '2020-08-01 05:16:57', NULL);
        ");
    }
}
