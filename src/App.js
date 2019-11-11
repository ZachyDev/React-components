import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './component/site'
import User from './component-2/app'
import {Message} from './component/es6'
import Output from './component/index'
import { Welcome }from './class components/Welcome'
import HelloUser from './class components/Welcome'
import Greeting from './component/Props'
import Messages from './class components/Message'
import Web from './component-2/Web'
import Webs from './class components/Webs'
import Msg from './States/States'
// import Counter from './components/Counter'
import Timer from './components/Timer'
import Dest from './Destructuring/Dest'
import Dest2 from './Destructuring/Dest2'
import DestClass from './Destructuring/DestClass';
import DestClasses from './Destructuring/DestClass'
class App extends Component{
    render(){
        return(
            <div className="App">
                {/* <Output></Output> */}
                {/* <Welcome /> */}
                {/* <HelloUser /> */}
                {/* <Greeting user='Moseti' courseName='Comp Scie'> */}
                    {/* <p>This is a paragraph tag</p> */}
                {/* </Greeting> */}
                {/* <Greeting user='Dorothy' courseName='Ed Scie'> */}
                    {/* <button>Subscribe</button> */}
                {/* </Greeting> */}
                {/* <Messages name='Tee_Zachy@devs' career='IT' /> */}
                {/* <Web site='CodeWithTee' category='IT & Software'></Web>
                <Webs developer="facebook">
                    <p>Mark Zuckerburg</p>
                </Webs> */}
                <Msg />
                {/* <Counter/> */}
                {/* <Timer /> */}
                {/* <Dest name="Moseti" career="Programmer" />
                <Dest2 user="Dorothy" career="Teaching"/> */}
                <DestClasses name = 'Teedev.'/>
            </div>
        );
    }
}
export default App;
