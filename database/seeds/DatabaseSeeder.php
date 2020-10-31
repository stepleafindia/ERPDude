<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UserSeeder::class);
        $this->call(CountrySeeder::class);
        $this->call(StateSeeder::class);
        $this->call(ProductCategorySeeder::class);
        $this->call(ProductSubCategorySeeder::class);
        $this->call(BrandSeeder::class);
        $this->call(UnitSeeder::class);
        $this->call(GstTaxSeeder::class);
        $this->call(SaleSeeder::class);
        //$this->call(CompanySeeder::class);      
        //$this->call(TaxSettingSeeder::class);       
        Artisan::call('passport:install');
    }
}
