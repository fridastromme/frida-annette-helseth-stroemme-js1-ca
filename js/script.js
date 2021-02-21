const url = "https://api.punkapi.com/v2/beers/";

const beerContainer = document.querySelector(".grid");


async function getBeers() {

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        beerContainer.innerHTML = "";

        for (let i = 0; i < data.length; i++) {
            const nameContainer = data[i].name;
            const taglineContainer = data[i].tagline;
            const imageContainer = data[i].image_url;
            const abvContainer = data[i].abv;

            if (i === 24) {
                break;
            }

            beerContainer.innerHTML +=
                `<a href="details.html?id=${data[i].id}" class="card">
			    <img src="${imageContainer}" alt="${nameContainer}" class="beer-image"/>
			    <div><h2 class="name">${nameContainer}</h2>
                <h3 class="tagline">${taglineContainer}</h3>
		        <h3 class="abv">Alchohol percentage: ${abvContainer}</h3>
		        </div>
                </a>`;
        }

    } catch (error) {
        console.log("Something went wrong when calling the API.")
        beerContainer.innerHTML = `<h1 class="details-name">Ops, something went wrong.</h1>`;
    }
}

getBeers();
