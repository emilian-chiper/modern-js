'use strict';

// FOR
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// Skipping an iteration and breaking
// for (let i = 0; i <= 10; i++) {
//   if (i === 2) {
//     console.log('2 is my fave number');
//     // continue; // keep going w/ the loop (move to next iteration)
//   }

//   if (i === 5) {
//     console.log('Stop the loop');
//     break;
//   }

//   console.log(i);
// }

// WHILE
// let i = 0;

// while (i < 10) {
//   console.log(i);
//   i++;
// }

// DO WHILE -- runs at least once no matter what
// let i = 100;

// do {
//   console.log(i);
//   i++;
// } while (i < 10);

// ARRAY METHODS

const cars = ['Ford', 'Chevvy', 'Honda', 'Toyota'];

// Looping with for loop -- pref next
// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }

// Array.forEach(function(iterator, index, array) { // do stuff }) -- MUTATES
// cars.forEach((car, index, arr) => {
//   console.log(`${index}: ${car}`);
//   console.log(arr);
// });

// Array.map() -- CLONES
// const users = [
//   { id: 1, firstName: 'John' },
//   { id: 2, firstName: 'Sara' },
//   { id: 3, firstName: 'Karen' },
//   { id: 4, firstName: 'Pete' },
// ];

// const ids = users.map((user) => {
//   return user.id;
// });

// console.log(ids);

// OBJECT METHODS
const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 40,
};

// FOR IN
for (let x in user) {
  //   console.log(x);
  console.log(`${x}: ${user[x]}`);
}
