'use strict';

const year = parseInt(prompt("Enter year: "));


if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
 document.querySelector('#leap').innerHTML = 'Year ' + year + ' is a leap year.';
} else {
   document.querySelector('#notleap').innerHTML = 'Year ' + year + ' is not a leap year.';
}
