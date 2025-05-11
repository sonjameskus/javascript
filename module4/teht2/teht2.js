'use strict'

 const showForm = document.querySelector('#show-form')
showForm.addEventListener('submit', async function(evt) {

    evt.preventDefault();

    const value_from_input = document.querySelector('input[name=q]').value;
    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${value_from_input}`);
        const jsonData = await response.json();
        jsonData.forEach(result => {
    console.log(result);
});
    } catch (error) {
        console.log(error.message);
    }
});