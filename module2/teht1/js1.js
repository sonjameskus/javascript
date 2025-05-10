'use strict';

const number_list = [];
const number1 = prompt("Enter the first number: ");
number_list.push(number1);
const number2 = prompt("Enter the second number: ");
number_list.push(number2);
const number3 = prompt("Enter the third number: ");
number_list.push(number3);
const number4 = prompt("Enter the fourth number: ");
number_list.push(number4);
const number5 = prompt("Enter the fifth number: ");
number_list.push(number5);

for (let i = 0; i < number_list.length; i++) {
  for (let j = i + 1; j < number_list.length; j++) {
    let b;
    b = number_list[i];
    number_list[i] = number_list[j];
    number_list[j] = b;
  }
}
console.log(number_list);