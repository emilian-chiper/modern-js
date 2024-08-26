'use strict';

// Create arrays
const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, { a: 1, b: 1 }, new Date()];

let val;

// Get array length
val = numbers.length;

// Check if is array
val = Array.isArray(numbers);

// Get single value
val = numbers[3];
val = numbers[0];

// Insert into array
// numbers[2] = 100;

// Find index of value
val = numbers.indexOf(36);

// MUTATING ARRAYS

// push() -- add on to end
// numbers.push(250);

// unshift() -- ad on to front
// numbers.unshift(120);

// pop() -- take off from end
// numbers.pop();

// shit() -- take off from front
// numbers.shift();

// splice() -- remove values from any place
// numbers.splice(1, 3);

// reverse() -- reverse array
// numbers.reverse();

// concat() -- concatenate arrays
// val = numbers.concat(numbers2);

// sort() -- sort by first number
// val = fruit.sort();
// val = numbers.sort(); // converts to strings

// sort alphanumeric
// val = numbers.sort(function (x, y) {
//   return x - y;
// });

// sort reverse
// val = numbers.sort(function (x, y) {
//   return y - x;
// });

// find()
function under50(num) {
  return num < 50;
}

function over50(num) {
  return num > 50;
}

val = numbers.find(over50);

console.log(numbers);
console.log(val);
