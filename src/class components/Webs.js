import React, { Component } from 'react'
class Webs extends Component{
    render(){
        return(
            <div>
            <h1>React is a modern javascript library developed by {this.props.developer}</h1>
            {this.props.children}
            </div>
        );
    }
} 
export default Webs;