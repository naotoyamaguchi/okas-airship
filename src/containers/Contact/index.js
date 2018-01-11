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
            Name
            <br/>
            Email
            <br/>
            Phone
            <br/>
            Do you prefer being contacted by email or phone?
            <br/>
            Message          
          </div>
          <div className="oka-contact-info">
            <h3 className="body-subheader">Contact Info</h3>
            Address:
            <br/>
            94-173 Leokane St.
            <br/>
            Waipahu, HI 96897
            <br/>
            <br/>
            Phone:
            <br/>
            808-677-5474
            <br/>
            <br/>
            Hours:
            <br/>
            7:30 – 4:30 M–F
          </div>
        </div>
        <hr/>
        <div class="directions">
          <h3 className="body-subheader">Directions</h3>
          From the east:
          <br/>
          blah blah blah
          <br/>
          blah blah blah
          <br/>
          <br/>
          From the west:
          <br/>
          blah blah blah
          <br/>
          blah blah blah
        </div>
      </div>
    );
  }
}

export default Contact;