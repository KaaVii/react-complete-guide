import React, { Component } from 'react';
import classes from './App.module.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
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
    let btnClass = null;

    if (this.state.showPersons) {
      persons = (
        <div >
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}><Person
              //click={() => this.deletePersonHandler(index)}
              click={this.deletePersonHandler.bind(this, index)}
              name={person.name}
              age={person.age}
              changed={(event) => this.nameChangedHandler(event, person.id)} /></ErrorBoundary>
          })}
        </div>
      );
      btnClass = classes.Red;
    }

    const assignClasses = [];

    if (this.state.persons.length <= 2) {
      assignClasses.push(classes.red); //classes will be ['red']
    }

    if (this.state.persons.length <= 1) {
      assignClasses.push(classes.bold); //classes will be ['red', 'bold']
    }

    console.log('Application starts');
    console.log(String(classes));

    return (

      <div className={classes.App}>
        <h1>First React App</h1>
        <p className={assignClasses.join( ' ' )}>This is really working!</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>Toggle Peresons</button>
        {persons}
      </div>

    );

    //Another way to create a React Element to be Render
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?') );
  }
}

export default App;
