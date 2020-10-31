import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Header from '../../../components/Header/Header';
import ConfirmDialog from '../../../components/ConfirmDialog/ConfirmDialog';
import FlashAlert from '../../../components/Alert/FlashAlert';
import { Card, Button, Container, Row, Col, Form } from 'react-bootstrap';
import Loader from '../../../components/Loader/Loader'; // Page Loader Component.
import { apiRoutes,appRoutes,getCountriesList, getStatesList, clearAuthToken,getCustomerDetails } from '../../../Utils';
import './customer.css';

class Customer extends Component {    

    constructor(props) {
        super(props); 
        this.getInitialState=this.getInitialState.bind(this);
        this.state = this.getInitialState();
        this.pageAlert=this.pageAlert.bind(this);
        this.getCountriesList=getCountriesList.bind(this); 
        this.getStatesList=getStatesList.bind(this);        
        this.getCustomerDetails=getCustomerDetails.bind(this);  
        this.selectInputChange=this.selectInputChange.bind(this);  
        this.inputStateChange=this.inputStateChange.bind(this);
        this.validateNumeric=this.validateNumeric.bind(this); 
        this.customerFormSubmit=this.customerFormSubmit.bind(this);
        this.handleCheck=this.handleCheck.bind(this);
        this.clearAuthToken=clearAuthToken.bind(this);
    }

    getInitialState(){
        return {
            customerId:this.props.match.params.id?this.props.match.params.id:null,
            isLoggedIn: true,
            loader:false,
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
            statesList: [],
            countriesList:[],           
            user:[],
            error: '',  
            pageAlert:{},  
            errors:{},        
            inputs:{
                is_active:true,
                sms_alert:true
            }
        };
    }
       
    validateFormInput(inputName,value){
        let errors=[];
        let requiredFields=["name","opening_balance","customer_group"];
        if(requiredFields.indexOf(inputName)!=-1){ 
            if(!value){
                errors.push("This field is required!");
            }
        }       
        return errors.length?errors:null;
    }

    customerFormSubmit(e){
        e.preventDefault();
        let stateInputs=this.state.inputs;
        let inputErrors=this.state.errors;       
        let validation=true;

        if(!stateInputs.name){
            inputErrors.name="Customer Name is required!";
            validation=false;
        }
        if(!stateInputs.opening_balance){
            inputErrors.opening_balance="Opening Balance is required!";
            validation=false;
        }
        if(!stateInputs.customer_group){
            inputErrors.customer_group="Customer Group is required!";
            validation=false;
        }            
        this.setState( prev =>{
            return{
                ...prev, errors: inputErrors
            }
        });  
        
        if(validation){
          
            let formData=new FormData(e.target);
            let formUrl=this.state.customerId?(apiRoutes.customer+'/'+this.state.customerId):apiRoutes.customer;
            let request={
                method: 'post',
                url: formUrl,
                data: formData,
                headers: {'Content-Type': 'multipart/form-data' }
            };
                     
            this.setState({loader:true});
            axios(request).then(response => {return response;})
            .then(json => { 
                console.log(json.data);
                if (json.data.validation_error) {
                    let inputErrors={}; 
                    for(let val in json.data.validation_error){
                        inputErrors[val]=json.data.validation_error[val]; 
                    }
                    this.setState( prev =>{
                        return{
                            ...prev, loader:false, errors: inputErrors
                        }
                    });                     
                }else if(json.data.success){                 
                    this.setState(this.getInitialState());  
                    this.props.history.push({
                        pathname: appRoutes.customers,
                        //search: '?query=abc',
                        state: { pageAlert:{className:'alert alert-success', message:json.data.message} }
                    });   
                }else{
                    this.pageAlert();	
                }			
            }).catch( error => { console.log(error); this.setState({loader:false});  });
        }
    }

    selectInputChange(e){          
        let stateInputs=this.state.inputs;
        stateInputs[e.target.name]=e.target.value;
        let inputErrors=this.state.errors;
        let error=this.validateFormInput(e.target.name,e.target.value);           
        inputErrors[e.target.name]=error?error:null;
        this.setState( prev =>{
            return{
                ...prev, inputs: stateInputs, errors:inputErrors
            }
        });
    }

