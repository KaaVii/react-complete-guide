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
      otherState: 'some other state values',
      showPersons: false
  }

  switchNameHandler = (newName) => { 
    //console.log('Was Clicked!');
    // DON'T DO THIS -> this.state.persons[0].name = 'Danilo Marconato Venturini'
    this.setState({ 
      persons: [
        {name: newName, age: 28},
        {name: 'Max', age: 31},
        {name: 'Claude', age: 65}
        ]
    })
  }

  nameChangedHandler = (event) => { 
    this.setState({ 
      persons: [
        {name: 'William Wallace', age: 28},
        {name: event.target.value, age: 31},
        {name: 'Claude', age: 65}
        ]
    })
  }
  
  togglePersonsHandler = () => { 
    
    this.setState({showPersons: !this.state.showPersons});
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
      <h1>First React App</h1>
      <p>This is really working!</p>
      <button style={style} onClick={this.togglePersonsHandler}>Toggle Peresons</button>
      { this.state.showPersons === true ? 
      <div >
      <Person click={this.switchNameHandler.bind(this, 'Danilo Marconato Venturini')} name={this.state.persons[0].name} age={this.state.persons[0].age} changed={this.nameChangedHandler}/>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div> : null}
      </div>
    );

    //Another way to create a React Element to be Render
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?') );
  }
}

export default App;
