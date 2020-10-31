<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CustomerController extends Controller
{
    // Add Customer.
    public function add(Request $request){

        $validator=\Validator::make($request->all(),[
            'name'=>'required',
            'email'=>'nullable|email',
            'contact_number'=>'nullable',
            'mobile_number'=>'nullable',
            'address'=>'nullable',
            'city'=>'nullable',
            'pin_code'=>'nullable',
            'state_id'=>'nullable|numeric',
            'country_id'=>'nullable|numeric',
            'fax'=>'nullable',
            'customer_group'=>'nullable',
            'opening_balance'=>'nullable',
            'credit_limit'=>'nullable',
            'due_days'=>'nullable',
            'sales_type'=>'nullable',
            'gstin'=>'nullable',
            'pan_no'=>'nullable',
            'print_name'=>'nullable',
            'contact_person'=>'nullable',
            'status'=>'nullable',
            'sms_alert'=>'nullable'
        ]);
        
        if($validator->fails()){
            return response()->json([
                'validation_error'=> $validator->errors()
            ],200);          
        }else{          
            $customer=new \App\Customer;
            $customer->name=$request->name;
            $customer->email=$request->email;
            $customer->contact_number=$request->contact_number;
            $customer->mobile_number=$request->mobile_number;
            $customer->address=$request->address;
            $customer->city=$request->city;
            $customer->pin_code=$request->pin_code;
            $customer->state_id=$request->state_id;
            $customer->country_id=$request->country_id;
            $customer->fax=$request->fax;
            $customer->customer_group=$request->customer_group;
            $customer->opening_balance=$request->opening_balance;
            $customer->credit_limit=$request->credit_limit;
            $customer->due_days=$request->due_days;
            $customer->sales_type=$request->sales_type;
            $customer->gstin=$request->gstin;
            $customer->pan_no=$request->pan_no;
            $customer->print_name=$request->print_name;
            $customer->status=$request->is_active?true:false;
            $customer->sms_alert=$request->sms_alert?true:false;
            $customer->contact_person=$request->contact_person;
            $customer->save();

            return response()->json([
                'success'=>true,
                'message'=>'Customer details created successfully!'                
            ]);
        }
    }

    // Edit Product.
    public function edit(Request $request){

       // return response()->json($request);

        $validator=\Validator::make($request->all(),[
            'name'=>'required',
            'contact_person'=>'nullable',
            'email'=>'nullable|email',
            'contact_number'=>'nullable',
            'mobile_number'=>'nullable',
            'address'=>'nullable',
            'city'=>'nullable',
            'pin_code'=>'nullable',
            'state_id'=>'nullable|numeric',
            'country_id'=>'nullable|numeric',
            'fax'=>'nullable',
            'customer_group'=>'nullable',
            'opening_balance'=>'nullable',
            'credit_limit'=>'nullable',
            'due_days'=>'nullable',
            'sales_type'=>'nullable',
            'gstin'=>'nullable',
            'pan_no'=>'nullable',
            'print_name'=>'nullable',
            'status'=>'nullable',
            'sms_alert'=>'nullable'
        ]);
        
        if($validator->fails()){
            return response()->json([
                'validation_error'=> $validator->errors()
            ],200);          
        }else{
           
            $customer=\App\Customer::find($request->id);
            $customer->name=$request->name;
            $customer->contact_person=$request->contact_person;
            $customer->email=$request->email;
            $customer->contact_number=$request->contact_number;
            $customer->mobile_number=$request->mobile_number;
            $customer->address=$request->address;
            $customer->city=$request->city;
            $customer->pin_code=$request->pin_code;
            $customer->state_id=$request->state_id;
            $customer->country_id=$request->country_id;
            $customer->fax=$request->fax;
            $customer->customer_group=$request->customer_group;
            $customer->opening_balance=$request->opening_balance;
            $customer->credit_limit=$request->credit_limit;
            $customer->due_days=$request->due_days;
            $customer->sales_type=$request->sales_type;
            $customer->gstin=$request->gstin;
            $customer->pan_no=$request->pan_no;
            $customer->print_name=$request->print_name;
            $customer->status=$request->is_active?true:false;
            $customer->sms_alert=$request->sms_alert?true:false;
            $customer->save();

            return response()->json([
                'success'=>true,
                'message'=>'Customer details updated successfully!'                
            ]);
            
        }
    }

    public function searchCustomer(Request $request){

        if($search=$request->search){

            $customerDetails=\App\Customer::selectRaw('customers.id, customers.name, customers.email, customers.contact_number, customers.mobile_number, customers.address, customers.city, customers.state_id, customers.country_id, customers.gstin')
            ->leftJoin('states','states.id','=','customers.state_id')
            ->leftJoin('countries','countries.id','=','customers.country_id');
            //->where([['customers.status','=','1']]);

            $searchColumns=['customers.name','customers.email','customers.mobile_number','customers.contact_number','concat(customers.name," - ",customers.contact_number)','concat(customers.name,"-",customers.mobile_number)'];
            $searchText=strtolower($search); 
            $param=[$searchText,$searchColumns];   

            $customerDetails->where(function ($customerDetails) use($param) { 
                $searchColumns= $param[1];
                $searchText=$param[0]; 
                for($i=0; $i<count($searchColumns); $i++){
                    $column=$searchColumns[$i];
                    if($i==0){
                        $customerDetails->whereRaw("LOWER(".$column.") LIKE '%".$searchText."%'");
                    }else{
                        $customerDetails->orWhereRaw("LOWER(".$column.") LIKE '%".$searchText."%'");
                    }                   
                }
            }); 

            if($searchList=$customerDetails->limit(40)->get()){
                $resultSuggestions=[];
                foreach($searchList as $list){
                   $contact=$list->mobile_number?$list->mobile_number:$list->contact_number;
                   $list->suggestion_label=$contact?$list->name."-$contact":$list->name;
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

    // Countries
    public function countries(Request $request){
		
		if($countries=\App\Country::get()){
			
			return response()->json(
			[
				'success'=>true,
				'message'=>'Result found!',
				'countries'=>$countries
			]
			);
			
		}else{
			return response()->json(
			[
				'success'=>false,
				'message'=>'Result not found!'
			]
			);
		}
	}
    
    // States
	public function states(Request $request){
		
		if($states=\App\State::get()){
			
			return response()->json(
			[
				'success'=>true,
				'message'=>'Result found!',
				'states'=>$states
			]
			);
			
		}else{
			return response()->json(
			[
				'success'=>false,
				'message'=>'Result not found!'
			]
			);
		}
	}

    // Customers List
    public function customersList(Request $request){

        $draw=$request->input('draw');
        $columns=$request->input('columns');
        $length=$request->input('length');
        $search=$request->input('search');
        $order=$request->input('order');
        $start=$request->input('start');       

        if($order[0]['column']==1){	
            $columnName='customers.name';			
            $columnOrder=$order[0]['dir'];
        }else if($order[0]['column']==2){	
            $columnName='customers.email';			
            $columnOrder=$order[0]['dir'];
        }else if($order[0]['column']==3){	
            $columnName='customers.contact_number';			
            $columnOrder=$order[0]['dir'];
        }else if($order[0]['column']==4){	
            $columnName='customers.mobile_number';			
            $columnOrder=$order[0]['dir'];
        }else if($order[0]['column']==5){	
            $columnName='customers.city';			
            $columnOrder=$order[0]['dir'];
        }else if($order[0]['column']==6){	
            $columnName='countries.name';			
            $columnOrder=$order[0]['dir'];
        }else if($order[0]['column']==7){	
            $columnName='states.name';			
            $columnOrder=$order[0]['dir'];
        }else if($order[0]['column']==8){	
            $columnName='customers.fax';			
            $columnOrder=$order[0]['dir'];
        }else if($order[0]['column']==9){	
            $columnName='customers.customer_group';			
            $columnOrder=$order[0]['dir'];
        }else if($order[0]['column']==10){	
            $columnName='customers.opening_balance';			
            $columnOrder=$order[0]['dir'];
        }else if($order[0]['column']==11){	
            $columnName='customers.credit_limit';			
            $columnOrder=$order[0]['dir'];
        }else if($order[0]['column']==12){	
            $columnName='customers.due_days';			
            $columnOrder=$order[0]['dir'];
        }else if($order[0]['column']==13){	
            $columnName='customers.sales_type';			
            $columnOrder=$order[0]['dir'];
        }else if($order[0]['column']==14){	
            $columnName='customers.gstin';			
            $columnOrder=$order[0]['dir'];
        }else if($order[0]['column']==15){	
            $columnName='customers.pan_no';			
            $columnOrder=$order[0]['dir'];
        }else if($order[0]['column']==16){	
            $columnName='customers.print_name';			
            $columnOrder=$order[0]['dir'];
        }else{
            $columnName='customers.created_at';			
            $columnOrder='desc';
        }

        $searchColumns=array('customers.name','customers.email','customers.contact_number','customers.mobile_number','customers.city','countries.name','states.name','customers.fax','customers.customer_group','customers.opening_balance','customers.credit_limit','customers.due_days','customers.sales_type','customers.gstin','customers.pan_no','customers.print_name');

        $totalCount=\App\Customer::count();
        $response=array(
            'success'=>true,
            'message'=>'Result Found!',
            "draw"=>(int)$draw,
			"recordsTotal"=>(int)$totalCount,
  			"recordsFiltered"=>(int)$totalCount,
            'data'=>[],
        );      

        $paginationResult=\App\Customer::selectRaw('customers.id,customers.name,customers.email,customers.contact_number,customers.mobile_number,customers.city,countries.name as country_name,states.name as state_name,customers.fax,customers.customer_group,customers.opening_balance,customers.credit_limit,customers.due_days,customers.sales_type,customers.gstin,customers.pan_no,customers.print_name,customers.country_id,customers.state_id,customers.address,customers.pin_code,customers.sms_alert,customers.contact_person')
        ->leftJoin('countries','countries.id','=','customers.country_id')
        ->leftJoin('states','states.id','=','customers.state_id');

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
                <a title="Remove" data-id="'.$row->id.'" href="'.route('deleteCustomer',['id'=>$row->id]).'" class="btn btn-danger btn-circle btn-sm btn-delete"><i class="fas fa-trash"></i></a>';
                
                $response['data'][]=array(                    
                    'sno'=>++$i,
                    'id'=>$row->id,                   
                    'name'=>$row->name,  
                    'email'=>$row->email,
                    'contact_number'=>$row->contact_number,
                    'mobile_number'=>$row->mobile_number,
                    'address'=>$row->address,
                    'city'=>$row->city,
                    'country'=>$row->country_name,
                    'state'=>$row->state_name,
                    'fax'=>$row->fax,
                    'customer_group'=>$row->customer_group,
                    'credit_limit'=>$row->credit_limit,
                    'due_days'=>$row->due_days,
                    'sales_type'=>$row->sales_type,
                    'opening_balance'=>$row->opening_balance,
                    'gstin'=>$row->gstin,
                    'pan_no'=>$row->pan_no,  
                    'print_name'=>$row->print_name,  
                    'country_id'=>$row->country_id,
                    'state_id'=>$row->state_id,  
                    'pin_code'=>$row->pin_code, 
                    'sms_alert'=>$row->sms_alert?'Yes':'No',  
                    'contact_person'=>$row->contact_person,   
                    'menu'=>$menu
                );
            }           
        }        
        return response()->json($response); 
    }

    public function customer($id){
        $customerDetails=\App\Customer::selectRaw('customers.id,customers.name,customers.email,customers.contact_number,customers.mobile_number,customers.city,countries.name as country_name,states.name as state_name,customers.fax,customers.customer_group,customers.opening_balance,customers.credit_limit,customers.due_days,customers.sales_type,customers.gstin,customers.pan_no,customers.print_name,customers.country_id,customers.state_id,customers.address,customers.pin_code,customers.status,customers.sms_alert,customers.contact_person')
        ->leftJoin('countries','countries.id','=','customers.country_id')
        ->leftJoin('states','states.id','=','customers.state_id')->where('customers.id',$id)->first();

        if($customerDetails){

            return response()->json(
                [
                    'success' => true,
                    'message' => 'Result found!',
                    'data' => $customerDetails
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

    public function delete(Request $request){
        try{
            \App\Customer::find($request->id)->delete(); 
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
