'use strict';

// Global scope
var a = 1;
let b = 2;
const c = 3;

// Function scope
// function test() {
//   var a = 4;
//   let b = 5;
//   const c = 6;

//   console.log(`Function scope: ${a}, ${b}, ${c}`);
// }

// test();

// if (true) {
//   // Block scope
//   var a = 4; // var is NOT block-scoped but FUNCTION-scoped

//   // let and const are BLOCK-scoped
//   let b = 5;
//   const c = 6;

//   console.log(`Block scope: ${a}, ${b}, ${c}`);
// }

// again, vair is function-scoped
for (var a = 0; a < 10; a++) {
  console.log(`Loop ${a}`);
}

console.log(`Global scope: ${a}, ${b}, ${c}`);
