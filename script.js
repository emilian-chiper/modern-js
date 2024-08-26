'use strict';

let val;

// number to string
val = String(555);
val = String(4 + 4);

// boolean to string
val = String(true);

// date to string
val = String(new Date());

// array to string
val = String([1, 2, 3, 4]);

// toString()
val = (5).toString();
val = true.toString();

// string to number
val = Number('5');

// boolean to number
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('hello');
val = Number([1, 2, 3]);

// parseInt
val = parseInt('100');

// parseFloat
val = parseFloat('100.30');

// Output
// console.log(val);
// console.log(typeof val);
// // console.log(val.length);
// console.log(val.toFixed(2));

// Type coercion
const val1 = '5';
const val2 = 6;

const sum = val1 + val2;
console.log(sum);
console.log(typeof sum);

const diff = val1 - val2;
console.log(diff);
console.log(typeof diff);
