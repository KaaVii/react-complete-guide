import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium, { StyleRoot } from 'radium'

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

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div >
          {this.state.persons.map((person, index) => {
            return <Person
              //click={() => this.deletePersonHandler(index)}
              click={this.deletePersonHandler.bind(this, index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }

    }

    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red'); //classes will be ['red']
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold'); //classes will be ['red', 'bold']
    }

    console.log("Application starts");
    console.log(classes);

    return (
      <StyleRoot>
      <div className="App">
        <h1>First React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Peresons</button>
        {persons}
      </div>
      </StyleRoot>
    );

    //Another way to create a React Element to be Render
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?') );
  }
}

export default Radium(App);
