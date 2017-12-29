import React, { Component } from "react";
import ReactDOM from 'react-dom'; 
import './index.css';

class Services extends Component {

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
        <div className="services-header">
          <h1 className="services-title">Services</h1>
        </div>

        <hr/>
        {/*****************************************/}
        {/*BORDERS BORDERS BORDERS BORDERS BORDERS*/}
        {/*BORDERS BORDERS BORDERS BORDERS BORDERS*/}
        {/*BORDERS BORDERS BORDERS BORDERS BORDERS*/}
        {/*BORDERS BORDERS BORDERS BORDERS BORDERS*/}
        {/*BORDERS BORDERS BORDERS BORDERS BORDERS*/}
        {/*BORDERS BORDERS BORDERS BORDERS BORDERS*/}
        {/*BORDERS BORDERS BORDERS BORDERS BORDERS*/}
        {/*BORDERS BORDERS BORDERS BORDERS BORDERS*/}
        {/*BORDERS BORDERS BORDERS BORDERS BORDERS*/}
        {/*BORDERS BORDERS BORDERS BORDERS BORDERS*/}
        {/*BORDERS BORDERS BORDERS BORDERS BORDERS*/}
        {/*****************************************/}



        {/*service row is the big div for each service*/}
        <div className="services-row">

          {/*left-service-column is what you need to image the left side of this row is with the name of the service, text, and that little ROW of certs at the bottom*/}
          <div className="left-service-column">

            {/*self-explanatory service name*/}
            <h2 className="service-name">Service Name</h2>
            {/*self-explanatory again*/}
            <p className="service-description">
              The proper repair of collision damage is critical to the safety and performance of your vehicle. Each vehicle is repaired to factory specifications in our state-of-the-art collision repair facility. Our highly skilled I-Car and ASE certified technicians use only the highest quality equipment, parts, and materials. We use the Car-O-Liner, Autorobot, and Body-Loc frame rack systems. This system is capable of multiple pulls, this is critical in returning your vehicle to it's original factory specifications. Certified technicians restore the integrity of the frame or unibody to manufacturer's specifications. Sometimes mechanical components have been damaged or need to be removed to gain access to other damaged areas of your vehicle. We have all the necessary equipment to handle these mechanical repairs. Sometimes mechanical components have been damaged or need to be removed to gain access to other damaged areas of your vehicle. We have all the necessary equipment to handle these mechanical repairs.
            </p>
          {/*now this is a row of little images / certs at the bottom of this div*/}
            <div className="service-image-row">
              {/*and a row comes with multiple images*/}
              <img className="service-certificate-image" src={require("../../assets/ASE_Cert.png")}/>
              <img className="service-certificate-image" src={require("../../assets/ASE_Cert.png")}/>
            </div>
          </div>

          {/*we exit the left-column div and this is the right column.. all it really has is two images lined up top-down.. flexbox column: see Home CSS*/}
          <div className="right-service-column">
            {/*and now we have two flex image children who can line up top down in a column*/}
            <img className="service-image" src={require("../../assets/service-image.jpg")}/>
            <img className="service-image" src={require("../../assets/service-image.jpg")}/>
          </div>

        </div>

        {/*do it once, and this one should be complete too*/}
        {/*aim for mobile too with this page, and always be checking that you're not completely breaking mobile / responsiveness of other pages plz*/}

        <div className="services-row">

          <div className="left-service-column">
            <h2 className="service-name">Service Name</h2>
            <p className="service-description">
              The proper repair of collision damage is critical to the safety and performance of your vehicle. Each vehicle is repaired to factory specifications in our state-of-the-art collision repair facility. Our highly skilled I-Car and ASE certified technicians use only the highest quality equipment, parts, and materials. We use the Car-O-Liner, Autorobot, and Body-Loc frame rack systems. This system is capable of multiple pulls, this is critical in returning your vehicle to it's original factory specifications. Certified technicians restore the integrity of the frame or unibody to manufacturer's specifications. Sometimes mechanical components have been damaged or need to be removed to gain access to other damaged areas of your vehicle. We have all the necessary equipment to handle these mechanical repairs. Sometimes mechanical components have been damaged or need to be removed to gain access to other damaged areas of your vehicle. We have all the necessary equipment to handle these mechanical repairs.
            </p>
            <div className="service-image-row">
              <img className="service-certificate-image" src={require("../../assets/ASE_Cert.png")}/>
              <img className="service-certificate-image" src={require("../../assets/ASE_Cert.png")}/>
            </div>
          </div>

          <div className="right-service-column">
            <img className="service-image" src={require("../../assets/service-image.jpg")}/>
            <img className="service-image" src={require("../../assets/service-image.jpg")}/>
          </div>

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

export default Services;