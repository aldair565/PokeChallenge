var row1 = document.getElementById("first row");
var row2 = document.getElementById("second row");
var pokefetch = [];

const list = fetch("https://pokeapi.co/api/v2/pokemon?limit=6&offset=0")
.then(response => response.json())
.then(pokemonlist =>{
    for (let i = 0; i < 3; i++){
        row1.innerHTML += `<div class="col-4">
            <div class="card" style="width: 18rem;" id = "card1">
                <img src="" class="card-img-top" alt="${pokemonlist.results[i].name}">
                <div class="card-body">
                    <h5 class="card-title">${pokemonlist.results[i].name}</h5>
                    <a href="/details.html?${i}" class="btn btn-primary">Details</a>
                </div>
            </div>
        </div>`
        pokefetch.push(`fetch("${pokemonlist.results[i].url}")`);
    }
    
    for (i = 3; i < 6; i++){
        row2.innerHTML += `<div class="col-4">
            <div class="card" style="width: 18rem;" id = "card2">
                <img src="" class="card-img-top" alt="${pokemonlist.results[i].name}">
                <div class="card-body">
                    <h5 class="card-title">${pokemonlist.results[i].name}</h5>
                    <a href="/details.html?${i}" class="btn btn-primary">Details</a>
                </div>
            </div>
        </div>`
        pokefetch.push(`fetch("${pokemonlist.results[i].url}")`);
    }
    
    return pokefetch;
})
.catch(err => console.log(err))

list.then(p => {
    for (let i = 0; i < 3; i++){
        row1.innerHTML = `<img src="${p[i].sprites.front_default}" class="card-img-top" alt="">`
    }
})