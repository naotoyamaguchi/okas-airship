import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
// import Setup from "./containers/Setup";
// import Styling from "./containers/Styling";
// import AirshipSchema from "./containers/AirshipSchema";
// import ReactTutorial from "./containers/ReactTutorial";
// import Elements from "./containers/Elements";
// import Element from "./containers/Element";
import Home from "./containers/Home";
import Contact from "./containers/Contact";
import Faq from "./containers/Faq";
import Estimates from "./containers/Estimates";
import Nav from "./containers/Nav";
import Footer from "./containers/Footer";
import Services from './containers/Services';
import "./index.css";
import { BrowserRouter, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    
    <App>
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/faq" component={Faq} />
      <Route exact path="/estimates" component={Estimates} />
      <Route exact path="/services" component={Services} />
    </App>
    
  </BrowserRouter>,
  document.getElementById("root")
);
