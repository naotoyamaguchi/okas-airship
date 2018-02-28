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
            {/*<h2 className="estimates-subheader">Need a Quote?</h2>*/}
            <p className="estimates-text">If you are unsure of where to start, contact us for an appointment and we can arrange a free quote for whatever repairs you need! You can either message us for questions or set up a meeting using our appointment system <strong><Link to="/appointment" className="appointment-link">here</Link></strong>.</p>
            {/*<p className="estimates-text">If you're unsure of where to start, contact us for an appointment and we can arrange a free quote for whatever repair you need! Either message us for questions, or set up an appointment using our appointment system <strong><Link to="/appointment" className="appointment-link">here</Link></strong>.</p>*/}
          </div>
        </div>
        <div className="bumper"></div>
      </div>     
    );
  }
}

export default Estimates;