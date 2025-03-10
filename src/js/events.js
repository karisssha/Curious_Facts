import { getRandomFact } from "./api.js";

import { addFavourite, showFavourites } from "./favourites.js";

function showRandomFact() {
  getRandomFact();
  const curiosityScreen = document.querySelector("#id-curiosity-screen");
  const fact = document.querySelector("#fact-API");
  const favouriteFacts = document.querySelector("#favourites-list");
  const kitty = document.querySelector("#facts-cat");
  const footer = document.querySelector("#id-footer");
  const splash = document.querySelector("#id-welcomeScreen");
  const addFavButton = document.querySelector("#id_addToFavourite");
  const favButton = document.querySelector("#id_goToFavourites");

  fact.classList.remove("hidden");
  favouriteFacts.classList.add("hidden");
  addFavButton.classList.remove("hidden");
  favButton.classList.remove("hidden");
  curiosityScreen.classList.remove("favourite");
  kitty.setAttribute("src", "/assets/img/cat_splash.svg");
  footer.classList.remove("hidden");
  splash.classList.add("hidden");
  curiosityScreen.classList.remove("hidden");
}

const clickNextFact = document.querySelector("#next-fact-btn");
clickNextFact.addEventListener("click", showRandomFact);

const clickAddFavourite = document.querySelector("#id_addToFavourite");
clickAddFavourite.addEventListener("click", addFavourite);

const clickgoToFavourite = document.querySelector("#id_goToFavourites");
clickgoToFavourite.addEventListener("click", showFavourites);

const clickStart = document.querySelector("#start-button");
clickStart.addEventListener("click", showRandomFact);
