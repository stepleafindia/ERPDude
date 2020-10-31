import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import Header from '../../../components/Header/Header';
import SubCategoryModal from '../../../components/SubCategory/SubCategoryModal';
import ConfirmDialog from '../../../components/ConfirmDialog/ConfirmDialog';
import FlashAlert from '../../../components/Alert/FlashAlert';
import { Card, Button, Table } from 'react-bootstrap';
import { apiRoutes } from '../../../Utils';
import "datatables.net-bs4/js/dataTables.bootstrap4.js";
import "datatables.net-bs4/css/dataTables.bootstrap4.css";
import "datatables.net-responsive-bs4/js/responsive.bootstrap4.js";
import "datatables.net-responsive-bs4/css/responsive.bootstrap4.css";
import $ from 'jquery';

class SubCategories extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          isLoggedIn: true,      
          categoryModal:{
            show:false,       
            headerName:'Product Sub Category',
            categoryName:null,
            categoryId:null,  
          },
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
        
        this.openCategoryModal=this.openCategoryModal.bind(this);  
        this.handleCategoryClose=this.handleCategoryClose.bind(this);
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
                  <h1>Product Sub Categories</h1>
                  <div>
                  <Button variant="primary" onClick={()=>{ this.openCategoryModal(null,null) } }>
                      Add Sub Category
                  </Button>
                  </div>
                </div>                       
              </div> 
              { (this.state.pageAlert &&  this.state.pageAlert.message) ? 
              <FlashAlert data={this.state.pageAlert} duration={6000} show={true} onClose={()=>this.pageAlert({})} />
              :''}

             
              <Card style={{ width: '100%' }}>
                <Card.Header className="bg-theme">
                  <h3 className="card-heading">Sub Categories List</h3>
                </Card.Header>
                <Card.Body>
                <div className="container-fluid">
                 <Table responsive bordered striped id="responsiveDataTable1" style={{width:'100%'}}>
                  <thead>
                    <tr>
                      <th key="0">No</th>
                      <th key="1">Sub Category</th>
                      <th key="2">Menu</th>
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
           <SubCategoryModal data={this.state.categoryModal} handleClose={this.handleCategoryClose} pageAlert={this.pageAlert} />
           <ConfirmDialog data={this.state.confirmDialog} handleClose={this.state.confirmDialog.handleClose} handleConfirm={this.state.confirmDialog.handleConfirm} />
            </>
        )
    } 

    componentDidMount() {
      
      this.handleEditCategory=this.handleEditCategory.bind(this);
      this.handleDeleteCategory=this.handleDeleteCategory.bind(this); 
      let state = localStorage["appState"];
      let access_token=null;
      if (state) {
        let AppState = JSON.parse(state);      
        this.setState({isLoggedIn: AppState.isLoggedIn, user: AppState.user});
        access_token=AppState.user.access_token;
      }
      let csrf_token = document.head.querySelector('meta[name="csrf-token"]').content;
      let editFun=this.handleEditCategory; 
      let deleteFun=this.handleDeleteCategory; 
        
      //initialize datatable
      $(document).ready(function () {       
          $.ajaxSetup({
              headers: {
                  'X-CSRF-TOKEN': csrf_token,
                  'Authorization':'Bearer '+access_token,
              }
          });

          $('#responsiveDataTable1').DataTable({
            "responsive":true,
            "aLengthMenu": [[ 10, 20, 30, 50, 75, -1], [10, 20, 30, 50, 75, "All"]],
            "pageLength": 10,
            'columnDefs': [{
              'targets': [0,2], 
              'orderable': false,	    	
           },
           { 
             "searchable": false, 
             "targets": [0,2]
             }],
            "processing": true,
            "serverSide": true,
            "ajax":{
                  "url":apiRoutes.productSubCategoriesList,
                  "method":"post"       
              },
              "columns": [ 
                  { "data": "sno" },
                  { "data": "name"},                   
                  { "data": "menu", "class": "text-center"}           
              ],
              "createdRow": function (row, data, dataIndex) {
                  $(row).attr('data-id', data.id); 
                  $(row).find('.btn-edit').on('click',function(e){
                    e.preventDefault(); 
                    editFun(data.id,data.name);               
                  });
                  $(row).find('.btn-delete').on('click',function(e){
                    e.preventDefault(); 
                    let url=$(this).attr('href');                 
                    deleteFun(data.id,url);               
                  });
              }  
          });

      });
    } 

    openCategoryModal(id,value) { 
      this.setState({categoryModal:{ 
        show:true,
        headerName:'Product Sub Category',
        categoryName:value?value:"",
        categoryId:id?id:"",      
      }
      });
    }

    handleCategoryClose(status) {   
      
      this.setState({categoryModal:{ 
        show:false,
        headerName:'Product Sub Category',
        categoryName:"",
        categoryId:"",      
      }
      });
      if(status){
        let dataTablePageInfo = $('#responsiveDataTable1').DataTable().page.info();
        $('#responsiveDataTable1').DataTable().page(dataTablePageInfo.page).draw(false);
      }
    }

    pageAlert(alert){   
      alert.duration=6000;
      this.setState({pageAlert:alert});   
    }

    handleEditCategory(id,value){   
      this.openCategoryModal(id,value);
    }

    handleDeleteCategory(id,url){
      let handleClose=this.state.confirmDialog.handleClose; 
      let alertBox=this.pageAlert;
   
      this.setState( prev => ({
       confirmDialog:{
         ...prev.confirmDialog,
         show:true,
         headerName:'Confirm to Continue!',
         confirmMessage:'Are you sure want to remove this product sub category?',           
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
             let dataTablePageInfo = $('#responsiveDataTable1').DataTable().page.info();
             $('#responsiveDataTable1').DataTable().page(dataTablePageInfo.page).draw(false);
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

export default withRouter(SubCategories);