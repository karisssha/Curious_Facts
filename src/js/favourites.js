export const getFavourites = function (){
    return JSON.parse(localStorage.getItem('favourites') ?? "{}");
}


export const addFavourite = function (){
    let randomFactValue = document.querySelector("#fact-API").textContent;
    let randomFactIdValue = document.querySelector("#fact-API-id").textContent;

    let favourites = getFavourites();
    favourites[randomFactIdValue] = randomFactValue

    localStorage.setItem('favourites', JSON.stringify(favourites));
}

