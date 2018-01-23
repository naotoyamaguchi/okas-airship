import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

class Appointment extends Component {

  componentWillMount(){
    const script1 = document.createElement("script");
    script1.src = "https://assets.calendly.com/assets/external/widget.js";
    script1.async = true;
    document.body.appendChild(script1);
  }

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
          <div className="appointment">
            <h1 className="header-title">Easily book an appointment with us here!</h1>
            <div className="hr"><hr/></div>
            <p>Quick steps to booking an appointment with us! We do appointments via phone as well!</p>
          </div>
          <div className="calendly-inline-widget" data-url="https://calendly.com/naotoy/15min">
          </div>
      </div>
    );
  }
}

export default Appointment;