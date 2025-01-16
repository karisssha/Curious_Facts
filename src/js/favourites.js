import { changeRandomFact } from "./functions.js";

export const getFavourites = function (){
    return JSON.parse(localStorage.getItem('favourites') ?? "{}");
}


export const addFavourite = function (){
    let randomFactValue = document.querySelector("#fact-API").textContent;
    let randomFactIdValue = document.querySelector("#fact-API-id").textContent;

    let favourites = getFavourites();
    favourites[randomFactIdValue] = randomFactValue

    localStorage.setItem('favourites', JSON.stringify(favourites));
};

//function for showing and hidden screens

export function showFavourites (){
    renderFavourites()
    const curiosityScreen = document.querySelector ('#id-curiosity-screen');
    const fact = document.querySelector ('#fact-API');
    const favouriteFacts = document.querySelector ('#favourites-list');
    const kitty = document.querySelector ('#facts-cat');

    fact.classList.add ('hidden');
    favouriteFacts.classList.remove ('hidden');
    curiosityScreen.classList.add ('favourite');
    kitty.setAttribute('src', '/assets/img/cat_favourites.svg');
}

//render favourite list

const renderFavourites = function (){
    const ul = document.createElement("ul");
    ul.setAttribute ("id", "id-favourite-fact");
    document.querySelector ("#favourites-list").innerHTML = "";
    document.querySelector ("#favourites-list").appendChild(ul);

    let favourites = getFavourites();
    for (const [key, value] of Object.entries(favourites)) {
        const li = document.createElement("li");
        const link = document.createElement("a");

        link.setAttribute("href", "#");
        link.addEventListener("click", function(){
            showFavouriteFact(key);
        })
        link.textContent = value.substring(0,40) + "...";
        li.appendChild(link);
        ul.appendChild(li);
    };
};

function showFavouriteFact (favouriteFactsId) {
    const favourites = getFavourites()
    const favouriteFact = favourites[favouriteFactsId]; 
    const fact = document.querySelector("#fact-API");
    const favouriteFacts = document.querySelector("#favourites-list");

    fact.classList.remove('hidden');
    favouriteFacts.classList.add('hidden');
    changeRandomFact(favouriteFactsId, favouriteFact);
};
