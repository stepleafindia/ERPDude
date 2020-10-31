import React, {Component} from 'react';
import { Button, Modal, Form, Col } from 'react-bootstrap';
import { apiRoutes, appBaseUrl } from '../../Utils';
import InputSuggestion from '../InputSuggestion/InputSuggestion';

let hideLoader=true;

function handleSubmit(e,props){
    e.preventDefault();
    let closeModal=props.onHide;
    let pageAlert=props.pageAlert;
    
    let name=document.getElementById('modalCustomerName').value;  
    let customerId=document.getElementById('modalCustomerId').value;
    if(name!=""){
      let formData=new FormData(e.target);
      let formUrl=customerId?(apiRoutes.customer+'/'+customerId):apiRoutes.customer;
      let request={
          method: 'post',
          url: formUrl,
          data: formData,
          headers: {'Content-Type': 'multipart/form-data' }
      };   
      hideLoader=false;
      document.getElementById('modalCustomerName').classList.remove("is-invalid");
      document.getElementById('modalCustomerName').nextSibling.innerText='';    
      axios(request).then(response => {return response;}).then(json => {   
          hideLoader=true;      
          if (json.data.validation_error) { 
              let error=json.data.validation_error;
              for(let item in error){
                let element=document.querySelector('#customerModalForm *[name="'+item+'"]');
                element.classList.add("is-invalid");
                element.nextSibling.innerText=error[item]; 
              }            
          }else if(json.data.success){  
              closeModal(); 
              pageAlert({type:1,header:"Success!",message:json.data.message});  
              props.selectCustomer(props.inputs);              
          }else{
              document.getElementById('modalCustomerName').classList.add("is-invalid");
              document.getElementById('modalCustomerName').nextSibling.innerText=json.data.message; 
          }			
      }).catch(error => { 
          hideLoader=true;      
          if(error){
            console.log(error); 
          }
      });
      
    }else{
      document.getElementById('modalCustomerName').classList.add("is-invalid");
      document.getElementById('modalCustomerName').nextSibling.innerText='Name is required!';    
    }
}

function handleNumerics(e){
  if((/[^0-9 ]/g.test(event.key)) ){ e.preventDefault(); }
}

function handleClose(){
  let errors=document.querySelectorAll('#customerModalForm .is-invalid');
  for (let i = 0; i < errors.length; i++) {
    errors[i].classList.remove("is-invalid");
    errors[i].nextSibling.innerText=""; 
  }
}

export default class CustomerModal extends Component {

    constructor(props){

      super(props);

      this.state = {
          user: props.userData,
          isLoggedIn: props.userIsLoggedIn,
          customerSearch:{
              show:false,
              value:"",
              suggestions:[],
              activeIndex:0
          }
      };

      this.keyDownCustomerSearch=this.keyDownCustomerSearch.bind(this);
      this.onChangeCustomerSearch=this.onChangeCustomerSearch.bind(this);      
      this.onClickCustomerSuggestion=this.onClickCustomerSuggestion.bind(this); 
      this.onBlurCustomerSearch=this.onBlurCustomerSearch.bind(this);
    }

    keyDownCustomerSearch(e){  
        let customerSearchState=this.state.customerSearch;   
        let index=customerSearchState.activeIndex;         
        if(e.keyCode==38 || e.key=="ArrowUp" || e.code=="ArrowUp"){  // Up Arrow
            if(index>0){  customerSearchState.activeIndex=index-1; }
            this.setState({customerSearch:customerSearchState});
            e.target.nextSibling.nextSibling.querySelector('li.active').scrollIntoView(false);
        }else if(e.keyCode==40 || e.key=="ArrowDown" || e.code=="ArrowDown"){  // Down Arrow
            if(index<(customerSearchState.suggestions.length-1)){ customerSearchState.activeIndex=index+1; }
            this.setState({customerSearch:customerSearchState});
            e.target.nextSibling.nextSibling.querySelector('li.active').scrollIntoView(false);
        }else if(( (e.key==="Enter" || e.keyCode===13 || e.code=="Enter") || 
        (e.key==="Tab" || e.keyCode===9 || e.code=="Tab"))){
            let customerSearchState=this.state.customerSearch;
            let suggestion=customerSearchState.suggestions[index];
            if(suggestion){
                customerSearchState.value=suggestion['suggestion_label'];
                customerSearchState.show=false;  
                this.props.updateInput("id",suggestion['id']); 
                this.props.updateInput("name",suggestion['name']);   
                this.props.updateInput("mobile_number",suggestion['mobile_number']); 
                this.props.updateInput("contact_number",suggestion['contact_number']); 
                this.props.updateInput("address",suggestion['address']); 
                this.props.updateInput("city",suggestion['city']); 
                this.props.updateInput("state_id",suggestion['state_id']); 
                this.props.updateInput("country_id",suggestion['country_id']);
                this.props.updateInput("email",suggestion['email']);
                this.props.updateInput("gstin",suggestion['gstin']);  
                this.setState({customerSearch:customerSearchState});
                this.props.selectCustomer(suggestion);
            } 
        }         
    }

