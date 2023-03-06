import React, { Component } from "react";
import LifeCycleMethods from "./LifeCycleMethods";

export class LifeCycleUtils extends Component {
  constructor(props) {
    super(props);
    this.state = {  count: 0 };
    this.click = this.click.bind(this);
  }
  click() {
    this.setState((pState) => ({ ...pState, count: pState.count + 1 }));
  }
  render() {
    return (
      <div>
        <button onClick={this.click}>click{this.state.count}</button>
        <br />
        {this.state.count < 3 && <LifeCycleMethods count={this.state.count} />}
      </div>
    );
  }
}

export default LifeCycleUtils;
