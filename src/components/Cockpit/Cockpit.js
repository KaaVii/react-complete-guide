import classes from './Cockpit.module.css';
import React from 'react';

const Cockpit = (props) => {
    
    let btnClass = null;
    const assignClasses = [];

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
        assignClasses.push(classes.red); //classes will be ['red']
    }

    if (props.persons.length <= 1) {
        assignClasses.push(classes.bold); //classes will be ['red', 'bold']
    }


    return (<div className={classes.Cockpit}>
        <h1>{props.appTitle}</h1>
        <p className={assignClasses.join(' ')}>This is really working!</p>
        <button className={btnClass} onClick={props.clicked}>Toggle Peresons</button>
        </div>);

}

export default Cockpit;