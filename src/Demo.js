import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const Demo = (props) =>{
    return (
        <div>
            <h1>Hello world {props.name}</h1>
                <p>Welcome</p>
        </div>)
}

/*class Demo extends Component
{
    render(){
        return (
        <div>
            <h1>Hello world {this.props.name}</h1>
                <p>Welcome</p>
        </div>)
    }
}*/
export default Demo;