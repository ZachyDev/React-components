import React, { Component } from 'react';

class Counter extends Component {
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    IncCount(){
        this.setState({
            count: this.state.count + 1
        })
    
    render() {
        return (
            <div>
              Count - {this.state.count}
              <button onClick={() => this.IncCount()}>Increment</button>
            </div>
        );
    }
}