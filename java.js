// ES6 variable declaration
const name = 'John Doe';
console.log(name); 


// Variable declarations
const constantVar = 'constant';
let letVar = 'let';
var varVar = 'var';

console.log(constantVar);
console.log(letVar); 
console.log(varVar); 

// Data type checks
const isTrue = true;
const num = 42;
const str = 'hello';

console.log(typeof isTrue); 
console.log(typeof num); 
console.log(typeof str); 


// Conditional statement
const age = 25;

if (age >= 18) {
  console.log('You are an adult.');
} else {
  console.log('You are a minor.');
}


// Looping over an array
const colors = ['red', 'green', 'blue'];

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}


// Object, array, and function creation
const person = { name: 'John Doe', age: 30 };
const numbers = [1, 2, 3, 4, 5];
function greet(name) {
  console.log(`Hello, ${name}!`);
}

console.log(person.name); 
console.log(numbers[0]); 
greet('Alice'); 



// Data fetching using fetch API
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
