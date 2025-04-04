'use strict';

let number;
if (confirm('Should I calculate the square root?') == true) {
  number = prompt("Enter number: ");
  let result = Math.sqrt(number)
  document.querySelector('#sqrt').innerHTML = "The square root of number " + number + " is " + result + ".";
  if (number < 0) {
     document.querySelector('#sqrt').innerHTML = "The square root of a negative number is not defined.";
  }
} else {
  document.querySelector('#sqrt').innerHTML = "The square root is not calculated.";
}