<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductController extends Controller
{
    // Add Product.
    public function add(Request $request){
        $validator=\Validator::make($request->all(),[
            'name'=>'required',
            'hsn'=>'nullable',
            'category_id'=>'required|numeric',
            'sub_category_id'=>'nullable|numeric',
            'brand_id'=>'required|numeric',
            'unit_id'=>'required|numeric',
            'style'=>'nullable',
            'image'=>'nullable|mimes:jpeg,png,jpg|max:2048',
            'mrp'=>'nullable|numeric',
            'cost_price'=>'required|numeric',
            'selling_price'=>'required|numeric',
            'discount'=>'nullable|numeric',
            'sales_gst_id'=>'nullable|numeric'
        ]);
        
        if($validator->fails()){
            return response()->json([
                'validation_error'=> $validator->errors()
            ],200);          
        }else{
            $productImage=null;
            /*if($request->hasFile('image')){
                $extension = $request->file('image')->getClientOriginalExtension();
                $productImage = 'product_'.time().'.'.$extension;
                $productImagePath = $request->file('image')->storeAs('uploads/products/images/',$productImage);
            }*/
            if($request->image_src){
                $img = preg_replace('/^data:image\/\w+;base64,/', '', $request->image_src);
                $type = explode(';', $request->image_src)[0];
                $extension = explode('/', $type)[1]; // png or jpg etc
                $productImage = 'product_'.time().'.'.$extension;
                \File::put(public_path('storage/uploads/products/images'). '/' . $productImage, base64_decode($img));
            }

            $product=new \App\Product;
            $product->name=$request->name;
            $product->hsn=$request->hsn;
            if($request->barcode){
                $product->barcode=$request->barcode;
                $product->barcode_type=$request->barcode_type;
            }            
            $product->category_id=$request->category_id;
            $product->sub_category_id=$request->sub_category_id;
            $product->brand_id=$request->brand_id;
            $product->unit_id=$request->unit_id;
            $product->style=$request->style;
            $product->image=$productImage;
            $product->save();

            $productPrice=new \App\ProductPrice;
            $productPrice->product_id= $product->id;
            $productPrice->mrp= $request->mrp;                    
            $productPrice->cost_price= $request->cost_price;
            $productPrice->selling_price= $request->selling_price;
            $productPrice->discount_percentage=$request->discount;
            $productPrice->sales_gst_tax_id=$request->sales_gst_id;
            $productPrice->save();

            return response()->json([
                'success'=>true,
                'message'=>'Product details created successfully!'                
            ]);
        }
    }

    // Edit Product.
    public function edit(Request $request){
        $validator=\Validator::make($request->all(),[
            'name'=>'required',
            'hsn'=>'nullable',
            'category_id'=>'required|numeric',
            'sub_category_id'=>'nullable|numeric',
            'brand_id'=>'required|numeric',
            'unit_id'=>'required|numeric',
            'style'=>'nullable',
            'image'=>'nullable|mimes:jpeg,png,jpg|max:2048',
            'mrp'=>'nullable|numeric',
            'cost_price'=>'required|numeric',
            'selling_price'=>'required|numeric',
            'discount'=>'nullable|numeric',
            'sales_gst_id'=>'nullable|numeric'
        ]);
        
        if($validator->fails()){
            return response()->json([
                'validation_error'=> $validator->errors()
            ],200);          
        }else{

            if($productDetails=\App\Product::selectRaw('products.id,product_prices.id as price_id,products.image')
            ->join('product_prices','product_prices.product_id','=','products.id')->where('products.id',$request->id)->first()){
   
            $productImage=null;            
            if($request->image_src){
                $img = preg_replace('/^data:image\/\w+;base64,/', '', $request->image_src);
                $type = explode(';', $request->image_src)[0];
                $extension = explode('/', $type)[1]; // png or jpg etc
                $productImage = 'product_'.time().'.'.$extension;
                \File::put(public_path('storage/uploads/products/images'). '/' . $productImage, base64_decode($img));
                if($productDetails->image){
                    $prevImg=public_path('storage/uploads/products/images'). '/' .$productDetails->image;
                    \File::delete($prevImg);
                }                
            }

            $product=\App\Product::find($request->id);
            $product->name=$request->name;
            $product->hsn=$request->hsn;
            $product->barcode=$request->barcode;
            $product->barcode_type=$request->barcode_type;
            $product->category_id=$request->category_id;
            $product->sub_category_id=$request->sub_category_id;
            $product->brand_id=$request->brand_id;
            $product->unit_id=$request->unit_id;
            $product->style=$request->style;
            if($productImage){
                $product->image=$productImage;
            }            
            $product->save();
          
            $productPrice=\App\ProductPrice::find($productDetails->price_id);          
            $productPrice->mrp= $request->mrp;
            $productPrice->cost_price= $request->cost_price;
            $productPrice->selling_price= $request->selling_price;
            $productPrice->discount_percentage=$request->discount;
            $productPrice->sales_gst_tax_id=$request->sales_gst_id;
            $productPrice->save();

            return response()->json([
                'success'=>true,
                'message'=>'Product details updated successfully!'                
            ]);

            }else{                
                return response()->json([
                    'success'=>false,
                    'message'=>'Invalid Product Details.'                
                ]);
            }
        }
    }

    // Products List
    public function productsList(Request $request){
        $draw=$request->input('draw');
        $columns=$request->input('columns');
        $length=$request->input('length');
        $search=$request->input('search');
        $order=$request->input('order');
        $start=$request->input('start');       

        if($order[0]['column']==1){	
            $columnName='products.name';			
            $columnOrder=$order[0]['dir'];
        }else if($order[0]['column']==2){	
            $columnName='products.hsn';			
            $columnOrder=$order[0]['dir'];
        }else if($order[0]['column']==3){	
            $columnName='product_categories.name';			
            $columnOrder=$order[0]['dir'];
        }else if($order[0]['column']==4){	
            $columnName='product_sub_categories.name';			
            $columnOrder=$order[0]['dir'];
        }else if($order[0]['column']==5){	
            $columnName='brands.name';			
            $columnOrder=$order[0]['dir'];
        }else if($order[0]['column']==5){	
            $columnName='units.name';			
            $columnOrder=$order[0]['dir'];
        }else if($order[0]['column']==6){	
            $columnName='product_prices.mrp';			
            $columnOrder=$order[0]['dir'];
        }else if($order[0]['column']==7){	
            $columnName='product_prices.cost_price';			
            $columnOrder=$order[0]['dir'];
        }else if($order[0]['column']==8){	
            $columnName='product_prices.selling_price';			
            $columnOrder=$order[0]['dir'];
        }else if($order[0]['column']==9){	
            $columnName='product_prices.discount_percentage';			
            $columnOrder=$order[0]['dir'];
        }else if($order[0]['column']==10){	
            $columnName='gst_taxes.name';			
            $columnOrder=$order[0]['dir'];
        }else{
            $columnName='products.created_at';			
            $columnOrder='desc';
        }

        $searchColumns=array('products.name','products.hsn','product_prices.mrp','product_prices.cost_price','product_prices.selling_price','product_prices.discount_percentage',
        'gst_taxes.name','product_categories.name','product_sub_categories.name','brands.name','units.name');

        $totalCount=\App\Product::count();
        $response=array(
            'success'=>true,
            'message'=>'Result Found!',
            "draw"=>(int)$draw,
			"recordsTotal"=>(int)$totalCount,
  			"recordsFiltered"=>(int)$totalCount,
            'data'=>[],
        );      

        $paginationResult=\App\Product::select('products.id','products.name','products.hsn','product_prices.mrp','product_prices.cost_price','product_prices.selling_price','product_prices.discount_percentage',
        'products.created_at','products.status','products.barcode','products.barcode_type')
        ->selectRaw('product_categories.name as category,product_sub_categories.name as sub_category,brands.name as brand,units.name as unit,gst_taxes.name as sales_gst')
        ->join('product_prices','product_prices.product_id','=','products.id')
        ->join('product_categories','product_categories.id','=','products.category_id')
        ->join('brands','brands.id','=','products.brand_id')
        ->join('units','units.id','=','products.unit_id')
        ->leftJoin('product_sub_categories','product_sub_categories.id','=','products.sub_category_id')
        ->leftJoin('gst_taxes','gst_taxes.id','=','product_prices.sales_gst_tax_id');

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
                $menu='<a title="Edit" data-id="'.$row->id.'" class="btn btn-info btn-circle btn-sm btn-edit" href="#"><i class="fas fa-edit"></i></a>
                <a title="Remove" data-id="'.$row->id.'" href="'.route('deleteProduct',['id'=>$row->id]).'" class="btn btn-danger btn-circle btn-sm btn-delete"><i class="fas fa-trash"></i></a>';
                
                $response['data'][]=array(                    
                    'sno'=>++$i,
                    'id'=>$row->id,                   
                    'name'=>$row->name,  
                    'brand'=>$row->brand,
                    'category'=>$row->category,
                    'sub_category'=>$row->sub_category,
                    'unit'=>$row->unit,
                    'hsn'=>$row->hsn,
                    'mrp'=>$row->mrp,
                    'selling_price'=>$row->selling_price,
                    'cost_price'=>$row->cost_price,
                    'discount_percentage'=>$row->discount_percentage,
                    'sales_gst'=>$row->sales_gst,               
                    'menu'=>$menu
                );
            }           
        }        
        return response()->json($response); 
    }

    public function product($id){
        $productDetails=\App\Product::select('products.id','products.name','products.hsn','product_prices.mrp','product_prices.cost_price','product_prices.selling_price','product_prices.discount_percentage',
        'products.created_at','products.status', 'products.category_id','products.sub_category_id','products.brand_id','product_prices.sales_gst_tax_id','products.image','products.unit_id','products.style','products.barcode','products.barcode_type')
        ->join('product_prices','product_prices.product_id','=','products.id')->where('products.id',$id)->first();

        if($productDetails){

            $productDetails->image=$productDetails->image?asset('storage/uploads/products/images/'.$productDetails->image):null;
            $productDetails->margin= (($productDetails->selling_price-$productDetails->cost_price)/$productDetails->cost_price) * 100;
            return response()->json(
                [
                    'success' => true,
                    'message' => 'Result found!',
                    'data' => $productDetails
                ]
            );


        }else{
            return response()->json(
                [
                    'success' => false,
                    'message' => 'Sorry! Invalid Product.'
                ]
            );
        } 
    }

    public function searchProduct(Request $request){
        if($search=$request->search){
            $productDetails=\App\Product::selectRaw('products.id as product_id, products.name as product_name, product_prices.mrp, product_prices.cost_price, product_prices.selling_price, product_prices.discount_percentage, product_prices.sales_gst_tax_id, products.image, products.barcode, products.barcode_type, gst_taxes.cgst, gst_taxes.igst, gst_taxes.sgst, units.name as unit_name, units.code as unit_code, products.unit_id')
            ->join('product_prices','product_prices.product_id','=','products.id')
            ->leftJoin('gst_taxes','gst_taxes.id','=','product_prices.sales_gst_tax_id')
            ->leftJoin('units','units.id','=','products.unit_id')
            ->where([['products.status','=','1']]);

            $searchColumns=['products.id','products.name','products.barcode','concat(products.id,"-",products.name)'];
            $searchText=strtolower($search); 
            $param=[$searchText,$searchColumns];   

            $productDetails->where(function ($productDetails) use($param) { 
                $searchColumns= $param[1];
                $searchText=$param[0]; 
                for($i=0; $i<count($searchColumns); $i++){
                    $column=$searchColumns[$i];
                    if($i==0){
                        $productDetails->whereRaw("LOWER(".$column.") LIKE '%".$searchText."%'");
                    }else{
                        $productDetails->orWhereRaw("LOWER(".$column.") LIKE '%".$searchText."%'");
                    }                   
                }
            }); 
            if($searchList=$productDetails->limit(40)->get()){
                $resultSuggestions=[];
                foreach($searchList as $list){
                   $list->quantity=1;
                   $list->suggestion_label=$list->product_id."-".$list->product_name;
                   $resultSuggestions[]= $list;
                }
                return response()->json(
                    [
                        'success' => true,
                        'message' => 'Result found!',
                        'data' => $resultSuggestions
                    ]
                );
            }

        }

        return response()->json(
            [
                'success' => false,
                'search' => $request->search,
                'message' => 'No Result Found!'
            ]
        );        
    }

    public function delete(Request $request){
        try{
            \App\Product::find($request->id)->delete(); 
            return response()->json([
                'success'=> true,
                'message'=>'Product Category Successfully Removed!'
            ],200);
        }catch(\Exception $e){
            return response()->json([
                'success'=> false,
                'message'=>$e->getMessage()
            ],200);
        }
    }






}
