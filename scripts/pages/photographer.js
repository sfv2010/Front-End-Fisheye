//Function to create each photographer
async function displayData(photographers) {
    const photographersSection = document.querySelector(".photograph-header");
    //Loop through the Photographers array and create a profile for each
    photographers.forEach((photographer) => {
        const photographerInfo = photographerIntroduction(photographer);
        console.log(photographerInfo);
        //create each photographer in a Dom element
        const userCardDOM = photographerInfo.getPhotographerCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
}
//Function to get,selection and display photographer data
async function init() {
    //media or photographers
    const { photographers } = await getPhotographers();
    //console.log("photographers=" + photographers[0]);
    //split("?")[1] = id, split("?")[0]= http...
    const idPhotographer = location.href.split("?")[1];
    console.log(idPhotographer);
    //typeof idPhotographer = Sting
    const SelectedPhotographer = await photographers.filter(
        (photographer) => photographer.id == idPhotographer
    );

    //pourquoi sur console on ne peut pas
    console.log("photographer=" + SelectedPhotographer);
    displayData(SelectedPhotographer);
}
init();
