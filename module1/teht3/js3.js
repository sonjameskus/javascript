'use strict'

const first = parseInt(prompt("Give 1st integer, please: "));
const second = parseInt(prompt("Give 2nd integer, please: "));
const third = parseInt(prompt("Give 3rd integer, please: "));

const sum =  first + second + third;
const product = first * second * third;
const ave = sum / 3;

document.querySelector('#nums').innerHTML = 'Your numbers: ' + first +', ' + second +', ' + third;
document.querySelector('#sum1').innerHTML = 'Sum: ' + sum;
document.querySelector('#pro').innerHTML = 'Product: ' + product;
document.querySelector('#average').innerHTML = 'Average: ' + ave;