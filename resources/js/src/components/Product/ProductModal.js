import React, { useState, useEffect } from 'react';
import { Button, Modal, Form, Col } from 'react-bootstrap';
import { apiRoutes, appBaseUrl } from '../../Utils';

let hideLoader = true;

function handleSubmit(e,props){
  e.preventDefault();
  let name=document.getElementById('modalProductName').value;  
  let brand=document.getElementById('modalProductBrand').value;
  let category=document.getElementById('modalProductCategory').value;
  let subCategory=document.getElementById('modalProductSubCategory').value;
  let unit=document.getElementById('modalProductUnit').value;
  let costPrice=document.getElementById('modalProductCostPrice').value;
  let sellingPrice=document.getElementById('modalProductSellingPrice').value;
  let gstTax=document.getElementById('modalProductGST').value;
  let validation=true;

  if(name==""){
    validation=false;
    document.getElementById('modalProductName').classList.add("is-invalid");
    document.getElementById('modalProductName').nextSibling.innerText='Name is required!';    
  }
  if(brand==""){
    validation=false;
    document.getElementById('modalProductBrand').classList.add("is-invalid");
    document.getElementById('modalProductBrand').nextSibling.innerText='Brand is required!';    
  }
  if(category==""){
    validation=false;
    document.getElementById('modalProductCategory').classList.add("is-invalid");
    document.getElementById('modalProductCategory').nextSibling.innerText='Category is required!';    
  }
  /*if(subCategory==""){
    validation=false;
    document.getElementById('modalProductSubCategory').classList.add("is-invalid");
    document.getElementById('modalProductSubCategory').nextSibling.innerText='Sub Category is required!';    
  }*/
  if(unit==""){
    validation=false;
    document.getElementById('modalProductUnit').classList.add("is-invalid");
    document.getElementById('modalProductUnit').nextSibling.innerText='Unit is required!';    
  }
  if(costPrice==""){
    validation=false;
    document.getElementById('modalProductCostPrice').classList.add("is-invalid");
    document.getElementById('modalProductCostPrice').nextSibling.innerText='Cost Price is required!';    
  }
  if(sellingPrice==""){
    validation=false;
    document.getElementById('modalProductSellingPrice').classList.add("is-invalid");
    document.getElementById('modalProductSellingPrice').nextSibling.innerText='Cost Price is required!';    
  }

  if(validation){
    let errors=document.querySelectorAll('#productModalForm .is-invalid');
    for (let i = 0; i < errors.length; i++) {
      errors[i].classList.remove("is-invalid");
      errors[i].nextSibling.innerText=""; 
    }
    
    let formData=new FormData(e.target);
    let request={
        method: 'post',
        url: apiRoutes.product,
        data: formData,
        headers: {'Content-Type': 'multipart/form-data' }
    };   
    hideLoader=false;   
    axios(request).then(response => {return response;}).then(json => {   
        hideLoader=true;      
        if (json.data.validation_error) { 
            let error=json.data.validation_error;
            for(let item in error){
              let element=document.querySelector('#productModalForm *[name="'+item+'"]');
              element.classList.add("is-invalid");
              element.nextSibling.innerText=error[item]; 
            }            
        }else if(json.data.success){  
            props.onHide(); 
            props.pageAlert({type:1,header:"Success!",message:json.data.message});
        }else{        
          props.pageAlert({type:0,header:"Error!",message:json.data.message});
        }			
    }).catch(error => { 
        hideLoader=true;      
        if(error){
          console.log(error); 
        }
    });    
  }
}

function handleClose(){
    let errors=document.querySelectorAll('#productModalForm .is-invalid');
    for (let i = 0; i < errors.length; i++) {
      errors[i].classList.remove("is-invalid");
      errors[i].nextSibling.innerText=""; 
    }
}

function handleNumerics(e){
    if((/[^0-9 ]/g.test(event.key)) ){ e.preventDefault(); }
} 

