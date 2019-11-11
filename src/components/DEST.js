import React, { Component } from 'react'

class DEST extends Component {
  render() {
      const {instructor} = this.props
    return (
      <div>
        <h1>This is Reactjs with {instructor}</h1>
      </div>
    )
  }
}

export default DEST;
