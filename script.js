'use strict';

/*
// Declaration
var fullName = 'John Doe';
console.log(fullName);

// Reassignment
fullName = 'Steve Smith';
console.log(fullName);

// Initializing
var greeting;
console.log(greeting); // undefined

// Assignment
greeting = 'Hello';
console.log(greeting); // Hello

// letters, numbers, _, $ allowed
// cannot start with a number

// Multi word variables
var firstName = 'John'; // Camel case
var first_name = 'Sara'; // underscore
var FirstName = 'Tom'; // Pascal case
*/

/*
// LET - block scoped
let fullName = 'John Doe';
console.log(fullName);

fullName = 'Steve Smith';
console.log(fullName);
*/

// CONST
const firstName = 'John';
console.log(firstName);

// Cannot reassign
// firstName = 'Sara';
// console.log(firstName); // Uncaught TypeError: Assignment to constant variable.

// Must assign a value
// const greeting;
// console.log(greeting); // Missing initializer in const declaration

// Can mutate content, cannot reassign
// Object
const person = {
  name: 'John',
  age: 30,
};

person.name = 'Sara';

console.log(person); // {name: 'Sara', age: '30'}

// Array
const numbers = [1, 2, 3, 4, 5];
numbers.push(6);

console.log(numbers); // (5) [1, 2, 3, 4, 5]
