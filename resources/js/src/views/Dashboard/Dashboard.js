import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import Header from '../../components/Header/Header';

class Dashboard extends Component {

  constructor(props) {
    super(props);
   
    this.state = {
      isLoggedIn: localStorage["appState"]?localStorage["appState"].isLoggedIn:false,
      user: localStorage["appState"]?localStorage["appState"].user:[],
      error: ''
    };   

  }

  render() {
    return (
      <>
      <Header userData={this.state.user} userIsLoggedIn={this.state.isLoggedIn}/>
      <div className="content">      
      <div className="container-fluid">    
        <div className="page-header container-fluid"> 
          <div className="row justify-content-between">              
            <h1>Dashboard</h1>
          </div>            
        </div>      
        { (this.state.pageAlert &&  this.state.pageAlert.message) ? 
        <FlashAlert data={this.state.pageAlert} duration={6000} show={true} onClose={()=>this.pageAlert({})} />
        :''}          
      </div>
      </div>
      </>
    )
  } 

}
export default withRouter(Dashboard)