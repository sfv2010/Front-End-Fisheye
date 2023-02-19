import { getPhotographers } from "../utils/service.js";
import { photographerIntroduction } from "../factories/photographerIntroduction.js";
import { mediaFactory } from "../factories/mediaFactory.js";
import {} from "../utils/contactForm.js";
import { timesLiked } from "../utils/likes.js";

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
    //Loop through the Photographers array and create a profile for each
    medias.forEach((media) => {
        const mediaInfo = mediaFactory(media);
        //create each photographer in a Dom element
        const userCardDOM = mediaInfo.getMediaCardDOM();
        mediaSection.appendChild(userCardDOM);
    });
    timesLiked();
}
//Function to get,selection and display photo data
async function initMedia() {
    //media or photographers
    const { media } = await getPhotographers();
    console.log("media=" + media[0]);
    //split("?")[1] = id, split("?")[0]= http...
    const idPhotographer = location.href.split("?")[1];
    //typeof idPhotographer = Sting
    const SelectedPhoto = await media.filter(
        (media) => media.photographerId == idPhotographer
    );
    displayMedia(SelectedPhoto);
}
initMedia();
