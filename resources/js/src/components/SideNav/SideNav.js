import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import { logOut, appRoutes } from '../../Utils';
import { Navbar,Container,Row,Col, InputGroup, FormControl, Button, Dropdown,NavLink, Nav} from 'react-bootstrap';
import './side-nav.css';
import InputSuggestion from '../InputSuggestion/InputSuggestion';

class SideNav extends Component {

    constructor(props){
        super(props);
        this.state = {
            user: props.userData,
            isLoggedIn: props.userIsLoggedIn,
           /*customerSearch:{
                show:false,
                value:"",
                suggestions:[],
                activeIndex:0
            }*/
        };
        //this.keyDownCustomerSearch=this.keyDownCustomerSearch.bind(this);
        //this.onChangeCustomerSearch=this.onChangeCustomerSearch.bind(this);      
        //this.onClickCustomerSuggestion=this.onClickCustomerSuggestion.bind(this); 
        //this.onBlurCustomerSearch=this.onBlurCustomerSearch.bind(this);
        this.logOut = logOut.bind(this);
    }

    customerRenderSuggestions(index, item, arr){   
        return (<>{item.suggestion_label}</>)
    }

    /*
    onClickCustomerSuggestion(index, item, arr){
       let customerSearchState=this.state.customerSearch;
       customerSearchState.value=item.suggestion_label;
       customerSearchState.show=false;       
       this.setState({customerSearch:customerSearchState});
       this.props.selectCustomer(item);
    }

    keyDownCustomerSearch(e){
        let value=e.target.value;         
        if(e.keyCode==38 || e.key=="ArrowUp" || e.code=="ArrowUp"){  // Up Arrow
            let customerSearchState=this.state.customerSearch;           
            if(customerSearchState.activeIndex<customerSearchState.suggestions.length){
                customerSearchState.activeIndex=customerSearchState.activeIndex++;
            }
            this.setState({customerSearch:customerSearchState});
        }else if(e.keyCode==40 || e.key=="ArrowDown" || e.code=="ArrowDown"){  // Down Arrow
            let customerSearchState=this.state.customerSearch;           
            if(customerSearchState.activeIndex<customerSearchState.suggestions.length){
                customerSearchState.activeIndex=customerSearchState.activeIndex--;
            }
            this.setState({customerSearch:customerSearchState});
        }else if(( (e.key==="Enter" || e.keyCode===13 || e.code=="Enter") || 
        (e.key==="Tab" || e.keyCode===9 || e.code=="Tab"))){
            let customerSearchState=this.state.customerSearch;
            let activeIndex=customerSearchState.activeIndex;
            let suggestion=customerSearchState.suggestions[activeIndex];
            if(suggestion){
                customerSearchState.value=suggestion['suggestion_label'];
                customerSearchState.show=false;       
                this.setState({customerSearch:customerSearchState});
            }           
            this.props.selectCustomer(customerSearchState.suggestions[activeIndex]);
        }         
    }

    onChangeCustomerSearch(e){
        let value=e.target.value;  
        let customerSearchState=this.state.customerSearch;
        customerSearchState.value=value;
        customerSearchState.show=(value!="")?true:false;       
        this.setState({customerSearch:customerSearchState});
        this.props.selectCustomer(null);
        if(value!=""){
            let request={ method: 'post', url: apiRoutes.customerSearch,data: {search: value} };       
            axios(request).then(response =>{ return response }).then(json => { 
                let customerSearchState=this.state.customerSearch;
                customerSearchState.suggestions=json.data.data;
                this.setState({customerSearch:customerSearchState});              
            }).catch(error=>{ 
                console.log(error);           
            });    
        }    
    }

    onBlurCustomerSearch(e){
        let customerSearchState=this.state.customerSearch;
        customerSearchState.show=false;       
        this.setState({customerSearch:customerSearchState});
    }*/
 
