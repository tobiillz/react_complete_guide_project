import React from 'react'

const Person = (props)=> {
    const cardStyles = {
        // border : "1px solid black",
        borderRadius: '4px',
        color: "black",
        // backgroundColor: "transparent",
        boxShadow: '1px 1px 2px 2px grey',
        width: '60%',
        padding: '20px',
        margin: 'auto',
        marginBottom: '50px'
    }

    return (
        <div style={cardStyles}>
            <h1>Hallo, Ich bin {props.name} und ein Fullstack Dev</h1>
            <p onClick= {props.click}> Ich bin ein person und ich bin {props.age} jahre old</p>
            <p> Another test of knowing </p> 
            <p>{props.children}</p> 
            <input onChange={props.changed} value={props.name}/>
        </div>
      )
};
export default Person


