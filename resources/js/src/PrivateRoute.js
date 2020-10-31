import React from 'react';
import {Redirect, Route, withRouter} from 'react-router-dom';
import { appRoutes } from './Utils';

if (!localStorage["appState"]){
  localStorage["appState"] = JSON.stringify({isLoggedIn: false,user: {}});
}

let AppState = JSON.parse(localStorage["appState"]);
const Auth = { isLoggedIn: AppState.isLoggedIn, user: AppState.user};

const PrivateRoute = ({ component: Component, path, ...rest }) => 

(<Route path={path} {...rest}
        render={ props => Auth.isLoggedIn ? (<Component {...props} />) : 
        (<Redirect to={{pathname: appRoutes.login, state:{ prevLocation: path,error: "You need to login first!" } }} />)
        }
/>);

export default withRouter(PrivateRoute);