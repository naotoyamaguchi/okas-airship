import React, { Component } from "react";

class ReactTutorial extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: {
        body: ''
      }
    };
  }
  componentDidMount() {
    fetch("/api/pages/react-tutorial").then(res => res.json()).then(page => {
      page.fields.map(field =>
        page[field.variable_name] = field.value
      );
      this.setState({ page });
      window.loadPrism();
    });
  }
  render() {
    return (
      <div
        className="ReactTutorial body"
        dangerouslySetInnerHTML={{
          __html: this.state.page.body
        }}
      />
    );
  }
}

export default ReactTutorial;
