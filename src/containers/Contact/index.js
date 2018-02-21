import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, Redirect, Switch, Route } from 'react-router-dom';
import { browserHistory } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import ContactConfirmation from '../ContactConfirmation';
import './index.css';

class Contact extends Component {

  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
      form_name: "HelloWorldName",
      request_body: {
        "aerostat_collection_id": 582,
        "tags": [],
        "categories": [],
        "sorting_position": 1,
        "fields": [
          {
            "num_options":0,
            "title":"Name",
            "variable_name":"name",
            "type":"text",
            "options":[],
            "sorting_position":1,
            "value":"NameFromReact"
          },

          {
            "num_options":0,
            "title":"Email",
            "variable_name":"email",
            "type":"text",
            "options":[],
            "sorting_position":2,
            "value":"EmailFromReact"
          },

          {
            "num_options":0,
            "title":"Phone",
            "variable_name":"phone",
            "type":"text",
            "options":[],
            "sorting_position":3,
            "value":"PhoneFromReact"
          },

          {
            "num_options":2,
            "type":"select",
            "options":[
              "Phone",
              "Email"
            ],
            "title":"contactMethod",
            "variable_name":"contactmethod",
            "sorting_position":4,
            "value":"Email"
          },

          {
            "num_options":0,
            "title":"Message",
            "variable_name":"message",
            "type":"text",
            "options":[],
            "sorting_position":5,
            "value":"MessageFromReact"
          }
        ]
      }
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
  }

  handleNameChange(event) {
    let updated_obj = Object.assign({}, this.state.request_body);    //creating copy of object
    updated_obj.fields[0].value = event.target.value;                        //updating value
    this.setState({request_body: updated_obj});
  }

  handleEmailChange(event) {
    let updated_obj = Object.assign({}, this.state.request_body);    //creating copy of object
    updated_obj.fields[1].value = event.target.value;                        //updating value
    this.setState({request_body: updated_obj});
  }

  handlePhoneChange(event) {
    let updated_obj = Object.assign({}, this.state.request_body);    //creating copy of object
    updated_obj.fields[2].value = event.target.value;                        //updating value
    this.setState({request_body: updated_obj});
  }

  handleSelectChange(event) {
    let updated_obj = Object.assign({}, this.state.request_body);    //creating copy of object
    updated_obj.fields[3].value = event.target.value;                        //updating value
    this.setState({request_body: updated_obj});
  }

  handleMessageChange(event) {
    let updated_obj = Object.assign({}, this.state.request_body);    //creating copy of object
    updated_obj.fields[4].value = event.target.value;                        //updating value
    this.setState({request_body: updated_obj});
  }

  componentDidMount() {
    var elem = ReactDOM.findDOMNode(this);
    elem.style.opacity = 0;
    window.requestAnimationFrame(function() {
      elem.style.transition = "1s ease";
      elem.style.opacity = 1;
    });

    fetch("https://okas.airshipcms.io/api/aerostat_collection/contact-form")
      .then(res => res.json())
      .then(faqs => {
        console.log(faqs);
        faqs.map(item =>
          item.fields.map(
            field => (item[field.variable_name] = field.value)
            )
          );
        this.setState({faqs});
        // this.setState({  });
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

  sendEmail(){
    fetch('https://okas.airshipcms.io/api/aerostats', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.request_body)
    })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
      // console.log('Success:', response);
      this.props.history.push('/contactconfirmation');
    });
  }

  testFunc(){
    this.props.history.push('/contactconfirmation');
  }

  render() {
    const { redirect } = this.state;
    if (redirect) {
       return <Switch>
        <Redirect
          exact
          from="/contact"
          to="/contactconfirmation"
          key="from-contact"
        />
        <Route exact path="/contactconfirmation" component={ ContactConfirmation } />
      </Switch>;
     }
    return (
      <div className="App">
        <div className="contact">
          <div className="contact-header">
            <h1 className="header-title">
              {/*<Link to="/appointment">Make an Appointment!</Link>*/}
              Contact Us
            </h1>
          </div>
          <hr/>
          <div className="contact-body">
            <div className="contact-form">
              <h3 className="body-subheader">Send Us a Message</h3>
              Name:<br/>
              <input type="text" className="name" onChange={this.handleNameChange}/><br/><br/>
              Email:<br/>
              <input type="text" className="email" onChange={this.handleEmailChange}/><br/><br/>
              Phone:<br/>
              <input type="number" className="phone" onChange={this.handlePhoneChange}/><br/><br/>
              What is your preferred method of contact?<br/>
                <select className="select" onChange={this.handleSelectChange}>
                <option value="Email">Email</option>
                <option value="Phone">Phone</option>
                </select><br/><br/>
              Message:<br/>
              <textarea type="text" className="message" onChange={this.handleMessageChange}/><br/>
              <button className="submit" onClick={this.sendEmail.bind(this)}>Submit ›</button>
            </div>
            <hr className="mobile-hr"/>
            <div className="oka-contact-info">
              <h3 className="body-subheader">Contact Info</h3>
              Address:<br/>
              94-173 Leokane St.<br/>
              Waipahu, HI 96897<br/><br/>
              Phone:<br/>
              808-677-5474<br/><br/>
              Hours:<br/>
              7:30 – 4:30 M–F
            </div>
          </div>
          <hr/>
          <div className="directions-body">
            <div className="directions">
              <h3 className="body-subheader">Directions</h3>
              <div className="directions-subheader">From the East:</div>
              Take exit 5A when heading west on the H1 in Waipahu. Head south down Fort Weaver Rd then head left onto Farrington Hwy. Turn right on the corner of Cutter Mazda and we will be on your left.<br/><br/>
              <div className="directions-subheader">From the West:</div>
              Take exit 5 when heading east on the H1 in Waipahu. Head south down Fort Weaver Rd then turn left onto Farrignton Hwy. Turn right on the corner of Cutter Mazda and we will be on your left.<br/><br/>
            </div>
            <div className="map">
              <iframe src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyCT-RHGbYihItuDN5FtrxjCpHZ7SwgIMN4&origin=current%20location&&destination=Oka&#39;s+Auto+Body" allowfullscreen/>

              {/*<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3715.2871027163424!2d-158.02055818506153!3d21.378597185809898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c00643eb1f1304d%3A0x174f12cca4587be0!2sOka&#39;s+Auto+Body!5e0!3m2!1sen!2sus!4v1516962159172" width="450" height="300" allowfullscreen/>*/}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;