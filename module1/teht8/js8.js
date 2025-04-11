'use strict';

const leap_years = [];
const not_leaps = [];

let start = parseInt(prompt("Enter the starting year: "));
const end = parseInt(prompt("Enter the ending year: "));


while (start <= end) {
  if ((start % 4 === 0 && start % 100 !== 0) || (start % 100 === 0 && start % 400 === 0)) {
     leap_years.push(start);
     start++;
} else {
  not_leaps.push(start);
  start++;
}}

let ul = document.getElementById("leapyears");
      for (let i = 0; i < leap_years.length; i++) {
         let li = document.createElement('li');
         li.innerText = leap_years[i];
         ul.appendChild(li);
      }

document.getElementById("leapyears").appendChild(ul);



