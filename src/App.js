import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Danilo', age: 31},
      {name: 'Claude', age: 65}
      ],
      otherState: 'some other state values'
  }

  switchNameHandler = () => { 
    //console.log('Was Clicked!');
    // DON'T DO THIS -> this.state.persons[0].name = 'Danilo Marconato Venturini'
    this.setState({ 
      persons: [
        {name: 'Danilo Venturini', age: 28},
        {name: 'Max', age: 31},
        {name: 'Claude', age: 65}
        ]
    })
  }
  
  clickAndChange = this.switchNameHandler;

  render() {
    return (
      <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={this.switchNameHandler}>Switch Name</button>
      <Person clickchange={this.clickAndChange} name={this.state.persons[0].name} age={this.state.persons[0].age} />
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );

    //Another way to create a React Element to be Render
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?') );
  }
}

export default App;
