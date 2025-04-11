'use strict';

const name = prompt("Please enter your name: ");

const house = Math.floor(Math.random() * 4) + 1;

if (house === 1) {
document.querySelector('#g').innerHTML = name + ', you are Gryffindor!';
} else if (house === 2) {
  document.querySelector('#s').innerHTML = name + ', you are Slytherin!';
} else if (house === 3) {
  document.querySelector('#h').innerHTML = name + ', you are HufflePuff!';
} else if (house === 4) {
  document.querySelector('#r').innerHTML = name + ', you are Ravenclaw!';
}