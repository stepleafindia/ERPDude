<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Truncate Before.
        DB::table('users')->truncate();
        $currentDateTime=\Carbon\Carbon::now('Asia/Kolkata')->toDateTimeString();
        $users=array(
            [
                'first_name'=>'Codesense',
                'last_name'=>'',
                'user_role'=>'SuperAdmin',
                'username'=>'codesense',
                'email'=>'info@codesensesoftsolutions.com',
                'username'=>'Codesense',
                'password'=>Hash::make('admin@codesense'),
                'created_at'=>$currentDateTime,
                'updated_at'=>$currentDateTime
            ],
        ); 

        DB::table('users')->insert($users);        
    }
    
}
