import React, { Component } from 'react'

import Person from './Person/Person'

class Persons extends Component{
   render(){
      console.log('[PERSONS.js] rendering.......')
      return this.props.persons.map((person, index) =>{
         return (
           <Person
             key = {person.id}
             name ={person.name}
             age = {person.age}
             click = {()=>this.props.clicked(index)}
             changed = {event => this.props.newchanged(event, person.id)}
           />
         );
      });
      
   }
}

// const Persons = (props) => (props.persons.map((person, index) =>{
//    console.log('[PERSONS.js] rendering.......')
//         return <Person
//              key = {person.id}
//              name ={person.name}
//              age ={person.age}
//              click = {()=>props.clicked(index)}
//              changed = {(event)=>props.newchanged(event, person.id)}
//            />

//      })
// );

export default Persons