import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import PrivateRoute from '../../PrivateRoute'; // For Validate Logged In.

import Sales from './Sales/Sales';
import NewSale from './NewSale/NewSale';

export const modules= {
    Sales: Sales, 
    NewSale: NewSale
};
const SaleModule = ({ component, path, isPrivate, ...rest }) =>{ 
    let RouteComponent=modules[component];   
    if(isPrivate){    
      return (<PrivateRoute path={path} component={RouteComponent}  {...rest} />);
    }else{
      return (<Route component={component}/>); 
    }
}
export default withRouter(SaleModule);

