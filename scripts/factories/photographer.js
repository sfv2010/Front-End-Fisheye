//Factory Function that creates a photographer card
export function photographerFactory(photographer) {
    const { city, country, id, name, portrait, price, tagline } = photographer;
    const picture = `assets/photographers/${portrait}`;
    //Function that returns the photographer DOM element
    function getUserCardDOM() {
        // Create article element
        const articlePhotographer = document.createElement("article");
        // Create link
        const linkPhotographer = document.createElement("a");
        linkPhotographer.href = `photographer.html?${id} `;
        linkPhotographer.setAttribute(
            "aria-label",
            `Lien vers le portfolio de ${name}`
        );
        // Create image
        const imgPhotographer = document.createElement("img");
        imgPhotographer.src = picture;
        imgPhotographer.alt = name;
        // Create h2
        const h2Photographer = document.createElement("h2");
        h2Photographer.textContent = name;
        // Create div
        const divPhotographer = document.createElement("div");
        divPhotographer.classList.add("introduction");
        divPhotographer.tabIndex = "0";
        // Create h3
        const h3Photographer = document.createElement("h3");
        h3Photographer.textContent = city + ", " + country;
        // Create p
        const pPhotographer = document.createElement("p");
        pPhotographer.textContent = tagline;
        // Create span
        const spanPhotographer = document.createElement("span");
        spanPhotographer.textContent = `${price} €/jour`;

        articlePhotographer.appendChild(linkPhotographer);
        linkPhotographer.appendChild(imgPhotographer);
        linkPhotographer.appendChild(h2Photographer);
        articlePhotographer.appendChild(divPhotographer);
        divPhotographer.appendChild(h3Photographer);
        divPhotographer.appendChild(pPhotographer);
        divPhotographer.appendChild(spanPhotographer);

        return articlePhotographer;
    }
    return { getUserCardDOM };
}
