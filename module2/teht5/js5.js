'use strict';

let numbers = [];

while (true) {
  let number = parseInt(prompt("Enter any number: "));

if (numbers.includes(number)) {
  alert("Number has already been given.");
   numbers.sort((a, b) => a - b);
   console.log(numbers);
   break;
} else {
  numbers.push(number);
}
}
