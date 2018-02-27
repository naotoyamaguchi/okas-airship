import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Redirect, Switch, Route } from 'react-router-dom';
// import { browserHistory } from 'react-router';
// import createHistory from 'history/createBrowserHistory';
import ContactConfirmation from '../ContactConfirmation';
import './index.css';

class Contact extends Component {

  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
      form_name: "Email Message",
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
            "value":""
          },

          {
            "num_options":0,
            "title":"Email",
            "variable_name":"email",
            "type":"text",
            "options":[],
            "sorting_position":2,
            "value":""
          },

          {
            "num_options":0,
            "title":"Phone",
            "variable_name":"phone",
            "type":"text",
            "options":[],
            "sorting_position":3,
            "value":""
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
            "value":""
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
    if(this.validation2() === false){
      return;
    }
    
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

  checkIfEmailInString(text) { 
      var re = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
      return re.test(text);
  }

  validation2(){
    var nametext = document.getElementsByClassName("name-error");
    var emailtext = document.getElementsByClassName("email-error");
    var phonetext = document.getElementsByClassName("phone-error");
    var contacttext = document.getElementsByClassName("contactmessage-error");

    var passed = true;

    if(this.state.request_body.fields[0].value === ""){    
      nametext[0].style.display = "block";
      passed = false;
    } else {
      nametext[0].style.display = "none";
    }

    if(this.checkIfEmailInString(this.state.request_body.fields[1].value) === false){
      emailtext[0].style.display = "block";
      passed = false;
    } else {
      emailtext[0].style.display = "none";
    }

    if(this.state.request_body.fields[2].value === ""){
      phonetext[0].style.display = "block";
      passed = false;
    } else {
      phonetext[0].style.display = "none";
    }

    if(this.state.request_body.fields[4].value === ""){
      contacttext[0].style.display = "block";
      passed = false;
    } else {
      contacttext[0].style.display = "none";
    }

    return passed;
  }

  // validation(){
  //   if (this.state.request_body.fields[0].value === "" || this.state.request_body.fields[1].value === "" || this.state.request_body.fields[2].value === "" || this.state.request_body.fields[3].value === "" || this.state.request_body.fields[4].value === "") {
  //     alert("Please fill out all fields");
  //   } else {
  //     alert("ok!");
  //   }
  // }

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
              Contact Us
            </h1>
          </div>
          <hr/>
          <div className="contact-body">
            <div className="contact-form">
              <h3 className="body-subheader">Send Us a Message</h3>
              <p>Name:</p>
              <p className="name-error input-error">Please enter a name</p>
              <input type="text" className="name" onChange={this.handleNameChange}/>
              
              
              <p>Email:</p>
              <p className="email-error input-error">Please enter a valid email</p>
              <input type="text" className="email" onChange={this.handleEmailChange}/>
              
              
              <p>Phone:</p>
              <p className="phone-error input-error">Please enter a phone number</p>
              <input type="number" className="phone" onChange={this.handlePhoneChange}/>
              
              
              <p>What is your preferred method of contact?</p>
                <select className="select" onChange={this.handleSelectChange}>
                <option value="Email">Email</option>
                <option value="Phone">Phone</option>
                </select>
              
              <p>Message:</p>
              <p className="contactmessage-error input-error">Please fill out a message</p>
              <textarea type="text" className="message" onChange={this.handleMessageChange}/>
              <br/>
              
              <button className="submit" onClick={this.sendEmail.bind(this)}>Submit ›</button>
              {/*<button disabled={!isEnabled} className="submit" onClick={this.sendEmail.bind(this)}>Submit ›</button>*/}
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
              <iframe src="https://www.google.com/maps/embed/v1/directions?key=AIzaSyCT-RHGbYihItuDN5FtrxjCpHZ7SwgIMN4&origin=current%20location&&destination=Oka&#39;s+Auto+Body" allowFullScreen/>

              {/*<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3715.2871027163424!2d-158.02055818506153!3d21.378597185809898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c00643eb1f1304d%3A0x174f12cca4587be0!2sOka&#39;s+Auto+Body!5e0!3m2!1sen!2sus!4v1516962159172" width="450" height="300" allowfullscreen/>*/}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;