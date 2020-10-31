import React, { Suspense, lazy } from 'react';
import { Route, Switch} from 'react-router-dom';
import { appRoutes } from './Utils';
import Login from './views/Login/Login';
import NotFound from './views/NotFound/NotFound';
import PrivateRoute from './PrivateRoute'; // For Validate Logged In.
import Dashboard from './views/Dashboard/Dashboard';
const ProductModule = React.lazy(() => import('./views/products'));
const GstTaxes = React.lazy(() => import('./views/GstTax/GstTaxes'));
const CustomerModule = React.lazy(() => import('./views/customer'));
const SaleModule = React.lazy(() => import('./views/sale'));

const Main = props => (
<Switch> 
  <Route exact path={appRoutes.home} component={Login}/> 
  <Route path={appRoutes.login} component={Login}/>
  <PrivateRoute exact path={appRoutes.dashboard} component={Dashboard}/>
  <PrivateRoute path={appRoutes.gstTaxes} component={GstTaxes}/> 
  <ProductModule path={appRoutes.products} component="Products" isPrivate={true}/> 
  <ProductModule path={appRoutes.productAdd} exact component="Product" isPrivate={true}/> 
  <ProductModule path={appRoutes.productEdit} component="Product" isPrivate={true}/>  
  <ProductModule path={appRoutes.productCategories} component='Categories' isPrivate={true}/>
  <ProductModule path={appRoutes.productSubCategories} component='SubCategories' isPrivate={true}/>
  <ProductModule path={appRoutes.productBrands} component="Brands" isPrivate={true}/>
  <ProductModule path={appRoutes.productUnits} component="Units" isPrivate={true}/>  
  <CustomerModule path={appRoutes.customers} component="Customers" isPrivate={true}/> 
  <CustomerModule path={appRoutes.customerAdd} exact component="Customer" isPrivate={true}/> 
  <CustomerModule path={appRoutes.customerEdit} component="Customer" isPrivate={true}/> 
  <SaleModule path={appRoutes.sales} component="Sales" isPrivate={true}/>
  <SaleModule path={appRoutes.newSale} component="NewSale" isPrivate={true}/>
  <Route path="" component={NotFound} /> 
  <Route path="*" component={NotFound} /> 
  <Route component={NotFound} /> 
</Switch>
);
export default Main;