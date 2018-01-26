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
            <hr className="mobile-hr"/>
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
            <div className="map">
              <iframe src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyCT-RHGbYihItuDN5FtrxjCpHZ7SwgIMN4&origin=current%20location&&destination=Oka&#39;s+Auto+Body" width="450" height="250" allowfullscreen/>

              {/*<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3715.2871027163424!2d-158.02055818506153!3d21.378597185809898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c00643eb1f1304d%3A0x174f12cca4587be0!2sOka&#39;s+Auto+Body!5e0!3m2!1sen!2sus!4v1516962159172" width="450" height="300" allowfullscreen/>*/}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;