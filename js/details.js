const detailsContainer = document.querySelector(".details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = "https://api.punkapi.com/v2/beers/" + id;

async function fetchBeer() {

    try {

    const response = await fetch(url);
    const data = await response.json();

	console.log(data);

    detailsContainer.innerHTML =
    `<h1>${data.name}</h1>
    <h2>${data.tagline}</h2>
    <h3>${data.first_brewed}</h3>
    <h3>Alchohol percentage: ${data.abv}</h3>
    <img src="${data.image_url}" alt="${data.name}"/>
    <p>${data.description}</p>
    <p>Goes well with: ${data.food_pairing}</p>
    <p>Brewers tips: ${data.brewers_tips}</p>`;
    }
    catch(error) {
        console.log(error);
    }



}

fetchBeer();