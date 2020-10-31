<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TaxController extends Controller
{
    // Add GST Tax    
    public function add(Request $request){
		
        $validator=\Validator::make($request->all(),[
            'name'=>'required',
            'type'=>'required',
            'cgst'=>'required|numeric',
            'igst'=>'required|numeric',
            'sgst'=>'required|numeric'            
        ]);
        $validator->after(function($validator) use($request){
            if($gstTax=\App\GstTax::where('name',$request->name)->first()){
                $validator->errors()->add('name','GST Tax name already exist!');
            }
        });

        if($validator->fails()){
            return response()->json([
                'validation_error'=> $validator->errors()
            ],200);          
        }else{
            $gstTax=new \App\GstTax;
            $gstTax->name=$request->name;
            $gstTax->type=$request->type;
            $gstTax->cgst=$request->cgst;
            $gstTax->igst=$request->igst;
            $gstTax->sgst=$request->sgst;
            $gstTax->save();

            return response()->json([
                'success'=> true,
                'message'=>'GST Tax Successfully Created!'
            ],200);
        } 

    }

    // Edit GST Tax
    public function edit(Request $request){
		
        $validator=\Validator::make($request->all(),[
            'name'=>'required',
            'type'=>'required',
            'cgst'=>'required|numeric',
            'igst'=>'required|numeric',
            'sgst'=>'required|numeric'            
        ]);
        $validator->after(function($validator) use($request){
            $where=[['name','=',$request->name],['id','!=',$request->id]];
            if($gstTax=\App\GstTax::where($where)->first()){
                $validator->errors()->add('name','GST Tax name already exist!');
            }
        });

        if($validator->fails()){
            return response()->json([
                'validation_error'=> $validator->errors()
            ],200);          
        }else{
            $gstTax=\App\GstTax::find($request->id);
            $gstTax->name=$request->name;
            $gstTax->type=$request->type;
            $gstTax->cgst=$request->cgst;
            $gstTax->igst=$request->igst;
            $gstTax->sgst=$request->sgst;
            $gstTax->save();

            return response()->json([
                'success'=> true,
                'message'=>'GST Tax Successfully Updated!'
            ],200);
        } 

    }

    // Delete GST Tax
    public function delete(Request $request){
        try{
            \App\GstTax::find($request->id)->delete(); 
            return response()->json([
                'success'=> true,
                'message'=>'GST Tax Successfully Removed!'
            ],200);
        }catch(\Exception $e){
            return response()->json([
                'success'=> false,
                'message'=>$e->getMessage()
            ],200);
        }
    }

    // GST TaxList
    public function gstTaxList(Request $request){
        $draw=$request->input('draw');
        $columns=$request->input('columns');
        $length=$request->input('length');
        $search=$request->input('search');
        $order=$request->input('order');
        $start=$request->input('start');       

        if($order[0]['column']==1){	
            $columnName='gst_taxes.name';			
            $columnOrder=$order[0]['dir'];
        }else if($order[0]['column']==2){	
            $columnName='gst_taxes.type';			
            $columnOrder=$order[0]['dir'];
        }else if($order[0]['column']==3){	
            $columnName='gst_taxes.cgst';			
            $columnOrder=$order[0]['dir'];
        }else if($order[0]['column']==4){	
            $columnName='gst_taxes.igst';			
            $columnOrder=$order[0]['dir'];
        }else if($order[0]['column']==5){	
            $columnName='gst_taxes.sgst';			
            $columnOrder=$order[0]['dir'];
        }else{
            $columnName='gst_taxes.created_at';			
            $columnOrder='desc';
        }

        $searchColumns=array('gst_taxes.name','gst_taxes.type','gst_taxes.cgst','gst_taxes.igst','gst_taxes.sgst');

        $totalCount=\App\GstTax::count();
        $response=array(
            'success'=>true,
            'message'=>'Result Found!',
            "draw"=>(int)$draw,
			"recordsTotal"=>(int)$totalCount,
  			"recordsFiltered"=>(int)$totalCount,
            'data'=>[],
        );      

        $paginationResult=\App\GstTax::select('gst_taxes.id','gst_taxes.name','gst_taxes.type','gst_taxes.cgst','gst_taxes.igst','gst_taxes.sgst','gst_taxes.created_at');                      
        if($search['value']!=""){

            $searchText=strtolower($search['value']); 
            $param=[$searchText,$searchColumns];           
            $paginationResult->where(function ($paginationResult) use($param) { 
                $searchColumns= $param[1];
                $searchText=$param[0]; 
                for($i=0; $i<count($searchColumns); $i++){
                    $column=$searchColumns[$i];
                    if($i==0){
                        $paginationResult->whereRaw("LOWER(".$column.") LIKE '%".$searchText."%'");
                    }else{
                        $paginationResult->orWhereRaw("LOWER(".$column.") LIKE '%".$searchText."%'");
                    }                   
                }
            });        

        }

        if($paginationList=$paginationResult->orderBy($columnName,$columnOrder)->offset($start)->limit($length)->get()){            
            $i=$start;
            foreach($paginationList as $row){
                $menu='<a title="Edit" class="btn btn-info btn-circle btn-sm btn-edit" href="#"><i class="fas fa-edit"></i></a>
                       <a title="Remove" href="'.route('deleteGstTax',['id'=>$row->id]).'" class="btn btn-danger btn-circle btn-sm btn-delete"><i class="fas fa-trash"></i></a>';
                
                $response['data'][]=array(                    
                    'sno'=>++$i,
                    'id'=>$row->id,                   
                    'name'=>$row->name,    
                    'type'=>$row->type,
                    'cgst'=>$row->cgst,
                    'igst'=>$row->igst,
                    'sgst'=>$row->sgst,              
                    'menu'=>$menu
                );
            }           
        }        
        return response()->json($response); 
    }

    public function gstTaxes(Request $request){
        if($taxes=\App\GstTax::get()){
            return response()->json(
                [
                    'success'=>true,
                    'data'=>$taxes,
                    'message'=>'Result found!'
                ]
            );
        }else{
            return response()->json(
                [
                    'success'=>false,
                    'data'=>[],
                    'message'=>'GstTax not available!'
                ]
            );
        }
    }



}
