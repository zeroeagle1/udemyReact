import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    body: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(res => res.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  }
  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1 className="display-4">Test Component</h1>
        <h1>{title}</h1>
        <h1>{body}</h1>
      </div>
    );
  }
}

export default Test;
