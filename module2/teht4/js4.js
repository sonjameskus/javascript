'use strict';

let numbers = [];

let number = parseInt(prompt("Enter any number. 0 will end the program: "));

while (number !== 0) {
  numbers.push(number);
  number = parseInt(prompt("Enter any number. 0 will end the program: "));
} if (number === 0) {
   numbers.sort((a, b) => b - a);
   console.log(numbers);
}