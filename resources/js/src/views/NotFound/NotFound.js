import React, {Component} from 'react';
import {withRouter} from "react-router-dom";

class NotFound extends Component {

  render() {
    return (
      <div className="content">
       <h1>Page Not Found!</h1>
      </div>
    )
  } 

}
export default withRouter(NotFound)