import React, {Component, Suspense} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import Main from './Router';
import Loader from './components/Loader/Loader'; // Page Loader Component.
import { appBaseUrl } from './Utils';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={appBaseUrl}>
       <Suspense fallback={<Loader />}>  
       <Route component={Main} />   
       </Suspense>        
      </BrowserRouter>
    );
  }
}
ReactDOM.render(<App/>, document.getElementById('app'));