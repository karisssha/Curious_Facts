import { getRandomFact } from "./api.js";

import { addFavourite, renderFavourites } from "./favourites.js";

// evento click API

function showRandomFact (){
    getRandomFact();
    const curiosityScreen = document.querySelector ('#id-curiosity-screen');
    const fact = document.querySelector ('#fact-API');
    const favouriteFacts = document.querySelector ('#favourites-list');
    const kitty = document.querySelector ('#facts-cat');

    fact.classList.remove ('hidden');
    favouriteFacts.classList.add ('hidden');
    curiosityScreen.classList.remove ('favourite');
    kitty.setAttribute('src', '/assets/img/cat_splash.svg');
}

const clickNextFact = document.querySelector("#next-fact-btn");
clickNextFact.addEventListener("click", showRandomFact)


// event to add a favourite

const clickAddFavourite = document.querySelector('#id_addToFavourite');
clickAddFavourite.addEventListener("click", addFavourite)


//function for showing and hidden screens

function showFavourites (){
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

// event to go to favourite

const clickgoToFavourite = document.querySelector('#id_goToFavourites');
clickgoToFavourite.addEventListener("click", showFavourites)
