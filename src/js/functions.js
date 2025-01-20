function changeRandomFact(randomFactId, randomFact) {
  let randomFactDOM = document.querySelector("#fact-API");
  randomFactDOM.textContent = randomFact;

  let randomFactIdDOM = document.querySelector("#fact-API-id");
  randomFactIdDOM.textContent = randomFactId;
}

export { changeRandomFact };
