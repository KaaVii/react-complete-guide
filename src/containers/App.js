import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
//import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
class App extends Component {

  state = {
    persons: [
      { id: '123asd', name: 'Jess', age: 22 },
      { id: 'adqwe1', name: 'Danilo', age: 31 },
      { id: 'zcad12', name: 'Claude', age: 65 }
    ],
    otherState: 'some other state values',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    //slice() or [...] (Spread) same results
    const persons = this.state.persons.slice();
    //const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    //const person = Object.assign({},this.state.persons[personIndex])

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })

  }

  togglePersonsHandler = () => {

    this.setState({ showPersons: !this.state.showPersons });
  }

  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = (
            <Persons 
         clicked={this.deletePersonHandler}
         changed={this.nameChangedHandler}
         persons={this.state.persons}
         />
        
        
      );
    }
    console.log('Application starts');
    console.log(String(classes));

    return (

      <div className={classes.App}>
       <Cockpit 
        appTitle={this.props.title}
        persons={this.state.persons}
        showPersons={this.state.showPersons}
        clicked={this.togglePersonsHandler}       />
        {persons}
      </div>

    );

    //Another way to create a React Element to be Render
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?') );
  }
}

export default App;
