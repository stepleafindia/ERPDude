import React, {Component} from 'react';
import LoginContainer from './LoginContainer';
import {withRouter} from "react-router-dom";
import './login.css';

class Login extends Component {
	
  constructor(props) {
    super(props);
    this.state = {
      redirect: props.location,
    };
    //console.log(props)
  } 

  render() {
    return (
      <div className="content my-4">
        <LoginContainer redirect={this.state.redirect} />
      </div>
    )
  } 

}
export default withRouter(Login)