import { getPhotographers } from "../utils/service.js";
import { photographerFactory } from "../factories/photographer.js";
//Function to create each photographer
async function displayData(photographers) {
    const photographersSection = document.querySelector(
        ".photographer_section"
    );
    //Loop through the Photographers array and create a profile for each
    photographers.forEach((photographer) => {
        const photographerInfo = photographerFactory(photographer);
        //create each photographer in a Dom element
        const userCardDOM = photographerInfo.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
}
//Function to get and display photographer data
async function init() {
    const { photographers } = await getPhotographers();
    //console.log("photographers=" + photographers);
    displayData(photographers);
}
init();
