import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import Home from "./containers/Home";
import Contact from "./containers/Contact";
import Faq from "./containers/Faq";
import Estimates from "./containers/Estimates";
import Services from './containers/Services';
import Appointment from './containers/Appointment';
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
      <Route exact path="/appointment" component={Appointment} />
    </App>
    
  </BrowserRouter>,
  document.getElementById("root")
);
