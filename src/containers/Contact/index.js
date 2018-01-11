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
      <div className="contact">
        <div className="contact-header">
          <h1 className="contact-title">
            {/*<Link to="/appointment">Make an Appointment!</Link>*/}
            Contact Us
          </h1>
        </div>
        <hr/>
        <div className="contact-body">
          <div className="contact-form">
            <h3 className="body-subheader">Send Us a Message</h3>
            Name:<br/>
            <input type="text" name="name"/><br/>
            Email:<br/>
            <input type="text" name="email"/><br/>
            Phone:<br/>
            <input type="text" name="phone"/><br/>
            What is your preferred method of contact?<br/>
            <input type="radio" name="contact-pref"/> Email<br/>
            <input type="radio" name="contact-pref"/> Phone<br/>
            Message:<br/>
            <input type="text" name="message"/><br/>
            <button className="submit">Submit ›</button>
          </div>
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
        <div className="directions">
          <h3 className="body-subheader">Directions</h3>
          <div className="directions-subheader">From the East:</div>
          Head west<br/><br/>
          <div className="directions-subheader">From the West:</div>
          Head east
        </div>
        <div className="bumper"/>
      </div>
    );
  }
}

export default Contact;