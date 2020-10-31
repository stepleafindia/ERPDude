import React, {Component} from 'react';
import { Link, withRouter} from 'react-router-dom';
import { appRoutes } from '../../Utils';
import {  Container } from 'react-bootstrap';
import './footer.css';

class Footer extends Component {

  constructor(props) {
    super(props);   
    this.state = {
      user: props.userData,
      isLoggedIn: props.userIsLoggedIn
    };   
  }  

  render() {
    
    return (       
       <footer className="page-footer">
        <Container>
            <span className="muted-text"> 2020 © CodeSense Soft Solutions Private Limited. Retail POS - Customer Care : +91 95244 76114 | +91 99443 13212 </span>
        </Container>
        </footer> 
    )

  }
  
}
export default withRouter(Footer)