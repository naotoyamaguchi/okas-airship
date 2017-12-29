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
        <div className="home-block" id="top">
          <div id="slides">
          Lorem ipsum dolor sit amet lorameskfjafjasf
          </div>
        </div>
        <div className="home-block" id="mid">
          <h1 className="home-welcome-header">
            Welcome to Oka's Auto Body
          </h1>
          <div className="site-description">
            At Oka's Auto Body, we know that you will drive home our reputation! Browse our offerings, request an estimate, or visit us in person. We promise to offer the best in workmanship and customer service.
          </div>
          <div id="insurance-info">
            Know Your Rights! Did you know you have the right to choose your provider for insurance claims?

            Find out more >
          </div>
          <hr/>
          <div id="certifications">
            WE ARE CERTIFIED
          </div>
        </div>
        <div className="home-block" id="bottom">
          <h1 id="in-the-news">
            Oka's in the News
          </h1>
          {/*<iframe width="560" height="315" src="https://www.youtube.com/embed/Mp00gO6fjJM" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>*/}
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