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
            `<a href="index.html" class="back">Back to browsing</a>
            <img src="${data[0].image_url}" alt="${data[0].name}"/ class="details-image">
            <h1 class="details-name">${data[0].name}</h1>
            <h2 class="details-tagname">${data[0].tagline}</h2>
            <h3 class="details-date">First brewed: ${data[0].first_brewed}</h3>
            <h3 class="details-alchohol">Alchohol percentage: ${data[0].abv}</h3>
            <p class="details-description">${data[0].description}</p>
            <p class="details-pairing">Goes well with: ${data[0].food_pairing}</p>
            <p class="details-tips">Brewers tips: ${data[0].brewers_tips}</p>`;

    } catch (error) {
        console.log("Something went wrong when calling the API.")
        detailsContainer.innerHTML = `<h1 class="details-name">Ops, something went wrong.</h1>`;
    }
}

fetchBeer();