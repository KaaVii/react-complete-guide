JS6
let -> Variável padrão no Scopo do JavaScriot
const -> constante em JS6


_______________________
ARROW FUNCTION LIST OF PARAMETERS

const func= (list of parameters) =>{
  console.log(func proccess);
}

_______________________
ARROW FUNCTION NO PARAMETERS

const printMyName = () =>{
  console.log('teste');
}

printMyName('Danilo');


_______________________
ARROW FUNCTION

const multiply = (number) => number * 2;
console.log(multiply(3));

_______________________
CLASSES

class Human{
  constructor(){
    this.gender = 'Masculino';
  }
  
  printGender(){
    console.log(this.gender);
  }
  
}

class Person extends Human{
  constructor(){
    super();
    this.name = 'Danilo';
    this.gender = 'Feminino';
  }
  
  printMyName(){
    console.log(this.name);
  }
  
}

const person = new Person();
person.printMyName();
person.printGender()

_______________________
CLASSES AND INHERANCE

class Human{
    gender = 'Masculino';
    
  printGender = () => {
    console.log(this.gender);
  }
  
}

class Person extends Human{
  
    name = 'Danilo';
    gender = 'Feminino';
  
  
  printMyName = () => {
    console.log(this.name);
  }
  
}

const person = new Person();
person.printMyName();
person.printGender();



_______________________
SPREAD 
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];

console.log(newNumbers);

_______________________
SPREAD OBJECTS

const person = { 
name: 'max'
};

const newPerson = {
  ...person,
  age: 28
  
}

console.log(newPerson);

_______________________
REST

const filter = (...args) => {
  return args.filter(el => el === 1);
}

console.log(filter(1,2,3,4))

________________________
DESTRUCTURING

const numbers = [1, 2, 3];

[num1, num2] = numbers;

console.log(num1, num2);

________________________
PrimitiveTypes Class Pointer

const person = { 
name: 'Danilo'
}

const secondPerson = person;

person.name = 'Jess';

console.log(secondPerson);

________________________

PrimitiveTypes Class Actual Object

const person = { 
name: 'Danilo'
}

const secondPerson = {
  ...person
}
person.name = 'Jess';

console.log(secondPerson);


_________________________

Array Functions

const numbers = [1, 2, 3];


const doubleNumArray = numbers.map((num) =>{
return num * 2;
});

console.log(numbers);

console.log(doubleNumArray);




