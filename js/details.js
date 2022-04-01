const detailsPage = window.location.href.toString();
const pokeapiUrl = detailsPage.split("/");
const id = pokeapiUrl[pokeapiUrl.length - 2];

fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
.then(response => response.json())
.then(pokemon => {
    let summary = document.getElementById("card")
    let stats = document.getElementById("stats")

    summary.innerHTML = `<div class="row g-0">
        <div class="col-md-4">
            <img src="${pokemon.sprites.front_default}" class="img-fluid" alt="${pokemon.name}">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h2 class="card-title">#${pokemon.id} ${pokemon.name}</h2>
                <p class="card-text">Weight: ${pokemon.weight}</p>
                <p class="card-text">Height: ${pokemon.height}</p>
            </div>
        </div>
    </div>`

    stats.innerHTML = `<div class="row">
        <div class="col-6 bg-primary text-center">${pokemon.abilities[0].ability.name}</div>
        <div class="col-6 bg-primary text-center">${pokemon.abilities[1].ability.name}</div>
    </div>`
})
.catch(err => console.log(err))