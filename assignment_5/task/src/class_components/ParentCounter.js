import React, { Component } from "react";
import Counter from "./Counter";

export class ParentCounter extends Component {
  render() {
    return (
      <div>
        <Counter message="Hello, World!" />
        <Counter message="Hello, INDIA!" />
      </div>
    );
  }
}

export default ParentCounter;
