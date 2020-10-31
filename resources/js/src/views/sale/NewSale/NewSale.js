import React, {Component} from 'react';
import {withRouter, Link} from "react-router-dom";
import SideNav from '../../../components/SideNav/SideNav';
import Footer from '../../../components/Footer/Footer';
import Loader from '../../../components/Loader/Loader'; 
import CustomerModal from '../../../components/Customer/CustomerModal'; 
import AppToast from '../../../components/Toast/AppToast'; 
import AutoSuggestion from '../../../components/AutoSuggestion/AutoSuggestion'; 
import ThermalBill from '../../../components/Bill/ThermalBill'; 
import A4Bill from '../../../components/Bill/A4Bill'; 
import { Container, Row, Col, Card,Button, InputGroup, FormControl, Form,Modal, Nav, Tab } from 'react-bootstrap';
import './new-sale.css';
import { appRoutes, apiRoutes, newSale ,searchProducts } from '../../../Utils';
import ProductModal from '../../../components/Product/ProductModal';

class NewSale extends Component {

  constructor(props) {
    //this.getInitialState=this.getInitialState.bing(this);
    super(props);
    this.state = this.getInitialState();
    this.newSale=newSale.bind(this);
    this.updateSummary=this.updateSummary.bind(this);
    this.searchProducts=searchProducts.bind(this);
    this.pageAlert=this.pageAlert.bind(this);    
    this.getBarcodeSuggestions=this.getBarcodeSuggestions.bind(this);  
    this.getProductSuggestions=this.getProductSuggestions.bind(this);
    this.billFormInputChange =this.billFormInputChange.bind(this);   
    this.completeBillFormSugesstion=this.completeBillFormSugesstion.bind(this);
    this.handleKeyPressFormInput=this.handleKeyPressFormInput.bind(this);
    this.handleBlurFormInput=this.handleBlurFormInput.bind(this);
    this.removeBillItem=this.removeBillItem.bind(this); 
    this.changeTaxMode=this.changeTaxMode.bind(this);
    this.changeBillTable=this.changeBillTable.bind(this);
    this.handleTableColumnChange=this.handleTableColumnChange.bind(this);
    this.updateBillItemGst=this.updateBillItemGst.bind(this);
    this.handleKeyBoardShortCuts=this.handleKeyBoardShortCuts.bind(this);
    this.handleKeyUpEvent=this.handleKeyUpEvent.bind(this);
    this.handleCheckOutModelClose=this.handleCheckOutModelClose.bind(this);
    this.setCheckOutPaymentOption=this.setCheckOutPaymentOption.bind(this);
    this.changeCheckOutModal=this.changeCheckOutModal.bind(this);
    this.closeAppToast=this.closeAppToast.bind(this);
    this.proceedPrint=this.proceedPrint.bind(this);
    this.handlePrintCommand=this.handlePrintCommand.bind(this);
    this.handleCustomerCommand=this.handleCustomerCommand.bind(this);
    this.updateCustomerModalInputs=this.updateCustomerModalInputs.bind(this);
    this.updateCustomerModalInput=this.updateCustomerModalInput.bind(this);
    this.closeProductSuggestion=this.closeProductSuggestion.bind(this);  
    this.selectCustomer=this.selectCustomer.bind(this);  
    
    this.keyDownCustomerSearch=this.keyDownCustomerSearch.bind(this);
    this.onChangeCustomerSearch=this.onChangeCustomerSearch.bind(this);      
    this.onClickCustomerSuggestion=this.onClickCustomerSuggestion.bind(this); 
    this.onBlurCustomerSearch=this.onBlurCustomerSearch.bind(this);
        
    this.keysPressed=[];
    this.totalGrossValue=0;
    this.totalDiscount=0;
    this.totalSGST=0;
    this.totalCGST=0;
    this.totalIGST=0;
    this.totalNetAmount=0;
    this.roundOff=0;   
    Number.prototype.round = function() { return Math.round(this); }
  }

  getInitialState(){
    return {
      isLoggedIn: true,
      user:[],
      error: '',
      loader:true,
      gstTaxList:[],
      states:[],
      countries:[],
      billForm:{},
      billItems:[], 
      billNumber:"",
      billDate:"",
      bill_setting:{
        vendor_name : "CODESENSE SOFT SOLUTIONS PVT LTD.",
        address_1 : "RG COMPLEX 2ND FLOOR, TELUNGUPALAYAM PIRIVU",
        address_2 : "COIMBATORE - 641039., TAMILNADU",
        phone_1 : "+91 95244 76114",
        phone_2 : "+91 9944313212",
        gstin : null,
        quoted_text : "Thank You! have a nice day."
      },
      summary:{
        totalGrossValue:0,
        totalDiscount:0,
        totalSGST:0,
        totalCGST:0,
        totalIGST:0,
        totalNetAmount:0,
        roundOff:0,
      },
      currentTaxMode:'sgst',      
      visibleBarcodeSuggestion:false,
      visibleProductSuggestion:false,
      productSuggestIndex:0,         
      productSuggestions:[],
      currentBillProduct:null,
      customer:null,
      customerSearch:{
        show:false,
        value:"",
        suggestions:[],
        activeIndex:0
      },
      productModal:{
        data:{
          show:false,
          headerName:"Product"
        },
        inputs:{}
      },
      checkoutModal:{
        show:false,
        inputs:{payment_option:"Cash"},
        onHide:this.handleCheckOutModelClose
      },
      printMode:"Thermal",
      customerModal:{
        show: false,
        inputs:{}
      },
      appToast:{show:false,data:{}},
      
    };
  }

  keyDownCustomerSearch(e){
      let value=e.target.value;         
      let customerSearchState=this.state.customerSearch;   
      let index=customerSearchState.activeIndex;         
      if(e.keyCode==38 || e.key=="ArrowUp" || e.code=="ArrowUp"){  // Up Arrow
          if(index>0){  customerSearchState.activeIndex=index-1; }
          this.setState({customerSearch:customerSearchState});
          e.target.nextSibling.querySelector('li.active').scrollIntoView(false);
          e.preventDefault();
      }else if(e.keyCode==40 || e.key=="ArrowDown" || e.code=="ArrowDown"){  // Down Arrow
          if(index<(customerSearchState.suggestions.length-1)){ customerSearchState.activeIndex=index+1; }
          this.setState({customerSearch:customerSearchState});
          e.target.nextSibling.querySelector('li.active').scrollIntoView(false);
          e.preventDefault();
      }else if(( (e.key==="Enter" || e.keyCode===13 || e.code=="Enter") || (e.key==="Tab" || e.keyCode===9 || e.code=="Tab"))){
          let customerSearchState=this.state.customerSearch;
          let activeIndex=customerSearchState.activeIndex;
          let suggestion=customerSearchState.suggestions[activeIndex];
          if(suggestion){
              customerSearchState.value=suggestion['suggestion_label'];
              customerSearchState.show=false;       
              this.setState({customerSearch:customerSearchState});
          }           
          this.selectCustomer(customerSearchState.suggestions[activeIndex]);
          e.preventDefault();
      }         
  }

