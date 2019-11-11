import React , { Component } from 'react'
class Messages extends Component{
    render(){
        return(
            <h1>Hello{this.props.name} takes {this.props.career}</h1>
        )
    }
}
export default Messages;