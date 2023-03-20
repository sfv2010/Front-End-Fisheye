import { lightboxMedia } from "../factories/lightboxFactory.js";

export function viewLightbox(medias) {
    const lightboxModal = document.getElementById("lightboxModal");
    const allImages = document.querySelectorAll(".viewIn");
    const main = document.getElementById("main");
    const likePrice = document.querySelector(".likePrice");
    const closeLightboxModalButton = document.querySelector(".closeLightbox");
    const mediaNext = document.querySelector(".chevronNext");
    const mediaBack = document.querySelector(".chevronBack");
    const arrayAllImages = Array.from(allImages);
    let currentId;
    //Function to open the modal
    function displayLightboxModal(e) {
        lightboxModal.style.display = "block";
        main.ariaHidden = "true";
        likePrice.ariaHidden = "true";
        likePrice.tabIndex = "-1";
        lightboxModal.ariaHidden = "false";
        const media = e.target;
        currentId = media.id;
        lightboxMedia(currentId, medias);
    }
    //Function for displaying next photo in modal
    function showNext() {
        const zoomLightbox = document.querySelector(".viewInLightbox");
        const figcaption = document.querySelector("figcaption");

        let currentIndex = arrayAllImages.findIndex(
            (current) => current.id === currentId
        );

        const nextId =
            arrayAllImages[
                currentIndex < arrayAllImages.length - 1 ? currentIndex + 1 : 0
            ].id;

        currentId = nextId;
        lightboxMedia(nextId, medias);
        zoomLightbox.remove();
        figcaption.remove();
    }
    //Function for displaying previous photo in modal
    function showBack() {
        const zoomLightbox = document.querySelector(".viewInLightbox");
        const figcaption = document.querySelector("figcaption");

        let currentIndex = arrayAllImages.findIndex(
            (current) => current.id === currentId
        );

        const backId =
            arrayAllImages[
                currentIndex > 0 ? currentIndex - 1 : arrayAllImages.length - 1
            ].id;

        currentId = backId;
        lightboxMedia(backId, medias);
        zoomLightbox.remove();
        figcaption.remove();
    }
    //Function to close the modal
    function closeLightboxModal() {
        const zoomLightbox = document.querySelector(".viewInLightbox");
        const figcaption = document.querySelector("figcaption");

        lightboxModal.style.display = "none";
        main.ariaHidden = "false";
        likePrice.ariaHidden = "false";
        likePrice.tabIndex = "0";
        lightboxModal.ariaHidden = "true";
        zoomLightbox.remove();
        figcaption.remove();
    }

    allImages.forEach((elem) => {
        elem.addEventListener("click", displayLightboxModal);
        elem.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                displayLightboxModal(e);
            }
        });
    });

    mediaNext.addEventListener("click", showNext);
    mediaBack.addEventListener("click", showBack);
    closeLightboxModalButton.addEventListener("click", closeLightboxModal);
    //ArrowRight/Left,Escape keys
    lightboxModal.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") {
            showNext();
        } else if (e.key === "ArrowLeft") {
            showBack();
        } else if (e.key === "Escape") {
            closeLightboxModal(e);
        }
    });
}
