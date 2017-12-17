import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import Setup from "./containers/Setup";
import Styling from "./containers/Styling";
import AirshipSchema from "./containers/AirshipSchema";
import ReactTutorial from "./containers/ReactTutorial";
import Elements from "./containers/Elements";
import Element from "./containers/Element";
import Home from "./containers/Home";
import Contact from "./containers/Contact";
import Faq from "./containers/Faq";
import Community from "./containers/Community";
import Nav from "./containers/Nav";
import Footer from "./containers/Footer";
import "./index.css";
import { BrowserRouter, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    
    <App>
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/faq" component={Faq} />
      <Route exact path="/community" component={Community} />
{/*      <Route path="/styling" component={Styling} />
      <Route path="/airship-schema" component={AirshipSchema} />
      <Route path="/react-tutorial" component={ReactTutorial} />
      <Route path="/elements" component={Elements} />
      <Route path="/element/:id" component={Element} />*/}
    </App>
    
  </BrowserRouter>,
  document.getElementById("root")
);
