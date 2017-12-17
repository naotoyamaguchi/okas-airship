import React, { Component } from "react";
import "./index.css";

class Element extends Component {
  constructor(props) {
    super(props);

    this.state = {
      element: {
        sorting_position: 0,
        name: "",
        image: {}
      }
    };
  }

  componentDidMount() {
    fetch("/api/aerostats/" + this.props.match.params.id)
      .then(res => res.json())
      .then(element => {
        element.fields.map(field => {
          return element[field.variable_name] = field.value[0];
        });
        this.setState({ element });
      });
  }

  render() {
    return (
      <div className="element columns">
        <div className="coulmn is-one-quarter">
          <figure className="image element-detail-image">
            <img
              src={this.state.element.image.url}
              alt={this.state.element.image.file_name}
            />
          </figure>
        </div>
        <div className="element-details content column auto">
          <h1>
            {this.state.element.name}
          </h1>
          <h4>
            #{this.state.element.sorting_position}
          </h4>
          <p>
            {this.state.element.description}
          </p>
        </div>
      </div>
    );
  }
}

export default Element;
