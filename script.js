'use strict';

const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello there, my name is Emil';
const tags = 'web design,web development,programming';
let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'Emil ';
val += 'Chiper';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping
val = "That's awesome, I can't wait"; // \ <-- escape char (prettier rm it)

// length
val = firstName.length; // <-- property (method has ())

// concat
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

// Character indexing
val = firstName[5];

// indexOf()
val = firstName.indexOf('l');

// lastIndexOf()
val = firstName.lastIndexOf('l');

// charAt()
val = firstName.charAt('5');

// Get last character
val = firstName.charAt(firstName.length - 1);

// substring()
val = firstName.substring(0, 4);

// slice()
val = firstName.slice(0, 4);
val = firstName.slice(-3);

// split()
val = firstName.split(val);
val = str.split(' ');
val = tags.split(',');

// replace()
val = str.replace('Emil', 'Jack');

// includes()
val = str.includes('Hello');
val = str.includes('false');

console.log(val);
