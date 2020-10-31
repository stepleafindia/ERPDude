import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Header from '../../../components/Header/Header';
import ConfirmDialog from '../../../components/ConfirmDialog/ConfirmDialog';
import FlashAlert from '../../../components/Alert/FlashAlert';
import { Card, Button, Container, Row, Col, Form } from 'react-bootstrap';
import Cropper from 'react-easy-crop';
import Loader from '../../../components/Loader/Loader'; // Page Loader Component.
import './Product.css';
import { apiRoutes,appRoutes,appBaseUrl,getCategoriesList, getSubCategoriesList, getBrandsList, getUnitsList, getGstTaxesList, getProductDetails} from '../../../Utils';

class Product extends Component {    

    constructor(props) {
        super(props); 
        this.getInitialState=this.getInitialState.bind(this);
        this.state = this.getInitialState();
        this.pageAlert=this.pageAlert.bind(this);
        this.getCategoriesList=getCategoriesList.bind(this); 
        this.getSubCategoriesList=getSubCategoriesList.bind(this); 
        this.getBrandsList=getBrandsList.bind(this);
        this.getUnitsList=getUnitsList.bind(this);
        this.getGstTaxesList=getGstTaxesList.bind(this);
        this.getProductDetails=getProductDetails.bind(this);
        this.onImageChange=this.onImageChange.bind(this);
        this.onCropChange=this.onCropChange.bind(this);
        this.onCropComplete=this.onCropComplete.bind(this);
        this.onZoomChange=this.onZoomChange.bind(this);
        this.showCroppedImage=this.showCroppedImage.bind(this); 
        this.selectInputChange=this.selectInputChange.bind(this);  
        this.inputStateChange=this.inputStateChange.bind(this);
        this.validateNumeric=this.validateNumeric.bind(this); 
        this.productFormSubmit=this.productFormSubmit.bind(this);  
        this._isMounted= false;      
    }

    getInitialState(){
        return {
            productId:this.props.match.params.id?this.props.match.params.id:null,
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
            categoriesList: [],
            subCategoriesList:[],
            brandsList:[],
            unitsList:[],
            gstTaxList:[],
            user:[],
            error: '',               
            imageCrop:{
                image:null,
                crop:{x:20,y:20},
                zoom: 1,
                aspect: 4 / 3,
                croppedAreaPixels : null,
                croppedImage:null,
                previewImage:null
            },
            pageAlert:{},  
            errors:{},        
            inputs:{}
        };
    }
       
    validateFormInput(inputName,value){
        let errors=[];
        let requiredFields=["name","category_id","brand_id","unit_id","mrp","cost_price","selling_price","sales_gst_id"];
        if(requiredFields.indexOf(inputName)!=-1){ 
            if(!value){
                errors.push("This field is required!");
            }
        }       
        return errors.length?errors:null;
    }

