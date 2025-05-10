'use strict'

function rolldice(){
  const rolls = []
  let roll = 0;
  while (roll !== 6) {
  roll = Math.floor(Math.random() * 6) + 1;
  rolls.push(roll)
  }

  let ul = document.getElementById("rolls");
      for (let i = 0; i < rolls.length; i++) {
         let li = document.createElement('li');
         li.innerText = rolls[i];
         ul.appendChild(li);
      }

document.getElementById("rolls");

}

rolldice()

