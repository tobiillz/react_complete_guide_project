import logo from '../logo.svg';
import './App.css';
import Persons from '../Components/Persons/Persons';
import { Component } from 'react';
class App extends Component {

  constructor(props){
    super(props);
    console.log('[APP.js] constructor')
    this.state = {
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
  }

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFrom Props', props)
    return state;
  }
  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('[APP.js] componentDidUpdate')
    console.log(snapshot);
  }
  componentDidMount(){
    console.log('[APP.js] componentDidMount')
  }
  
  
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


  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p =>{
      return (p.id === id);
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons : persons
    })
  }
  deletePersonHandler = (personIndex) =>{
      // const persons = this.state.persons.slice();
      // these above and below create a copy of this.state.persons and assign to persons
      const persons = [ ...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({persons: persons})
  }

  togglePersonsHandler =()=>{
       const doesShow = this.state.showPersons;
       this.setState({showPersons : !doesShow});
      //  console.log(this.setstate({showPersons : !doesShow}))
  }
    
  render () {
    console.log('[APP.js] render')
    const buttonStyles = {
      backgroundColor : "green",
      font: 'inherit',
      border: '1px solid black',
      borderRadius: '4px',
      padding: '8px',
      cursor: 'pointer',
      color: "white",
      marginBottom: '10px',
      color: 'white'
    }; 
    
    
    let persons = null;
    // console.log(this.state.showPersons)
    if (this.state.showPersons) {
        persons = (
        <div title = {this.props.appTitle}>
          <Persons
             persons={this.state.persons}
             newchanged = {this.nameChangeHandler}
             clicked = {this.deletePersonHandler}
             title = {this.props.appTitle}
          />
        </div>);
        buttonStyles.backgroundColor = "red"
        }
    return (
        <div className="App">
          
          <h1>{this.props.title}</h1>
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