  onChangeCustomerSearch(e){
      let value=e.target.value;  
      let customerSearchState=this.state.customerSearch;
      customerSearchState.value=value;
      customerSearchState.show=(value!="")?true:false;       
      this.setState({customerSearch:customerSearchState});
      this.selectCustomer(null);
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
    this.setState({customerSearch:customerSearchState});
    this.selectCustomer(item);
  }

  onBlurCustomerSearch(e){
      let customerSearchState=this.state.customerSearch;
      customerSearchState.show=false;       
      this.setState({customerSearch:customerSearchState});
  }

  updateSummary(previous){
    let billItems=this.state.billItems;
    let summary={
      totalGrossValue:0,
      totalDiscount:0,
      totalSGST:0,
      totalCGST:0,
      totalIGST:0,
      totalNetAmount:0,
      roundOff:0,
    };
    for(let i=0; i<billItems.length; i++){      
          let quantity=parseFloat(billItems[i].quantity);
          let selling_price=parseFloat(billItems[i].selling_price);
          let grossAmount=quantity*selling_price;
          grossAmount=Math.ceil(grossAmount*100)/100; 
          summary.totalGrossValue=summary.totalGrossValue+grossAmount; 

          let discount_percentage=billItems[i].discount_percentage?parseFloat(billItems[i].discount_percentage):0;
          let discount=grossAmount*(discount_percentage/100);
          discount=Math.ceil(discount*100)/100;
          summary.totalDiscount=summary.totalDiscount+discount; 
          
          let unitAmount=grossAmount-discount;

          let igst=billItems[i].igst?parseFloat(billItems[i].igst):0;
          let igstValue= unitAmount*(igst/100);
          igstValue=Math.ceil(igstValue*100)/100; 
          summary.totalIGST=summary.totalIGST+igstValue; 

          let sgst=billItems[i].sgst?parseFloat(billItems[i].sgst):0;
          let sgstValue=unitAmount*(sgst/100);
          sgstValue=Math.ceil(sgstValue*100)/100; 
          summary.totalSGST=summary.totalSGST+sgstValue;

          let cgst=billItems[i].cgst?parseFloat(billItems[i].cgst):0;
          let cgstValue= unitAmount*(cgst/100);
          cgstValue=Math.ceil(cgstValue*100)/100;  
          summary.totalCGST=summary.totalCGST+cgstValue; 
         
          let gstAmount=0;          
          if(this.state.currentTaxMode=="sgst"){gstAmount=sgstValue+cgstValue;}else{gstAmount=igstValue;} 
          let netAmount=unitAmount+gstAmount;
          summary.totalNetAmount=summary.totalNetAmount+netAmount;            

          if(i==(billItems.length-1)){
              summary.roundOff=summary.totalNetAmount.round();              
          }
    }
    this.setState({ ...previous, summary: summary });
  }

  changeTaxMode(e){   
    let mode=e.target.checked?'igst':'sgst';
    this.setState(prev => {
      return{
        ...prev, 
        currentTaxMode:mode
      }
    });
  }

  changeCheckOutModal(e){
    let checkoutModal=this.state.checkoutModal;
    if(e.target.name=="paid_by_cash"){     
      checkoutModal.inputs['remain_balance']=parseFloat(this.roundOff)-parseFloat( e.target.value);
    }
    checkoutModal.inputs[e.target.name]=e.target.value;
    this.setState(prev => {
      return{
        ...prev, 
        checkoutModal:checkoutModal
      }
    });
  }

  handleTableColumnChange(e,index,column){
    let billItems=this.state.billItems;
    let value=parseFloat(e.target.innerText)
    billItems[index][column]=value; 
    /*this.setState(prev=>{
      return {
        ...prev,
        billItems:billItems
      }
    });*/ 
    this.updateSummary({...this.state, billItems:billItems});
  }

  updateBillItemGst(e,index){    
    let billItems=this.state.billItems;  
    const selectedIndex = e.target.options.selectedIndex;   
    if(billItems[index]){
      billItems[index]['sales_gst_tax_id']=e.target.value!=""?e.target.value:"";
      billItems[index]['sgst']=e.target.value!=""?e.target.options[selectedIndex].getAttribute('data-sgst'):"";
      billItems[index]['cgst']=e.target.value!=""?e.target.options[selectedIndex].getAttribute('data-cgst'):"";
      billItems[index]['igst']=e.target.value!=""?e.target.options[selectedIndex].getAttribute('data-igst'):"";    
    }
    /*this.setState(prev=>{
      return {...prev,billItems:billItems}
    });  */
    this.updateSummary({...this.state,billItems:billItems});   
  }

  changeBillTable(e,index,column){
    var event = window.event ? window.event : e; 
    if(event.keyCode===13){e.target.blur();}
    if(/[^0-9.]/g.test(event.key) ){
      e.preventDefault();
      return false;
    }else if(e.target.innerText.replace(/[^.]/g, "").length>0 && event.key=="."){
      e.preventDefault();
      return false;
    }  
  }

  closeAppToast(){
    this.setState(prev => {
      let appToast= { show:false, data:{} };
      return {
        ...prev,
        appToast:appToast
      }     
    });
  }

  closeProductSuggestion(){
    this.setState({
      visibleBarcodeSuggestion:false,
      visibleProductSuggestion:false
    });
  }
  
  selectCustomer(selectedCustomer){
    let customerSearch=this.state.customerSearch;
    if(selectedCustomer){ customerSearch.value=selectedCustomer.suggestion_label; }
    this.setState({customer : selectedCustomer,customerSearch : customerSearch});
  }
  
