import React, { Component } from "react";
import ReactDOM from 'react-dom'; 
import { Link } from 'react-router-dom';
import './index.css';

class Insurance extends Component {

  render () {
    return (
      <div className="App">
        <div className="insurance-page">
          <div className="insurance-page-header">
            <h1 className="header-title">
              Insurance Title Here
            </h1>
          </div>
          <div className="insurance-page-body">
            Click <Link to="/" className="return-home">HERE</Link> to return from whence you came
          </div>
        </div>
      </div>
    );
  }
}

export default Insurance;