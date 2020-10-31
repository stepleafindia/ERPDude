export const appBaseUrl='';
export const appRoutes={
	home		: '/',
	login		: '/login',	
	dashboard	: '/dashboard',
	products	: '/products',
	productAdd	    : '/product',
	productEdit	    : '/product/:id',
	productCategories  : '/product-categories',
	productSubCategories  : '/product-sub-categories',
	productBrands		: '/product-brands',
	productUnits		: '/product-units',
  gstTaxes			: '/gst-taxes',
  customers   : '/customers',
  customerAdd : '/customer',
  customerEdit: '/customer/:id',
  sales :  '/sales',
  newSale : '/new-sale'    
};

export const apiBaseUrl='';
export const apiRoutes={
  logIn : apiBaseUrl+'/api/auth/login',
  logOut : apiBaseUrl+'/api/auth/logout',
  productCategory : apiBaseUrl+'/api/product/category',
  productCategoriesList : apiBaseUrl+'/api/product/categories',
  productCategories : apiBaseUrl+'/api/product/categories-list',
  productSubCategory : apiBaseUrl+'/api/product/sub-category',
  productSubCategoriesList : apiBaseUrl+'/api/product/sub-categories',
  productSubCategories : apiBaseUrl+'/api/product/sub-categories-list',
  brand : apiBaseUrl+'/api/product/brand',
  brandsList : apiBaseUrl+'/api/product/brands',
  brands : apiBaseUrl+'/api/product/brands-list',
  unit : apiBaseUrl+'/api/product/unit',
  unitsList : apiBaseUrl+'/api/product/units',
  units : apiBaseUrl+'/api/product/units-list',
  gstTax : apiBaseUrl+'/api/gst-tax',
  gstTaxesList : apiBaseUrl+'/api/gst-taxes',
  gstTaxes : apiBaseUrl+'/api/gst-taxes-list',
  product  : apiBaseUrl+'/api/product',
  productsList : apiBaseUrl+'/api/products',
  productSearch : apiBaseUrl+'/api/product/search',
  customer  : apiBaseUrl+'/api/customer',
  customersList : apiBaseUrl+'/api/customers',
  statesList : apiBaseUrl+'/api/states',
  countriesList : apiBaseUrl+'/api/countries',
  createBill : apiBaseUrl+'/api/create-bill',
  newSale :  apiBaseUrl+'/api/new-sale',
  customerSearch : apiBaseUrl+'/api/customer/search',
  billSetting : apiBaseUrl+'/api/bill-setting'
};

export function clearAuthToken(){
	let appState = { isLoggedIn: false, user: {} };
  localStorage["appState"] = JSON.stringify(appState);
  this.setState(appState);	
	this.props.history.push(appRoutes.login); 
}

export function searchProducts(request, callbackResponse,callbackError){    
  
  axios.post(apiRoutes.productSearch,request).then(response => {
    return response;
  }).then(callbackResponse).catch(callbackError);

}

export function getBrandsList(callbackResponse,callbackError){    
  
  axios.get(apiRoutes.brands).then(response => {
    return response;
  }).then(callbackResponse).catch(callbackError);

}

export function getSubCategoriesList(callbackResponse,callbackError){    
  
  axios.get(apiRoutes.productSubCategories).then(response => {
    return response;
  }).then(callbackResponse).catch(callbackError);

}

export function getCategoriesList(callbackResponse,callbackError){    
  
  axios.get(apiRoutes.productCategories).then(response => {
    return response;
  }).then(callbackResponse).catch(callbackError);

}

export function getUnitsList(callbackResponse,callbackError){    
  
  axios.get(apiRoutes.units).then(response => {
    return response;
  }).then(callbackResponse).catch(callbackError);

}

export function getGstTaxesList(callbackResponse,callbackError){    
  
  axios.get(apiRoutes.gstTaxes).then(response => {
    return response;
  }).then(callbackResponse).catch(callbackError);

}

export function newSale(callbackResponse,callbackError){    
  
  axios.get(apiRoutes.newSale).then(response => {
    return response;
  }).then(callbackResponse).catch(callbackError);

}

export function getProductDetails(productId, callbackResponse,callbackError){    
  
  axios.get(apiRoutes.product+'/'+productId).then(response => {
    return response;
  }).then(callbackResponse).catch(callbackError);

}

export function getCustomerDetails(customerId, callbackResponse,callbackError){    
  
  axios.get(apiRoutes.customer+'/'+customerId).then(response => {
    return response;
  }).then(callbackResponse).catch(callbackError);

}

export function getCountriesList(callbackResponse,callbackError){    
  
  axios.get(apiRoutes.countriesList).then(response => {
    return response;
  }).then(callbackResponse).catch(callbackError);

}

export function getStatesList(callbackResponse,callbackError){    
  
  axios.get(apiRoutes.statesList).then(response => {
    return response;
  }).then(callbackResponse).catch(callbackError);

}

export function logOut(){ 
   
    /*let access_token= this.state.user.access_token;  
    window.axios.defaults.headers.common['Authorization'] = "Bearer "+access_token;*/
	
	let appState = { isLoggedIn: false, user: {} };
  localStorage["appState"] = JSON.stringify(appState);
  this.setState(appState);
		
	// revoke token request.
    axios.get(apiRoutes.logOut).then(response => {
      return response;
    }).then(json => {       
        if (json.data.success) { this.props.history.push(appRoutes.login);    }
    }).catch(error => {
      if(error.response) {
        // The request was made and the server responded with a status code that falls out of the range of 2xx
        let err = error.response.data;
        this.setState({
          error: err.message,
          errorMessage: err.errors,        
        })
      }else if (error.request) {
        // The request was made but no response was received `error.request` is an instance of XMLHttpRequest in the browser and an instance of http.ClientRequest in node.js
        let err = error.request;
        this.setState({
          error: err,
        })
      }else {
        // Something happened in setting up the request that triggered an Error
        let err = error.message;
        this.setState({
            error: err,
        })
      }
    }).finally(this.setState({error: ''}));

}