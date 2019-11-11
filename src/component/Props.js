import React from 'react'
const  Greeting = (props) =>{
    return (
        <div>
    <h1>Hello { props.user } takes { props.courseName }</h1>
    {props.children}
    </div>
    );
}
export default Greeting;