  render() {
    let totalGrossValue=0;
    let totalDiscount=0;
    let totalIGST=0;
    let totalCGST=0;
    let totalSGST=0;  
    let totalNetAmount=0; 
    let roundOff=0;    
     
    return (
      <>  
      {this.state.loader?<Loader />:""}                    
      <SideNav userData={this.state.user} 
               userIsLoggedIn={this.state.isLoggedIn} 
               handleCustomerCommand={this.handleCustomerCommand}
               stock={0}
               quantity={0}              
               customerSearch={this.state.customerSearch}
               selectedCustomer={this.state.customer}
               keyDownCustomerSearch={this.keyDownCustomerSearch}
               onClickCustomerSuggestion={this.onClickCustomerSuggestion}
               onChangeCustomerSearch={this.onChangeCustomerSearch}
               onBlurCustomerSearch={this.onBlurCustomerSearch}
               selectCustomer={this.selectCustomer}
      />

      <div className="sale-bill-container my-3">
      <Container fluid>

      <Row className="no-gutters">
      <Col md={9} lg={10}>

      <AppToast onClose={this.closeAppToast} show={this.state.appToast.show} data={this.state.appToast.data} duration={3000} />

      <Card className="bill-entry-form-card">
        <Card.Body>
        <Form className="bill-form flex-wrap justify-content-center" id="billEntryForm" inline>                           
       
          <InputGroup className="my-2 mr-2">
            <InputGroup.Prepend>
              <label className="lbl-input-group rounded-left">Barcode</label>
            </InputGroup.Prepend>
            <FormControl id="billFormBarcode" placeholder="Barcode" name="barcode" value={this.state.billForm.barcode?this.state.billForm.barcode:""} autoComplete="off" onKeyDown={this.getBarcodeSuggestions} onChange={this.billFormInputChange} onBlur={this.closeProductSuggestion}/>
            {this.state.visibleBarcodeSuggestion?
            <AutoSuggestion activeIndex={this.state.productSuggestIndex} suggestions={this.state.productSuggestions} handleSetSuggestion={this.completeBillFormSugesstion} />
            :""}
          </InputGroup>   

          <InputGroup className="my-2 mr-2">
            <InputGroup.Prepend>
              <label className="lbl-input-group rounded-left">Product</label>
            </InputGroup.Prepend>
            <FormControl id="billFormProduct" placeholder="Product Name" name="product_name" value={this.state.billForm.product_name?this.state.billForm.product_name:""} autoComplete="off" onKeyDown={this.getProductSuggestions} onChange={this.billFormInputChange} onBlur={this.closeProductSuggestion} />
            {this.state.visibleProductSuggestion?
            <AutoSuggestion activeIndex={this.state.productSuggestIndex} suggestions={this.state.productSuggestions} handleSetSuggestion={this.completeBillFormSugesstion} />
            :""}
          </InputGroup>

          <InputGroup className="my-2 mr-2">
            <InputGroup.Prepend>
              <label className="lbl-input-group rounded-left">Qty</label>
            </InputGroup.Prepend>
            <FormControl id="billFormQuantity" className="qty-input" placeholder="Quantity" name="quantity" value={this.state.billForm.quantity?this.state.billForm.quantity:""} onKeyPress={this.handleKeyPressFormInput} onChange={this.billFormInputChange} onBlur={this.handleBlurFormInput} />
          </InputGroup>

          <InputGroup className="my-2 mr-2">
            <InputGroup.Prepend>
              <label className="lbl-input-group rounded-left">Dis(%).</label>
            </InputGroup.Prepend>
            <FormControl id="billFormDiscount" className="disc-input" placeholder="Discount" name="discount" value={this.state.billForm.discount?this.state.billForm.discount:""} onKeyPress={this.handleKeyPressFormInput} onChange={this.billFormInputChange} onBlur={this.handleBlurFormInput} />
          </InputGroup>

          <InputGroup className="my-2 mr-2">
            <InputGroup.Prepend>
              <label className="lbl-input-group rounded-left">S.Price</label>
            </InputGroup.Prepend>
            <FormControl id="billFormSellingPrice" className="sprice-input" placeholder="S.Price" name="selling_price" value={this.state.billForm.selling_price?this.state.billForm.selling_price:""} onKeyPress={this.handleKeyPressFormInput} onChange={this.billFormInputChange} onBlur={this.handleBlurFormInput} />
          </InputGroup>

          <InputGroup className="my-2 mr-2">
            <InputGroup.Prepend>
              <label className="lbl-input-group rounded-left">Tax</label>
            </InputGroup.Prepend>
            <Form.Control as="select" id="billFormGst" custom name="gst_tax_id" value={this.state.billForm.gst_tax_id?this.state.billForm.gst_tax_id:""} onChange={this.billFormInputChange} onBlur={this.handleBlurFormInput} >
              <option value="">NA</option>
              {this.state.gstTaxList.map(({ id, name, igst, cgst, sgst }, index) => <option key={index} value={id} data-igst={igst} data-sgst={sgst} data-cgst={cgst}>{name}</option>)}
            </Form.Control>
          </InputGroup>  
        </Form>         
        </Card.Body>
      </Card>
    
      <Card className="bill-entry-form-card">
        <Card.Body>
        <div className="bill-table-container">
          <table className="bill-items-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Barcode</th>
                <th>Item</th>
                <th>Qty</th>
                <th>Dis.(%)</th>
                <th>Unit Amt</th>
                <th>Tax</th>
                <th>Net Amt</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
            {this.state.billItems.map((value,index)=>{  
            let indexVal=index;  
            value.quantity=parseFloat(value.quantity);
            value.selling_price=parseFloat(value.selling_price);
            let grossAmount=value.quantity*value.selling_price;
            grossAmount=Math.ceil(grossAmount*100)/100;  
            totalGrossValue=totalGrossValue+grossAmount;    

            value.discount_percentage=value.discount_percentage?parseFloat(value.discount_percentage):0;
            let discount=grossAmount*(value.discount_percentage/100);
            discount=Math.ceil(discount*100)/100; 
            //discount=((discount*100).round())/100;
            //discount=Number(discount.toFixed(2)).round();            
            totalDiscount=totalDiscount+discount; 

            let unitAmount=grossAmount-discount;
            value.igst=value.igst?parseFloat(value.igst):0;          
            value.sgst= value.sgst? parseFloat(value.sgst):0;
            value.cgst= value.cgst? parseFloat(value.cgst):0;              
            let gstAmount=0;

            if(this.state.currentTaxMode=="sgst"){
              let sgstValue= unitAmount*(value.sgst/100);
              sgstValue=Math.ceil(sgstValue*100)/100;  
              totalSGST=totalSGST+sgstValue;
              let cgstValue= unitAmount*(value.cgst/100);
              cgstValue=Math.ceil(cgstValue*100)/100;  
              totalCGST=totalCGST+cgstValue;              
              gstAmount=sgstValue+cgstValue;              
            }else{
              let igstValue= unitAmount*(value.igst/100);
              igstValue=Math.ceil(igstValue*100)/100; 
              totalIGST=totalIGST+igstValue;
              gstAmount=igstValue;
            }          
            let netValue=gstAmount+unitAmount;
            netValue=netValue.toFixed(2);

            if(this.state.billItems.length==(index+1)){
              totalNetAmount=totalGrossValue-totalDiscount;
              if(this.state.currentTaxMode=="sgst"){totalNetAmount=totalNetAmount+(totalSGST+totalCGST)}
              else if(this.state.currentTaxMode=="igst"){totalNetAmount=totalNetAmount+totalIGST} 
              roundOff=totalNetAmount.round();              
              this.totalGrossValue=totalGrossValue;
              this.totalDiscount=totalDiscount;
              this.totalSGST=totalSGST;
              this.totalCGST=totalCGST;
              this.totalIGST=totalIGST;
              this.totalNetAmount=totalNetAmount;
              this.roundOff=roundOff;
            }

            return (<tr key={indexVal} data-key={indexVal}>
              <td>{indexVal+1}</td>
              <td>{value.barcode}</td>
              <td>{value.product_name}</td>
              <td contentEditable={true} 
                suppressContentEditableWarning={true} 
                onKeyPress={(event)=>{this.changeBillTable(event,indexVal,'quantity')}} 
                onBlur={(event)=>{this.handleTableColumnChange(event,indexVal,'quantity')}}
              >{value.quantity}</td>
              <td contentEditable={true} 
                  suppressContentEditableWarning={true} 
                  onKeyPress={(event)=>{this.changeBillTable(event,indexVal,'discount_percentage')}} 
                  onBlur={(event)=>{this.handleTableColumnChange(event,indexVal,'discount_percentage')}}
              >{value.discount_percentage}</td>
              <td>{unitAmount}</td>
              <td> 
                <Form.Control as="select" className="item-gst-tax" custom value={value.sales_gst_tax_id} onChange={(e)=>{this.updateBillItemGst(e,indexVal)}} >
                  <option value="">NA</option>
                  {this.state.gstTaxList.map(({ id, name, igst, cgst, sgst }, index) => <option key={id} value={id} data-igst={igst} data-sgst={sgst} data-cgst={cgst} data-index={index}>{name}</option>)}                
                </Form.Control>
              </td>
              <td>{netValue}</td>
              <td><span className="btn-item-remove" onClick={()=>{ this.removeBillItem(indexVal)}}><i className="fas fa-trash-alt"></i></span></td>
            </tr>)
            })}              
            </tbody>
          </table>
        </div>
        </Card.Body>
      </Card>
    
      </Col>
      <Col md={3} lg={2}>
      <Card className="bill-summary-card">
        <Card.Header>
          <h5 className="card-title">
            Bill Details
          </h5>
        </Card.Header>
        <Card.Body>
          <table className="summary-table">
            <tbody>              
              <tr>
                <th>Gross Amt</th>
                <td>{totalGrossValue}</td>
              </tr>
              <tr>
                <th>Discount</th>
                <td>{totalDiscount}</td>
              </tr>
              <tr>
                <th>
                  <input type="checkbox" value="0" className="select-igst-tax" onChange={this.changeTaxMode} />
                  IGST
                </th>
                <td>{this.state.currentTaxMode=="igst"?totalIGST:"NA"}</td>                
              </tr>
              <tr>
                <th>CGST</th>
                <td>{this.state.currentTaxMode=="sgst"?totalCGST:"NA"}</td>
              </tr>
              <tr>
                <th>SGST</th>
                <td>{this.state.currentTaxMode=="sgst"?totalSGST:"NA"}</td>
              </tr>
              <tr>
                <th>Net Price</th>
                <td>{totalNetAmount}</td>
              </tr>
              <tr>
                <th>Round off</th>
                <td>{roundOff}</td>
              </tr>
              <tr>
                <td colSpan="2" className="net-amount">
                  <div className="total-payment-amt">
                    <label className="label">Net Amount</label>
                    <b className="price">{roundOff}</b>
                  </div>
                </td>               
              </tr>
            </tbody>
          </table>         
        </Card.Body>
      </Card>
      </Col>
      <Col sm={12}>
        <div className="key-map-container">

          <span className="key-map" onClick={()=>this.handlePrintCommand("Thermal") }>
            <span className="key">F2</span>
            <span className="text">Thermal Bill</span>
          </span>

          <span className="key-map" onClick={()=>this.handlePrintCommand("A4") }>
            <span className="key">F4</span>
            <span className="text">A4 Bill</span>
          </span>

          <span className="key-map" onClick={()=>this.handleCustomerCommand()}>
            <span className="key">Alt+C</span>
            <span className="text">Add Customer</span>
          </span>

          <span className="key-map" onClick={()=>this.handleProductCommand().bind(this)}>
            <span className="key">Alt+A</span>
            <span className="text">Add Product</span>
          </span>
          {/*
          <span className="key-map">
            <span className="key">Alt+R</span>           
            <span className="text">Remarks</span>
          </span>  
          */}

          <span className="key-map" onClick={(e)=>{window.open(appRoutes.newSale);}}>   
            <span className="key">Alt+H</span>                 
            <span className="text">Hold</span>
          </span>

        </div>
      </Col>         
      </Row>
      </Container> 
      </div>  
      <Footer />  

      <A4Bill data={{ ...this.state.summary,
         bill_setting : this.state.bill_setting,
         bill_no: this.state.billNumber,
         bill_date:this.state.billDate,        
         gstType: this.state.currentTaxMode,
         checkOut:this.state.checkoutModal.inputs,
         billItems:this.state.billItems    
      }} /> 
         
      { /*
      {this.state.printMode=="A4"?
      <A4Bill data={{ ...this.state.summary,
         bill_setting : this.state.bill_setting,
         bill_no: this.state.billNumber,
         bill_date:this.state.billDate,        
         gstType: this.state.currentTaxMode,
         checkOut:this.state.checkoutModal.inputs,
         billItems:this.state.billItems    
      }} />: <ThermalBill data={{ ...this.state.summary,
        bill_setting : this.state.bill_setting,
        bill_no: this.state.billNumber,
        bill_date:this.state.billDate,        
        gstType: this.state.currentTaxMode,
        checkOut:this.state.checkoutModal.inputs,
        billItems:this.state.billItems    
     }} />} */ }

      <CustomerModal data={this.state.customerModal} 
                     stateLists={this.state.states} 
                     countryLists={this.state.countries}
                     onHide={()=>{ this.setState(prev=> {
                       let customerModal=prev.customerModal;
                       customerModal.show=false;
                       customerModal.inputs={};
                       return {customerModal:customerModal}})
                      }}
                      updateInputs={(e)=>this.updateCustomerModalInputs(e)}
                      updateInput={(name,value)=>this.updateCustomerModalInput(name,value)}
                      pageAlert={this.pageAlert}                     
                      customerSearch={this.state.customerSearch}
                      keyDownCustomerSearch={this.keyDownCustomerSearch}
                      onClickCustomerSuggestion={this.onClickCustomerSuggestion}                   
                      onBlurCustomerSearch={this.onBlurCustomerSearch}
                      selectCustomer={this.selectCustomer} 
                                           
      />         
      <ProductModal 
        data={this.state.productModal.data}
        onHide={this.onHideProductModal.bind(this)}
        onChangeInput={this.onChangeProductModal.bind(this)}
        inputs={this.state.productModal.inputs}  
        pageAlert={this.pageAlert}      
      />
      <Modal 
      className="modal-check-out"
      show={this.state.checkoutModal.show}      
      onHide={this.handleCheckOutModelClose}  
      onEntered={()=>{document.getElementById('checkoutPaidCash').focus()}}       
      backdrop="static"
      keyboard={false} >
        <Modal.Header closeButton={false}>
          <Modal.Title>Check Out Product</Modal.Title>
        </Modal.Header>
        <Form>
        <Modal.Body>
        <div className="bill-price-label">
            <label className="label-lg">Net Amount</label>
            <label className="label-price"><span className="currency-icon"><i className="fas fa-rupee-sign"></i></span> {roundOff}</label>
        </div> 
        <div className="remarks"></div>

        <div className="bill-payment-options-container">
        <Tab.Container id="payment-options" activeKey={this.state.checkoutModal.inputs.payment_option}>
          <Row>
            <Col sm={12}>
              <Nav variant="pills" className="nav-fill bordered-tab">
                <Nav.Item>
                  <Nav.Link className="theme-active-btn" onClick={()=>{this.setCheckOutPaymentOption("Cash")}} eventKey="Cash">Cash</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="theme-active-btn" onClick={()=>{this.setCheckOutPaymentOption("Card")}} eventKey="Card">Card</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={12}>
              <Tab.Content>
                <Tab.Pane eventKey="Cash" onEntered={()=>document.getElementById('checkoutPaidCash').focus()}>
                <div className="py-2">
                  <Form.Group controlId="checkoutPaidCash">
                    <Form.Label>Paid By Cash</Form.Label>
                    <Form.Control type="text" placeholder="Cash" name="paid_by_cash" value={this.state.checkoutModal.inputs.paid_by_cash?this.state.checkoutModal.inputs.paid_by_cash:""} onChange={this.changeCheckOutModal} onKeyDown={this.handleKeyPressCheckModal.bind(this)} onKeyPress={this.preventFloatValue} />
                  </Form.Group>
                  <Form.Group controlId="checkoutRemainCash">
                    <Form.Label>Remaining Balance</Form.Label>
                    <Form.Control type="text" placeholder="Balance" name="remain_balance" value={this.state.checkoutModal.inputs.remain_balance?this.state.checkoutModal.inputs.remain_balance:""} onChange={this.changeCheckOutModal} disabled />
                  </Form.Group>
                </div>              
                </Tab.Pane>
                <Tab.Pane eventKey="Card" onEntered={()=>document.getElementById('checkoutCardType').focus()}>
                <div className="py-2">
                  <Form.Group controlId="checkoutCardType">
                    <Form.Label>Card Type</Form.Label>
                    <Form.Control as="select" name="card_type" custom value={this.state.checkoutModal.inputs.card_type?this.state.checkoutModal.inputs.card_type:""} onChange={this.changeCheckOutModal}>
                      <option value="">Select Option</option>
                      <option value="Visa Card">Visa Card</option>
                      <option value="Mastercard">Mastercard</option>  
                      <option value="Maestro">Maestro</option> 
                      <option value="Rupay">Rupay</option>  
                      <option value="Others">Others</option>                     
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="checkoutCardNo"  >
                    <Form.Label>Card No</Form.Label>
                    <Form.Control type="text" placeholder="Card No" name="card_no" value={this.state.checkoutModal.inputs.card_no?this.state.checkoutModal.inputs.card_no:""} onChange={this.changeCheckOutModal} onKeyDown={this.handleKeyPressCheckModal.bind(this)} />
                  </Form.Group>
                </div>
                </Tab.Pane>               
              </Tab.Content>
            </Col>
            <Col sm={12}>
            <Form.Group controlId="checkOutRemarks">
              <Form.Label>Remarks</Form.Label>
              <Form.Control as="textarea" rows={3} style={{resize:"none"}} name="remarks" value={this.state.checkoutModal.inputs.remarks?this.state.checkoutModal.inputs.remarks:""} onChange={this.changeCheckOutModal} />
            </Form.Group>
            </Col>
          </Row>
        </Tab.Container>
        </div>

        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={()=>{ this.proceedPrint("Thermal") } }>Print Bill</Button>
          <Button variant="secondary" onClick={this.handleCheckOutModelClose}>Close</Button>
        </Modal.Footer>
        </Form>     
      </Modal>     
      </>
    )
  }

