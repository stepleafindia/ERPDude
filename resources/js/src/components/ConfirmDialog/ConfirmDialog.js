import React from 'react';
import { Button, Modal } from 'react-bootstrap';

export default function ConfirmDialog(props) {	
	   
    return (      
        <Modal 
          show={props.data.show} 
          onHide={props.handleClose} 
          backdrop="static"
          keyboard={false} 
        >          
          <Modal.Header closeButton> 
            <Modal.Title>{props.data.headerName?props.data.headerName:"Confirm Window"}</Modal.Title> 
          </Modal.Header>           
          <Modal.Body>  
            <p>{props.data.confirmMessage?props.data.confirmMessage:"Are you sure! Confirm to Continue."}</p>		
          </Modal.Body> 
          <Modal.Footer>
            <Button variant="primary" onClick={props.handleConfirm}> 
              Submit 
            </Button>  
            <Button variant="secondary" onClick={props.handleClose}> 
              Close 
            </Button>
          </Modal.Footer>          
        </Modal>      
    ); 
}