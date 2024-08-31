'use strict';

const id = 100;

// // Equal to
// if (id == 100) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // Not equal to
// if (id != 101) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // Strict equality // USE THIS
// if (id === 100) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // Strict inequality
// if (id !== 100) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// Test if undefined
// if (typeof id !== 'undefined') {
//   console.log(`The ID is ${id}`);
// } else {
//   console.log('NO ID');
// }

// Greater than or equal to
// if (id >= 100) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// Lesser than or equal to
// if (id <= 100) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// ELSE IF
const color = 'yellow';

// if (color === 'red') {
//   console.log('Color is red');
// } else if (color === 'blue') {
//   console.log('Color is blue');
// } else {
//   console.log('Color is not red or blue');
// }

// LOGICAL OPERATORS
const firstName = 'Steve';
const age = 70;

// AND &&
if (age > 0 && age < 12) {
  console.log(`${firstName} is a child`);
} else if (age >= 13 && age <= 19) {
  console.log(`${firstName} is a teenager`);
} else {
  console.log(`${firstName} is an adult`);
}

// OR ||
if (age < 16 || age > 65) {
  console.log(`${firstName} cannot run in race`);
} else {
  console.log(`${firstName} is registered for the race`);
}

// Ternary operator ? :
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// WITHOUT BRACES // BAD PRACTICE
if (id === 100) console.log('CORRECT');
else console.log('INCORRECT');
