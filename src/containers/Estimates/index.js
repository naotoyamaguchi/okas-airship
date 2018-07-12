import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';

class Estimates extends Component {

  componentDidMount() {
    var elem = ReactDOM.findDOMNode(this);
    elem.style.opacity = 0;
    window.requestAnimationFrame(function() {
      elem.style.transition = "1s ease";
      elem.style.opacity = 1;
    });
  }

  componentWillUnmount(){
    var elem = ReactDOM.findDOMNode(this);
    elem.style.opacity = 1;
    window.requestAnimationFrame(function() {
      elem.style.transition = "1s ease";
      elem.style.opacity = 0;
    });
  }

  render() {
    return (
      <div className="App">
        <div className="estimates">
          <div className="estimates-header">
            <h1 className="header-title">
              Need a Quote?
            </h1>
            <hr/>
          </div>
          
          <div className="estimates-body">
            <p className="estimates-text">If you're unsure of where to start, contact us for an appointment at (808) 677-5474 and we can arrange a free quote for whatever repair you need! You can also use this form to <strong><Link to="/contact" className="appointment-link">message</Link></strong> us.</p>
          </div>
        </div>
        <div className="bumper"></div>
      </div>     
    );
  }
}

export default Estimates;