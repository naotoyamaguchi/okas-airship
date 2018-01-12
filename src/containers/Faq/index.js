import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';

class Faq extends Component {

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

  render() {
    return (
      <div className="App">
        <div className="faq">
          {/*<a className="faq-question-link" href="#question-10">Question 10</a>*/}
          <div className="faq-header">
            <h1 className="faq-title">Frequently Asked Questions
            </h1>
          </div>
          <hr></hr>
          <div id="accordion" role="tablist">
            <div class="card">
              <div class="card-header" role="tab" id="headingOne">
                <h5 class="mb-0">
                  <a data-toggle="collapse" href="#collapseOne" role="button" aria-expanded="false" aria-controls="collapseOne">
                    If my vehicle's frame is damaged, is it a total loss?
                  </a>
                </h5>
              </div>
              <div id="collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
                <div class="card-body">
                  No. A car is a total loss only when the price of repairs exceeds the insurance company's determined value of your vehicle. Nowadays, most cars are built using unibody (frame and body as one) construction. Our highly skilled technicians, with the aid of our state-of the-art computer measuring system , can return your vehicle to its original factory specifications. If it is determined that the frame section is bent beyond repair, that section can simply be replaced.
                </div>
              </div>
            </div>
            <hr></hr>
            <div class="card">
              <div class="card-header" role="tab" id="headingTwo">
                <h5 class="mb-0">
                  <a class="collapsed" data-toggle="collapse" href="#collapseTwo" role="button" aria-expanded="false" aria-controls="collapseTwo">
                    How long will my repair take?
                  </a>
                </h5>
              </div>
              <div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">
                <div class="card-body">
                  No. A car is a total loss only when the price of repairs exceeds the insurance company's determined value of your vehicle. Nowadays, most cars are built using unibody (frame and body as one) construction. Our highly skilled technicians, with the aid of our state-of the-art computer measuring system , can return your vehicle to its original factory specifications. If it is determined that the frame section is bent beyond repair, that section can simply be replaced.
                </div>
              </div>
            </div>
            <hr></hr>
            <div class="card">
              <div class="card-header" role="tab" id="headingThree">
                <h5 class="mb-0">
                  <a class="collapsed" data-toggle="collapse" href="#collapseThree" role="button" aria-expanded="false" aria-controls="collapseThree">
                    What are the names of Santa's reindeers?
                  </a>
                </h5>
              </div>
              <div id="collapseThree" class="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
                <div class="card-body">
                  Dashuh Dansuh Pransuh Veexun Kahmet Kyoopid Donnah Bleetzun
                </div>
              </div>
            </div>
          </div>
        </div>        
      </div>
    );
  }
}

export default Faq;