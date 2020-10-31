<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductSubCategoryController extends Controller
{
     // Add Product Sub Category
     public function add(Request $request){

        $validator=\Validator::make($request->all(),[
            'name'=>'required'
        ]);
        $validator->after(function($validator) use($request){
            if($category=\App\ProductSubCategory::where('name',$request->name)->first()){
                $validator->errors()->add('name','Sub Category already exist!');
            }
        });

        if($validator->fails()){
            return response()->json([
                'validation_error'=> $validator->errors()->all()
            ],200);
          
        }else{

            $productSubCategory=new \App\ProductSubCategory;
            $productSubCategory->name=$request->name;
            $productSubCategory->save();

            return response()->json([
                'success'=> true,
                'message'=>'Product Sub Category Successfully Created!'
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
            if($category=\App\ProductSubCategory::where($where)->first()){
                $validator->errors()->add('name','Sub Category already exist!');
            }
        });

        if($validator->fails()){
            return response()->json([
                'validation_error'=> $validator->errors()->all()
            ],200);
          
        }else{
            $productSubCategory=\App\ProductSubCategory::find($request->id);
            $productSubCategory->name=$request->name;
            $productSubCategory->save();

            return response()->json([
                'success'=> true,
                'message'=>'Product Sub Category Successfully Updated!'
            ],200);
        } 
    }

    public function delete(Request $request){
        try{
            \App\ProductSubCategory::find($request->id)->delete(); 
            return response()->json([
                'success'=> true,
                'message'=>'Product Sub Category Successfully Removed!'
            ],200);
        }catch(\Exception $e){
            return response()->json([
                'success'=> false,
                'message'=>$e->getMessage()
            ],200);
        }
    }

    public function categoriesList(Request $request){
        $draw=$request->input('draw');
        $columns=$request->input('columns');
        $length=$request->input('length');
        $search=$request->input('search');
        $order=$request->input('order');
        $start=$request->input('start');       

        if($order[0]['column']==1){	
            $columnName='product_sub_categories.name';			
            $columnOrder=$order[0]['dir'];
        }else{
            $columnName='product_sub_categories.created_at';			
            $columnOrder='desc';
        }

        $searchColumns=array('product_sub_categories.name');

        $totalCount=\App\ProductSubCategory::count();
        $response=array(
            'success'=>true,
            'message'=>'Result Found!',
            "draw"=>(int)$draw,
			"recordsTotal"=>(int)$totalCount,
  			"recordsFiltered"=>(int)$totalCount,
            'data'=>[],
        );      

        $paginationResult=\App\ProductSubCategory::select('product_sub_categories.id','product_sub_categories.name');                      
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
                       <a title="Remove" href="'.route('deleteSubCategory',['id'=>$row->id]).'" class="btn btn-danger btn-circle btn-sm btn-delete"><i class="fas fa-trash"></i></a>';
                
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

    public function subCategories(Request $request){
        if($subCategories=\App\ProductSubCategory::get()){
            return response()->json(
                [
                    'success'=>true,
                    'data'=>$subCategories,
                    'message'=>'Result found!'
                ]
            );
        }else{
            return response()->json(
                [
                    'success'=>false,
                    'data'=>[],
                    'message'=>'SubCategories not available!'
                ]
            );
        }
    }


}
