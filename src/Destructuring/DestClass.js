import React, { Component } from 'react'

class DestClasses extends Component {
  render() {
      const {name} = this.props
    return (
      <div>
        <h1>Hello {name}</h1>
      </div>
    )
  }
}

export default DestClasses;
