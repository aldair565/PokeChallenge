let url = "https://pokeapi.co/api/v2/pokemon?limit=6&offset=0";
const cards = document.getElementById("pokeList");
var pokefetch = [];
const nextButton = document.getElementById("btnNext");
const previousButton = document.getElementById("btnPrevious");
let nextUrl = "";
let prevUrl = "";

function getPokemon(url){
    fetch(url)
    .then(response => response.json())
    .then(pokemonlist =>{
        nextUrl = pokemonlist.next;
        prevUrl = pokemonlist.previous;
    
        for (let i = 0; i < 6; i++){
            fetch(pokemonlist.results[i].url)
            .then(response => response.json())
            .then(img => {
                cards.innerHTML += `<div class="col-4">
                    <div class="card" style="width: 18rem;" id = "card${i}">
                        <img src="${img.sprites.front_default}" class="card-img-top mx-auto" alt="${pokemonlist.results[i].name}">
                        <div class="card-body mx-auto">
                            <h5 class="card-title text-center">#${img.id} ${pokemonlist.results[i].name}</h5>
                            <a href="/details.html?${pokemonlist.results[i].url}"><button type="button" class="btn btn-primary">Details</button></a>
                        </div>
                    </div>
                </div>`
            })
        }
    })
    .catch(err => console.log(err))
}

getPokemon(url);

nextButton.addEventListener("click", function() {
    getPokemon(nextUrl);
});

// previousButton.addEventListener("click", function(){
//     if (prevUrl != null){
//         getPokemon(prevUrl);
//     }
// });