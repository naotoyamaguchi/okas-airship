import React, { Component } from "react";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Nav from "../Nav";
import Footer from "../Footer";
import "./index.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: null
    };
  }



  render() {

    const currentKey = Math.floor(Math.random()*100);
    const timeout = { enter: 500, exit: 500 };

    return (
      <div className="root-container">
        <Nav />
          <TransitionGroup component="main" className="page-main">
            <CSSTransition key={currentKey} timeout={timeout} classNames="fade" appear>
              <section className="page-main-inner">
                <div className="container content">
                  {this.props.children}
                </div>
              </section>
            </CSSTransition>
          </TransitionGroup>
        <Footer />
      </div>
    );
  }
}

export default App;