    inputStateChange(e){
        let stateInputs=this.state.inputs;
        stateInputs[e.target.name]=e.target.value;
        let inputErrors=this.state.errors;
        let error=this.validateFormInput(e.target.name,e.target.value);        
        inputErrors[e.target.name]=error?error:null;      
        this.setState( prev =>{
            return{
                ...prev, inputs: stateInputs, errors:inputErrors
            }
        });       
    }

    handleCheck(e){      
        let name=e.target.name;
        let value=e.target.value==='true'?true:false;

        this.setState( prev =>{
            let inputs=prev.inputs;
            inputs[name]=value;
            return{
                ...prev, inputs:inputs
            }
        }); 
        console.log(this.state)
    }

    validateNumeric(e){
        let numericInputs=["opening_balance","due_days","credit_limit"];
        if(numericInputs.indexOf(e.target.name) != -1){
            e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
        }        
    }

    render() {       
        return (
          <>  
           {this.state.loader?<Loader />:""}                    
           <Header userData={this.state.user} userIsLoggedIn={this.state.isLoggedIn}/>
           <div className="content">          
    
            <div className="container-fluid"> 
                <div className="page-header">
                <div className="row justify-content-between">              
                    <h1>Customer</h1> 
                    <div><Button as={Link} to={appRoutes.customers} variant="primary">Back</Button></div>         
                </div>
                </div>                                  
            </div> 
            { (this.state.pageAlert &&  this.state.pageAlert.message) ? 
            <FlashAlert data={this.state.pageAlert} duration={6000} show={true} onClose={()=>this.pageAlert({})} />
            :''}   
            <Form method="post" onSubmit={this.customerFormSubmit} id="customerForm">
            <Container fluid>
            <Row className="no-gutters">
            <Col md={7}> 

            <Card className="form-card">

                <Card.Body>

                <h5 className="card-title">General Information</h5>
                <Form.Row>
                    <Col md={6}>
                    <Form.Group controlId="formCustomerName">
                    <Form.Label>Name <span className="text-danger">*</span></Form.Label>
                    <Form.Control type="text" placeholder="Customer Name" name="name" value={this.state.inputs.name?this.state.inputs.name:""} isInvalid={!!this.state.errors.name} onChange={this.inputStateChange} />
                    <Form.Control.Feedback type="invalid">{this.state.errors.name?this.state.errors.name:""}</Form.Control.Feedback>
                    </Form.Group>
                    </Col>

                    <Col md={6}>
                    <Form.Group controlId="formCustomerStatus" className="pt-md-4">                    
                    <Form.Check inline label="Visible" type="radio" name="is_active" value={true} checked={this.state.inputs.is_active?true:false} onChange={this.handleCheck}/>
                    <Form.Check inline label="Invisible" type="radio" name="is_active" value={false} checked={this.state.inputs.is_active?false:true} onChange={this.handleCheck}/>                    
                    </Form.Group>
                    </Col>

                    <Col md={6}>
                    <Form.Group controlId="formCustomerOB">
                    <Form.Label>Opening Balance <span className="text-danger">*</span></Form.Label>
                    <Form.Control type="text" placeholder="Opening Balance" name="opening_balance" value={this.state.inputs.opening_balance?this.state.inputs.opening_balance:""} isInvalid={!!this.state.errors.opening_balance} onChange={this.inputStateChange} onInput={this.validateNumeric} />
                    <Form.Control.Feedback type="invalid">{this.state.errors.opening_balance?this.state.errors.opening_balance:""}</Form.Control.Feedback>
                    </Form.Group>
                    </Col>

                    <Col md={6}> 
                    <Form.Group controlId="formCustomerType">
                    <Form.Label>Under <span className="text-danger">*</span></Form.Label>
                    <Form.Control as="select" className="my-1 mr-sm-2" value={this.state.inputs.customer_group?this.state.inputs.customer_group:""} isInvalid={!!this.state.errors.customer_group} name="customer_group" onChange={this.inputStateChange} custom>
                        <option value="">Choose...</option>
                        <option value="Sunday Debtors">Sunday Debtors</option>
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">{this.state.errors.customer_group?this.state.errors.customer_group:""}</Form.Control.Feedback>
                    </Form.Group>
                    </Col>

                    <Col md={6} style={(this.state.inputs.customer_group && this.state.inputs.customer_group=="Sunday Debtors")?{}:{display:"none"}}>
                    <Form.Group controlId="formCustomerSalesType">
                    <Form.Label>Sales Rate Type</Form.Label>
                    <Form.Control as="select" className="my-1 mr-sm-2" value={this.state.inputs.sales_type?this.state.inputs.sales_type:""} isInvalid={!!this.state.errors.sales_type} name="sales_type" onChange={this.inputStateChange} custom >
                         <option value="">Choose...</option>
                         <option value="Retail">Retail</option>
                         <option value="Wholesale">Wholesale</option>
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">{this.state.errors.sales_type?this.state.errors.sales_type:""}</Form.Control.Feedback>
                    </Form.Group>
                    </Col>   

                    <Col md={6}>
                    <Form.Group controlId="formCustomerDues">
                    <Form.Label>Due Days </Form.Label>
                    <Form.Control type="text" placeholder="Due Days" name="due_days" value={this.state.inputs.due_days?this.state.inputs.due_days:""} isInvalid={!!this.state.errors.due_days} onChange={this.inputStateChange} onInput={this.validateNumeric}/>
                    <Form.Control.Feedback type="invalid">{this.state.errors.due_days?this.state.errors.due_days:""}</Form.Control.Feedback>
                    </Form.Group>
                    </Col>

                    <Col md={6}>
                    <Form.Group controlId="formCustomerCreditLimit">
                    <Form.Label>Credit Limit </Form.Label>
                    <Form.Control type="text" placeholder="Credit Limit" name="credit_limit" value={this.state.inputs.credit_limit?this.state.inputs.credit_limit:""} isInvalid={!!this.state.errors.credit_limit} onChange={this.inputStateChange} onInput={this.validateNumeric} />
                    <Form.Control.Feedback type="invalid">{this.state.errors.credit_limit?this.state.errors.credit_limit:""}</Form.Control.Feedback>
                    </Form.Group>
                    </Col>
                    
                </Form.Row>
                <h5 className="card-title">Contact Information</h5>    
                <Form.Row>

                    <Col md={6}>
                    <Form.Group controlId="formCustomerContactPerson">
                    <Form.Label>Contact Person</Form.Label>
                    <Form.Control type="text" placeholder="Contact Person" name="contact_person" value={this.state.inputs.contact_person?this.state.inputs.contact_person:""} isInvalid={!!this.state.errors.contact_person} onChange={this.inputStateChange} />
                    <Form.Control.Feedback type="invalid">{this.state.errors.contact_person?this.state.errors.contact_person:""}</Form.Control.Feedback>
                    </Form.Group>
                    </Col>

                    <Col md={6}>
                    <Form.Group controlId="formCustomerAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Address" value={this.state.inputs.address?this.state.inputs.address:""} name="address" onChange={this.inputStateChange}  isInvalid={!!this.state.errors.address} />
                    <Form.Control.Feedback type="invalid">{this.state.errors.address?this.state.errors.address:""}</Form.Control.Feedback>
                    </Form.Group>
                    </Col>

                    <Col md={6}>
                    <Form.Group controlId="formCustomerCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="City" value={this.state.inputs.city?this.state.inputs.city:""} name="city" onChange={this.inputStateChange}  isInvalid={!!this.state.errors.city} />
                    <Form.Control.Feedback type="invalid">{this.state.errors.city?this.state.errors.city:""}</Form.Control.Feedback>
                    </Form.Group>
                    </Col>

                    <Col md={6}>
                    <Form.Group controlId="formCustomerCity">
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control type="text" placeholder="Postal Code" value={this.state.inputs.pin_code?this.state.inputs.pin_code:""} name="pin_code" onChange={this.inputStateChange}  isInvalid={!!this.state.errors.pin_code} />
                    <Form.Control.Feedback type="invalid">{this.state.errors.pin_code?this.state.errors.pin_code:""}</Form.Control.Feedback>
                    </Form.Group>
                    </Col>

                    <Col md={6}>
                    <Form.Group controlId="formCustomerState">
                    <Form.Label>State</Form.Label>
                    <Form.Control as="select" className="my-1 mr-sm-2" value={this.state.inputs.state_id?this.state.inputs.state_id:""} name="state_id" isInvalid={!!this.state.errors.state_id} onChange={this.inputStateChange} custom >
                        <option value="">Choose...</option>
                        {this.state.statesList.map(({ id, name }, index) => <option key={id} value={id} >{name}</option>)}
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">{this.state.errors.state_id?this.state.errors.state_id:""}</Form.Control.Feedback>
                    </Form.Group>
                    </Col>

                    <Col md={6}>
                    <Form.Group controlId="formCustomerCountry">
                    <Form.Label>Country</Form.Label>
                    <Form.Control as="select" className="my-1 mr-sm-2" value={this.state.inputs.country_id?this.state.inputs.country_id:""} name="country_id" isInvalid={!!this.state.errors.country_id} onChange={this.inputStateChange} custom >
                        <option value="">Choose...</option>
                        {this.state.countriesList.map(({ id, name }, index) => <option key={id} value={id} >{name}</option>)}
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">{this.state.errors.country_id?this.state.errors.country_id:""}</Form.Control.Feedback>
                    </Form.Group>
                    </Col>                   

                    <Col md={6}>
                    <Form.Group controlId="formCustomerPhone" >
                    <Form.Label>Contact No </Form.Label>
                    <Form.Control type="text" placeholder="Contact No" value={this.state.inputs.contact_number?this.state.inputs.contact_number:""} name="contact_number" isInvalid={!!this.state.errors.contact_number} onChange={this.inputStateChange} />
                    <Form.Control.Feedback type="invalid">{this.state.errors.contact_number?this.state.errors.contact_number:""}</Form.Control.Feedback>
                    </Form.Group>
                    </Col>

                    <Col md={6}>
                    <Form.Group controlId="formCustomerMobile" >
                    <Form.Label>Mobile No </Form.Label>
                    <Form.Control type="text" placeholder="Mobile No" value={this.state.inputs.mobile_number?this.state.inputs.mobile_number:""} name="mobile_number" isInvalid={!!this.state.errors.mobile_number} onChange={this.inputStateChange} />
                    <Form.Control.Feedback type="invalid">{this.state.errors.mobile_number?this.state.errors.mobile_number:""}</Form.Control.Feedback>
                    </Form.Group>
                    </Col>

                    <Col md={6}>
                    <Form.Group controlId="formCustomerFax" >
                    <Form.Label>Fax </Form.Label>
                    <Form.Control type="text" placeholder="Fax No" value={this.state.inputs.fax?this.state.inputs.fax:""} name="fax" isInvalid={!!this.state.errors.fax} onChange={this.inputStateChange} />
                    <Form.Control.Feedback type="invalid">{this.state.errors.fax?this.state.errors.fax:""}</Form.Control.Feedback>
                    </Form.Group>
                    </Col>

                    <Col md={6}>
                    <Form.Group controlId="formCustomerEmail" >
                    <Form.Label>Email </Form.Label>
                    <Form.Control type="text" placeholder="Email" value={this.state.inputs.email?this.state.inputs.email:""} name="email" isInvalid={!!this.state.errors.email} onChange={this.inputStateChange} />
                    <Form.Control.Feedback type="invalid">{this.state.errors.email?this.state.errors.email:""}</Form.Control.Feedback>
                    </Form.Group>
                    </Col>

                </Form.Row>

                </Card.Body>
            </Card>

            </Col>

            <Col md={5}> 

            <Card className="form-card">

                <Card.Body>

                <h5 className="card-title">Company Information</h5>
                <Form.Row>
                    <Col md={12}>
                    <Form.Group controlId="formCustomerCompanyName">
                    <Form.Label>Print Name </Form.Label>
                    <Form.Control type="text" placeholder="Print Name" name="print_name" value={this.state.inputs.print_name?this.state.inputs.print_name:""} isInvalid={!!this.state.errors.print_name} onChange={this.inputStateChange} />
                    <Form.Control.Feedback type="invalid">{this.state.errors.print_name?this.state.errors.print_name:""}</Form.Control.Feedback>
                    </Form.Group>
                    </Col>

                    <Col md={12}>
                    <Form.Group controlId="formCustomerGSTIN">
                    <Form.Label>GSTIN </Form.Label>
                    <Form.Control type="text" placeholder="GSTIN" name="gstin" value={this.state.inputs.gstin?this.state.inputs.gstin:""} isInvalid={!!this.state.errors.gstin} onChange={this.inputStateChange} />
                    <Form.Control.Feedback type="invalid">{this.state.errors.gstin?this.state.errors.gstin:""}</Form.Control.Feedback>
                    </Form.Group>
                    </Col>

                    <Col md={12}>
                    <Form.Group controlId="formCustomerPan">
                    <Form.Label>Pan No </Form.Label>
                    <Form.Control type="text" placeholder="PAN No" name="pan_no" value={this.state.inputs.pan_no?this.state.inputs.pan_no:""} isInvalid={!!this.state.errors.pan_no} onChange={this.inputStateChange} />
                    <Form.Control.Feedback type="invalid">{this.state.errors.pan_no?this.state.errors.pan_no:""}</Form.Control.Feedback>
                    </Form.Group>
                    </Col>
                    

                    <Col md={12}>
                    <Form.Group controlId="formCustomerSMSAlert">
                    <Form.Label>SMS Alert</Form.Label>
                    <Form.Control as="select" className="my-1 mr-sm-2" value={this.state.inputs.sms_alert?this.state.inputs.sms_alert:false} isInvalid={!!this.state.errors.sms_alert} name="sms_alert" onChange={this.inputStateChange} custom >
                         <option value={true}>Yes</option>
                         <option value={false}>No</option>
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">{this.state.errors.sms_alert?this.state.errors.sms_alert:""}</Form.Control.Feedback>
                    </Form.Group>
                    </Col>  

                </Form.Row>               

                </Card.Body>
            </Card>

            </Col>        
            
            <Col md={12} className="text-right p-3"> 
                <Button as={Link} to={appRoutes.customers} variant="secondary">Back</Button>
                <Button variant="primary" type="Submit"  className="mx-2">Submit</Button>
            </Col>            
            </Row>
            </Container>          
            </Form>
          
           </div>	  
           <ConfirmDialog data={this.state.confirmDialog} handleClose={this.state.confirmDialog.handleClose} handleConfirm={this.state.confirmDialog.handleConfirm} />
            </>
        )
    } 

