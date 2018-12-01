import React, { PureComponent } from 'react';
import Person from './Person/Person'

class Persons extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[Persons.js] Inside Constructor', props)

    //State can be Initialize Here


  }
  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE Person.js] Inside ComponentWillReceiveProps');
  }

// Only component needs a shouldComponentUpdate, PureComponent doesn't
  // //after componentWillReceiveProps you can put some logic here also to force component to update, we canb use this method to check if render is needed
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE Person.js] Inside ShouldComponentUpdate', nextProps, nextState);
  //   // return nextProps.persons !== this.props.persons;
  //   //return false;
  //   return nextProps.persons !== this.props.persons ||
  //   nextProps.clicked !== this.props.clicked || 
  //   nextProps.changed !== this.props.changed;  }

  componentWillUpdate() {
    console.log('[UPDATE Person.js] Inside componentWillUpdate')
  }

  componentDidUpdate() {
    console.log('[UPDATE Person.js] Inside componentDidUpdate')
  }
  componentWillMount() {
    console.log('[Persons.js] Inside Component Will Mount')
  }
  componentDidMount() {
    console.log('[Persons.js] Inside Component Did Mount')
  }

  render() {
    console.log('[Persons.js] Inside Component Render')

    return this.props.persons.map((person, index) => {
      return <Person
        //click={() => this.deletePersonHandler(index)}
        click={() => this.props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={(event) => this.props.changed(event, person.id)} />
    }
    );
  }
}
export default Persons;
