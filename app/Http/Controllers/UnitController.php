<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UnitController extends Controller
{
    // Add Product Units
    public function add(Request $request){
		
        $validator=\Validator::make($request->all(),[
            'code'=>'required|max:20',
            'name'=>'required'
        ]);
        $validator->after(function($validator) use($request){
            if($unit=\App\Unit::where('code',$request->code)->first()){
                $validator->errors()->add('code','Unit code already exist!');
            }
        });

        if($validator->fails()){
            return response()->json([
                'validation_error'=> $validator->errors()
            ],200);
          
        }else{

            $unit=new \App\Unit;
            $unit->code=$request->code;
            $unit->name=$request->name;
            $unit->save();

            return response()->json([
                'success'=> true,
                'message'=>'Product Unit Successfully Inserted!'
            ],200);
        }        
    }

    public function edit(Request $request){
        $validator=\Validator::make($request->all(),[
            'code'=>'required|max:20',
            'name'=>'required'
        ]);
        $validator->after(function($validator) use($request){
            $where=[
                ['code','=',$request->code],
                ['id','!=',$request->id]
            ];
            if($unit=\App\Unit::where($where)->first()){
                $validator->errors()->add('name','Unit code already exist!');
            }
        });

        if($validator->fails()){
            return response()->json([
                'validation_error'=> $validator->errors()
            ],200);
          
        }else{
            $unit=\App\Unit::find($request->id);
            $unit->name=$request->name;
            $unit->code=$request->code;
            $unit->save();

            return response()->json([
                'success'=> true,
                'message'=>'Product Unit Successfully Updated!'
            ],200);
        } 
    }

    public function delete(Request $request){
        try{
            \App\Unit::find($request->id)->delete(); 
            return response()->json([
                'success'=> true,
                'message'=>'Product Unit Successfully Removed!'
            ],200);
        }catch(\Exception $e){
            return response()->json([
                'success'=> false,
                'message'=>$e->getMessage()
            ],200);
        }
    }

    public function unitsList(Request $request){
        $draw=$request->input('draw');
        $columns=$request->input('columns');
        $length=$request->input('length');
        $search=$request->input('search');
        $order=$request->input('order');
        $start=$request->input('start');       

        if($order[0]['column']==1){	
            $columnName='units.code';			
            $columnOrder=$order[0]['dir'];
        }else if($order[0]['column']==2){	
            $columnName='units.name';			
            $columnOrder=$order[0]['dir'];
        }else{
            $columnName='units.created_at';			
            $columnOrder='desc';
        }

        $searchColumns=array('units.code','units.name');

        $totalCount=\App\Unit::count();
        $response=array(
            'success'=>true,
            'message'=>'Result Found!',
            "draw"=>(int)$draw,
			"recordsTotal"=>(int)$totalCount,
  			"recordsFiltered"=>(int)$totalCount,
            'data'=>[],
        );      

        $paginationResult=\App\Unit::select('units.id','units.name','units.code');                      
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
                       <a title="Remove" href="'.route('deleteUnit',['id'=>$row->id]).'" class="btn btn-danger btn-circle btn-sm btn-delete"><i class="fas fa-trash"></i></a>';
                
                $response['data'][]=array(                    
                    'sno'=>++$i,
                    'id'=>$row->id,                   
                    'name'=>$row->name,  
                    'code'=>$row->code,                     
                    'menu'=>$menu
                );
            }           
        }        
        return response()->json($response); 
    }

    public function units(Request $request){
        if($units=\App\Unit::get()){
            return response()->json(
                [
                    'success'=>true,
                    'data'=>$units,
                    'message'=>'Result found!'
                ]
            );
        }else{
            return response()->json(
                [
                    'success'=>false,
                    'data'=>[],
                    'message'=>'Units not available!'
                ]
            );
        }
    }
}
