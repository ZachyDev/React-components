import React, { Component } from 'react'

export class Timer extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       timer:0
    }
  }
  ChangeTimer = () =>{
    this.setState({
      timer : this.state.timer + 1
    },()=>{console.log('Callback value:', this.state.timer)});
    console.log(this.state.timer)
  }
  
  render() {
    return (
      <div>
        <h1>Timer - {this.state.timer}</h1>
        <button onClick={() => this.ChangeTimer()}>Increment</button>
      </div>
    )
  }
}

export default Timer
