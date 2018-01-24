import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import './index.css';

class Contact extends Component {

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
        <div className="contact">
          <div className="contact-header">
            <h1 className="header-title">
              {/*<Link to="/appointment">Make an Appointment!</Link>*/}
              Contact Us
            </h1>
          </div>
          <hr/>
          <div className="contact-body">
            <div className="contact-form">
              <h3 className="body-subheader">Send Us a Message</h3>
              Name:<br/>
              <input type="text" className="name"/><br/><br/>
              Email:<br/>
              <input type="text" className="email"/><br/><br/>
              Phone:<br/>
              <input type="text" className="phone"/><br/><br/>
              What is your preferred method of contact?<br/>
                <select className="select">
                <option value="email">Email</option>
                <option value="phone">Phone</option>
                </select><br/><br/>
              Message:<br/>
              <textarea type="text" className="message"/><br/>
              <button className="submit">Submit ›</button>
            </div>
            <hr className ="mobile-hr"/>
            <div className="oka-contact-info">
              <h3 className="body-subheader">Contact Info</h3>
              Address:<br/>
              94-173 Leokane St.<br/>
              Waipahu, HI 96897<br/><br/>
              Phone:<br/>
              808-677-5474<br/><br/>
              Hours:<br/>
              7:30 – 4:30 M–F
            </div>
          </div>
          <hr/>
          <div className="directions-body">
            <div className="directions">
              <h3 className="body-subheader">Directions</h3>
              <div className="directions-subheader">From the East:</div>
              Head west<br/><br/>
              <div className="directions-subheader">From the West:</div>
              Head east<br/><br/>
            </div>
            <div className="map"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;