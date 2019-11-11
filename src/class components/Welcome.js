import React, { Component } from 'react'
 export class Welcome extends Component{
     render(){
         return (
             <h1>This is a class Component</h1>
         )
     }
 }
 class HelloUser extends Component{
     render(){
         return(
             <h1>This is JSX</h1>
            // React.CreateElement('div',null,'Hello')
         );
     }
 }
 
 
 export default HelloUser;