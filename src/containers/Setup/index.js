import React, { Component } from "react";
import './index.css';

class Setup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: {
        body: "",
        description: "",
        name: ""
      }
    };
  }
  componentDidMount() {
    fetch("/api/pages/__root__").then(res => res.json()).then(page => {
      page.fields.map(field => (page[field.variable_name] = field.value));
      this.setState({ page });
    });
  }
  render() {
    return (
      <div className="Setup">
        <div className="summary">
          <img src="/assets/media/react-airship.svg" alt="logo"/>
          <h1 className="title is-4">
            {this.state.page.name}
          </h1>
          <p>
            {this.state.page.new_box}
          </p>
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

export default Setup;
