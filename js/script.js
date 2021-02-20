const url = "https://api.punkapi.com/v2/beers";

const beerContainer = document.querySelector(".grid");

async function getBeers() {

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
			`<div class="card">
			<img src="${imageContainer}" alt="${nameContainer}" class="beer-image"/>
			<div class="name">${nameContainer}</div>
         <div class="rating">${taglineContainer}</div>
		 <div class="abv"><h2 class="alchohol">Alchohol percentage: </h2>${abvContainer}</div>
         </div>`;
    }
}

getBeers();




/* const url = "http://xkcd.com/info.0.json";
const proxy = "https://noroffcors.herokuapp.com/"
const container = document.querySelector(".container");

const corsFix = proxy + url;

async function callApi() {
	const response = await fetch(corsFix);
	const data = await response.json();

console.log(data);


container.innerHTML = "";

	for (let i = 0; i < data.length; i++) {
		const nameComics = data[i].title;
		const imageComics = data[i].img;

		if (i === 8) {
			break;
		}

		container.innerHTML += 
		`<div class="comics><h2>Title: </h2>${nameComics}</div>`;
	}
}

callApi(); */





/* const url = "http://openlibrary.org/api/volumes/brief/isbn/9780525440987.json/";
const proxy = "https://noroffcors.herokuapp.com/";
const booksContainer = document.querySelector(".books");

const corsFix = proxy + url;

async function callApi() {
	const response = await fetch(corsFix);
	const results = await response.json();

	const resultsBooks = results.records;

	console.log(resultsBooks);
	

	booksContainer.innerHTML = "";

	function createHTML(resultsBooks) {
	for (let i = 0; i < resultsBooks.length; i++){

		if (i === 10) {
			break;
		}
		booksContainer.innerHTML += `<div class="book">${resultsBooks}</div>`
	}
}
}

callApi(); */