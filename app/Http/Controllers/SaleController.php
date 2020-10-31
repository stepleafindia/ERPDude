<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SaleController extends Controller
{
    // new sale page api.
    public function newSale(Request $request){
        try{
            $gstTaxLists=\App\GstTax::selectRaw("id, name, type, cgst, sgst")->get();
            $states=\App\State::selectRaw("id, name")->get();
            $countries=\App\Country::selectRaw("id, name, code")->get();
            $bill_setting=\App\BillSetting::first();
            if($bill_setting->vendor_logo!=""){
               $bill_setting->vendor_logo=asset('storage/uploads/company/logo/'.$bill_setting->vendor_logo);
            }
            return response()->json([
                    "success"=>true,
                    "gst_tax_lists"=>$gstTaxLists,
                    "states"=>$states,
                    "countries"=>$countries,
                    "bill_setting"=>$bill_setting
            ]);
        }catch(\Exception $e){
            return response()->json([              
                "error"=>$e->getMessage()
            ]);
        }
    }
    
    // insert bill records.
    public function createBill(Request $request){

        $validator=\Validator::make($request->all(),[
            'gross_amount'=>'required',
            'total_discount'=>'nullable|numeric',
            'igst'=>'nullable|numeric',
            'cgst'=>'nullable|numeric',
            'sgst'=>'nullable|numeric',
            'gst_type'=>'nullable',
            'net_amount'=>'required|numeric',
            'round_off'=>'required|numeric',
            'payment_option'=>'required',
            'paid_amount'=>'nullable|numeric',
            'remaining_balance'=>'nullable|numeric',
            'remarks'=>'nullable',
            'customer_id'=>'nullable',
            'bill_items'=>'required|array'          
        ]);

        if($validator->fails()){

            return response()->json([
                'validation_error'=> $validator->errors()
            ],200);  

        }else{           
            $date=\Carbon\Carbon::now("Asia/Kolkata");
            if($date->month>=4){
                $fromDate=$date->year."-04-01 00:00:00";
                $toDate=($date->year+1)."-04-01 23:59:59";
            }else{
                $fromDate=($date->year-1)."-04-01 00:00:00";
                $toDate=$date->year."-04-01 23:59:59";
            }
            //$billCount = collect(\DB::select("SELECT getBillCounts('".$fromDate."','".$toDate."') AS bill_count"))->first()->bill_count;
            $billCount = collect(\DB::select("SELECT count(id) as bill_count  from sales WHERE created_at BETWEEN '".$fromDate."' AND '".$toDate."'"))->first()->bill_count;
            
            $billNumber=$date->year.'/'.$date->month.'/'.str_pad(($billCount+1),5,"0",STR_PAD_LEFT);
            
            $sale=new \App\Sale;
            $sale->bill_no= $billNumber;
            $sale->gross_amount=$request->gross_amount;
            $sale->total_discount=$request->total_discount;
            $sale->sgst=$request->sgst;
            $sale->cgst=$request->cgst;
            $sale->igst=$request->igst;
            $sale->gst_type=$request->gst_type?strtoupper($request->gst_type):null;
            $sale->net_amount=$request->net_amount;
            $sale->round_off=$request->round_off;
            $sale->payment_option=$request->payment_option;
            $sale->paid_amount=$request->paid_amount;
            $sale->remaining_balance=$request->remaining_balance;
            $sale->remarks=$request->remarks;
            $sale->customer_id=$request->customer_id;
            $sale->save();            
           
            if($billItems=$request->bill_items){
                
                foreach($billItems as $item){
                    $item=(object)$item;
                    $discount=($item->discount_percentage>0)?(($item->discount_percentage/100)*$item->selling_price):0;
                    $unit_price=$item->selling_price-$discount;
                    $sgst_amount=null;
                    $cgst_amount=null;
                    $igst_amount=null;
                    $net_amount=$unit_price;
                    if($sale->gst_type=="SGST"){
                        $sgst_amount=($item->sgst/100)*$unit_price; 
                        $cgst_amount=($item->cgst/100)*$unit_price;  
                        $net_amount+=$sgst_amount+$cgst_amount;              
                    }else if($sale->gst_type=="IGST"){
                        $igst_amount=($item->igst/100)*$unit_price; 
                        $net_amount+=$igst_amount;  
                    }

                    $billItem=new \App\BillItem;
                    $billItem->sale_id=$sale->id;
                    $billItem->product_id=$item->product_id;
                    $billItem->quantity=$item->quantity;
                    $billItem->selling_price=$item->selling_price;
                    $billItem->discount=$discount;
                    $billItem->unit_price=$unit_price;
                    $billItem->gst_tax_id=$item->sales_gst_tax_id?$item->sales_gst_tax_id:null;
                    $billItem->cgst=$item->cgst?$cgst_amount:null;
                    $billItem->sgst=$item->sgst?$sgst_amount:null;
                    $billItem->igst=$item->igst?$igst_amount:null;
                    $billItem->net_amount=$net_amount;
                    $billItem->save();
                }               
            }              
            $bill_setting=\App\BillSetting::first();
            $date_format=$bill_setting->bill_date_format?$bill_setting->bill_date_format:"d-m-Y H:i:s";
            return response()->json([
                'success'=>true,
                'message'=>'Sale Bill Created Successfully',
                'sale_id'=>$sale->id,
                'bill_number'=>$billNumber,
                'bill_date'=>date($date_format,strtotime($date))
            ],200); 

        }
    }

    public function testNum($num){
        echo convert_indian_currency_word($num);
    }


}
