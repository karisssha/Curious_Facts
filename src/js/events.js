import { getRandomFact } from "./api.js";
import { changeRandomFact } from "./functions.js"

// evento click API

const clickNextFact = document.querySelector("#next-fact-btn");
clickNextFact.addEventListener("click", getRandomFact, changeRandomFact)
