export function lightboxFactory(data) {
    //Object destructuring assignment. Extract multiple properties from object
    const { photographerId, title, image, video } = data;

    //Function that returns the photographer DOM element
    function getLightboxCardDOM() {
        //create div
        const lightbox = document.createElement("div");
        lightbox.classList.add("lightbox");
        lightbox.tabIndex = "0";

        //create button
        const buttonClose = document.createElement("button");
        buttonClose.classList.add("closeLightbox");
        buttonClose.classList.add("fa-solid");
        buttonClose.classList.add("fa-xmark");
        buttonClose.tabIndex = "0";
        buttonClose.ariaLabel = "Close dialog";
        // Create div
        const divBack = document.createElement("div");
        divBack.classList.add("chevron");
        divBack.classList.add("fa-sharp");
        divBack.classList.add("fa-solid");
        divBack.classList.add("fa-chevron-left");
        divBack.tabIndex = "0";

        // Create div
        const divNext = document.createElement("div");
        divNext.classList.add("chevron");
        divNext.classList.add("fa-sharp");
        divNext.classList.add("fa-solid");
        divNext.classList.add("fa-chevron-right");
        divNext.tabIndex = "0";

        // Create figure
        const figure = document.createElement("figure");
        figure.classList.add("figure");

        // Create figcaption
        const figcaption = document.createElement("figcaption");
        figcaption.classList.add("figcaption");
        figcaption.textContent = title;
        figcaption.tabIndex = "0";

        if (video) {
            // Create video
            const video = document.createElement("video");
            video.src = "";
            video.alt = title;
            video.controls = "cotrols";
            video.textContent = "Sorry, can't play video";
            video.classList.add("viewInLightbox");
            figure.appendChild(video);
        } else {
            // Create image
            const image = document.createElement("img");
            image.src = "";
            image.alt = title;
            image.classList.add("viewInLightbox");
            figure.appendChild(image);
        }

        lightbox.appendChild(buttonClose);
        lightbox.appendChild(divBack);
        lightbox.appendChild(figure);
        figure.appendChild(figcaption);
        lightbox.appendChild(divNext);

        return lightbox;
    }
    return { getLightboxCardDOM };
}
