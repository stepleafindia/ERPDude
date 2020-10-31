import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import Header from '../../../components/Header/Header';
import UnitModal from '../../../components/Unit/UnitModal';
import ConfirmDialog from '../../../components/ConfirmDialog/ConfirmDialog';
import FlashAlert from '../../../components/Alert/FlashAlert';
import { Card, Button, Table } from 'react-bootstrap';
import { apiRoutes } from '../../../Utils';
import "datatables.net-bs4/js/dataTables.bootstrap4.js";
import "datatables.net-bs4/css/dataTables.bootstrap4.css";
import "datatables.net-responsive-bs4/js/responsive.bootstrap4.js";
import "datatables.net-responsive-bs4/css/responsive.bootstrap4.css";
import $ from 'jquery';

class Units extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          isLoggedIn: true,      
          unitModal:{
            show:false,       
            headerName:'Product Unit',
            unitName:null,
            unitCode:null,
            unitId:null,  
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
        
        this.openUnitModal=this.openUnitModal.bind(this);  
        this.handleUnitModalClose=this.handleUnitModalClose.bind(this);
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
                  <h1>Product Units</h1>
                  <div>
                  <Button variant="primary" onClick={()=>{ this.openUnitModal(null,null,null) } }>
                      Add Unit
                  </Button>
                  </div>
                </div>                       
              </div> 
              { (this.state.pageAlert &&  this.state.pageAlert.message) ? 
              <FlashAlert data={this.state.pageAlert} duration={6000} show={true} onClose={()=>this.pageAlert({})} />
              :''}             
              <Card style={{ width: '100%' }}>
                <Card.Header className="bg-theme">
                  <h3 className="card-heading">Units List</h3>
                </Card.Header>
                <Card.Body>
                <div className="container-fluid">
                 <Table responsive bordered striped id="responsiveDataTable3" style={{width:'100%'}}>
                  <thead>
                    <tr>
                      <th key="0">No</th>
                      <th key="1">Unit Code</th>
                      <th key="2">Unit Name</th>
                      <th key="3">Menu</th>
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
           <UnitModal data={this.state.unitModal} handleClose={this.handleUnitModalClose} pageAlert={this.pageAlert} />
           <ConfirmDialog data={this.state.confirmDialog} handleClose={this.state.confirmDialog.handleClose} handleConfirm={this.state.confirmDialog.handleConfirm} />
            </>
        )
    } 

    componentDidMount() {
      
        this.handleEditUnit=this.handleEditUnit.bind(this);
        this.handleDeleteUnit=this.handleDeleteUnit.bind(this); 
        let state = localStorage["appState"];
        let access_token=null;
        if (state) {
          let AppState = JSON.parse(state);      
          this.setState({isLoggedIn: AppState.isLoggedIn, user: AppState.user});
          access_token=AppState.user.access_token;
        }
        let csrf_token = document.head.querySelector('meta[name="csrf-token"]').content;
        let editFun=this.handleEditUnit; 
        let deleteFun=this.handleDeleteUnit; 
          
        //initialize datatable
        $(document).ready(function () {       
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': csrf_token,
                    'Authorization':'Bearer '+access_token,
                }
            });
  
            $('#responsiveDataTable3').DataTable({
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
                    "url":apiRoutes.unitsList,
                    "method":"post"       
                },
                "columns": [ 
                    { "data": "sno" },
                    { "data": "code"},  
                    { "data": "name"},                   
                    { "data": "menu", "class": "text-center"}           
                ],
                "createdRow": function (row, data, dataIndex) {
                    $(row).attr('data-id', data.id); 
                    $(row).find('.btn-edit').on('click',function(e){
                      e.preventDefault(); 
                      editFun(data.id,data.name,data.code);               
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

    openUnitModal(id,name,code) { 
        this.setState({unitModal:{ 
          show:true,
          headerName:'Product Unit',
          unitName:name?name:"",
          unitCode:code?code:"",
          unitId:id?id:"",      
        }
        });
    }

    handleUnitModalClose(status) {   
      
        this.setState({unitModal:{ 
          show:false,
          headerName:'Product Unit',
          unitName:"",
          unitCode:"",
          unitId:"",      
        }
        });
        if(status){
          let dataTablePageInfo = $('#responsiveDataTable3').DataTable().page.info();
          $('#responsiveDataTable3').DataTable().page(dataTablePageInfo.page).draw(false);
        }
    }

    pageAlert(alert){   
        alert.duration=6000;
        this.setState({pageAlert:alert});   
    }

    handleEditUnit(id,name,code){   
        this.openUnitModal(id,name,code);
    }

    handleDeleteUnit(id,url){
        let handleClose=this.state.confirmDialog.handleClose; 
        let alertBox=this.pageAlert;
     
        this.setState( prev => ({
         confirmDialog:{
           ...prev.confirmDialog,
           show:true,
           headerName:'Confirm to Continue!',
           confirmMessage:'Are you sure want to remove this product unit?',           
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
               let dataTablePageInfo = $('#responsiveDataTable3').DataTable().page.info();
               $('#responsiveDataTable3').DataTable().page(dataTablePageInfo.page).draw(false);
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
export default withRouter(Units);