    componentDidMount(){ 
       
        getCountriesList((json) => {        
            if(json.data.success){
                this.setState({
                   countriesList : json.data.countries
                });
            }
        }, (error) => {
            if(error.response.status==401){
                this.clearAuthToken();
            }
            console.log(error);
        });
       
        getStatesList((json) => {         
            if(json.data.success){
                this.setState({
                   statesList : json.data.states
                });
            }
        },(error) => {
            if(error.response.status==401){
                this.clearAuthToken();
            }
            console.log(error);
        });


        if(this.props.match.params.id!==undefined){
           let customerId=this.props.match.params.id;           
           this.setState({loader : true});
           getCustomerDetails(customerId,(json) => {    
                if(json.data.success){
                  let data =json.data.data;                               
                  let inputs ={
                      name : data.name,
                      is_active : data.status,
                      sms_alert : data.sms_alert,
                      opening_balance : data.opening_balance,
                      customer_group : data.customer_group,
                      due_days:data.due_days,
                      credit_limit:data.credit_limit,
                      contact_person:data.contact_person,
                      address:data.address,
                      city:data.city,
                      pin_code:data.pin_code,
                      state_id:data.state_id,
                      country_id:data.country_id,
                      contact_number:data.contact_number,
                      mobile_number:data.mobile_number,
                      fax:data.fax,
                      email:data.email,
                      print_name:data.print_name,
                      gstin:data.gstin,
                      pan_no:data.pan_no,
                      sales_type:data.sales_type
                  }; 
                  console.log(data);

                  this.setState( prev =>{
                    return{
                        ...prev,  loader :false, inputs: inputs, imageCrop :{...prev.imageCrop, previewImage : data.image }
                    }
                 });
                 console.log(this.state)
                }else{
                    this.props.history.push({
                        pathname: appRoutes.products,                     
                        state: { pageAlert:{className:'alert alert-success', message:json.data.message} }
                    });  
                }
            },(error) => {
                this.setState({loader : false});
                console.log(error);
            });
        }
        /*if(!this.state.imageCrop.previewImage){
            this.setState( prev => {
                return { ...prev,imageCrop : { ...prev.imageCrop, previewImage :'/images/placeholder.jpg' } }
            });    
        } */   
    }
    
    pageAlert(alert){   
        alert.duration=6000;
        this.setState({pageAlert:alert});   
    }   
    

}
export default Customer;