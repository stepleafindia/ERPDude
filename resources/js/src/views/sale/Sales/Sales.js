import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import Header from '../../../components/Header/Header';

class Sales extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
      user:[],
      error: ''
    };

  }

  componentWillMount() {
    let state = localStorage["appState"];
    if (state) {
      let AppState = JSON.parse(state);
      this.setState({isLoggedIn: AppState.isLoggedIn, user: AppState.user});
    }
  }  

  render() {
    return (
      <>
      <Header userData={this.state.user} userIsLoggedIn={this.state.isLoggedIn}/>
      <div className="content">      
      <div className="container-fluid">    
        <div className="page-header container-fluid"> 
          <div className="row justify-content-between">              
            <h1>Sales</h1>
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
export default withRouter(Sales)