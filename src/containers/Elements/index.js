import React, { Component } from "react";
import { Link } from "react-router-dom";
import './index.css';

class Elements extends Component {
  constructor(props) {
    super(props);

    this.state = {
      elements: []
    };
  }
  componentDidMount() {
    fetch("/api/aerostat_collection/elements")
      .then(res => res.json())
      .then(elements => {
        elements.map(element =>
          element.fields.map(
            field => (element[field.variable_name] = field.value)
          )
        );
        this.setState({ elements });
      });
  }

  render() {
    return (
      <div className="container elements-container">
        <h2 className="has-text-centered elements-header">
          This is a demo rendering all the items of the Elements collection with
          React
        </h2>
        <div className="columns">
          {this.state.elements.map(element =>
            <div className="column is-3 element" key={element.id}>
              <Link to={"/element/" + element.id.toString()}>
                <div className="card">
                  <div className="card-image">
                    <figure className="image">
                      <img
                        src={element.image[0].thumbnail_url}
                        alt={element.image[0].file_name}
                      />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media-content">
                      <p className="title is-4">
                        {element.name}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Elements;
