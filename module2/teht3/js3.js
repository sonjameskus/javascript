'use strict';

const dogs = [];
const dog1 = prompt("Enter the name of the 1st dog: ");
dogs.push(dog1);
const dog2 = prompt("Enter the name of the 2nd dog: ");
dogs.push(dog2);
const dog3 = prompt("Enter the name of the 3rd dog: ");
dogs.push(dog3);
const dog4 = prompt("Enter the name of the 4th dog: ");
dogs.push(dog4);
const dog5 = prompt("Enter the name of the 5th dog: ");
dogs.push(dog5);
const dog6 = prompt("Enter the name of the 6th dog: ");
dogs.push(dog6);

dogs.sort();
dogs.reverse();

let ul = document.getElementById("dogs");
      for (let i = 0; i < dogs.length; i++) {
         let li = document.createElement('li');
         li.innerText = dogs[i];
         ul.appendChild(li);
      }

document.getElementById("dogs").appendChild(ul);