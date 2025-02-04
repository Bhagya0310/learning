
// ES6 variable declaration
const name = 'John Doe';
console.log(name); // Output: John Doe


// Variable declarations
const constantVar = 'constant';
let letVar = 'let';
var varVar = 'var';

console.log(constantVar); // Output: constant
console.log(letVar); // Output: let
console.log(varVar); // Output: var


// Data type checks
const isTrue = true;
const num = 42;
const str = 'hello';

console.log(typeof isTrue); // Output: boolean
console.log(typeof num); // Output: number
console.log(typeof str); // Output: string

// Conditional statement
const age = 25;

if (age >= 18) {
  console.log('You are an adult.');
} else {
  console.log('You are a minor.');
}
// Output: You are an adult.


// Looping over an array
const colors = ['red', 'green', 'blue'];

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
// Output:
// red
// green
// blue



// Object, array, and function creation
const person = { name: 'John Doe', age: 30 };
const numbers = [1, 2, 3, 4, 5];
function greet(name) {
  console.log(`Hello, ${name}!`);
}

console.log(person.name); // Output: John Doe
console.log(numbers[0]); // Output: 1
greet('Alice'); // Output: Hello, Alice!



// Data fetching using fetch API
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
// Output: { userId: 1, id: 1, title: "delectus aut autem", ... }
