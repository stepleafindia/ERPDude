import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import FlashMessage from 'react-flash-message';
import { appRoutes, apiRoutes } from '../../Utils';

class LoginContainer extends Component {

    constructor(props) {
      super(props);
      this.getInitialState=this.getInitialState.bind(this);
      this.state = this.getInitialState();     
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleUsername = this.handleUsername.bind(this);
      this.handlePassword = this.handlePassword.bind(this);       
    } 

    getInitialState(){
      let AppState= localStorage["appState"]?JSON.parse(localStorage["appState"]):[];

      return {
        isLoggedIn: AppState.isLoggedIn?AppState.isLoggedIn:false,
        error: '',
        formSubmitting: false,      
        user: AppState.user?AppState.user:{ username:null, password: null },
        redirect: this.props.redirect,
      }

    }
    
   /* UNSAFE_componentWillMount(){
        console.log(this.state)
    } */

    render() {
      const { state = {} } = this.state.redirect;
      const { error } = state;
    
      return (  
      <div className="container">       
        <div className="row">
        <div className="col-md-12">

          <div className="App">

            <h2 className="text-center mb30">SignIn</h2>

            {this.state.isLoggedIn ? <FlashMessage duration={60000} persistOnHover={true}>
            <h5 className={"alert alert-success"}>Login successful, redirecting...</h5></FlashMessage> : ''}
            
            {error && !this.state.isLoggedIn ? <FlashMessage duration={100000} persistOnHover={true}>
            <h5 className={"alert alert-danger"}>Error: {error}</h5></FlashMessage> : ''}

            <div className="auth-wrapper">
            <div className="auth-inner">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input id="username" type="text" name="username" placeholder="Username" className="form-control" required onChange={this.handleUsername}/>
              </div>
              <div className="form-group">
                <input id="password" type="password" name="password" placeholder="Password" className="form-control" required onChange={this.handlePassword}/>
              </div>
              <div className="form-group mb-1">
                  <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="remember_me" name="remember_me"/>
                      <label className="custom-control-label" htmlFor="remember_me">Remember me</label>
                  </div>
              </div>
              <div className="form-message">
              {this.state.error ? <div className="form-error">{this.state.error} </div> : ''}         
              </div>
            <button disabled={this.state.formSubmitting} type="submit" name="singlebutton" className="btn btn-primary btn-block"> {this.state.formSubmitting ? "Logging You In..." : "Log In"} </button>
              <p className="forgot-password text-right">
                  Forgot <a href="#">password?</a>
              </p>
            </form> 
            </div>
            </div>
          </div> 
          </div>     

        </div>

      </div>
      )
    }

    componentDidMount() {       

        const { prevLocation } = this.state.redirect.state || { prevLocation: { pathname: appRoutes.dashboard } };
        if (prevLocation && this.state.isLoggedIn) {
            return this.props.history.push(prevLocation);
        } 

    } 

    handleSubmit(e) {
      e.preventDefault();
      this.setState({formSubmitting: true});
      let userData = {
        'username':this.state.user.username,
        'password':this.state.user.password,
        'remember_me':document.getElementById('remember_me').checked
      };

      axios.post(apiRoutes.logIn, userData).then(response => {
        return response;
      }).then(json => {

          if (json.data.success) {

            let userData = json.data.user_data;
            let appState = { isLoggedIn: true,user: userData };
            localStorage["appState"] = JSON.stringify(appState);
            this.setState({
                isLoggedIn: appState.isLoggedIn,
                user: appState.user,
                error: null
            });           
            location.reload();

          }else { 
              this.setState({  formSubmitting: false,error:json.data.message });                      
          }
      }).catch(error => {

        if (error.response) {
          // The request was made and the server responded with a status code that falls out of the range of 2xx
          let err = error.response.data;
          this.setState({
            error: err.message,
            errorMessage: err.errors,
            formSubmitting: false
          })
        } else if (error.request) {
          // The request was made but no response was received `error.request` is an instance of XMLHttpRequest in the browser and an instance of http.ClientRequest in node.js
          let err = error.request;
          this.setState({
            error: err,
            formSubmitting: false
          })
        } else {
          // Something happened in setting up the request that triggered an Error
          let err = error.message;
          this.setState({
              error: err,
              formSubmitting: false
          })
        }
      }).finally(this.setState({error: ''}));
  }

  handleUsername(e) {
      let value = e.target.value;    
      this.setState(prevState => ({
          user: {
          ...prevState.user, username: value
          }
      }));
  }

  handlePassword(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      user: {
        ...prevState.user, password: value
      }
    }));
  }

}

export default withRouter(LoginContainer);