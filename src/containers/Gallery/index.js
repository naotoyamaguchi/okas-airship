import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';

class Gallery extends Component {
  constructor(props){
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    var elem = ReactDOM.findDOMNode(this);
    elem.style.opacity = 0;
    window.requestAnimationFrame(function() {
      elem.style.transition = "1s ease";
      elem.style.opacity = 1;
    });

    fetch("https://okas.airshipcms.io/api/aerostat_collection/gallery")
      .then(res => res.json())
      .then(posts => {
        console.log(posts);
        posts.map(item =>
          item.fields.map(
            field => (item[field.variable_name] = field.value)
            )
          );
        this.setState({posts});
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

    var galleryPost = this.state.posts.map(function(post, index){
      return <div className="social-media-post social-media-has-image" key={index}>
              <div className="social-media-post-inner">
                <div className="social-media-image" style={{backgroundImage: "url(" + post.image[0].secure_url + ")"}}>
                  <img src={post.image[0].secure_url} alt={post.caption}/>
                </div>
              </div>
            </div>;
    })

    return (
      <div className="App">
        <div className="inner-app">
          <div className="estimates-header">
            <h1 className="page-title">
              Fun Pictures!
            </h1>
            <hr/>
          </div>
          
          <div className='content social-media-content'>
            <div className="social-media-posts">

              {galleryPost}

               {/* <div className="social-media-post social-media-has-image">
                  <div className="social-media-post-inner">
                    <div className="social-media-image-2">
                      <img src={require("../../assets/420.JPG")} alt="gallery-image"/>
                    </div>
                  </div>
                </div>

                <div className="social-media-post social-media-has-image">
                  <div className="social-media-post-inner">
                    <div className="social-media-image-2">
                      <img src={require("../../assets/420.JPG")} alt="gallery-image"/>
                    </div>
                  </div>
                </div>

                <div className="social-media-post social-media-has-image">
                  <div className="social-media-post-inner">
                    <div className="social-media-image">
                      <img src={require("../../assets/420.JPG")} alt="gallery-image"/>
                    </div>
                  </div>
                </div>

                <div className="social-media-post social-media-has-image">
                  <div className="social-media-post-inner">
                    <div className="social-media-image">
                      <img src={require("../../assets/420.JPG")} alt="gallery-image"/>
                    </div>
                  </div>
                </div>*/}

            </div>
          </div>

        </div>
        <div className="bumper"/>
      </div>     
    );
  }
}

export default Gallery;