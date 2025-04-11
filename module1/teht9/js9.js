'use strict';

const number = parseInt(prompt("Enter integer: "));
let isPrime = true;

if (number > 1) {
for (let i = 2; i <= number/2; i++) {
        if (number % i == 0) {
          isPrime = false;
          break;
        }
    }
 if (isPrime) {
        document.querySelector('#prime').innerHTML = number + " is a prime number.";
    } else {
        document.querySelector('#prime').innerHTML = number + " is not a prime number.";
    }}
if (number <= 1) {
  document.querySelector('#prime').innerHTML = number + " is not a prime number.";
}
