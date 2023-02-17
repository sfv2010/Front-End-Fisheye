//Factory Function that creates a photographer introduction
export function photographerIntroduction(photographer) {
    //Object destructuring assignment. Extract multiple properties from object
    const { city, country, name, portrait, tagline, price } = photographer;

    const picture = `assets/photographers/${portrait}`;
    //Function that returns the photographer DOM element
    function getPhotographerCardDOM() {
        // Create article element
        const articlePhotographer = document.createElement("article");

        // Create image
        const imgPhotographer = document.createElement("img");
        imgPhotographer.src = picture;
        imgPhotographer.alt = name;

        // Create div
        const divPhotographer = document.createElement("div");
        divPhotographer.classList.add("introduction");
        divPhotographer.tabIndex = "2";
        // Create h2
        const h2Photographer = document.createElement("h2");
        h2Photographer.textContent = name;
        // Create h3
        const h3Photographer = document.createElement("h3");
        h3Photographer.textContent = city + ", " + country;
        // Create p
        const pPhotographer = document.createElement("p");
        pPhotographer.textContent = tagline;
        //create div pour small display
        const divSmallDisplay = document.createElement("div");
        divSmallDisplay.classList.add("likePrice");
        divSmallDisplay.tabIndex = "0";
        const pLike = document.createElement("p");
        pLike.textContent = "nombre de like";
        const iconLike = document.createElement("i");
        iconLike.classList.add("fa-solid");
        iconLike.classList.add("fa-heart");
        const pPrice = document.createElement("p");
        pPrice.textContent = `${price} €/jour`;

        //modal
        document.getElementById(
            "formContact"
        ).innerHTML = `Contactez-moi <br> ${name}`;

        articlePhotographer.appendChild(divPhotographer);
        // articlePhotographer.appendChild(buttonPhotographer);
        articlePhotographer.appendChild(imgPhotographer);
        articlePhotographer.appendChild(divSmallDisplay);

        divPhotographer.appendChild(h2Photographer);
        divPhotographer.appendChild(h3Photographer);
        divPhotographer.appendChild(pPhotographer);

        divSmallDisplay.appendChild(pLike);
        divSmallDisplay.appendChild(pPrice);
        pLike.appendChild(iconLike);

        return articlePhotographer;
    }
    return { getPhotographerCardDOM };
}
