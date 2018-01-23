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
              Estimates
            </h1>
          </div>
          <div className="hr"><hr/></div>
          <div className="estimates-body">
            <h1 className="subheader">Need a Quote?</h1>
            <p>If you're unsure of where to start, contact us for an appointment and we can arrange a free quote for whatever repair you need! Either message us for questions, or set up an appointment using our appointment system <Link to="/appointment">here</Link>.</p>
          </div>
        </div>
      </div>     
    );
  }
}

export default Estimates;