    productFormSubmit(e){
        e.preventDefault();
        let stateInputs=this.state.inputs;
        let inputErrors=this.state.errors;       
        let validation=true;

        if(!stateInputs.name){
            inputErrors.name="Product Name is required!";
            validation=false;
        }
        if(!stateInputs.category_id){
            inputErrors.category_id="Product Category is required!";
            validation=false;
        }
        if(!stateInputs.brand_id){
            inputErrors.brand_id="Product Brand is required!";
            validation=false;
        }
        if(!stateInputs.unit_id){
            inputErrors.unit_id="Product Unit is required!";
            validation=false;
        }
        if(!stateInputs.mrp){
            inputErrors.mrp="Product MRP is required!";
            validation=false;
        }
        if(!stateInputs.cost_price){
            inputErrors.cost_price="Product Cost Price is required!";
            validation=false;
        }
        if(!stateInputs.selling_price){
            inputErrors.selling_price="Product Selling Price is required!";
            validation=false;
        }       
        if(!stateInputs.sales_gst_id){
            inputErrors.sales_gst_id="Product Sales Tax is required!";
            validation=false;
        }       
        this.setState( prev =>{
            return{
                ...prev, errors: inputErrors
            }
        });  
        
        if(validation){
            let formData=new FormData(e.target);
            let formUrl=this.state.productId?(apiRoutes.product+'/'+this.state.productId):apiRoutes.product;
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
                        pathname: appRoutes.products,
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
        let numericInputs=["selling_price","cost_price"];
        if(numericInputs.indexOf(e.target.name) != -1 && 
        (stateInputs.selling_price && stateInputs.cost_price )){
            let margin=stateInputs.selling_price-stateInputs.cost_price;
            stateInputs.margin=(margin/stateInputs.cost_price)*100;
        }
    }

    validateNumeric(e){
        let numericInputs=["mrp","selling_price","cost_price","margin","discount"];
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
                    <h1>Product</h1> 
                    <div><Button as={Link} to={appRoutes.products} variant="primary">Back</Button></div>         
                </div>
                </div>                                  
            </div> 
            { (this.state.pageAlert &&  this.state.pageAlert.message) ? 
            <FlashAlert data={this.state.pageAlert} duration={6000} show={true} onClose={()=>this.pageAlert({})} />
            :''}   
            <Form method="post" onSubmit={this.productFormSubmit} id="productForm">
            <Container fluid>
            <Row className="no-gutters">
            <Col> 

            <Card className="form-card">

                <Card.Body>

                <h5 className="card-title">Product Details</h5>
                <Form.Row>
                    <Col md={6}>
                    <Form.Group controlId="formProductName">
                    <Form.Label>Name <span className="text-danger">*</span></Form.Label>
                    <Form.Control type="text" placeholder="Product Name" name="name" value={this.state.inputs.name?this.state.inputs.name:""} isInvalid={!!this.state.errors.name} onChange={this.inputStateChange} />
                    <Form.Control.Feedback type="invalid">{this.state.errors.name?this.state.errors.name:""}</Form.Control.Feedback>
                    </Form.Group>
                    </Col>

                    <Col md={6}>
                    <Form.Group controlId="formProductHSN">
                    <Form.Label>HSN Code </Form.Label>
                    <Form.Control type="text" placeholder="HSN Code" name="hsn" value={this.state.inputs.hsn?this.state.inputs.hsn:""} isInvalid={!!this.state.errors.hsn} onChange={this.inputStateChange} />
                    <Form.Control.Feedback type="invalid">{this.state.errors.hsn?this.state.errors.hsn:""}</Form.Control.Feedback>
                    </Form.Group>
                    </Col>

                    <Col md={6}>
                    <Form.Group controlId="formProductBarcode">
                    <Form.Label>Barcode </Form.Label>
                    <Form.Control type="text" placeholder="Barcode" name="barcode" value={this.state.inputs.barcode?this.state.inputs.barcode:""} isInvalid={!!this.state.errors.barcode} onChange={this.inputStateChange} />
                    <Form.Control.Feedback type="invalid">{this.state.errors.barcode?this.state.errors.barcode:""}</Form.Control.Feedback>
                    </Form.Group>
                    </Col>

                    <Col md={6}> 
                    <Form.Group controlId="formProductBarcodeType">
                    <Form.Label>Barcode Type </Form.Label>
                    <Form.Control as="select" className="my-1 mr-sm-2" value={this.state.inputs.barcode_type?this.state.inputs.barcode_type:""} isInvalid={!!this.state.errors.barcode_type} name="barcode_type" onChange={this.inputStateChange} custom>
                        <option value="Own Barcode">Own Barcode</option>
                        <option value="Company Barcode">Company Barcode</option>
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">{this.state.errors.barcode_type?this.state.errors.barcode_type:""}</Form.Control.Feedback>
                    </Form.Group>
                    </Col>

                    <Col md={6}> 
                    <Form.Group controlId="formProductCategory">
                    <Form.Label>Category <span className="text-danger">*</span></Form.Label>
                    <Form.Control as="select" className="my-1 mr-sm-2" value={this.state.inputs.category_id?this.state.inputs.category_id:""} isInvalid={!!this.state.errors.category_id} name="category_id" onChange={this.inputStateChange} custom>
                        <option value="">Choose...</option>
                        {this.state.categoriesList.map(({ id, name }, index) => <option key={id} value={id} >{name}</option>)}
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">{this.state.errors.category_id?this.state.errors.category_id:""}</Form.Control.Feedback>
                    </Form.Group>
                    </Col>

                    <Col md={6}>
                    <Form.Group controlId="formProductSubCategory">
                    <Form.Label>Sub Category</Form.Label>
                    <Form.Control as="select" className="my-1 mr-sm-2" value={this.state.inputs.sub_category_id?this.state.inputs.sub_category_id:""} isInvalid={!!this.state.errors.sub_category_id} name="sub_category_id" onChange={this.inputStateChange} custom >
                        <option value="">Choose...</option>
                        {this.state.subCategoriesList.map(({ id, name }, index) => <option key={id} value={id} >{name}</option>)}
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">{this.state.errors.sub_category_id?this.state.errors.sub_category_id:""}</Form.Control.Feedback>
                    </Form.Group>
                    </Col>                       

                    <Col md={6}>
                    <Form.Group controlId="formProductBrand">
                    <Form.Label>Brand <span className="text-danger">*</span></Form.Label>
                    <Form.Control as="select" className="my-1 mr-sm-2" value={this.state.inputs.brand_id?this.state.inputs.brand_id:""} name="brand_id" isInvalid={!!this.state.errors.brand_id} onChange={this.inputStateChange} custom >
                        <option value="">Choose...</option>
                        {this.state.brandsList.map(({ id, name }, index) => <option key={id} value={id} >{name}</option>)}
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">{this.state.errors.brand_id?this.state.errors.brand_id:""}</Form.Control.Feedback>
                    </Form.Group>
                    </Col>

                    <Col md={6}>
                    <Form.Group controlId="formProductUnit">
                    <Form.Label>Unit <span className="text-danger">*</span></Form.Label>
                    <Form.Control as="select" className="my-1 mr-sm-2" value={this.state.inputs.unit_id?this.state.inputs.unit_id:""} name="unit_id" isInvalid={!!this.state.errors.unit_id} onChange={this.inputStateChange} custom >
                        <option value="">Choose...</option>
                        {this.state.unitsList.map(({ id, name }, index) => <option key={id} value={id} >{name}</option>)}
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">{this.state.errors.unit_id?this.state.errors.unit_id:""}</Form.Control.Feedback>
                    </Form.Group>
                    </Col>

                    <Col md={6}>
                    <Form.Group controlId="formProductStyle">
                    <Form.Label>Style </Form.Label>
                    <Form.Control type="text" placeholder="Style" value={this.state.inputs.style?this.state.inputs.style:""} name="style" isInvalid={!!this.state.errors.style} onChange={this.inputStateChange} />
                    <Form.Control.Feedback type="invalid">{this.state.errors.style?this.state.errors.style:""}</Form.Control.Feedback>
                    </Form.Group>
                    </Col>
                </Form.Row>
                <h5 className="card-title">Product Price</h5>    
                <Form.Row>
                    <Col md={6}>
                    <Form.Group controlId="formProductMRP">
                    <Form.Label>MRP <span className="text-danger">*</span></Form.Label>
                    <Form.Control type="text" placeholder="MRP" value={this.state.inputs.mrp?this.state.inputs.mrp:""} name="mrp" isInvalid={!!this.state.errors.mrp} onChange={this.inputStateChange} onInput={this.validateNumeric} />
                    <Form.Control.Feedback type="invalid">{this.state.errors.mrp?this.state.errors.mrp:""}</Form.Control.Feedback>
                    </Form.Group>
                    </Col>

                    <Col md={6}>
                    <Form.Group controlId="formProductCostPrice">
                    <Form.Label>Cost Price <span className="text-danger">*</span></Form.Label>
                    <Form.Control type="text" placeholder="Cost Price" value={this.state.inputs.cost_price?this.state.inputs.cost_price:""} name="cost_price" onChange={this.inputStateChange} onInput={this.validateNumeric} isInvalid={!!this.state.errors.cost_price} />
                    <Form.Control.Feedback type="invalid">{this.state.errors.cost_price?this.state.errors.cost_price:""}</Form.Control.Feedback>
                    </Form.Group>
                    </Col>

                    <Col md={6}>
                    <Form.Group controlId="formProductSellingPrice">
                    <Form.Label>Selling Price <span className="text-danger">*</span></Form.Label>
                    <Form.Control type="text" placeholder="Selling Price" value={this.state.inputs.selling_price?this.state.inputs.selling_price:""} name="selling_price" onChange={this.inputStateChange} onInput={this.validateNumeric} isInvalid={!!this.state.errors.selling_price}  />
                    <Form.Control.Feedback type="invalid">{this.state.errors.selling_price?this.state.errors.selling_price:""}</Form.Control.Feedback>
                    </Form.Group>
                    </Col>

                    <Col md={6}>
                    <Form.Group controlId="formProductMargin" >
                    <Form.Label>Margin (%)</Form.Label>
                    <Form.Control type="text" placeholder="Margin (%)" value={this.state.inputs.margin?this.state.inputs.margin:""} name="margin" isInvalid={!!this.state.errors.margin} onChange={this.inputStateChange} disabled />
                    <Form.Control.Feedback type="invalid">{this.state.errors.margin?this.state.errors.margin:""}</Form.Control.Feedback>
                    </Form.Group>
                    </Col>

                    <Col md={6}>
                    <Form.Group controlId="formProductDiscount" >
                    <Form.Label>Discount (%) </Form.Label>
                    <Form.Control type="text" placeholder="Discount (%)" value={this.state.inputs.discount?this.state.inputs.discount:""} name="discount" isInvalid={!!this.state.errors.discount} onChange={this.inputStateChange} onInput={this.validateNumeric} />
                    <Form.Control.Feedback type="invalid">{this.state.errors.discount?this.state.errors.discount:""}</Form.Control.Feedback>
                    </Form.Group>
                    </Col>

                    <Col md={6}>
                    <Form.Group controlId="formProductSalesTax">
                    <Form.Label>Sales Tax <span className="text-danger">*</span></Form.Label>
                    <Form.Control as="select" className="my-1 mr-sm-2" value={this.state.inputs.sales_gst_id?this.state.inputs.sales_gst_id:""} name="sales_gst_id" isInvalid={!!this.state.errors.sales_gst_id} onChange={this.inputStateChange} custom >
                        <option value="">Choose...</option>
                        {this.state.gstTaxList.map(({ id, name }, index) => <option key={id} value={id} >{name}</option>)}
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">{this.state.errors.sales_gst_id?this.state.errors.sales_gst_id:""}</Form.Control.Feedback>
                    </Form.Group>
                    </Col>                       
                </Form.Row>

                </Card.Body>
            </Card>

            </Col>
            
            <Col md={4}> 

            <Card className="form-card">
                <Card.Body>
                    <h5 className="card-title">Product Image</h5>
                    <input type="hidden" name="image_src" defaultValue={ this.state.imageCrop.croppedImage } />
                                                 
                    <img src={this.state.imageCrop.previewImage?this.state.imageCrop.previewImage:appBaseUrl+'/images/placeholder.jpg'} className="preview-image" alt="Preview" title="Preview"/> 
                  
                    { this.state.imageCrop.image!=null?
                    <div className="position-relative">
                    <div className="crop-container" style={{width:"300px",height:"250px"}}>                    
                   <Cropper
                        image={this.state.imageCrop.image}
                        crop={this.state.imageCrop.crop}
                        zoom={this.state.imageCrop.zoom}
                        aspect={this.state.aspect}
                        onCropChange={this.onCropChange}
                        onCropComplete={this.onCropComplete}
                        onZoomChange={this.onZoomChange}                       
                    />
                    </div>                   
                    </div>  
                    :""} 
                    <Form.Group>
                        <Form.File name="image" label="Product Image" isInvalid={!!this.state.errors.image} feedback={this.state.errors.image} id="formProductImage" onChange={this.onImageChange} />
                        <Form.Control.Feedback type="invalid">{this.state.errors.image}</Form.Control.Feedback>
                    </Form.Group>
                </Card.Body>
            </Card>

            </Col>
            <Col md={12} className="text-right p-3"> 
                <Button as={Link} to={appRoutes.products} variant="secondary">Back</Button>
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
       
        getCategoriesList((json) => {        
            if(json.data.success){
                this.setState({
                   categoriesList : json.data.data
                });
            }
        }, (error) => {
            console.log(error);
        });
       
        getSubCategoriesList((json) => {         
            if(json.data.success){
                this.setState({
                   subCategoriesList : json.data.data
                });
            }
        },(error) => {
            console.log(error);
        });

        getBrandsList((json) => {          
            if(json.data.success){
                this.setState({
                   brandsList : json.data.data
                });
            }
        },(error) => {
            console.log(error);
        });

        getUnitsList((json) => {       
            if(json.data.success){
                this.setState({
                   unitsList : json.data.data
                });
            }
        },(error) => {
            console.log(error);
        });

        getGstTaxesList((json) => {    
            if(json.data.success){
                this.setState({
                    gstTaxList : json.data.data
                });
            }
        },(error) => {
            console.log(error);
        });

        if(this.props.match.params.id!==undefined){
           let productId=this.props.match.params.id;           
           this.setState({loader : true});
            getProductDetails(productId,(json) => {    
                if(json.data.success){
                  let data =json.data.data;                               
                  let inputs ={
                      name : data.name,
                      hsn : data.hsn,
                      barcode : data.barcode,
                      barcode_type : data.barcode_type,
                      category_id : data.category_id,
                      sub_category_id : data.sub_category_id,
                      brand_id:data.brand_id,
                      unit_id:data.unit_id,
                      style:data.style,
                      mrp:data.mrp,
                      cost_price:data.cost_price,
                      selling_price:data.selling_price,
                      margin:data.margin,
                      discount:data.discount_percentage,
                      sales_gst_id:data.sales_gst_tax_id,
                  } 
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
                        state: { pageAlert:{className:'alert alert-danger', message:json.data.message} }
                    });  
                }
            },(error) => {
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
    
    onImageChange(e){     
       let fileSize = (e.target.files[0].size / 1024 / 1024).toFixed(2);
       let fileFormat = $(e.target).val().split('.').pop().toLowerCase();
       let allowedFormats=['jpg','jpeg','png'];  

       if((!fileFormat) || (!allowedFormats.includes(fileFormat))){
            e.target.value="";
            this.setState((prev)=> {
                return { errors : {...prev.errors, image : "Invalid image format!"}  }
            })
       }else if(fileSize>4){
           e.target.value="";
           this.setState((prev)=> {
               return { errors : {...prev.errors, image : "Image size should be less than 4 MB"}  }
           })
       }else{
            var reader = new FileReader();           
            reader.onloadend = (function() {  
                this.setState( prev => {
                    return { ...prev,imageCrop : { ...prev.imageCrop, image : reader.result } }
                })
            }).bind(this);
            reader.readAsDataURL(e.target.files[0]);
       } 
    }

    onCropChange(crop) {      
        this.setState( prev => {
            return { ...prev,imageCrop : { ...prev.imageCrop, crop :crop } }
        })
    }
      
    onCropComplete(croppedArea, croppedAreaPixels){
       this.setState( prev => {
            return { ...prev,imageCrop : { ...prev.imageCrop, croppedAreaPixels :croppedAreaPixels } }
       }); 
       this.showCroppedImage(croppedAreaPixels,0);     
    }
    
    onZoomChange(zoom){
        this.setState( prev => {
            return { ...prev,imageCrop : { ...prev.imageCrop, zoom :zoom } }
        });      
    }

    /*createImage(url){
        new Promise((resolve, reject) => {
            const image = new Image()
            image.addEventListener('load', () => resolve(image))
            image.addEventListener('error', error => reject(error))
            image.setAttribute('crossOrigin', 'anonymous') // needed to avoid cross-origin issues on CodeSandbox
            image.src = url
            return image;
        });
    } */

    getRadianAngle(degreeValue) {
        return (degreeValue * Math.PI) / 180
    }

    getCroppedImg(imageSrc, pixelCrop, rotation = 0) {
        const image = new Image()
        //image.addEventListener('load', () => resolve(image))
        //image.addEventListener('error', error => reject(error))
        image.setAttribute('crossOrigin', 'anonymous') // needed to avoid cross-origin issues on CodeSandbox
        image.src = imageSrc;     
        image.style.backgroundColor="#fff";  
        //const image = this.createImage(imageSrc)     

        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
      
        const maxSize = Math.max(image.width, image.height)
        const safeArea = 2 * ((maxSize / 2) * Math.sqrt(2))
      
        // set each dimensions to double largest dimension to allow for a safe area for the
        // image to rotate in without being clipped by canvas context
        canvas.width = safeArea
        canvas.height = safeArea
      
        // translate canvas context to a central location on image to allow rotating around the center.
        ctx.translate(safeArea / 2, safeArea / 2)
        ctx.rotate(this.getRadianAngle(rotation))
        ctx.translate(-safeArea / 2, -safeArea / 2)
      
        // draw rotated image and store data.
        ctx.drawImage(
          image,
          safeArea / 2 - image.width * 0.5,
          safeArea / 2 - image.height * 0.5
        )
        const data = ctx.getImageData(0, 0, safeArea, safeArea)
      
        // set canvas width to final desired crop size - this will clear existing context
        canvas.width = pixelCrop.width
        canvas.height = pixelCrop.height
      
        // paste generated rotate image with correct offsets for x,y crop values.
        ctx.putImageData(
          data,
          Math.round(0 - safeArea / 2 + image.width * 0.5 - pixelCrop.x),
          Math.round(0 - safeArea / 2 + image.height * 0.5 - pixelCrop.y)
        )
      
        // As Base64 string
        return canvas.toDataURL('image/jpeg');      
        // As a blob
       /* return new Promise(resolve => {
          canvas.toBlob(file => {
            resolve(URL.createObjectURL(file))
          }, 'image/jpeg')
        })*/
    }
      
    showCroppedImage(croppedAreaPixels, rotation) {
        try {
          const croppedImage = this.getCroppedImg(
            this.state.imageCrop.image,
            croppedAreaPixels,
            rotation
          );
          this.setState( prev => {
            return { ...prev,imageCrop : { ...prev.imageCrop, croppedImage :croppedImage, previewImage:croppedImage } }
           }); 
           console.log(this.state)
        
        } catch (e) {
          console.error(e)
        }
    }


}
export default Product;