    render(){ 
        const {
            customerSearch, 
            keyDownCustomerSearch, 
            onChangeCustomerSearch,
            onBlurCustomerSearch,
            onClickCustomerSuggestion
        }=this.props;

        return (
            <>    
            <Navbar id="sideNavHeader" className="side-navigation-header bg-theme">    
            <Container fluid>
            <Row className="w-100">
                <Col md={2}>
                <span style={{fontSize:"24px",cursor:"pointer"}} onClick={this.showNavigation}>&#9776;</span>
                </Col>
                <Col md={3}>
                    <div className="nav-label">
                        <label>
                            <span className="lable-icon"><i className="fas fa-layer-group"></i></span>
                            Stock :
                        </label>
                        <span><b>{this.props.stock?this.props.stock:null}</b></span>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="nav-label">
                        <label>
                            <span className="lable-icon"><i className="fas fa-shopping-cart"></i></span>
                            Qty :
                        </label>
                        <span><b>{this.props.quantity?this.props.quantity:null}</b></span>
                    </div>
                </Col>
                <Col md={4}>           
               
                <InputGroup>
                    <FormControl placeholder="Choose Customer"  aria-label="Choose Customer" 
                        onKeyDown={keyDownCustomerSearch} 
                        value={customerSearch.value} 
                        onChange={onChangeCustomerSearch}  
                        onBlur={onBlurCustomerSearch}                      
                    />
                    {customerSearch.show?(
                    <InputSuggestion                        
                        suggestions={customerSearch.suggestions}
                        activeIndex={customerSearch.activeIndex}
                        onClickSuggestion={onClickCustomerSuggestion}                                         
                        renderSuggestion={this.customerRenderSuggestions}                        
                    />):""}
                    <InputGroup.Append>
                    <Button className="nav-cus-add" onClick={this.props.handleCustomerCommand}><i className="fas fa-user-plus"></i></Button>
                    <Button className="nav-cus-edit" onClick={(e)=>{ 
                        let id=this.props.selectedCustomer.id; id=id?id:null;
                        this.props.handleCustomerCommand(id) 
                    } }><i className="fas fa-user-edit"></i></Button>
                    </InputGroup.Append>
                </InputGroup>
                </Col>
            </Row>           
            </Container>             
            </Navbar> 
            <div className="side-navigation-overlay" onClick={this.closeNavigation}></div>     
            <Nav className="side-navigation" id="sideNavMenu" activeKey={this.props.location.pathname}>               
                <ul className="list-unstyled components">
                    <li className="active">
                        <Nav.Link as={Link} to={appRoutes.dashboard} eventKey={appRoutes.dashboard}>
                            <span className="nav-link-icon"><i className="fas fa-home"></i></span>Dashboard
                        </Nav.Link>                        
                    </li>
                    <li>
                        <a href="#productsSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                            <span className="nav-link-icon"><i className="fab fa-product-hunt"></i></span>Masters
                        </a>
                        <ul className="collapse list-unstyled" id="productsSubmenu">
                            <li><Nav.Link as={Link} to={appRoutes.products} eventKey={appRoutes.products}>Products</Nav.Link></li>
                            <li><Nav.Link as={Link} to={appRoutes.productCategories} eventKey={appRoutes.productCategories}>Category</Nav.Link></li>
                            <li><Nav.Link as={Link} to={appRoutes.productSubCategories} eventKey={appRoutes.productSubCategories}>SubCategory</Nav.Link></li>
                            <li><Nav.Link as={Link} to={appRoutes.productBrands} eventKey={appRoutes.productBrands}>Brands</Nav.Link></li>
                            <li><Nav.Link as={Link} to={appRoutes.productUnits} eventKey={appRoutes.productUnits}>Units</Nav.Link></li>
                            <li><Nav.Link as={Link} to={appRoutes.gstTaxes} eventKey={appRoutes.gstTaxes}>Tax</Nav.Link></li> 
                        </ul>
                    </li>
                    <li> 
                        <a href="#contactsSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                            <span className="nav-link-icon"><i className="far fa-address-book"></i></span>Contacts
                        </a>
                        <ul className="collapse list-unstyled" id="contactsSubmenu">
                            <li><Nav.Link as={Link} to="#">Suppliers</Nav.Link></li>
                            <li><Nav.Link as={Link} to={appRoutes.customers} eventKey={appRoutes.customers}>Customers</Nav.Link></li>                            
                        </ul>
                    </li>
                    <li> 
                        <a href="#salesSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                            <span className="nav-link-icon"><i className="fas fa-balance-scale-right"></i></span>Sales
                        </a>
                        <ul className="collapse list-unstyled" id="salesSubmenu">
                            <li><Nav.Link as={Link} to="#">Sales</Nav.Link></li>
                            <li><Nav.Link to={appRoutes.newSale} as={Link} eventKey={appRoutes.newSale}>New Sale</Nav.Link></li> 
                            <li><Nav.Link as={Link} to="#">Sales Return</Nav.Link></li>
                            <li><Nav.Link as={Link} to="#">Sales Day End</Nav.Link></li>                                
                        </ul>
                    </li>
                    <li> 
                        <a href="#userSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                            <span className="nav-link-icon"><i className="fas fa-user-circle"></i></span>User
                        </a>
                        <ul className="collapse list-unstyled" id="userSubmenu">
                            <li><Nav.Link to="#">Profile</Nav.Link></li>
                            <li><Nav.Link onClick={this.logOut} to="#">Logout</Nav.Link></li>                            
                        </ul>
                    </li>
                </ul>
            </Nav> 
          </>
        );
    }

    showNavigation(){
        document.getElementById('sideNavMenu').style.width="200px";
        document.getElementById('sideNavMenu').previousSibling.style.display="block";       
    }
    closeNavigation(){
        document.getElementById('sideNavMenu').style.width="0";
        document.getElementById('sideNavMenu').previousSibling.style.display="none";        
    }
}
export default withRouter(SideNav)