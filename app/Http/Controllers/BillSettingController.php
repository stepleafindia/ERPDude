<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BillSettingController extends Controller
{
    // Bill Setting.
    public function setting(Request $request){
        if($setting=\App\BillSetting::first()){
            return response()->json([
                "success"=>true,
                "message"=>"Result found!",
                "data"=>$setting
            ]);
        }else{
            return response()->json([
                "success"=>false,
                "message"=>"Bill Settings not found!"
            ]);
        }
    }
}
