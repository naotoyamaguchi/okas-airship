import React, { Component } from "react";

class Styling extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: {
        body: ""
      }
    };
  }
  componentDidMount() {
    fetch("/api/pages/styling").then(res => res.json()).then(page => {
      page.fields.map(field => (page[field.variable_name] = field.value));
      this.setState({ page });
      window.loadPrism();
    });
  }
  render() {
    return (
      <div
        className="Styling body"
        dangerouslySetInnerHTML={{
          __html: this.state.page.body
        }}
      />
    );
  }
}

export default Styling;
