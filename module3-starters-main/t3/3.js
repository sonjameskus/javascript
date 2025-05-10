'use strict'

const names = ['John', 'Paul', 'Jones'];
const target = document.getElementById('target');

let namelist = '';
for (let i= 0; i < names.length; i++) {
namelist += `<li>${names[i]}</li>`;
}

target.innerHTML = namelist;