export default function ProductModal(props) {	  
        const [brands, setBrands] = useState([]);
        const [categories, setCategories] = useState([]);
        const [subCategories, setSubCategories] = useState([]);
        const [units, setUnits] = useState([]);        
        const [gstLists, setGstLists] = useState([]);    

        useEffect(()=>{
          let request={ method: 'get', url: apiRoutes.brands }; 
          axios(request).then(response =>{ return response }).then(json => { 
            setBrands(json.data.data);                         
          }).catch(error=>{ console.log(error);});
        },[]);

        useEffect(()=>{
          let request={ method: 'get', url: apiRoutes.productCategories }; 
          axios(request).then(response =>{ return response }).then(json => { 
            setCategories(json.data.data);                         
          }).catch(error=>{ console.log(error);});
        },[]);    
        
        useEffect(()=>{
          let request={ method: 'get', url: apiRoutes.productSubCategories }; 
          axios(request).then(response =>{ return response }).then(json => { 
            setSubCategories(json.data.data);                         
          }).catch(error=>{ console.log(error);});
        },[]); 

        useEffect(()=>{
          let request={ method: 'get', url: apiRoutes.units }; 
          axios(request).then(response =>{ return response }).then(json => { 
            setUnits(json.data.data);                         
          }).catch(error=>{ console.log(error);});
        },[]);

        useEffect(()=>{
          let request={ method: 'get', url: apiRoutes.gstTaxes }; 
          axios(request).then(response =>{ return response }).then(json => { 
            setGstLists(json.data.data);                         
          }).catch(error=>{ console.log(error);});
        },[]);

        return (<Modal 
            show={props.data.show} 
            onHide={()=>{ handleClose(); props.onHide(); }} 
            onShow={ ()=>{  document.getElementById('modalProductName').focus() } }
            backdrop="static"
            size="lg"
            keyboard={false}
            className="modal-sm-form" > 

            <div className="loader-overlay" style={ hideLoader?{display:'none'}:{display:'flex'} }>
                <img src={appBaseUrl+"/images/loader.gif"} alt="Loading..." className="loader-image" title="Loading..."/>
            </div>

            <Modal.Header closeButton> 
              <Modal.Title>{props.data.headerName?props.data.headerName:"Product"}</Modal.Title> 
            </Modal.Header> 

            <Form id="productModalForm" onSubmit={(e)=>{ handleSubmit(e,props); } }>
            <Modal.Body>

            <Form.Row>

              <Col md={6}>
              <Form.Group controlId="modalProductName">
                  <Form.Label>Product Name <span className="text-danger">*</span></Form.Label>
                  <Form.Control type="text" size="sm" placeholder="Product Name" name="name"                       
                      value={props.inputs.name?props.inputs.name:""} 
                      onChange={props.onChangeInput} 
                  />
                  <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
              </Form.Group>	
              <input type="hidden" value="1" name="is_active" />
              <input type="hidden" value={props.inputs.id?props.inputs.id:""} name="id" id="modalProductId" />
              </Col>    

              <Col md={6}>
              <Form.Group controlId="modalProductHsn">
                  <Form.Label>Product HSN</Form.Label>
                  <Form.Control type="text"  size="sm" placeholder="Product HSN" name="hsn" 
                  value={props.inputs.hsn?props.inputs.hsn:""} 
                  onChange={props.onChangeInput}  />
                  <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
              </Form.Group>	
              </Col>

              <Col md={6}>
              <Form.Group controlId="modalProductBarcode">
                  <Form.Label>Barcode</Form.Label>
                  <Form.Control type="text" size="sm" placeholder="Barcode" name="barcode" 
                  value={props.inputs.barcode?props.inputs.barcode:""} 
                  onChange={props.onChangeInput} />
                  <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
              </Form.Group>	
              </Col>
           
              <Col md={6}> 
                <Form.Group controlId="modalProductBarcodeType">
                    <Form.Label>Barcode Type </Form.Label>
                    <Form.Control as="select" size="sm" name="barcode_type" 
                    onChange={props.onChangeInput} 
                    value={props.inputs.barcode_type?props.inputs.barcode_type:""} 
                    custom>
                        <option value="Own Barcode">Own Barcode</option>
                        <option value="Company Barcode">Company Barcode</option>
                    </Form.Control>
                    <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group controlId="modalProductBrand">
                    <Form.Label>Brand <span className="text-danger">*</span></Form.Label>
                    <Form.Control as="select" size="sm" value={props.inputs.brand_id?props.inputs.brand_id:""} name="brand_id" onChange={props.onChangeInput} custom >
                        <option value="">Choose...</option>
                        {brands.map(({ id, name }, index) => <option key={id} value={id} >{name}</option>)}
                    </Form.Control>
                    <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group controlId="modalProductCategory">
                    <Form.Label>Category <span className="text-danger">*</span></Form.Label>
                    <Form.Control as="select" size="sm" value={props.inputs.category_id?props.inputs.category_id:""} name="category_id" onChange={props.onChangeInput} custom >
                        <option value="">Choose...</option>
                        {categories.map(({ id, name }, index) => <option key={id} value={id} >{name}</option>)}
                    </Form.Control>
                    <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group controlId="modalProductSubCategory">
                    <Form.Label>Sub Category </Form.Label>
                    <Form.Control as="select" size="sm" value={props.inputs.sub_category_id?props.inputs.sub_category_id:""} name="sub_category_id" onChange={props.onChangeInput} custom >
                        <option value="">Choose...</option>
                        {subCategories.map(({ id, name }, index) => <option key={id} value={id} >{name}</option>)}
                    </Form.Control>
                    <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group controlId="modalProductUnit">
                    <Form.Label>Units <span className="text-danger">*</span></Form.Label>
                    <Form.Control as="select" size="sm" value={props.inputs.unit_id?props.inputs.unit_id:""} name="unit_id" onChange={props.onChangeInput} custom >
                        <option value="">Choose...</option>
                        {units.map(({ id, name }, index) => <option key={id} value={id} >{name}</option>)}
                    </Form.Control>
                    <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col md={6}>
              <Form.Group controlId="modalProductCostPrice">
                  <Form.Label>Cost Price <span className="text-danger">*</span></Form.Label>
                  <Form.Control type="text" size="sm" placeholder="Product Cost Price" name="cost_price" 
                  value={props.inputs.cost_price?props.inputs.cost_price:""} 
                  onChange={props.onChangeInput} 
                  onKeyPress={handleNumerics} />
                  <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
              </Form.Group>	
              </Col>

              <Col md={6}>
              <Form.Group controlId="modalProductSellingPrice">
                  <Form.Label>Selling Price <span className="text-danger">*</span></Form.Label>
                  <Form.Control type="text" size="sm" placeholder="Product Selling Price" name="selling_price" 
                  value={props.inputs.selling_price?props.inputs.selling_price:""} 
                  onChange={props.onChangeInput} 
                  onKeyPress={handleNumerics} />
                  <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
              </Form.Group>	
              </Col>

              <Col md={6}>
                <Form.Group controlId="modalProductGST">
                    <Form.Label>GST Tax</Form.Label>
                    <Form.Control as="select" size="sm" value={props.inputs.sales_gst_id?props.inputs.sales_gst_id:""} name="sales_gst_id" onChange={props.onChangeInput} custom >
                        <option value="">Choose...</option>
                        {gstLists.map(({ id, name }, index) => <option key={id} value={id} >{name}</option>)}
                    </Form.Control>
                    <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                </Form.Group>
              </Col>              

            </Form.Row>	

            </Modal.Body> 
            <Modal.Footer>
              <Button variant="primary" size="sm" type="submit">Submit </Button>  
              <Button variant="secondary" size="sm" onClick={()=>{ handleClose(); props.onHide(); } } className="close-modal-btn">Close</Button>
            </Modal.Footer> 
          </Form>
            
          </Modal>);

}