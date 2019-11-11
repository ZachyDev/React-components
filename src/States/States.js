import React, { Component } from 'react'
class Msg extends Component{
    constructor (){
        super()
        this.state = {
            output : 'Kindly Subscribe'
        }  
    }
     changeOutput = () => {
        this.setState({
            output:'Thank you for subscribing!'
        })
    }
    render(){
        const {output} = this.state
        // const {changeOutput} = this.state
        return(
            <div>
            <h1>{output}</h1>
            <button onClick={() => this.changeOutput()}>Subscribe</button>
            </div>
        );
    }
}
export default Msg;