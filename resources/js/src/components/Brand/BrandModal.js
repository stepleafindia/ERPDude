import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { apiRoutes, appBaseUrl } from '../../Utils';

let hideLoader=true;

function handleClose(){
  document.getElementById('modalBrandName').classList.remove("is-invalid");
  document.getElementById('modalBrandName').nextSibling.innerText='';
}

function handleSubmit(e,props){
    e.preventDefault();
    let closeModal=props.handleClose;
    let pageAlert=props.pageAlert; 
    let brandName=document.getElementById('modalBrandName').value;
    let brandId=document.getElementById('modalBrandId').value;
    let formData=new FormData(e.target);
    let formUrl=brandId?(apiRoutes.brand+'/'+brandId):apiRoutes.brand;
    let request={
        method: 'post',
        url: formUrl,
        data: formData,
        headers: {'Content-Type': 'multipart/form-data' }
    };   
    hideLoader=false;
    document.getElementById('modalBrandName').classList.remove("is-invalid");
    document.getElementById('modalBrandName').nextSibling.innerText='';    
    axios(request).then(response => {
        return response;
        }).then(json => {   
        hideLoader=true;      
        if (json.data.validation_error) { 
            document.getElementById('modalBrandName').classList.add("is-invalid");
            document.getElementById('modalBrandName').nextSibling.innerText=json.data.validation_error;
        }else if(json.data.success){  
            closeModal(true); 
            pageAlert({className:'success', message:json.data.message});                
        }else{
            document.getElementById('modalBrandName').classList.add("is-invalid");
            document.getElementById('modalBrandName').nextSibling.innerText=json.data.message; 
        }			
    }).catch(error => { 
        hideLoader=true;      
        console.log(error); 
    });
}

export default function BrandModal(props) {	
	   
    return ( 
      <>          
        <Modal 
          show={props.data.show} 
          onHide={()=>{handleClose(); props.handleClose(null); }} 
          onShow={ ()=>{  document.getElementById('modalBrandName').focus() } }
          backdrop="static"
          keyboard={false}        
        > 
          <div className="loader-overlay" style={ hideLoader?{display:'none'}:{display:'flex'} }>
              <img src={appBaseUrl+"/images/loader.gif"} alt="Loading..." className="loader-image" title="Loading..."/>
          </div>
          <Modal.Header closeButton> 
            <Modal.Title>{props.data.headerName?props.data.headerName:"Product Brand"}</Modal.Title> 
          </Modal.Header> 
          <Form onSubmit={(e)=>{ handleSubmit(e,props); } }>
          <Modal.Body>           
            <input type="hidden" name="id" value={props.data.brandId} id="modalBrandId" />
            <Form.Group controlId="modalBrandName">
                <Form.Label>Brand Name</Form.Label>
                <Form.Control type="text" placeholder="Brand Name" defaultValue={props.data.brandName} name="name" />
				        <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
            </Form.Group>			
          </Modal.Body> 
          <Modal.Footer>
            <Button variant="primary" type="submit">Submit </Button>  
            <Button variant="secondary" onClick={()=>{ props.handleClose(null) } } className="close-modal-btn">Close</Button>
          </Modal.Footer> 
          </Form>
        </Modal> 
      </> 
    ); 
}
