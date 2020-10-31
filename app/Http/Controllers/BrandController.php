<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BrandController extends Controller
{
    // Add Product Brands
    public function add(Request $request){
		
        $validator=\Validator::make($request->all(),[
            'name'=>'required'
        ]);
        $validator->after(function($validator) use($request){
            if($brand=\App\Brand::where('name',$request->name)->first()){
                $validator->errors()->add('name','Brand already exist!');
            }
        });

        if($validator->fails()){
            return response()->json([
                'validation_error'=> $validator->errors()->all()
            ],200);
          
        }else{

            $brand=new \App\Brand;
            $brand->name=$request->name;
            $brand->save();

            return response()->json([
                'success'=> true,
                'message'=>'Product Brand Successfully Inserted!'
            ],200);
        }        
    }

    public function edit(Request $request){
        $validator=\Validator::make($request->all(),[
            'name'=>'required'
        ]);
        $validator->after(function($validator) use($request){
            $where=[
                ['name','=',$request->name],
                ['id','!=',$request->id]
            ];
            if($brand=\App\Brand::where($where)->first()){
                $validator->errors()->add('name','Brand already exist!');
            }
        });

        if($validator->fails()){
            return response()->json([
                'validation_error'=> $validator->errors()->all()
            ],200);
          
        }else{
            $brand=\App\Brand::find($request->id);
            $brand->name=$request->name;
            $brand->save();

            return response()->json([
                'success'=> true,
                'message'=>'Product Brand Successfully Updated!'
            ],200);
        } 
    }

    public function delete(Request $request){
        try{
            \App\Brand::find($request->id)->delete(); 
            return response()->json([
                'success'=> true,
                'message'=>'Product Brand Successfully Removed!'
            ],200);
        }catch(\Exception $e){
            return response()->json([
                'success'=> false,
                'message'=>$e->getMessage()
            ],200);
        }
    }

    public function brandsList(Request $request){
        $draw=$request->input('draw');
        $columns=$request->input('columns');
        $length=$request->input('length');
        $search=$request->input('search');
        $order=$request->input('order');
        $start=$request->input('start');       

        if($order[0]['column']==1){	
            $columnName='brands.name';			
            $columnOrder=$order[0]['dir'];
        }else{
            $columnName='brands.created_at';			
            $columnOrder='desc';
        }

        $searchColumns=array('brands.name');

        $totalCount=\App\Brand::count();
        $response=array(
            'success'=>true,
            'message'=>'Result Found!',
            "draw"=>(int)$draw,
			"recordsTotal"=>(int)$totalCount,
  			"recordsFiltered"=>(int)$totalCount,
            'data'=>[],
        );      

        $paginationResult=\App\Brand::select('brands.id','brands.name');                      
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
                       <a title="Remove" href="'.route('deleteBrand',['id'=>$row->id]).'" class="btn btn-danger btn-circle btn-sm btn-delete"><i class="fas fa-trash"></i></a>';
                
                $response['data'][]=array(                    
                    'sno'=>++$i,
                    'id'=>$row->id,                   
                    'name'=>$row->name,                  
                    'menu'=>$menu
                );
            }           
        }        
        return response()->json($response); 
    }

    public function brands(Request $request){
        if($brands=\App\Brand::get()){
            return response()->json(
                [
                    'success'=>true,
                    'data'=>$brands,
                    'message'=>'Result found!'
                ]
            );
        }else{
            return response()->json(
                [
                    'success'=>false,
                    'data'=>[],
                    'message'=>'Brands not available!'
                ]
            );
        }
    }
}
