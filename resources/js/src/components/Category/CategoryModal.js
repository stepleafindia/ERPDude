import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { apiRoutes,appBaseUrl } from '../../Utils';

let hideLoader=true;

function handleClose(){
	document.getElementById('modalCategoryName').classList.remove("is-invalid");
  document.getElementById('modalCategoryName').nextSibling.innerText='';
}

function handleSubmit(e,props){
  e.preventDefault();
  let pageAlert=props.pageAlert;
  let categoryName=document.getElementById('modalCategoryName');  
  let categoryId=document.getElementById('modalCategoryId').value;
  let validation=true;
  if(categoryName.value.trim()==""){
    categoryName.classList.add("is-invalid");
    categoryName.nextSibling.innerText='Category is required!'; 
    validation=false;
  }

  if(validation){
    let formData=new FormData(e.target);
    let formUrl=categoryId?(apiRoutes.productCategory+'/'+categoryId):apiRoutes.productCategory;
    let request={
      method: 'post',
      url: formUrl,
      data: formData,
      headers: {'Content-Type': 'multipart/form-data' }
    };
    //let closeBtn=e.target.querySelector('.close-modal-btn');
    hideLoader=false;  
    axios(request).then(response => {
        return response;
      }).then(json => {   
        hideLoader=true;      
        if (json.data.validation_error) { 
            document.getElementById('modalCategoryName').classList.add("is-invalid");
            document.getElementById('modalCategoryName').nextSibling.innerText=json.data.validation_error;
        }else if(json.data.success){          
            pageAlert({className:'alert alert-success', message:json.data.message});	
            props.handleClose();	
          // closeBtn.click();
        }else{
            document.getElementById('modalCategoryName').classList.add("is-invalid");
            document.getElementById('modalCategoryName').nextSibling.innerText=json.data.message; 
        }			
      }).catch(error => { 
        hideLoader=true;      
        console.log(error); 
      });
  }
}
    
export default function CategoryModal(props) {	
	   
    return ( 
      <> 
      {/*
        <Button variant="primary" onClick={handleShow}> 
          Launch static backdrop modal 
        </Button> 
      */}
    
        <Modal 
          show={props.data.show} 
          onHide={()=>{handleClose(); props.handleClose(); }} 
          backdrop="static"
          onShow={ ()=>{  document.getElementById('modalCategoryName').focus() } }
          keyboard={false} 
        > 
          <div className="loader-overlay" style={ hideLoader?{display:'none'}:{display:'flex'} }>
              <img src={appBaseUrl+"/images/loader.gif"} alt="Loading..." className="loader-image" title="Loading..."/>
          </div>
          <Modal.Header closeButton > 
            <Modal.Title>{props.data.headerName?props.data.headerName:"Product Category"}</Modal.Title> 
          </Modal.Header> 
          <Form onSubmit={(e)=>{ handleSubmit(e,props); } }>
          <Modal.Body>           
            <input type="hidden" name="id" value={props.data.categoryId} id="modalCategoryId" />
            <Form.Group controlId="modalCategoryName">
                <Form.Label>Category Name</Form.Label>
                <Form.Control type="text" placeholder="Category Name" defaultValue={props.data.categoryName} name="name" />
				        <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
            </Form.Group>			
          </Modal.Body> 
          <Modal.Footer>
            <Button variant="primary" type="submit"> 
              Submit 
            </Button>  
            <Button variant="secondary" onClick={props.handleClose} className="close-modal-btn"> 
              Close 
            </Button>
          </Modal.Footer> 
          </Form>
        </Modal> 
      </> 
    ); 
}