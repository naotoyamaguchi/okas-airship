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
            <h1 className="estimates-title">
              Estimates
            </h1>
          </div>
          <div className="hr"><hr/></div>
          <div className="estimates-body">
            <h1>Need a Quote?</h1>
            <p>If you're unsure of where to start, contact us for an appointment and we can arrange a free quote for whatever repair you need! Either message us for questions, or set up an appointment using our appointment system <Link to="/appointment">here</Link>. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitor, elit at sagittis laoreet, urna risus dapibus nisl, et vehicula mauris dolor non felis. Phasellus quam lectus, auctor at nisi id, aliquam convallis mauris. Donec quis mauris nisl. Mauris a tempus eros. Sed vel maximus purus. Praesent tempus odio a diam posuere, nec ultricies elit mattis. Nullam vitae leo sed quam finibus mattis ac mattis nisl. Donec sit amet magna libero. Sed non semper ipsum, at porta nisl. Aenean rutrum et nibh nec condimentum. Nam ligula nibh, mattis in nulla luctus, cursus pellentesque magna. In a est quis purus euismod egestas nec eget dui.</p>
          </div>
        </div>
      </div>     
    );
  }
}

export default Estimates;