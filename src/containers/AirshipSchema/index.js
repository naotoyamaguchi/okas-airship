import React, { Component } from "react";

class AirshipSchema extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: {
        body: ""
      }
    };
  }
  componentDidMount() {
    fetch("/api/pages/airship-schema").then(res => res.json()).then(page => {
      page.fields.map(field => (page[field.variable_name] = field.value));
      this.setState({ page });
    });
  }
  render() {
    return (
      <div
        className="AirshipSchema body"
        dangerouslySetInnerHTML={{
          __html: this.state.page.body
        }}
      />
    );
  }
}

export default AirshipSchema;
