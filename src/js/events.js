import { getRandomFact } from "./api.js";
import { changeRandomFact } from "./functions.js"
import { addFavourite } from "./favourites.js";
// evento click API

const clickNextFact = document.querySelector("#next-fact-btn");
clickNextFact.addEventListener("click", getRandomFact, changeRandomFact)


// event to add a favourite

const clickAddFavourite = document.querySelector('#id_addToFavourite');
clickAddFavourite.addEventListener("click", addFavourite)