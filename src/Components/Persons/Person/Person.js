import React, { Component } from 'react';
import './Person.css'
import Auxiliary from '../../../hoc/Auxiliary';

class Person extends Component {
    
    render(){
        
        return (
            // <div className="person">
            <Auxiliary>
                <h1>Hallo, Ich bin {this.props.name} und ein Fullstack Dev</h1>
                <p onClick= {this.props.click}> Ich bin ein person und ich bin {this.props.age} jahre old</p>
                <p> Another test of knowing </p> 
                <p>{this.props.children}</p> 
                <input onChange={this.props.changed} value={this.props.name}/>
            </Auxiliary>
 
            // </div>
            
          )
    };  
};
export default Person;

// const cardStyles = {
    //     // border : "1px solid black",
    //     borderRadius: '4px',
    //     color: "black",
    //     // backgroundColor: "transparent",
    //     boxShadow: '1px 1px 2px 2px grey',
    //     width: '60%',
    //     padding: '20px',
    //     margin: 'auto',
    //     marginBottom: '50px'
    // }