  onChangeProductModal(e){
    let name=e.target.name;
    let value=e.target.value;
    let productModal=this.state.productModal;
    productModal.inputs[name]=value;
    this.setState({
      productModal:productModal
    });
  }

  onHideProductModal(){
    let productModal={
      data:{
        show:false,
        headerName:"Product"
      },
      inputs:{}
    };
    this.setState({
      productModal:productModal
    });
  }

  updateCustomerModalInputs(e){
    console.log(e.target.name)
    let customerModal=this.state.customerModal;
    customerModal.inputs[e.target.name]=e.target.value;     
    this.setState(prev=>{
      return {...prev,customerModal:customerModal}
    });   
  }

  updateCustomerModalInput(name,value){   
    let customerModal=this.state.customerModal;
    customerModal.inputs[name]=value;     
    this.setState(prev=>{
      return {...prev,customerModal:customerModal}
    });   
  }

  printBill(data){
      this.setState({
        billNumber : data.bill_number,
        billDate: data.bill_date
      });
      //let printableElements = document.getElementById('thermalBill').innerHTML;
      //let orderHtml = '<html><head><title></title></head><body>' + printableElements + '</body></html>';
      //let oldPage = document.body.innerHTML;
      //document.body.innerHTML = orderHtml;
      window.print();
      //document.body.innerHTML = oldPage 
  }

