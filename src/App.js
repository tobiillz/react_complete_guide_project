import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import { Component } from 'react';

class App extends Component {
  state = {
    persons:[
      {
        name: 'Max',
        age : 28
      },
      {
        name: 'Samuel',
        age: 34
      },
      {
        name: 'David',
        age: 25
      }
    ],
    otherState :"Some other value",
    showPersons: false
  };
  
  // This function switches the name and age from previous values to current hardcoded values
  switchNameHandler = (newName) => {
    this.setState({
      persons : [
        {
          name: newName,
          age: 23
        },
        {
          name: 'Einstein',
          age: 35
        },
        {
          name: 'Phillipe',
          age: 24
        }
      ]
      // ,
      // otherState : this.state.otherState
    })

  }


  nameChangeHandler = (event) => {
    this.setState({
      persons : [
        {
          name: 'Trust',
          age: 23
        },
        {
          name: event.target.value,
          age: 35
        },
        {
          name: 'Stephen',
          age: 24
        }
      ]
    })
  }


  togglePersonsHandler =()=>{
       const doesShow = this.state.showPersons;
       this.setState({showPersons : !doesShow});
      //  console.log(this.setstate({showPersons : !doesShow}))
  }
    
  render () {
    const buttonStyles = {
      backgroundColor : "white",
      font: 'inherit',
      border: '1px solid black',
      borderRadius: '4px',
      padding: '8px',
      cursor: 'pointer',
      color: "white",
      marginBottom: '10px',
      color: 'black'
    }; 
    
    
    let persons = null;
    // console.log(this.state.showPersons)
    if (this.state.showPersons) {
        persons = (<div>
          <Person
              name = {this.state.persons[0].name}
              age =  {this.state.persons[0].age}  
          />
          <Person
              name =    {this.state.persons[1].name}
              age =     {this.state.persons[1].age}
              changed = {this.nameChangeHandler}
          />
          <Person
              name = {this.state.persons[2].name}
              age = {this.state.persons[2].age} 
              click = {this.switchNameHandler.bind(this, 'Emeka')}
          > Hobbies: Car racing </Person>
        </div>);

        }
    return (
        <div className="App">
          <h1>This is a React APP</h1>
          <p> This is really working!!!!!!</p>
          <button 
              style = {buttonStyles} 
              // Method below used for switching to hard  coded names
              // onClick={()=> switchNameHandler('Arnold Scwaz')}
              
              // This helps to hide the person components on click
              onClick={this.togglePersonsHandler}>
              Toggle Persons
              {/* Method above not recommmended due to inefficiency */}
              {/* onClick={switchNameHandler.bind(this, 'Arnold')}>Change name */}
          </button>
          {persons}
        </div>
    )
  }

};

export default App



    // let persons = null;

    // if (this.state.showPersons) {
    //     persons = (<div>
    //       <Person
    //           name = {this.state.persons[0].name}
    //           age =  {this.state.persons[0].age}  
    //       />
    //       <Person
    //           name =    {this.state.persons[1].name}
    //           age =     {this.state.persons[1].age}
    //           changed = {this.nameChangeHandler}
    //       />
    //       <Person
    //           name = {this.state.persons[2].name}
    //           age = {this.state.persons[2].age} 
    //           click = {this.switchNameHandler.bind(this, 'Emeka')}
    //       > Hobbies: Car racing </Person>
    //     </div>);