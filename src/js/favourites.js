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
    const popup = document.querySelector("#id-popUp")
    popup.classList.remove("hidden")
    setTimeout(function(){
        popup.classList.add("hidden")
    },3000)
};

//function for showing and hidden screens

export function showFavourites (){
    renderFavourites()
    const curiosityScreen = document.querySelector ('#id-curiosity-screen');
    const fact = document.querySelector ('#fact-API');
    const favouriteFacts = document.querySelector ('#favourites-list');
    const kitty = document.querySelector ('#facts-cat');
    const addFavButton = document.querySelector("#id_addToFavourite");
    const favButton = document.querySelector('#id_goToFavourites');
    const nextFactButton = document.querySelector('#next-fact-btn');

    fact.classList.add ('hidden');
    favouriteFacts.classList.remove ('hidden');
    addFavButton.classList.add('hidden');
    favButton.classList.add('hidden');
    nextFactButton.classList.remove('hidden');
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
    const nextFactButton = document.querySelector('#next-fact-btn');
    const favButton = document.querySelector('#id_goToFavourites');

    fact.classList.remove('hidden');
    favouriteFacts.classList.add('hidden');
    nextFactButton.classList.add('hidden');
    favButton.classList.remove('hidden');
    changeRandomFact(favouriteFactsId, favouriteFact);
};
