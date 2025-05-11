'use strict'

const showForm = document.querySelector('#show-form')
showForm.addEventListener('submit', async function(evt) {

    evt.preventDefault();

const value_from_input = document.querySelector('input[name=q]').value;
const results = document.getElementById("results")
    document.getElementById('results').innerHTML = '';
    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${value_from_input}`);
const jsonData = await response.json();
        jsonData.forEach(result => {
        const show = result.show;
   const card = document.createElement('article');
   const name = document.createElement('h2');
      name.textContent = show.name;
      card.appendChild(name);
      const link = document.createElement('a');
      link.href = show.url;
      link.textContent = 'Show link';
      link.target = '_blank';
      card.appendChild(link);
       if (show.image?.medium) {
        const img = document.createElement('img');
        img.src = show.image.medium;
        img.alt = show.name;
        card.appendChild(img);
      }
const summary = document.createElement('div');
      summary.innerHTML = show.summary || 'No summary';
      card.appendChild(summary);
      results.appendChild(card);
    });
    } catch (error) {
        console.log(error.message);
    }
});
