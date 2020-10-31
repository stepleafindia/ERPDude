import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { apiRoutes,appBaseUrl } from '../../Utils';

let hideLoader=true;

function handleClose(){
    let modalGstName=document.getElementById('modalGstName');
    let modalGstType=document.getElementById('modalGstType');
    let modalCgst=document.getElementById('modalCgst');
    let modalIgst=document.getElementById('modalIgst');
    let modalSgst=document.getElementById('modalSgst');
    let modalFormError= document.querySelector('#gstTaxForm .form-error');
    modalGstName.classList.remove("is-invalid");
    modalGstName.nextSibling.innerText='';
    modalGstType.classList.remove("is-invalid");
    modalGstType.nextSibling.innerText='';
    modalCgst.classList.remove("is-invalid");
    modalCgst.nextSibling.innerText='';
    modalIgst.classList.remove("is-invalid");
    modalIgst.nextSibling.innerText='';
    modalSgst.classList.remove("is-invalid");
    modalSgst.nextSibling.innerText='';
    modalFormError.innerText='';
}

function handleSubmit(e,props){
    e.preventDefault();
    let closeModal=props.handleClose;
    let pageAlert=props.pageAlert; 

    let gstTaxId=document.getElementById('modalGstTaxId').value;
    let modalGstName=document.getElementById('modalGstName');
    let modalGstType=document.getElementById('modalGstType');
    let modalCgst=document.getElementById('modalCgst');
    let modalIgst=document.getElementById('modalIgst');
    let modalSgst=document.getElementById('modalSgst');
    let modalFormError= document.querySelector('#gstTaxForm .form-error');
    modalFormError.innerText="";
    let validation=true;

    if(modalGstName.value.trim()==""){
        validation=false;
        modalGstName.classList.add("is-invalid");
        modalGstName.nextSibling.innerText='GST Name is required!';
    }else{
        modalGstName.classList.remove("is-invalid");
        modalGstName.nextSibling.innerText=''; 
    }

    if(modalGstType.value.trim()==""){
        validation=false;
        modalGstType.classList.add("is-invalid");
        modalGstType.nextSibling.innerText='GST Type is required!';
    }else{
        modalGstType.classList.remove("is-invalid");
        modalGstType.nextSibling.innerText=''; 
    }

    if(modalCgst.value.trim()==""){
        validation=false;
        modalCgst.classList.add("is-invalid");
        modalCgst.nextSibling.innerText='CGST is required!';
    }else{
        modalCgst.classList.remove("is-invalid");
        modalCgst.nextSibling.innerText=''; 
    }

    if(modalIgst.value.trim()==""){
        validation=false;
        modalIgst.classList.add("is-invalid");
        modalIgst.nextSibling.innerText='IGST is required!';
    }else{
        modalIgst.classList.remove("is-invalid");
        modalIgst.nextSibling.innerText=''; 
    }

    if(modalSgst.value.trim()==""){
        validation=false;
        modalSgst.classList.add("is-invalid");
        modalSgst.nextSibling.innerText='SGST is required!';
    }else{
        modalSgst.classList.remove("is-invalid");
        modalSgst.nextSibling.innerText=''; 
    }
   
    if(validation){            
        let formData=new FormData(e.target);
        let formUrl=gstTaxId?(apiRoutes.gstTax+'/'+gstTaxId):apiRoutes.gstTax;
        let request={
            method: 'post',
            url: formUrl,
            data: formData,
            headers: {'Content-Type': 'multipart/form-data' }
        };   
        hideLoader=false;          
        axios(request).then(response => {
            return response;
        }).then(json => {   
            hideLoader=true;      
            if(json.data.validation_error){ 
                for(let val in json.data.validation_error){
                   if(val=="type"){
                    document.querySelector('#gstTaxForm select[name="'+val+'"]').classList.add("is-invalid");
                    document.querySelector('#gstTaxForm select[name="'+val+'"]').nextSibling.innerText=json.data.validation_error[val];
                   }else{
                    document.querySelector('#gstTaxForm input[name="'+val+'"]').classList.add("is-invalid");
                    document.querySelector('#gstTaxForm input[name="'+val+'"]').nextSibling.innerText=json.data.validation_error[val];
                   }
                }
            }else if(json.data.success){  
                closeModal(true); 
                pageAlert({className:'success', message:json.data.message});                
            }else{
                modalFormError.innerText=json.data.message;
            }			
        }).catch(error => { 
            hideLoader=true;      
            console.log(error); 
        });
    }
}

export default function UnitModal(props) { 
       
    return ( 
      <>          
        <Modal 
          show={props.data.show} 
          onHide={()=>{handleClose(); props.handleClose(null); }} 
          onShow={ ()=>{  document.getElementById('modalGstName').focus() } }
          backdrop="static"
          keyboard={false}        
        > 
          <div className="loader-overlay" style={ hideLoader?{display:'none'}:{display:'flex'} }>
              <img src={appBaseUrl+"/images/loader.gif"} alt="Loading..." className="loader-image" title="Loading..."/>
          </div>
          <Modal.Header closeButton> 
            <Modal.Title>{props.data.headerName?props.data.headerName:"Product Brand"}</Modal.Title> 
          </Modal.Header> 
          <Form id="gstTaxForm" onSubmit={(e)=>{ handleSubmit(e,props); } }>
          <Modal.Body>           
            <input type="hidden" name="id" value={props.data.taxId} id="modalGstTaxId" />
            <Form.Group controlId="modalGstName">
                <Form.Label>GST Name<span className="text-danger">*</span></Form.Label>
                <Form.Control type="text" placeholder="GST Name" defaultValue={props.data.taxName} name="name" />
				<Form.Control.Feedback type="invalid"></Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="modalGstType">
                <Form.Label>Tax Type<span className="text-danger">*</span></Form.Label>
                <Form.Control as="select" name="type" defaultValue={props.data.taxType}>
                    <option value="">Select Tax Type</option>
                    <option value="Inclusive">Inclusive</option>
                    <option value="Exclusive">Exclusive</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
            </Form.Group>	
            <Form.Group controlId="modalCgst">
                <Form.Label>CGST<span className="text-danger">*</span></Form.Label>
                <Form.Control type="text" placeholder="CGST" defaultValue={props.data.cgst} name="cgst" />
				<Form.Control.Feedback type="invalid"></Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="modalIgst">
                <Form.Label>IGST<span className="text-danger">*</span></Form.Label>
                <Form.Control type="text" placeholder="IGST" defaultValue={props.data.igst} name="igst" />
				<Form.Control.Feedback type="invalid"></Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="modalSgst">
                <Form.Label>SGST<span className="text-danger">*</span></Form.Label>
                <Form.Control type="text" placeholder="SGST" defaultValue={props.data.sgst} name="sgst" />
				<Form.Control.Feedback type="invalid"></Form.Control.Feedback>
            </Form.Group>
            <div className="form-error"></div>		
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