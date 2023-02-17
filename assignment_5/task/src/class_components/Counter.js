import React, { Component } from 'react'
class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
          count: 0
        };
      }
    
      handleClick = () => {
        this.setState({
          count: this.state.count + 1
        });
      }
    
      render() {
        return (
          <div>
            <p>{this.props.message}</p>
            <p>Count: {this.state.count}</p>
            <button onClick={this.handleClick}>Increment</button>
          </div>
        );
      }
    }
export default Message;