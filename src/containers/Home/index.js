import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import './index.css';

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      elements: [],
      page: []
    };
  }

  componentDidMount() {
    var elem = ReactDOM.findDOMNode(this);
    elem.style.opacity = 0;
    window.requestAnimationFrame(function() {
      elem.style.transition = "1s ease";
      elem.style.opacity = 1;
    });

    fetch("https://okas.airshipcms.io/api/pages/__root__")
      .then(res => res.json())
      .then(page => {
        page.fields.map(field => (page[field.variable_name] = field.value));
      this.setState( { page } );
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
        <div id="carouselControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={require("../../assets/group-cropped.jpg")} alt="First slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={require("../../assets/red.jpg")} alt="Second slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={require("../../assets/white.jpg")} alt="Third slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={require("../../assets/blue.jpg")} alt="Second slide"/>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>

      <div className="home-top">
          <div className="top-text">
             <div className="top-header">
             Welcome to Oka's Auto Body
             </div>
             <div className="top-description">
               At Oka's Auto Body, we know that you will drive home our reputation!
               <br/>
               Browse our offerings, request an estimate, or visit us in person. We promise to offer the best in workmanship and customer service.
             </div>
          </div>
          
          <div className="top-insurance">
            <div className="insurance-image">
              <img src={require("../../assets/open-book.jpg")}/>
            </div>
            <div className="insurance-text">
              <div className="insurance-header">Know Your Rights!</div>
              <div className="insurance-description">Did you know you have the right to choose your provider for insurance claims?</div>
            </div>
            <a href="/insurance" className="insurance-button">Find Out More ›</a>
          </div>
          
      </div>

      <hr/>

      <div className="home-certifications">
          <span className="certification-header">WE ARE CERTIFIED</span>
          <div className="certification-bar">
            <img className="certification-image" src={require("../../assets/ACoat_Cert.jpg")}/>
            <img className="certification-image" src={require("../../assets/Icar_Cert.png")}/>
            <img className="certification-image" src={require("../../assets/ASE_Cert.png")}/>
          </div>
      </div>

      <div className="home-bottom">
        <h2 className="bottom-header">Oka's In The News</h2>
          <div className="bottom-media">
            <div className="primary-media">
              <div className="video-wrapper">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Mp00gO6fjJM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
              </div>
            </div>
            <div className="secondary-media-column">
              <div className="secondary-media" id="media1">
                <div className="video-wrapper">
                  <iframe src="https://www.youtube.com/embed/vN8A9MiALg4" allow="autoplay; encrypted-media" allowfullscreen className="media1-youtube"></iframe>
                </div>
              </div>
              <div className="secondary-media" id="media2">
                <div className="video-wrapper">
                  <iframe src="https://www.youtube.com/embed/vN8A9MiALg4" allow="autoplay; encrypted-media" allowfullscreen className="media2-youtube"></iframe>
                </div>
              </div>
            </div>
          </div>
      </div>

      {/*<div className="bumper"/>*/}

       <div
         className="body"
         dangerouslySetInnerHTML={{
           __html: this.state.page.body
         }}
       />
     </div>
   );
 }

}

export default Home;