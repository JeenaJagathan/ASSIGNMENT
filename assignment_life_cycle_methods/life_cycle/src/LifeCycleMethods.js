import React, { Component } from "react";

export class LifeCycleMethods extends Component {
  constructor(props) {
    super(props);
    console.log("calling constructor");
  }
  render() {
    console.log("calling render");
    return <div>LifeCycleMethods-{this.props.count}</div>;
  }
  componentDidMount() {
    console.log("calling componentDidMount");
  }
  shouldComponentUpdate() {
    console.log("calling shouldComponentUpdate");
    return true;
  }
  componentDidUpdate() {
    console.log("calling componentDidUpdate");
  }
  componentDidCatch() {
    console.log("calling componentDidCatch");
  }
  componentWillUnmount() {
    console.log("calling componentWillUnmount");
  }
}

export default LifeCycleMethods;
