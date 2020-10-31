import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { apiRoutes,appBaseUrl } from '../../Utils';

let hideLoader=true;

function handleClose(){
	document.getElementById('modalSubCategoryName').classList.remove("is-invalid");
  document.getElementById('modalSubCategoryName').nextSibling.innerText='';
}

function handleSubmit(e,props){
    e.preventDefault();
    let closeModal=props.handleClose;
    let pageAlert=props.pageAlert; 
    let categoryName=document.getElementById('modalSubCategoryName');
    let categoryId=document.getElementById('modalSubCategoryId').value;
    let validation=true;
    if(categoryName.value.trim()==""){
      categoryName.classList.add("is-invalid");
      categoryName.nextSibling.innerText='Sub Category is required!'; 
      validation=false;
    }
    if(validation){
      let formData=new FormData(e.target);
      let formUrl=categoryId?(apiRoutes.productSubCategory+'/'+categoryId):apiRoutes.productSubCategory;
      let request={
          method: 'post',
          url: formUrl,
          data: formData,
          headers: {'Content-Type': 'multipart/form-data' }
      };   
      hideLoader=false;
      document.getElementById('modalSubCategoryName').classList.remove("is-invalid");
      document.getElementById('modalSubCategoryName').nextSibling.innerText='';
      
      axios(request).then(response => {
        return response;
        }).then(json => {   
        hideLoader=true;      
        if (json.data.validation_error) { 
            document.getElementById('modalSubCategoryName').classList.add("is-invalid");
            document.getElementById('modalSubCategoryName').nextSibling.innerText=json.data.validation_error;
        }else if(json.data.success){  
            closeModal(true); 
            pageAlert({className:'success', message:json.data.message});                
        }else{
            document.getElementById('modalSubCategoryName').classList.add("is-invalid");
            document.getElementById('modalSubCategoryName').nextSibling.innerText=json.data.message; 
        }			
      }).catch(error => { 
          hideLoader=true;      
          console.log(error); 
      });
    }

  }

  export default function SubCategoryModal(props) {	
	   
    return ( 
      <>          
        <Modal 
          show={props.data.show} 
          onHide={()=>{handleClose(); props.handleClose(null); }} 
          backdrop="static"
          keyboard={false} 
          onShow={ ()=>{  document.getElementById('modalSubCategoryName').focus() } }
        > 
          <div className="loader-overlay" style={ hideLoader?{display:'none'}:{display:'flex'} }>
              <img src={appBaseUrl+"/images/loader.gif"} alt="Loading..." className="loader-image" title="Loading..."/>
          </div>
          <Modal.Header closeButton> 
            <Modal.Title>{props.data.headerName?props.data.headerName:"Product Sub Category"}</Modal.Title> 
          </Modal.Header> 
          <Form onSubmit={(e)=>{ handleSubmit(e,props); } }>
          <Modal.Body>           
            <input type="hidden" name="id" value={props.data.categoryId} id="modalSubCategoryId" />
            <Form.Group controlId="modalSubCategoryName">
                <Form.Label>Sub Category Name</Form.Label>
                <Form.Control type="text" placeholder="Sub Category Name" defaultValue={props.data.categoryName} name="name" />
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