  pageAlert(data){ 
    this.setState({appToast:{show:true,data:data}});  
  } 

  proceedPrint(billType){   
    let billItems=this.state.billItems;
    console.log(billItems)  
    let  checkoutInput=this.state.checkoutModal.inputs;
    let data={
      gross_amount:this.totalGrossValue,
      total_discount:this.totalDiscount,
      igst:this.totalIGST,
      cgst:this.totalCGST,
      sgst:this.totalSGST,
      net_amount:this.totalNetAmount,
      round_off:this.roundOff,
      payment_option : checkoutInput.payment_option,
      paid_amount : checkoutInput.paid_by_cash,
      remaining_balance : checkoutInput.remain_balance,
      remarks : checkoutInput.remarks,
      customer_id : this.state.customer?this.state.customer.id:null,
      bill_items : this.state.billItems,
      gst_type:this.state.currentTaxMode
    };
    let request={
        method: 'post',
        url: apiRoutes.createBill,
        data: data
    };
    this.setState({loader:true});
    axios(request).then(response =>{ return response }).then(json => { 
      if(json.data.success){
        this.printBill(json.data); 
        let gstTaxList=this.state.gstTaxList;
        this.setState(this.getInitialState());
        let appToast={show:true, data:{type:1,header:"Success!",message:json.data.message}}
        this.setState(prev=>{ return {...prev,loader:false,appToast:appToast,gstTaxList:gstTaxList}});
      }else{
        let appToast={show:true, data:{type:0,header:"Bill Error!",message:json.data.message}}
        this.setState(prev=>{         
          return {...prev,loader:false,appToast:appToast}
        });
      }
    }).catch(error=>{ 
      console.log(error);
      let appToast={show:true, data:{type:0,header:"Bill Error!",message:"Error!"}};          
      this.setState({loader:false,appToast:appToast}); 
    });    
  }

