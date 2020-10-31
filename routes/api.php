<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => 'auth:api'], function() {
	Route::get('countries', 'CustomerController@countries');
    Route::get('states', 'CustomerController@states');
    Route::get('bill-setting','BillSettingController@setting');

    Route::get('product/categories-list', 'ProductCategoryController@categories');
    Route::post('product/categories', 'ProductCategoryController@categoriesList');
    Route::post('product/category', 'ProductCategoryController@add');
    Route::post('product/category/{id}', 'ProductCategoryController@edit');
    Route::delete('product/category/{id}', 'ProductCategoryController@delete')->name('deleteCategory');  
      
    Route::get('product/sub-categories-list', 'ProductSubCategoryController@subCategories');
    Route::post('product/sub-categories', 'ProductSubCategoryController@categoriesList');
    Route::post('product/sub-category', 'ProductSubCategoryController@add');
    Route::post('product/sub-category/{id}', 'ProductSubCategoryController@edit');
    Route::delete('product/sub-category/{id}', 'ProductSubCategoryController@delete')->name('deleteSubCategory');    
   
    Route::get('product/brands-list', 'BrandController@brands');
    Route::post('product/brands', 'BrandController@brandsList');
    Route::post('product/brand', 'BrandController@add');
    Route::post('product/brand/{id}', 'BrandController@edit');
    Route::delete('product/brand/{id}', 'BrandController@delete')->name('deleteBrand');    
  
    Route::get('product/units-list', 'UnitController@units');
    Route::post('product/units', 'UnitController@unitsList');
    Route::post('product/unit', 'UnitController@add');
    Route::post('product/unit/{id}', 'UnitController@edit');
    Route::delete('product/unit/{id}', 'UnitController@delete')->name('deleteUnit'); 
    
    Route::get('gst-taxes-list', 'TaxController@gstTaxes');
    Route::post('gst-taxes', 'TaxController@gstTaxList');
    Route::post('gst-tax', 'TaxController@add');
    Route::post('gst-tax/{id}', 'TaxController@edit');
    Route::delete('gst-tax/{id}', 'TaxController@delete')->name('deleteGstTax'); 

    Route::post('products', 'ProductController@productsList');
    Route::post('product/search', 'ProductController@searchProduct');    
    Route::post('product', 'ProductController@add');
    Route::post('product/{id}', 'ProductController@edit');
    Route::get('product/{id}', 'ProductController@product');
    Route::delete('product/{id}/delete', 'ProductController@delete')->name('deleteProduct');    
  
    Route::post('customers', 'CustomerController@customersList');
    Route::post('customer/search', 'CustomerController@searchCustomer'); 
    Route::post('customer', 'CustomerController@add');
    Route::post('customer/{id}', 'CustomerController@edit');
    Route::get('customer/{id}', 'CustomerController@customer');
    Route::delete('customer/{id}/delete', 'CustomerController@delete')->name('deleteCustomer');    
  
    Route::get('new-sale','SaleController@newSale');
    Route::post('create-bill', 'SaleController@createBill');
    

});

Route::group(['prefix' => 'auth'], function () {

    Route::post('login', 'AuthController@login');      
    Route::group(['middleware' => 'auth:api'], function() {
        Route::get('logout', 'AuthController@logout');
        Route::get('user', 'AuthController@user');
    });
    
});

Route::get('test-number-word/{num}','SaleController@testNum');