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
        <div className="hr"><hr/></div>
        <div className="contact-body">
          <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum alias dolore illo dolorum eum, enim perspiciatis doloribus est recusandae quo quibusdam consequatur hic, quos animi praesentium ipsum rem cumque. Maiores?</span>
          <span>Atque adipisci pariatur magni, eligendi, eaque in asperiores eius laboriosam iure ipsa nostrum obcaecati autem placeat blanditiis dicta! Ab non harum rem dolor ipsum et necessitatibus! Repudiandae, dolores maiores explicabo!</span>
          <span>Suscipit illo ratione blanditiis in odio cupiditate repudiandae maxime nostrum tempore eaque odit delectus, sunt nobis, ipsa beatae asperiores unde labore natus praesentium maiores vitae at exercitationem consequuntur deserunt! Omnis!</span></p>
        </div>
      </div>
    );
  }
}

export default Contact;