  handleKeyPressCheckModal(e){
    let event=window.event?window.event:e;   
    if(event.key==="Enter" || event.keyCode===13){
     this.proceedPrint("Thermal");
    }
  }

  preventFloatValue(e){
    var event=window.event?window.event:e;
    if( (/[^0-9.]/g.test(event.key)) ){ e.preventDefault();  }  
    else if(e.target.value.replace(/[^.]/g,"").length>0 && e.key==".") { e.preventDefault(); }   
  }

  completeBillFormSugesstion(prodIndex){ 
    let formInput=this.state.billForm;
    let productSuggestions=this.state.productSuggestions;
    let billItems=this.state.billItems;
    let input=null;    
    if(productSuggestions[prodIndex]){      
      let check= billItems.some((item, index, array) => {
        if(item.product_id===productSuggestions[prodIndex].product_id){
          formInput.quantity=item.quantity;
          productSuggestions[prodIndex]['selling_price']=item.selling_price;
          productSuggestions[prodIndex]['discount_percentage']=item.discount_percentage;
          productSuggestions[prodIndex]['sales_gst_tax_id']=item.sales_gst_tax_id;  
          productSuggestions[prodIndex]['sgst']=item.sgst; 
          productSuggestions[prodIndex]['cgst']=item.cgst;
          productSuggestions[prodIndex]['igst']=item.igst;
          return true;
        }
        return false;
      });      
      formInput.barcode=productSuggestions[prodIndex]['barcode'];
      formInput.product_name=productSuggestions[prodIndex]['product_name'];  
      formInput.discount=productSuggestions[prodIndex]['discount_percentage']?productSuggestions[prodIndex]['discount_percentage']:0;
      formInput.selling_price=productSuggestions[prodIndex]['selling_price'];
      formInput.gst_tax_id=productSuggestions[prodIndex]['sales_gst_tax_id']?productSuggestions[prodIndex]['sales_gst_tax_id']:"";
      formInput.sgst=productSuggestions[prodIndex]['sgst']?productSuggestions[prodIndex]['sgst']:"";
      formInput.cgst=productSuggestions[prodIndex]['cgst']?productSuggestions[prodIndex]['cgst']:"";
      formInput.igst=productSuggestions[prodIndex]['igst']?productSuggestions[prodIndex]['igst']:"";
      input=productSuggestions[prodIndex];
      if(!check){ formInput.quantity=1;}
    }
    
    this.setState(prev => {    
      return{
        ...prev, 
        productSuggestIndex:0,
        productSuggestions:[],
        billForm:formInput,
        currentBillProduct:input,
        visibleProductSuggestion:false,
        visibleBarcodeSuggestion:false
      }
    });    

    document.getElementById('billFormQuantity').focus();
  }

  getBarcodeSuggestions(e){
    var event = window.event ? window.event : e;    
    let prodIndex=this.state.productSuggestIndex;
    let productSuggestions=this.state.productSuggestions;  

    if(event.keyCode==38 || event.key=="ArrowUp" || event.code=="ArrowUp"){  // Up Arrow
      e.preventDefault();     
      let prevIndex=prodIndex-1;    
      if(prevIndex>=0){
        this.setState(prev => {
          return{
            ...prev, productSuggestIndex:prevIndex
          }
        });
      }
      e.target.nextSibling.querySelector('li.active').scrollIntoView(false);
    }else if(event.keyCode==40 || event.key=="ArrowDown" || event.code=="ArrowDown"){  // Down Arrow
      e.preventDefault();    
      let nextIndex=prodIndex+1;
      let count=this.state.productSuggestions.length;     
      if(count>nextIndex){     
          this.setState(prev => {
            return{
              ...prev, productSuggestIndex:nextIndex
            }
          });       
      }
      e.target.nextSibling.querySelector('li.active').scrollIntoView(false);
    }else if(( (event.key==="Enter" || event.keyCode===13 || event.code=="Enter") || 
                (event.key==="Tab" || event.keyCode===9 || event.code=="Tab"))){
      if(productSuggestions.length>0){
        e.preventDefault();  
        this.completeBillFormSugesstion(prodIndex);
      }
    }else{     
      let value=e.target.value.trim();     
      if((event.keyCode===8 || event.key=="Backspace" || event.code=="Backspace")){ value=value.slice(0, -1); }
      else{ value=(event.key && event.key.length==1)?value+event.key:value }
      console.log(value)
      if(value==""){ 

        if(this.state.visibleBarcodeSuggestion || this.state.productSuggestIndex>0){
          this.setState(prev => {
            return{
              ...prev, 
              productSuggestIndex:0,
              productSuggestions:[],
              visibleProductSuggestion:false,
              visibleBarcodeSuggestion:false
            }           
          });
        }
       
      }else if(value!=this.state.billForm.barcode){        
          let request={search : value};
          this.searchProducts(request,(json)=>{  
          let suggests=[];
          if(json.data.success){suggests=json.data.data; }
          this.setState(prev => {
              return{
                ...prev, productSuggestIndex:0,productSuggestions:suggests,visibleBarcodeSuggestion:true,visibleProductSuggestion:false
              }
          });
          },(error)=>{
            console.log(error); 
            this.setState(prev => {
              return{
                ...prev, 
                productSuggestIndex:0,
                productSuggestions:[],
                visibleBarcodeSuggestion:false,
                visibleProductSuggestion:false,
              }
           });
          }); 
      }
    }
  }

