import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import PrivateRoute from '../../PrivateRoute'; // For Validate Logged In.

import Categories from './Category/Categories';
import SubCategories from './SubCategory/SubCategories';
import Brands from './Brand/Brands';
import Units from './Unit/Units';
import Products from './Product/Products';
import Product from './Product/Product';

export const modules= {
    Categories: Categories, 
    SubCategories: SubCategories,
    Brands:Brands,
    Units:Units,
    Products:Products,
    Product:Product
};
const ProductModule = ({ component, path, isPrivate, ...rest }) =>{ 
    let RouteComponent=modules[component];   
    if(isPrivate){    
      return (<PrivateRoute path={path} component={RouteComponent}  {...rest} />);
    }else{
      return (<Route component={component}/>); 
    }
}
export default withRouter(ProductModule);

