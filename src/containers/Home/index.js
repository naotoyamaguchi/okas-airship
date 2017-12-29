import React, { Component } from "react";
import ReactDOM from 'react-dom'; 
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
              <img className="d-block w-100" src="https://static.pexels.com/photos/170811/pexels-photo-170811.jpeg" alt="First slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_1280.jpg" alt="Second slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="https://auto.ndtvimg.com/car-images/big/audi/a3-cabriolet/audi-a3-cabriolet.jpg?v=17" alt="Third slide"/>
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
             <h1 className="top-header">
             Welcome to Oka's Auto Body
             </h1>
             <div className="top-description">
               At Oka's Auto Body, we know that you will drive home our reputation! Browse our offerings, request an estimate, or visit us in person. We promise to offer the best in workmanship and customer service.
             </div>
          </div>
          
          <div className="top-insurance">

            <img className="insurance-image" src="https://www.wpclipart.com/education/books/books_4/open_book_BW.png"/>
            
            <div className="insurance-text">
               <h2 className="insurance-header">Know Your Rights!</h2>
               <div className="insurance-description">
                  Did you know you have the right to choose your provider for insurance claims?
               </div>
            </div>

            <div className="insurance-button">
               Find Out More >
            </div>
          </div>
          
      </div>

      <hr/>

      <div className="home-certifications">
          <h1>Certifications goes here</h1>
      </div>

      <div className="home-bottom">
          <h1>Media goes here</h1>
      </div>


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