  getProductSuggestions(e){
    var event = window.event ? window.event : e;    
    let prodIndex=this.state.productSuggestIndex;
    let productSuggestions=this.state.productSuggestions;  
   
    if(event.keyCode==38 || event.key=="ArrowUp" || event.code=="ArrowUp"){  // Up Arrow
      e.preventDefault();     
      let prevIndex=prodIndex-1;    
      if(prevIndex>=0){
        this.setState(prev => {
          return{
            ...prev, productSuggestIndex:prevIndex
          }
        });
      }
    }else if(event.keyCode==40 || event.key=="ArrowDown" || event.code=="ArrowDown"){  // Down Arrow
      e.preventDefault();    
      let nextIndex=prodIndex+1;
      let count=this.state.productSuggestions.length;     
      if(count>nextIndex){     
          this.setState(prev => {
            return{
              ...prev, productSuggestIndex:nextIndex
            }
          });       
      }
    }else if(( (event.key==="Enter" || event.keyCode===13 || event.code=="Enter") || 
    (event.key==="Tab" || event.keyCode===9 || event.code=="Tab"))){
        if(productSuggestions.length>0){
          e.preventDefault();  
          this.completeBillFormSugesstion(prodIndex);
        }       
    }else{     
      let value=e.target.value.trim();     
      if((event.keyCode===8 || event.key=="Backspace" || event.code=="Backspace")){ value=value.slice(0, -1); }
      else{ value=(event.key && event.key.length==1)?value+event.key:value }
      console.log(value)
    
      if(value==""){ 

        if(this.state.visibleProductSuggestion || this.state.productSuggestIndex>0){
          this.setState(prev => {
            return{
              ...prev, productSuggestIndex:0, 
              productSuggestions:[], 
              visibleProductSuggestion:false, 
              visibleBarcodeSuggestion:false
            }
          });
        }
        
      }else if(value!=this.state.billForm.product_name){   
            
          this.setState(prev => {
            return{
              ...prev, 
              productSuggestIndex:0,             
              visibleBarcodeSuggestion:false,
              visibleProductSuggestion:true,
            }
          });

          let request={search : value};          
          this.searchProducts(request,(json)=>{  
          let suggests=[];
          if(json.data.success){suggests=json.data.data; }
          this.setState(prev => {
              return{
                ...prev,
                productSuggestIndex:0,
                productSuggestions:suggests                
              }
          });
          },(error)=>{  console.log(error);  }); 
      }

    }   
  }

  billFormInputChange(e){ 
    let billInputs=this.state.billForm;   
    if(e.target.name=="gst_tax_id"){     
      const selectedIndex = e.target.options.selectedIndex; 
      billInputs['gst_tax_id']=e.target.value!=""?e.target.value:"";
      billInputs['sgst']=e.target.value!=""?e.target.options[selectedIndex].getAttribute('data-sgst'):"";
      billInputs['cgst']=e.target.value!=""?e.target.options[selectedIndex].getAttribute('data-cgst'):"";
      billInputs['igst']=e.target.value!=""?e.target.options[selectedIndex].getAttribute('data-igst'):"";    
    }else{
      billInputs[e.target.name]=e.target.value;
    }    
    this.setState(prev => {return {...prev, billForm : billInputs}});
  }
  
  handleKeyPressFormInput(e){
    var event = window.event ? window.event : e;   
    if( (/[^0-9.]/g.test(event.key)) ){ e.preventDefault();  } 
    else if(e.target.innerText.replace(/[^.]/g, "").length>0 && event.key=="."){ e.preventDefault(); }  
    
    if(event.keyCode===13){ // Enter Event on Form Input
      let formInput=this.state.billForm;  
      formInput[e.target.name]=e.target.value;     
      if((formInput.selling_price!="") && (formInput.quantity>0)){
        e.preventDefault();        
        let currentBillProduct=this.state.currentBillProduct;  
        currentBillProduct.quantity=formInput.quantity;       
        currentBillProduct.selling_price=formInput.selling_price;
        currentBillProduct.sales_gst_tax_id=formInput.gst_tax_id;
        currentBillProduct.igst=formInput.igst;
        currentBillProduct.sgst=formInput.sgst;
        currentBillProduct.cgst=formInput.cgst;
        currentBillProduct.discount_percentage=formInput.discount;

        let billItems=this.state.billItems; 
        let check=billItems.some((item, index, array) => {
          if(item.product_id === currentBillProduct.product_id){
            billItems[index].quantity=currentBillProduct.quantity;
            billItems[index].discount_percentage=currentBillProduct.discount_percentage;
            billItems[index].sales_gst_tax_id=currentBillProduct.sales_gst_tax_id;
            billItems[index].sgst=currentBillProduct.sgst;
            billItems[index].igst=currentBillProduct.igst;
            billItems[index].cgst=currentBillProduct.cgst;
            return true;
          }
          return false;
        });     
        if(!check){         
          billItems.push(currentBillProduct); 
        }       
        /*this.setState(prev => {
              return {
                ...prev,
                billForm:{},               
                currentBillProduct:{},
                billItems:billItems
              }
        }); */ 
        this.updateSummary({...this.state,billForm:{}, currentBillProduct:{}, billItems:billItems});
        document.getElementById('billFormBarcode').focus();       
      }
    }else{ 
      // Close Suggestion Box.
      if(this.state.visibleBarcodeSuggestion || this.state.visibleProductSuggestion){
        this.setState(prev => {
          return{
            ...prev,         
            visibleBarcodeSuggestion:false,
            visibleProductSuggestion:false,
          }
      });
      }
    }  
  }
 
