import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';

class Gallery extends Component {

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
        <div className="inner-app">
          <div className="estimates-header">
            <h1 className="page-title">
              Fun Pictures!
            </h1>
            <hr/>
          </div>
          
          <div className='content social-media-content'>
            <div className="social-media-posts">

                <div className="social-media-post social-media-has-image">
                  <div className="social-media-post-inner">
                    <div className="social-media-image-2">
                      <img src="" alt="gallery-image"/>
                    </div>
                  </div>
                </div>

                <div className="social-media-post social-media-has-image">
                  <div className="social-media-post-inner">
                    <div className="social-media-image-2">
                      <img src="" alt="gallery-image"/>
                    </div>
                  </div>
                </div>

                <div className="social-media-post social-media-has-image">
                  <div className="social-media-post-inner">
                    <div className="social-media-image">
                      <img src="" alt="gallery-image"/>
                    </div>
                  </div>
                </div>

                <div className="social-media-post social-media-has-image">
                  <div className="social-media-post-inner">
                    <div className="social-media-image">
                      <img src="" alt="gallery-image"/>
                    </div>
                  </div>
                </div>

            </div>
          </div>

        </div>
        <div className="bumper"/>
      </div>     
    );
  }
}

export default Gallery;