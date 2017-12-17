import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

class Community extends Component {

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
      <div className="App" style={{background: "lime"}}>
        <div className="community">
          <h1>Oka's in the community..</h1>
            <h1>2017 Community</h1>
            <p>Oka's in the community this year Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla eveniet placeat esse! Dolorem nemo tempora eos maxime explicabo assumenda voluptas necessitatibus omnis, odit, inventore dignissimos veniam perferendis incidunt, alias quidem!</p>
            <h1>2016 Community</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero vitae, maiores beatae. Est voluptates cum adipisci magni vel vitae totam quas odio ut, commodi, quia illo eligendi quibusdam, optio. Unde.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis neque explicabo vitae quisquam corporis fugit nam, velit ex, placeat minima porro saepe impedit commodi magnam! Unde amet at totam sequi.</p>
            <h1>2015 Community</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum quisquam beatae eos. Porro explicabo asperiores deleniti placeat illo similique itaque, reiciendis dolores illum perferendis maiores mollitia eaque ut est labore.</p>
            <p>Oka's in the community this year Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla eveniet placeat esse! Dolorem nemo tempora eos maxime explicabo assumenda voluptas necessitatibus omnis, odit, inventore dignissimos veniam perferendis incidunt, alias quidem!</p>
            <p>Oka's in the community this year Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla eveniet placeat esse! Dolorem nemo tempora eos maxime explicabo assumenda voluptas necessitatibus omnis, odit, inventore dignissimos veniam perferendis incidunt, alias quidem!</p>
        </div>

        
      </div>
    );
  }
}

export default Community;