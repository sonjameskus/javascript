'use strict'

const first_str = prompt("Give 1st integer, please: ");
const second_str = prompt("Give 2nd integer, please: ");
const third_str = prompt("Give 3rd integer, please: ");

const first = parseInt(first_str);
const second = parseInt(second_str);
const third = parseInt(third_str);

const sum =  first + second + third;
const product = first * second * third;
const ave = sum / 3;

document.querySelector('#nums').innerHTML = 'Your numbers: ' + first +', ' + second +', ' + third;
document.querySelector('#sum1').innerHTML = 'Sum: ' + sum;
document.querySelector('#pro').innerHTML = 'Product: ' + product;
document.querySelector('#average').innerHTML = 'Average: ' + ave;