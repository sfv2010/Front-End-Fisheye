//Factory Function that creates a photographer introduction
function photographerIntroduction(photographer) {
    //Object destructuring assignment. Extract multiple properties from object
    const { city, country, name, portrait, tagline } = photographer;
    //const city = photographer.city..

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
        divPhotographer.tabIndex = "0";
        // Create h2
        const h2Photographer = document.createElement("h2");
        h2Photographer.textContent = name;

        // Create h3
        const h3Photographer = document.createElement("h3");
        h3Photographer.textContent = city + ", " + country;
        // Create p
        const pPhotographer = document.createElement("p");
        pPhotographer.textContent = tagline;
        //Create button
        const buttonPhotographer = document.createElement("button");
        buttonPhotographer.classList.add("contact_button");
        // buttonPhotographer.onclick = "displayModal()";
        buttonPhotographer.textContent = "Contactez-moi";

        articlePhotographer.appendChild(divPhotographer);
        articlePhotographer.appendChild(buttonPhotographer);
        articlePhotographer.appendChild(imgPhotographer);
        divPhotographer.appendChild(h2Photographer);
        divPhotographer.appendChild(h3Photographer);
        divPhotographer.appendChild(pPhotographer);

        return articlePhotographer;
    }
    return { getPhotographerCardDOM };
}
