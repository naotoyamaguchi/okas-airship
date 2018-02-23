import React, { Component } from "react";
// import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import './index.css';

class ContactConfirmation extends Component {

  render () {
    return (
      <div className="App">
        <div className="confirmation">
          <div className="confirmation-header">
            <h1 className="header-title">
              Message received!
            </h1>
          </div>
          <div className="confirmation-body">
            Click <Link to="/" className="return-home">here</Link> to return to the homepage.
          </div>
        </div>
      </div>
    );
  }
}

export default ContactConfirmation;