    onChangeCustomerSearch(e){
        let value=e.target.value; 
        this.props.updateInput(e.target.name,value); 
        this.props.selectCustomer(null);
        let customerSearchState=this.state.customerSearch;
        customerSearchState.value=value;
        customerSearchState.show=(value!="")?true:false;       
        this.setState({customerSearch:customerSearchState}); 
        if(value!=""){
            let request={ method: 'post', url: apiRoutes.customerSearch,data: {search: value} };       
            axios(request).then(response =>{ return response }).then(json => { 
                let customerSearchState=this.state.customerSearch;
                customerSearchState.activeIndex=0;
                customerSearchState.suggestions=json.data.data;
                this.setState({customerSearch:customerSearchState});              
            }).catch(error=>{ 
                console.log(error);           
            });    
        }    
    }

    onClickCustomerSuggestion(index, item, arr){
      let customerSearchState=this.state.customerSearch;
      customerSearchState.value=item.suggestion_label;
      customerSearchState.show=false;
      this.props.updateInput("name",item.name); 
      this.props.updateInput("id",item.id); 
      this.props.updateInput("mobile_number",item.mobile_number); 
      this.props.updateInput("contact_number",item.contact_number); 
      this.props.updateInput("address",item['address']); 
      this.props.updateInput("city",item['city']); 
      this.props.updateInput("state_id",item['state_id']); 
      this.props.updateInput("country_id",item['country_id']);
      this.props.updateInput("email",item['email']);
      this.props.updateInput("gstin",item['gstin']); 
      this.setState({customerSearch:customerSearchState});
      this.props.selectCustomer(item);
    }

    onBlurCustomerSearch(e){
        let customerSearchState=this.state.customerSearch;
        customerSearchState.show=false;       
        this.setState({customerSearch:customerSearchState});
    }

    customerRenderSuggestions(index, item, arr){   
        return (<>{item.suggestion_label}</>)
    }

