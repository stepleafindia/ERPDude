import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../../../components/Header/Header';
import ConfirmDialog from '../../../components/ConfirmDialog/ConfirmDialog';
import FlashAlert from '../../../components/Alert/FlashAlert';
import { Card, Button, Table } from 'react-bootstrap';
import { apiRoutes,appRoutes } from '../../../Utils';
const createHistory =require('history').createBrowserHistory;
import "datatables.net-bs4/js/dataTables.bootstrap4.js";
import "datatables.net-bs4/css/dataTables.bootstrap4.css";
import "datatables.net-responsive-bs4/js/responsive.bootstrap4.js";
import "datatables.net-responsive-bs4/css/responsive.bootstrap4.css";
import $ from 'jquery';

class Products extends Component {

    constructor(props) {
        super(props);       
        this.state = {
          isLoggedIn: true, 
          confirmDialog:{
            show:false,
            headerName:null,
            confirmMessage:null, 
            handleClose:()=>{
              this.setState(prev=> ({
                confirmDialog:{
                  ...prev.confirmDialog,
                  show:false,
                  headerName:null,
                  confirmMessage:null,             
                  handleConfirm:null 
                }
              }));            
            },
            handleConfirm:null     
          },
          user:[],
          error: '',
          pageAlert:{},
        };        
        this.pageAlert=this.pageAlert.bind(this);  
        
    }

    render() {
        return (
          <>           
           <Header userData={this.state.user} userIsLoggedIn={this.state.isLoggedIn}/>
           <div className="content"> 
           <div className="container-fluid">
    
              <div className="page-header container-fluid"> 
                <div className="row justify-content-between">              
                  <h1>Products</h1>
                  <div>
                  <Button as={Link} to={appRoutes.productAdd} variant="primary" >
                      Add Product
                  </Button>
                  </div>
                </div>                       
              </div> 
              { (this.state.pageAlert &&  this.state.pageAlert.message) ? 
              <FlashAlert data={this.state.pageAlert} duration={6000} show={true} onClose={()=>this.pageAlert({})} />
              :''}             
              <Card style={{ width: '100%' }}>
                <Card.Header className="bg-theme">
                  <h3 className="card-heading">Products List</h3>
                </Card.Header>
                <Card.Body>
                 <div className="container-fluid">
                 <Table responsive bordered striped id="productDataTable" style={{width:'100%'}}>
                  <thead>
                    <tr>
                      <th key="0">No</th>
                      <th key="1">Name</th>
                      <th key="2">HSN</th>
                      <th key="3">Category</th>
                      <th key="4">SubCategory</th>
                      <th key="5">Brand</th>
                      <th key="6">Unit</th>
                      <th key="7">MRP</th>
                      <th key="8">Cost</th>
                      <th key="9">Selling Price</th>
                      <th key="10">Discount</th>
                      <th key="11">GST</th>
                      <th key="12">Menu</th>
                    </tr>
                  </thead>
                  <tbody>    
                  </tbody>
                 </Table>
                 </div>
                </Card.Body>
              </Card>     
           </div>
           </div>	  
           <ConfirmDialog data={this.state.confirmDialog} handleClose={this.state.confirmDialog.handleClose} handleConfirm={this.state.confirmDialog.handleConfirm} />
            </>
        )
    } 

    componentDidMount() {       
        if(this.props.location.state && this.props.location.state.pageAlert){         
          const history = createHistory();    
          let state = { ...history.location.state };         
          this.setState({pageAlert:this.props.location.state.pageAlert});
          delete state.pageAlert;          
          history.replace({ ...history.location, state });
        }      
        this.handleDeleteProduct=this.handleDeleteProduct.bind(this); 
        this.handleEditProduct=this.handleEditProduct.bind(this);

        let state = localStorage["appState"];
        let access_token=null;
        if (state) {
          let AppState = JSON.parse(state);      
          this.setState({isLoggedIn: AppState.isLoggedIn, user: AppState.user});
          access_token=AppState.user.access_token;
        }
        let csrf_token = document.head.querySelector('meta[name="csrf-token"]').content;
        let deleteFun=this.handleDeleteProduct;     
        let editFun=this.handleEditProduct;        
        //initialize datatable
        $(document).ready(function () {       
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': csrf_token,
                    'Authorization':'Bearer '+access_token,
                }
            });
  
            $('#productDataTable').DataTable({
              "responsive":true,
              "aLengthMenu": [[ 10, 20, 30, 50, 75, -1], [10, 20, 30, 50, 75, "All"]],
              "pageLength": 10,
              'columnDefs': [{
                'targets': [0,12], 
                'orderable': false,	    	
             },
             { 
               "searchable": false, 
               "targets": [0,12]
               }],
              "processing": true,
              "serverSide": true,
              "ajax":{
                    "url":apiRoutes.productsList,
                    "method":"post"       
                },
                "columns": [ 
                    { "data": "sno" },                  
                    { "data": "name"},
                    { "data": "hsn"},  
                    { "data": "category"},    
                    { "data": "sub_category"},   
                    { "data": "brand"}, 
                    { "data": "unit"},   
                    { "data": "mrp"},  
                    { "data": "cost_price"},   
                    { "data": "selling_price"},   
                    { "data": "discount_percentage"},  
                    { "data": "sales_gst"},                
                    { "data": "menu", "class": "text-center"}           
                ],
                "createdRow": function (row, data, dataIndex) {
                  $(row).attr('data-id',data.id);
                }  
            });

            $('#productDataTable').on('click', '.btn-edit',function(e){
              e.preventDefault();
              console.log($(this).attr('data-id'))
              editFun($(this).attr('data-id'));       
            });  

            $('#productDataTable').on('click', '.btn-delete',function(e){
              e.preventDefault(); 
              let url=$(this).attr('href');
              let id=$(this).attr('data-id');                 
              deleteFun(id,url);      
            }); 
        });
    }    

    pageAlert(alert){   
        alert.duration=6000;
        this.setState({pageAlert:alert});   
    }   
    
    handleEditProduct(id){
      console.log(id,this.props);
      this.props.history.push('/product/'+id);   
    }
   

    handleDeleteProduct(id,url){
        let handleClose=this.state.confirmDialog.handleClose; 
        let alertBox=this.pageAlert;
     
        this.setState( prev => ({
         confirmDialog:{
           ...prev.confirmDialog,
           show:true,
           headerName:'Confirm to Continue!',
           confirmMessage:'Are you sure want to remove this product?',           
           handleConfirm:()=>{
             handleClose();
             let request={
               method: 'delete',
               data:{'id':id},
               url: url
             };
             axios(request)
             .then(response => { return response; })
             .then(json => {          
               let dataTablePageInfo = $('#productDataTable').DataTable().page.info();
               $('#productDataTable').DataTable().page(dataTablePageInfo.page).draw(false);
               if(json.data.success){
                 alertBox({className:'success', message:json.data.message});
               }else{
                 alertBox({className:'danger', message:json.data.message});
               }          
             }).catch(error=>{
               console.log(error); 
             });
           } 
         }
        }))    
    }
}
export default Products;