import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import Header from '../../components/Header/Header';
import GstTaxModal from '../../components/Tax/GstTaxModal';
import ConfirmDialog from '../../components/ConfirmDialog/ConfirmDialog';
import FlashAlert from '../../components/Alert/FlashAlert';
import { Card, Button, Table } from 'react-bootstrap';
import { apiRoutes } from '../../Utils';
import "datatables.net-bs4/js/dataTables.bootstrap4.js";
import "datatables.net-bs4/css/dataTables.bootstrap4.css";
import "datatables.net-responsive-bs4/js/responsive.bootstrap4.js";
import "datatables.net-responsive-bs4/css/responsive.bootstrap4.css";
import $ from 'jquery';

class GstTaxes extends Component{

    constructor(props){
        super(props);
        this.state={
            isLoggedIn: true, 
            gstTaxModal:{
                show:false,       
                headerName:'GST Tax',
                taxId:null,
                taxName:null,
                taxType:null,
                cgst:null,  
                sgst:null,
                igst:null
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
        }
        this.openGstModal=this.openGstModal.bind(this);  
        this.handleGstModalClose=this.handleGstModalClose.bind(this);
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
                  <h1>GST Taxes</h1>
                  <div>
                  <Button variant="primary" onClick={()=>{ this.openGstModal(null) } }>
                      Add GST Tax
                  </Button>
                  </div>
                </div>                       
              </div> 
              { (this.state.pageAlert &&  this.state.pageAlert.message) ? 
              <FlashAlert data={this.state.pageAlert} duration={6000} show={true} onClose={()=>this.pageAlert({})} />
              :''}             
              <Card style={{ width: '100%' }}>
                <Card.Header className="bg-theme">
                  <h3 className="card-heading">GST Tax List</h3>
                </Card.Header>
                <Card.Body>
                <div className="container-fluid">
                 <Table responsive bordered striped id="gstDataTable" style={{width:'100%'}}>
                  <thead>
                    <tr>
                      <th key="0">No</th>
                      <th key="1">Name</th>
                      <th key="2">Type</th>
                      <th key="3">CGST</th>
                      <th key="4">IGST</th>
                      <th key="5">SGST</th>
                      <th key="6">Menu</th>
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
           <GstTaxModal data={this.state.gstTaxModal} handleClose={this.handleGstModalClose} pageAlert={this.pageAlert} />           
           <ConfirmDialog data={this.state.confirmDialog} handleClose={this.state.confirmDialog.handleClose} handleConfirm={this.state.confirmDialog.handleConfirm} />
            </>
        )
    } 

    componentDidMount() {
      
        this.handleEditGstTax=this.handleEditGstTax.bind(this);
        this.handleDeleteGstTax=this.handleDeleteGstTax.bind(this); 
        let state = localStorage["appState"];
        let access_token=null;
        if (state) {
          let AppState = JSON.parse(state);      
          this.setState({isLoggedIn: AppState.isLoggedIn, user: AppState.user});
          access_token=AppState.user.access_token;
        }
        let csrf_token = document.head.querySelector('meta[name="csrf-token"]').content;
        let editFun=this.handleEditGstTax; 
        let deleteFun=this.handleDeleteGstTax; 
          
        //initialize datatable
        $(document).ready(function () {  

            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': csrf_token,
                    'Authorization':'Bearer '+access_token,
                }
            });
  
            $('#gstDataTable').DataTable({
              "responsive":true,
              "aLengthMenu": [[ 10, 20, 30, 50, 75, -1], [10, 20, 30, 50, 75, "All"]],
              "pageLength": 10,
              'columnDefs': [{
                'targets': [0,6], 
                'orderable': false,	    	
             },
             { 
               "searchable": false, 
               "targets": [0,6]
               }],
              "processing": true,
              "serverSide": true,
              "ajax":{
                    "url":apiRoutes.gstTaxesList,
                    "method":"post"       
                },
                "columns": [ 
                    { "data": "sno" },
                    { "data": "name"},  
                    { "data": "type"},
                    { "data": "cgst"},
                    { "data": "igst"},
                    { "data": "sgst"},                   
                    { "data": "menu", "class": "text-center"}           
                ],
                "createdRow": function (row, data, dataIndex) {
                    $(row).attr('data-id', data.id); 
                    $(row).find('.btn-edit').on('click',function(e){
                      e.preventDefault(); 
                      editFun(data);               
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

    openGstModal(data) { 
        this.setState({ gstTaxModal:{
            show:true,       
            headerName:'GST Tax',
            taxId:(data && data.id)?data.id:"",
            taxName:(data && data.name)?data.name:"",
            taxType:(data && data.type)?data.type:"",
            cgst:(data && data.cgst)?data.cgst:"",  
            sgst:(data && data.sgst)?data.sgst:"",
            igst:(data && data.igst)?data.igst:""
            }
        });
    }

    handleGstModalClose(status) {   
      
        this.setState({ gstTaxModal:{
            show:false,       
            headerName:'GST Tax',
            taxId:"",
            taxName:"",
            taxType:"",
            cgst:"",  
            sgst:"",
            igst:""
            }
        });
        if(status){
          let dataTablePageInfo = $('#gstDataTable').DataTable().page.info();
          $('#gstDataTable').DataTable().page(dataTablePageInfo.page).draw(false);
        }
    }

    pageAlert(alert){   
        alert.duration=6000;
        this.setState({pageAlert:alert});   
    }

    handleEditGstTax(data){   
        this.openGstModal(data);
    }

    handleDeleteGstTax(id,url){
        let handleClose=this.state.confirmDialog.handleClose; 
        let alertBox=this.pageAlert;
     
        this.setState( prev => ({
         confirmDialog:{
           ...prev.confirmDialog,
           show:true,
           headerName:'Confirm to Continue!',
           confirmMessage:'Are you sure want to remove this GST Tax?',           
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
               let dataTablePageInfo = $('#gstDataTable').DataTable().page.info();
               $('#gstDataTable').DataTable().page(dataTablePageInfo.page).draw(false);
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
export default withRouter(GstTaxes);