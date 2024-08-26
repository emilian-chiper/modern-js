'use strict';

let val;
const today = new Date();
let birthday = new Date('9-10-1981 11:25:00 ');
birthday = new Date('September 10 1981');
birthday = new Date('9/10/1981');

val = today;
val = today.toISOString();
val = today.toString();

val = birthday;

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
// Time passed Jan 1st 1970
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);

console.log(birthday);
