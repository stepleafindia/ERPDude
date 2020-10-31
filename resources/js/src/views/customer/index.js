import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import PrivateRoute from '../../PrivateRoute'; // For Validate Logged In.

import Customers from './Customers/Customers';
import Customer from './Customer/Customer';

export const modules= {
    Customers: Customers, 
    Customer: Customer,
};
const CustomerModule = ({ component, path, isPrivate, ...rest }) =>{ 
    let RouteComponent=modules[component]; 
    if(isPrivate){    
      return (<PrivateRoute path={path} component={RouteComponent}  {...rest} />);
    }else{
      return (<Route component={component}/>); 
    }
}
export default withRouter(CustomerModule);

