import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import Home from "./containers/Home";
import Contact from "./containers/Contact";
import Faq from "./containers/Faq";
import Estimates from "./containers/Estimates";
import Services from './containers/Services';
import Appointment from './containers/Appointment';
import ContactConfirmation from './containers/ContactConfirmation';
import Insurance from './containers/Insurance';
import "./index.css";
import "./borders.css";
import { BrowserRouter, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    
    <App>
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/faq" component={Faq} />
      <Route exact path="/estimates" component={Estimates} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/appointment" component={Appointment} />
      <Route exact path="/contactconfirmation" component={ContactConfirmation} />
      <Route exact path="/insurance" component={Insurance} />
    </App>
    
  </BrowserRouter>,
  document.getElementById("root")
);
