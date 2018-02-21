import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="navbar-brand" href="#">
          <Link to="/">
            <img src={require("../../assets/OkasLOGO.png")} className="d-block align-top" alt="" />
          </Link>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <Link to="/">
              <li className="nav-item">
                <div className="nav-link">
                  <span className="nav-anchor">Home</span>
                  <span className="sr-only">
                    (current)
                  </span>
                </div>
              </li>
            </Link>
            <Link to="/contact">
              <li className="nav-item">
                <div className="nav-link">
                  <span className="nav-anchor">Contact</span>
                </div>
              </li>
            </Link>
            <Link to="/services">
              <li className="nav-item">
                <div className="nav-link">
                  <span className="nav-anchor">Services</span>
                </div>
              </li>
            </Link>
            <Link to="/faq">
              <li className="nav-item">
                <div className="nav-link">
                  <span className="nav-anchor">FAQ</span>
                </div>
              </li>
            </Link>
            <Link to="/estimates">
              <li className="nav-item">
                <div className="nav-link">
                  <span className="nav-anchor">Estimates</span>
                </div>
              </li>
            </Link>
            <Link to="/gallery">
              <li className="nav-item">
                <div className="nav-link">
                  <span className="nav-anchor">Gallery</span>
                </div>
              </li>
            </Link>
          </ul>
        </div>
        <div className="header-info">
          <div className="header-info-line">
            94-173 Leokane St, Waipahu, HI 96796
          </div>
          <div className="header-info-line">
            <span className="info-span1">808-677-5474</span>
            <span clssName="info-separator">•</span>
            <span className="info-span2">Hours: 7:30-4:30 M-F</span>
          </div>
        </div>

      </nav>
    );
  }
}

export default Nav;

// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import Github from "../../components/Github";
// import NavToggle from "../../components/NavToggle";

// class Nav extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       navOpen: false
//     };
//   }

//   toggleNav() {
//     this.setState({
//       navOpen: !this.state.navOpen
//     });
//   }

//   render() {
//     return (
//       <nav className="nav">
//         <div className="container">
//           <Link className="nav-title title is-tab" to="/">
//             React + Airship CMS
//           </Link>
//           <div
//             className={
//               this.state.navOpen
//                 ? "nav-right nav-menu is-active"
//                 : "nav-right nav-menu"
//             }
//             id="nav-menu"
//           >
//             <Link className="nav-item" to="/">
//               Setup
//             </Link>
//             <Link className="nav-item" to="/styling">
//               Styling
//             </Link>
//             <Link className="nav-item active" to="/airship-schema">
//               Airship Schema
//             </Link>
//             <Link className="nav-item" to="/react-tutorial">
//               React Tutorial
//             </Link>
//             <Link className="nav-item" to="/elements">
//               Elements
//             </Link>
//           </div>
//           <Github />
//           <NavToggle
//             className={
//               this.state.navOpen ? "is-active nav-toggle" : "nav-toggle"
//             }
//             toggleNav={this.toggleNav.bind(this)}
//           />
//         </div>
//       </nav>
//     );
//   }
// }

// export default Nav;