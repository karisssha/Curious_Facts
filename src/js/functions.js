function changeRandomFact(randomFact) {
    let randomFactDOM = document.querySelector("#fact-API");
    randomFactDOM.textContent = randomFact;
}

export {changeRandomFact}