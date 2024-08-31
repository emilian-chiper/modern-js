'use strict';

// FUNCTION DECLARATIONS
// // Declaration
// function greet() {
//   //   console.log('Hello');
//   return 'Hello';
// }

// Call function
// console.log(greet());

// Params
// function greet(firstName = 'John', lastName = 'Doe') {
//   // ES6 above
//   // ES5 below
//   // if (typeof firstName === 'undefined') {firstName = 'John'}
//   return 'Hello ' + firstName + ' ' + lastName;
// }

// console.log(greet());

// // FUNCTION EXPRESSIONS
// const square = function (x = 3) {
//   return x * x;
// };

// console.log(square());

// IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFEs
// (function () {
//   console.log('IIFE Ran...');
// })();

// (function (name) {
//   console.log(`Hello ${name}`);
// })('Muppet');

// PROPERTY METHODS
const todo = {
  add: function () {
    console.log('Add todo');
  },
  edit: function (id) {
    console.log(`Edit todo ${id}`);
  },
};

todo.delete = function () {
  console.log('Delete todo');
};

todo.add();
todo.edit(22);
todo.delete();
