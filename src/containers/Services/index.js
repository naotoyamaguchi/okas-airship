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
          <h1 className="header-title">Services</h1>
          <hr/>
        </div>
        <div className="services-row">
          <div className="left-service-column">
            <h2 className="service-name">Body Shop</h2>
            <div className="service-description">
              <p>The proper repair of collision damage is critical to the safety and performance of your vehicle. Each vehicle is repaired to factory specifications in our state-of-the-art collision repair facility.
              </p>
              <p>Our highly skilled I-Car and ASE certified technicians use only the highest quality equipment, parts, and materials.
              </p>
              <p>We use the Car-O-Liner, Autorobot, and Body-Loc frame rack systems. This system is capable of multiple pulls, this is critical in returning your vehicle to it's original factory specifications. Certified technicians restore the integrity of the frame or unibody to manufacturer's specifications.
              </p>
              <p>Sometimes mechanical components have been damaged or need to be removed to gain access to other damaged areas of your vehicle. We have all the necessary equipment to handle these mechanical repairs.
              </p>
              <p>Sometimes mechanical components have been damaged or need to be removed to gain access to other damaged areas of your vehicle. We have all the necessary equipment to handle these mechanical repairs.
              </p>
            </div>
            <div className="service-image-row">
              <img className="service-certificate-icar" src={require("../../assets/Icar_Cert.png")} alt="service"/>
              <img className="service-certificate-ase" src={require("../../assets/ASE_Cert.png")} alt="service"/>
            </div>
          </div>
          <div className="right-service-column">
            <img className="service-image" src={require("../../assets/bodyshop1.jpg")} alt="service"/>
            <br></br>
            <img className="service-image" src={require("../../assets/bodyshop2.jpg")} alt="service"/>
          </div>

        </div>

        <div className="hr"><hr/></div>

        <div className="services-row">
          <div className="left-service-column">
            <h2 className="service-name">Paint Shop</h2>
            <div className="service-description">
              <p>When it comes to automobiles, you can judge a car by its cover! Customers don't want to be reminded that their car has been in an accident. That's why we use state-of-the-art painting systems. Today's modern factory finishes incorporate multiple layers of highly specialized paints. We have made a major investment in the Sikkens paint system and constantly upgrade our technology and equipment to ensure that each vehicle's finish matches.</p>
              <p>In one of our paint prep areas, your vehicle is prepared for paint by sanding and applying primer and sealer. After your vehicle is done in the spray booth, it is sent back to this area to cool down before being sent back to the body shop for reassembly.</p>
              <p>After painting and applying clear coat, your vehicle is baked to give the paint durability and a high gloss that will last the life of your vehicle. Your vehicle's paint is then inspected and buffed to meet our quality standard.</p>
            </div>
            <div className="service-image-row">
              <img className="service-certificate-icar" src={require("../../assets/sikkens.png")} alt="service"/>
            </div>
          </div>

          <div className="right-service-column">
            <img className="service-image" src={require("../../assets/service-image.jpg")} alt="service"/>
            <br></br>
            <img className="service-image" src={require("../../assets/paintshop2.jpg")} alt="service"/>
          </div>
        </div>
        <div className="bumper"/>
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