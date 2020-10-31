<?php

use Illuminate\Database\Seeder;

class CompanySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         // Truncate Before.
         DB::table('companies')->truncate();
         $currentDateTime=\Carbon\Carbon::now();
         $countryId=DB::table('countries')->where('code','IN')->first()->id;
         $stateId=DB::table('states')->where('name','Tamil Nadu')->first()->id;

         $users=array(
             [
                 'name'=>'Codesense Soft Solutions Pvt.Ltd',
                 'logo'=>'codesense-logo.png',
                 'email'=>null,
                 'contact_number'=>'+91 9524476114',
                 'alter_contact_number'=>null,
                 'website'=>'https://www.codesensesoftsolutions.com/',
                 'address'=>'RG Complex,
                 2nd Floor, 
                 Telungupalayam Pirivu, 
                 Perur Main Road, 
                 Coimbatore-641039.',
                 'pin_code'=>'641039',
                 'country_id'=> $countryId,
                 'state_id'=>$stateId,
                 'created_at'=>$currentDateTime,
                 'updated_at'=>$currentDateTime
             ],
             [
                'name'=>'Stepleaf',
                'logo'=>'stepleaf-logo.png',
                'email'=>null,
                'contact_number'=>'+91 9524476114',
                'alter_contact_number'=>null,
                'website'=>'https://www.codesensesoftsolutions.com/',
                'address'=>'RG Complex,
                2nd Floor, 
                Telungupalayam Pirivu, 
                Perur Main Road, 
                Coimbatore-641039.',
                'pin_code'=>'641039',
                'country_id'=>$countryId,
                'state_id'=>$stateId,
                'created_at'=>$currentDateTime,
                'updated_at'=>$currentDateTime
            ],
         );  
         DB::table('companies')->insert($users); 
    }
}
