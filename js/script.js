const url = "https://api.punkapi.com/v2/beers";

const beerContainer = document.querySelector(".grid");


async function getBeers() {

	try{
    const response = await fetch(url);

    const data = await response.json();

	console.log(data);


    beerContainer.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
        const nameContainer = data[i].name;
        const taglineContainer = data[i].tagline;
		const imageContainer = data[i].image_url;
		const abvContainer = data[i].abv;

        if (i === 12) {
            break;
        }

        beerContainer.innerHTML +=
			`<a href="details.html?ids=${data.id}" class="card">
			<img src="${imageContainer}" alt="${nameContainer}" class="beer-image"/>
			<div class="name">${nameContainer}</div>
         <div class="rating">${taglineContainer}</div>
		 <div class="abv"><h2 class="alchohol">Alchohol percentage: </h2>${abvContainer}</div>
         </a>`;
	}
}

	catch(error) {
		beerContainer.innerHTML = `<h1>Ops, something went wrong.</h1>`;
	
    }
}

getBeers();

