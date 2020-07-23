import React, { Component } from 'react';
import CountButton from './CountButton';

class Counter extends Component {

  constructor(props) {
    super()
    this.state = {
      counterValue: 5,
    };
  }

  upCount = () => {
    this.setState(
      { counterValue: this.state.counterValue + 1,}
    )
  }

  downCount = () => {
    this.setState(
      { counterValue: this.state.counterValue - 1,}
    )
  }

  render() {
    return (
      <div className="main">
       <h1>Count: {this.state.counterValue}</h1>
       <CountButton name='UP' change={this.upCount}></CountButton>
       <CountButton name='DOWN' change={this.downCount}></CountButton>
      </div>
    );
  }

}

export default Counter;
