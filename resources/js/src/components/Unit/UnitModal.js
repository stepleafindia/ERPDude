import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { apiRoutes } from '../../Utils';

let hideLoader=true;

function handleClose(){
  document.getElementById('modalUnitName').classList.remove("is-invalid");
  document.getElementById('modalUnitName').nextSibling.innerText='';
  document.getElementById('modalUnitCode').classList.remove("is-invalid");
  document.getElementById('modalUnitCode').nextSibling.innerText='';
}

function handleSubmit(e,props){
    e.preventDefault();
    let closeModal=props.handleClose;
    let pageAlert=props.pageAlert; 
    let unitName=document.getElementById('modalUnitName').value;
    let unitCode=document.getElementById('modalUnitCode').value;
    let unitId=document.getElementById('modalUnitId').value;
    let validation=true;

    if(unitCode.trim()==""){
        validation=false;
        document.getElementById('modalUnitCode').classList.add("is-invalid");
        document.getElementById('modalUnitCode').nextSibling.innerText='Unit Code is required!';
    }else{
        document.getElementById('modalUnitCode').classList.remove("is-invalid");
        document.getElementById('modalUnitCode').nextSibling.innerText=''; 
    }
    
    if(unitName.trim()==""){
        validation=false;
        document.getElementById('modalUnitName').classList.add("is-invalid");
        document.getElementById('modalUnitName').nextSibling.innerText='Unit Name is required!';
    }else{
        document.getElementById('modalUnitName').classList.remove("is-invalid");
        document.getElementById('modalUnitName').nextSibling.innerText='';
    }

    if(validation){            
        let formData=new FormData(e.target);
        let formUrl=unitId?(apiRoutes.unit+'/'+unitId):apiRoutes.unit;
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
            if (json.data.validation_error) { 
              for(let val in json.data.validation_error){               
                 document.querySelector('#unitModalForm input[name="'+val+'"]').classList.add("is-invalid");
                 document.querySelector('#unitModalForm input[name="'+val+'"]').nextSibling.innerText=json.data.validation_error[val];
              }
            }else if(json.data.success){  
                closeModal(true); 
                pageAlert({className:'success', message:json.data.message});                
            }else{
                document.getElementById('modalUnitName').classList.add("is-invalid");
                document.getElementById('modalUnitName').nextSibling.innerText=json.data.message; 
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
          onShow={ ()=>{  document.getElementById('modalUnitCode').focus() } }
          backdrop="static"
          keyboard={false}        
        > 
          <div className="loader-overlay" style={ hideLoader?{display:'none'}:{display:'flex'} }>
              <img src="/images/loader.gif" alt="Loading..." className="loader-image" title="Loading..."/>
          </div>
          <Modal.Header closeButton> 
            <Modal.Title>{props.data.headerName?props.data.headerName:"Product Brand"}</Modal.Title> 
          </Modal.Header> 
          <Form id="unitModalForm" onSubmit={(e)=>{ handleSubmit(e,props); } }>
          <Modal.Body>           
            <input type="hidden" name="id" value={props.data.unitId} id="modalUnitId" />
            <Form.Group controlId="modalUnitCode">
                <Form.Label>Unit Code</Form.Label>
                <Form.Control type="text" placeholder="Unit Code" defaultValue={props.data.unitCode} name="code" />
				<Form.Control.Feedback type="invalid"></Form.Control.Feedback>
            </Form.Group>	
            <Form.Group controlId="modalUnitName">
                <Form.Label>Unit Name</Form.Label>
                <Form.Control type="text" placeholder="Unit Name" defaultValue={props.data.unitName} name="name" />
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