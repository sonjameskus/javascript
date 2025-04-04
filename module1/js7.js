'use strict';

const rolls = parseInt(prompt("How many dice do you want to roll?"));

let sum = 0;
for (let i = 0; i < rolls; i++) {
let roll = Math.floor(Math.random() * 6) + 1;
                sum += roll;
            }
document.querySelector('#rolls').innerHTML = "Your rolled " + rolls + " dices and the results sums up to " + sum;