import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';

class Faq extends Component {
  constructor(props) {
    super(props);

    this.state = {
      faqs: []
    };
  }

  componentDidMount() {
    var elem = ReactDOM.findDOMNode(this);
    elem.style.opacity = 0;
    window.requestAnimationFrame(function() {
      elem.style.transition = "1s ease";
      elem.style.opacity = 1;
    });


    fetch("https://okas.airshipcms.io/api/aerostat_collection/faq")
      .then(res => res.json())
      .then(faqs => {
        // console.log(faqs);
        faqs.map(item =>
          item.fields.map(
            field => (item[field.variable_name] = field.value)
            )
          );
        this.setState({faqs});
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
    console.log(this.state);
    var accordianCard = this.state.faqs.map(function(faq, index){
      return <div className="card" key={index}>
        <div className="card-header" role="tab" id="headingOne">
          <h5 className="mb-0">
            <a data-toggle="collapse" href={"#"+faq.id} role="button" aria-expanded="true" aria-controls={faq.id}>
              {faq.question}
            </a>
          </h5>
        </div>

        <div id={faq.id} className="collapse" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
          <div className="card-body">
            {faq.answer}
          </div>
        </div>
      </div>;
    })
    return (
      <div className="App">
        <div className="faq">
          <div className="faq-header">
            <h1 className="header-title">Frequently Asked Questions
            </h1>
          </div>
          <hr/>
          <div id="accordion" role="tablist">
            {accordianCard}
          </div>
        </div>
        <div className="bumper"/>        
      </div>
    );
  }
}

export default Faq;