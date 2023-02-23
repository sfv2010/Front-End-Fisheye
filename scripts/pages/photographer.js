import { getPhotographers } from "../utils/service.js";
import { photographerIntroduction } from "../factories/photographerIntroduction.js";
import { mediaFactory } from "../factories/mediaFactory.js";
import {} from "../utils/contactForm.js";
import { viewLightbox } from "../utils/lighthbox.js";
import { timesLiked } from "../utils/likes.js";
// import { orderBy } from "../utils/sort.js";
import { lightboxFactory } from "../factories/lightboxFactory.js";

// ---------------------------photographer--------------------------
//Function to create selected photographer
function displayData(photographer) {
    const mediaSection = document.querySelector(".photograph-header");
    //Loop through the Photographer array and create a profile
    console.log(photographer);
    photographer.forEach((info) => {
        const photographerInfo = photographerIntroduction(info);
        //Create photographer information in the Dom element
        const userCardDOM = photographerInfo.getPhotographerCardDOM();
        mediaSection.appendChild(userCardDOM);
    });
}
//Function to get,selection and display photographer data
async function init() {
    //media or photographers
    const { photographers } = await getPhotographers();
    //split("?")[1] = id, split("?")[0]= http...
    const idPhotographer = location.href.split("?")[1];
    //typeof idPhotographer = Sting
    const SelectedPhoto = await photographers.filter(
        (photographer) => photographer.id == idPhotographer
    );

    //pourquoi sur console on ne peut pas
    console.log("photographer=" + SelectedPhoto);
    displayData(SelectedPhoto);
}
init();

// ---------------------------media--------------------------
//Function to create photos of selected photographer
async function displayMedia(medias) {
    const mediaSection = document.querySelector(".containerMediaWork");
    //Loop through the media array and create photo
    medias.forEach((media) => {
        const mediaInfo = mediaFactory(media);
        //create Dom element
        const userCardDOM = mediaInfo.getMediaCardDOM();
        mediaSection.appendChild(userCardDOM);
    });
    // const lightboxSection = document.getElementById("lightboxModal");
    // const lightboxInfo = lightboxFactory(medias);
    // const lightboxCardDOM = lightboxInfo.getLightboxCardDOM();
    // lightboxSection.appendChild(lightboxCardDOM);

    //Execute the timesliked function
    timesLiked();
    //Execute the viewLightbox function
    // viewLightbox();
}
async function displayLightbox(medias) {
    const lightboxSection = document.getElementById("lightboxModal");

    const lightboxInfo = lightboxFactory(medias);
    const lightboxCardDOM = lightboxInfo.getLightboxCardDOM();
    lightboxSection.appendChild(lightboxCardDOM);
    viewLightbox();
}
//Function to get,selection and display photo data
export async function initMedia() {
    //media or photographers
    const { media } = await getPhotographers();
    //split("?")[1] = id, split("?")[0]= http...
    const idPhotographer = location.href.split("?")[1];
    //typeof idPhotographer = Sting
    const selectedPhoto = await media.filter(
        (media) => media.photographerId == idPhotographer
    );
    // const lightboxPhoto = await selectedPhoto.find(
    //              (media) => media.id == idLightbox.value
    //          );
    const copySelectedPhoto = [...selectedPhoto];
    copySelectedPhoto.sort((a, b) => b.likes - a.likes);

    const select = document.getElementById("dropDownMenu");
    select.addEventListener("change", () => {
        if (select.value === "Date") {
            console.log(select.value);
            copySelectedPhoto.sort(
                (a, b) => new Date(b.date) - new Date(a.date)
            );
        } else if (select.value === "popularity") {
            copySelectedPhoto.sort((a, b) => b.likes - a.likes);
        } else if (select.value === "Titre") {
            console.log(select.value);
            copySelectedPhoto.sort((a, b) =>
                a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1
            );
        }
    });

    displayMedia(copySelectedPhoto);

    displayLightbox(selectedPhoto);
}
initMedia();

// async function lightboxMedia() {
//     const lightboxSelected = document.querySelectorAll(".viewIn");
//     console.log(lightboxSelected);
//     const { media } = await getPhotographers();
//     const idPhotographer = location.href.split("?")[1];
//     // typeof idPhotographer = Sting
//     const selectedPhoto = await media.filter(
//         (media) => media.photographerId == idPhotographer
//     );
//     // await lightboxSelected.forEach((elem) => {
//     //     console.log(lightboxSelected);
//     //     elem.addEventListener("click", displayLightbox(selectedPhoto));
//     // });

//     displayLightbox(selectedPhoto);
// }
// lightboxMedia();