  handleBlurFormInput(e){
    let currentBillProduct=this.state.currentBillProduct;   
    let billItems=this.state.billItems;
    if(currentBillProduct){
      if(e.target.name=="quantity"){
        let quantity=this.state.billForm.quantity;
        currentBillProduct.quantity=quantity;
      }else if(e.target.name=="discount"){
        let discount=this.state.billForm.discount;
        currentBillProduct.discount_percentage=discount;
      }else if(e.target.name=="selling_price"){
        let selling_price=this.state.billForm.selling_price;
        currentBillProduct.selling_price=selling_price;
      }else if(e.target.name=="gst_tax_id"){
        currentBillProduct.sales_gst_tax_id=this.state.billForm.gst_tax_id;
        currentBillProduct.igst=this.state.billForm.igst;
        currentBillProduct.sgst=this.state.billForm.sgst;
        currentBillProduct.cgst=this.state.billForm.cgst;

        let check=billItems.some((item, index, array) => {
          if(item.product_id === currentBillProduct.product_id){
            billItems[index].quantity=currentBillProduct.quantity;
            billItems[index].discount_percentage=currentBillProduct.discount_percentage;
            billItems[index].sales_gst_tax_id=currentBillProduct.sales_gst_tax_id;
            billItems[index].sgst=currentBillProduct.sgst;
            billItems[index].igst=currentBillProduct.igst;
            billItems[index].cgst=currentBillProduct.cgst;
            return true;
          }
          return false;
        });     
        if(!check){billItems.push(currentBillProduct);}        
        /*this.setState(prev => {
          return {
            ...prev,
            billForm:{},
            currentBillProduct:{},
            billItems:billItems
          }
        }); */ 
        this.updateSummary({...this.state, billForm:{},currentBillProduct:{},billItems:billItems});
        document.getElementById('billFormBarcode').focus();
        return;
      }
      this.setState(prev => {return {...prev,currentBillProduct:currentBillProduct}
      });
    }
  }

  setCheckOutPaymentOption(method){
    this.setState(prev=>{
      let checkoutModal=prev.checkoutModal;
      checkoutModal.inputs.payment_option=method;
      return {
        ...prev, checkoutModal:checkoutModal
      }
    })
  }

  handleCheckOutModelClose(e){
    this.setState(prev=>{
      let checkoutModal=prev.checkoutModal;
      checkoutModal.show=false;
      return {...prev, checkoutModal:checkoutModal}
    });   
  }

  removeBillItem(index){
    let billItems=this.state.billItems;
    billItems.splice(index, 1);
    /*this.setState(prev=>{
       return {
         ...prev,
         billItems : billItems
       }
    });*/
    this.updateSummary({...this.state,billItems : billItems});    
  } 

  handlePrintCommand(printMode){
    if(this.state.billItems.length>0){
      this.setState(prev=>{
        let checkoutModal=prev.checkoutModal;
        checkoutModal.show=true;
        return {...prev, checkoutModal:checkoutModal, printMode:printMode}
      }); 
    }else{
      let appToast={show:true, data:{type:0,header:"Empty Bill !",message:"Please select items before take bill!"}}
      this.setState(prev=>{         
        return {...prev, appToast:appToast}
      }); 
    } 
  }

  handleCustomerCommand(id=null){
    let customerModal=this.state.customerModal;
    customerModal.show=true;
    if(this.state.customer && id!=""){customerModal.inputs=this.state.customer;}
    this.setState(prev=>{
      return { ...prev,customerModal:customerModal}
    });
  }

  handleProductCommand(){
    let stateProductModal=this.state.productModal;
    stateProductModal.data.show=true;
    this.setState({productModal:stateProductModal});   
  }

  handleKeyBoardShortCuts(e){
    var event=window.event?window.event:e;  
    let key=event.key;
    let keyCode=event.code;  

    console.log(key,keyCode);
    this.keysPressed[key]=1; 

    if(this.state.checkoutModal.show){     
      let checkoutModal=this.state.checkoutModal;    
      if(event.key=="Escape"){       
        checkoutModal.show=false;
        this.setState(prev => { return{  ...prev,checkoutModal:checkoutModal } });
      }else if(["ArrowRight","ArrowLeft"].indexOf(event.key)>-1 && this.keysPressed['Control']){
        checkoutModal.inputs.payment_option=checkoutModal.inputs.payment_option=="Card"?"Cash":"Card";
        this.setState(prev => {
          return{
            ...prev,
            checkoutModal:checkoutModal
          }  
        });
      }    
    }

    if(event.key=='F2' && this.state.checkoutModal.show===false){  
      e.preventDefault();     
      this.handlePrintCommand("Thermal");    
    }else if(event.key=='F4' && this.state.checkoutModal.show===false){
      e.preventDefault(); 
      this.handlePrintCommand("A4");    
    }else if ( (this.keysPressed['Alt'] && event.key.toLowerCase() == 'r') ||
    (this.keysPressed['Meta'] && event.key.toLowerCase() == 'r')) {
      e.preventDefault(); 
      this.handlePrintCommand("Thermal");    
    }else if ( (this.keysPressed['Alt'] && event.key.toLowerCase() == 'h') || 
    (this.keysPressed['Meta'] && event.key.toLowerCase() == 'h')) {
      window.open(appRoutes.newSale);
      e.preventDefault();
    }/*else if ( (this.keysPressed['Alt'] && event.key.toLowerCase() == 'a') ||
    (this.keysPressed['Meta'] && event.key.toLowerCase() == 'a')) {
      this.handlePrintCommand("A4");
      e.preventDefault();
    }*/else if ( (this.keysPressed['Alt'] && event.key.toLowerCase() == 'c') ||
    (this.keysPressed['Meta'] && event.key.toLowerCase() == 'c')) {
      e.preventDefault();
      this.handleCustomerCommand();       
    }else if ( (this.keysPressed['Alt'] && event.key.toLowerCase() == 'a') ||
    (this.keysPressed['Meta'] && event.key.toLowerCase() == 'a')){
      e.preventDefault();
      let stateProductModal=this.state.productModal;
      stateProductModal.data.show=true;
      this.setState({productModal:stateProductModal});         
    }else if ( (this.keysPressed['Control'] && event.key.toLowerCase() == 'p') ||
    (this.keysPressed['Meta'] && event.key.toLowerCase() == 'p')){
      e.preventDefault();   
      this.handlePrintCommand("Thermal");      
    }
  }

  handleKeyUpEvent(e){
    var event=window.event?window.event:e;
    delete this.keysPressed[event.key];
  }  

  componentDidMount(){    
    window.addEventListener('keydown',this.handleKeyBoardShortCuts);
    window.addEventListener('keyup',this.handleKeyUpEvent);
    document.getElementById('billFormBarcode').focus();

    newSale((json) => {     
      if(json.data.success){        
          this.setState({
            loader:false, 
            gstTaxList : json.data.gst_tax_lists,
            states:json.data.states,
            countries:json.data.countries,
            bill_setting:json.data.bill_setting
          }); 
      }else{
          this.setState({loader:false, gstTaxList:[], states:[], countries:[]});
      }
    },(error) => { console.log(error); this.setState({loader:false, gstTaxList : []}); });

    
  }

  UNSAFE_componentWillMount(){
    window.removeEventListener('keydown', this.handleKeyBoardShortCuts);
    window.removeEventListener('keyup',this.handleKeyUpEvent);
  } 


}
export default withRouter(NewSale)