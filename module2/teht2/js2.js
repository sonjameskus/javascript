'use strict';

const names = [];
const number = parseInt(prompt("How many will be participating?"));

let i = 0;
while  (i < number) {
  const name = prompt("Enter a participant's name: ");
  names.push(name);
  i++;
}

names.sort();

let ol = document.getElementById("names");
      for (let i = 0; i < names.length; i++) {
         let li = document.createElement('li');
         li.innerText = names[i];
         ol.appendChild(li);
      }

document.getElementById("names").appendChild(ol);