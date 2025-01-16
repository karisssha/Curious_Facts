export const getFavourites = function (){
    return JSON.parse(localStorage.getItem('favourites') ?? "{}");
}


export const addFavourite = function (){
    let randomFactValue = document.querySelector("#fact-API").textContent;
    let randomFactIdValue = document.querySelector("#fact-API-id").textContent;

    let favourites = getFavourites();
    favourites[randomFactIdValue] = randomFactValue

    localStorage.setItem('favourites', JSON.stringify(favourites));
    // pop up //
    const popup = document.querySelector("#id-popUp")
    popup.classList.remove("hidden")
    setTimeout(function(){
        popup.classList.add("hidden")
    },3000)
}

//render favourite list

export const renderFavourites = function (){
    const ul = document.createElement("ul")
    ul.setAttribute ("id", "id-favourite-fact")
    document.querySelector ("#favourites-list").innerHTML = ""
    document.querySelector ("#favourites-list").appendChild(ul)

    let favourites = getFavourites();
    for (const [key,value] of Object.entries(favourites)) {
        const li = document.createElement("li")
        li.innerHTML = value.substring(0,40) + "..."
        ul.appendChild(li)
    };
}   