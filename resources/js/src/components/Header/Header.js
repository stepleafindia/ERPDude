import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import { logOut, appRoutes } from '../../Utils';

import { 
  Dropdown, 
  NavLink, 
  Nav, 
  Navbar,
  NavDropdown
} from 'react-bootstrap';
import './header.css';

class Header extends Component {

  constructor(props) {
    super(props);   
    this.state = {
      user: props.userData,
      isLoggedIn: props.userIsLoggedIn
    };
    this.logOut = logOut.bind(this);
  }  

  navLinkIcon(icon,title){
      return (
        <>
        <span className="nav-link-icon">
        {icon}
        </span>
        {title}
        </>
      );
  }

  render() {

    const aStyle = {
      cursor: 'pointer'
    };
    
    return ( 
      <>    
        <Navbar bg="theme" variant="light" expand="lg" className="top-navigation-header">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" activeKey={this.props.location.pathname}>

            <Nav.Link as={Link} to={appRoutes.dashboard} eventKey={appRoutes.dashboard}>
            <span className="nav-link-icon"><i className="fas fa-home"></i></span>Dashboard
            </Nav.Link>

            <NavDropdown title={this.navLinkIcon(<i className="fab fa-product-hunt"></i>,'Masters')} id="masters-nav-dropdown">
              <NavDropdown.Item as={Link} eventKey={appRoutes.products} to={appRoutes.products}>Products</NavDropdown.Item>
              <NavDropdown.Item as={Link} eventKey={appRoutes.productCategories} to={appRoutes.productCategories}>Category</NavDropdown.Item>
              <NavDropdown.Item as={Link} eventKey={appRoutes.productSubCategories} to={appRoutes.productSubCategories}>Sub Category</NavDropdown.Item>
              <NavDropdown.Item as={Link} eventKey={appRoutes.productBrands}  to={appRoutes.productBrands}>Brands</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to={appRoutes.productUnits} eventKey={appRoutes.productUnits}>Units</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={appRoutes.gstTaxes} eventKey={appRoutes.gstTaxes}>Tax</NavDropdown.Item>
            </NavDropdown>
            {/*<Nav.Link href="#link">Link</Nav.Link>*/}
            <NavDropdown title={this.navLinkIcon(<i className="fas fa-file-invoice"></i>,"Accounts")} id="accounts-nav-dropdown">
              <NavDropdown.Item as={Link} eventKey={"/ledgers"} to="/products">Ledger Details</NavDropdown.Item>
              <NavDropdown.Item as={Link} eventKey={"/ledger/modes"} to="/product/category">Payment Modes</NavDropdown.Item>
              <NavDropdown.Item as={Link} eventKey={"/ledger/payable"} to="/product/sub-category">Payables</NavDropdown.Item>
              <NavDropdown.Item as={Link} eventKey={"/ledger/receivable"} to="/product/brands">Receivables</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title={this.navLinkIcon(<i className="far fa-address-book"></i>,"Contacts")} id="contacts-nav-dropdown">
              <NavDropdown.Item as={Link} to="/products">Suppliers</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={appRoutes.customers}  eventKey={appRoutes.customers}>Customers</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title={this.navLinkIcon(<i className="fas fa-shopping-bag"></i>,"Purchase")} id="purchase-nav-dropdown">
              <NavDropdown.Item as={Link} to="/products">Opening Stock Entry</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/product/category">Purchase Entry MRN</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/product/sub-category">Purchase Return MRR</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/product/brands">Barcode Print</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title={this.navLinkIcon(<i className="fas fa-balance-scale-right"></i>,"Sales")} id="sales-nav-dropdown">
              <NavDropdown.Item as={Link} to={appRoutes.sales} eventKey={appRoutes.sales}>Sales</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={appRoutes.newSale} eventKey={appRoutes.newSale}>New Sale</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/product/category">Sales Return</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/product/sub-category">Sales Day End</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title={this.navLinkIcon(<i className="fas fa-file-alt"></i>,"Reports")} id="reports-nav-dropdown">
              <NavDropdown.Item as={Link} to="/sales">Purchase</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/product/category">Purchase Return</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/product/sub-category">Sales</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/product/sub-category">Sales Return</NavDropdown.Item>            
            </NavDropdown>

            <NavDropdown title={this.navLinkIcon(<i className="fas fa-file-invoice-dollar"></i>,"GST Reports")} id="gst-nav-dropdown">
              <NavDropdown.Item as={Link} to="/sales">Purchase Annexure 1A</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/product/category">Purchase Return  Annexure 2A</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/product/sub-category">Sales  Annexure 1A</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/product/sub-category">Sales Return  Annexure 2A</NavDropdown.Item>            
            </NavDropdown>

            <NavDropdown title={this.navLinkIcon(<i className="fas fa-user-circle"></i>,"User")} id="user-nav-dropdown" className="d-lg-none">
              <NavDropdown.Item as={Link} to="/profile">
                <span className="nav-link-icon"><i className="fas fa-user-cog"></i></span>
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item  onClick={this.logOut}>
                <span className="nav-link-icon"><i className="fas fa-sign-out-alt"></i></span>
                Logout
              </NavDropdown.Item>
            </NavDropdown>

          </Nav>          
        </Navbar.Collapse>
    
        <Dropdown alignRight className="d-none d-lg-block">
            <Dropdown.Toggle as={NavLink} id="dropdown-basic">
             <span className="nav-link-icon"><i className="fas fa-user-circle"></i></span>
              User
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item as={Link}  to="/profile">
                <span className="nav-link-icon"><i className="fas fa-user-cog"></i></span>
                Profile
              </Dropdown.Item>
              <Dropdown.Item as={Link} onClick={this.logOut} to="#">
                <span className="nav-link-icon"><i className="fas fa-sign-out-alt"></i></span>
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        
        
        </Navbar>           
      </>
    )

  }
  
}
export default withRouter(Header)