    render(){
      let props =this.props;
      let inputs=this.props.data.inputs;
      let customerSearch=this.state.customerSearch;

      return (<Modal 
          show={props.data.show} 
          onHide={()=>{ handleClose(); props.onHide(); }} 
          onShow={ ()=>{  document.getElementById('modalCustomerName').focus() } }
          backdrop="static"
          size="lg"
          keyboard={false}    
          className="modal-sm-form"    
        > 
          <div className="loader-overlay" style={ hideLoader?{display:'none'}:{display:'flex'} }>
              <img src={appBaseUrl+"/images/loader.gif"} alt="Loading..." className="loader-image" title="Loading..."/>
          </div>
          <Modal.Header closeButton> 
            <Modal.Title>{props.data.headerName?props.data.headerName:"Customer"}</Modal.Title> 
          </Modal.Header> 
          <Form id="customerModalForm" onSubmit={(e)=>{ handleSubmit(e,props); } }>
          <Modal.Body>           
          
          <Form.Row>
            <Col md={6}>
            <Form.Group controlId="modalCustomerName">
                <Form.Label>Customer / Company Name</Form.Label>
                <Form.Control type="text" placeholder="Customer / Company Name" name="name" 
                    autoComplete={"Off"}
                    onKeyDown={this.keyDownCustomerSearch} 
                    value={inputs.name?inputs.name:""} 
                    onChange={(e)=>{ this.onChangeCustomerSearch(e,props); } } 
                    onBlur={this.onBlurCustomerSearch}
                    size="sm" 
                />
				        <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                {customerSearch.show?(
                    <InputSuggestion                        
                        suggestions={customerSearch.suggestions}
                        activeIndex={customerSearch.activeIndex}
                        onClickSuggestion={this.onClickCustomerSuggestion}                                         
                        renderSuggestion={this.customerRenderSuggestions}                        
                    />):""}
            </Form.Group>	
            <input type="hidden" value="1" name="is_active" />
            <input type="hidden" value={inputs.id?inputs.id:""} name="id" id="modalCustomerId" />
            </Col>           
            <Col md={6}>
            <Form.Group controlId="modalMobileNo">
                <Form.Label>Mobile No</Form.Label>
                <Form.Control type="text" size="sm"  placeholder="Mobile No" value={inputs.mobile_number?inputs.mobile_number:""} name="mobile_number" onChange={(e)=>props.updateInputs(e)} onKeyPress={handleNumerics} />
				        <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
            </Form.Group>	
            </Col>
            <Col md={6}>
            <Form.Group controlId="modalContactNo">
                <Form.Label>Contact No</Form.Label>
                <Form.Control type="text" size="sm"  placeholder="Contact No" value={inputs.contact_number?inputs.contact_number:""} name="contact_number" onChange={(e)=>props.updateInputs(e)} onKeyPress={handleNumerics} />
				        <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
            </Form.Group>	
            </Col>
            <Col md={6}>
            <Form.Group controlId="modalAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" size="sm"  placeholder="Address" value={inputs.address?inputs.address:""} name="address" onChange={(e)=>props.updateInputs(e)} />
				        <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
            </Form.Group>	
            </Col>
            <Col md={6}>
            <Form.Group controlId="modalCity">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" size="sm"  placeholder="City" value={inputs.city?inputs.city:""} name="city" onChange={(e)=>props.updateInputs(e)} />
				        <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
            </Form.Group>	
            </Col>
            <Col md={6}>
            <Form.Group controlId="modalState">
                <Form.Label>State</Form.Label>
                <Form.Control as="select"  size="sm"  value={inputs.state_id?inputs.state_id:""} onChange={(e)=>props.updateInputs(e)} name="state_id">
                  <option value="">Choose...</option>   
                  {props.stateLists.map((value,index)=>{
                   return (<option value={value.id} key={index}>{value.name}</option> )  
                  })}           
                </Form.Control>
				        <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
            </Form.Group>	
            </Col>
            <Col md={6}>
            <Form.Group controlId="modalCountry">
                <Form.Label>Country</Form.Label>
                <Form.Control as="select" size="sm"  value={inputs.country_id?inputs.country_id:""} onChange={(e)=>props.updateInputs(e)} name="country_id" >
                  <option value="">Choose...</option>   
                  {props.countryLists.map((value,index)=>{
                   return (<option value={value.id} key={index}>{value.name}</option> )  
                  })}              
                </Form.Control>
				        <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
            </Form.Group>	
            </Col>
            <Col md={6}>
            <Form.Group controlId="modalEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" size="sm"  placeholder="Email" value={inputs.email?inputs.email:""} name="email" onChange={(e)=>props.updateInputs(e)} />
				        <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
            </Form.Group>	
            </Col>
            <Col md={6}>
            <Form.Group controlId="modalGSTIN">
                <Form.Label>GSTIN</Form.Label>
                <Form.Control type="text" size="sm" placeholder="GSTIN" value={inputs.gstin?inputs.gstin:""} name="gstin" onChange={(e)=>props.updateInputs(e)} />
				        <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
            </Form.Group>	
            </Col>
          </Form.Row>		
          </Modal.Body> 
          <Modal.Footer>
            <Button variant="primary" size="sm"  type="submit">Submit </Button>  
            <Button variant="secondary" size="sm"  onClick={()=>{ handleClose(); props.onHide(); } } className="close-modal-btn">Close</Button>
          </Modal.Footer> 
          </Form>
        </Modal>);
    } 

}
