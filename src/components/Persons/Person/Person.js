import React, { Component } from 'react'
import classes from './Person.module.css';


class Person extends Component {


   
    constructor(props){ 
        super(props);
        console.log('[Person.js] Inside Constructor', props)
        
        
        
      
      }
    
      

      componentWillMount() { 
        var teste = "Teste";
        console.log(teste);
        console.log('[Person.js] Inside Component Will Mount');
      }
      componentDidMount() { 
        console.log('[Person.js] Inside Component Did Mount');
      }

    render() {
        console.log('[Person.js] Inside Component Render');

 /*    const rnd = Math.random();
    if (rnd > 0.7){
        throw new Error('Something went wrong');
    } */
        return (

            <div className={classes.Person} ><p onClick={this.props.click}>I'm a Persona and I am {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}></input></div>
        )
    };

}
export default Person;