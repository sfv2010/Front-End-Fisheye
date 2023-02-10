//Function to create each photographer
async function displayData(photographers) {
    const photographersSection = document.querySelector(".photograph-header");
    //Loop through the Photographers array and create a profile for each
    photographers.forEach((photographer) => {
        const photographerInfo = photographerIntroduction(photographer);
        console.log(photographerInfo);
        //create each photographer in a Dom element
        const userCardDOM = photographerInfo.getPhotgrapherCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
}
//Function to get,selection and display photographer data
async function init() {
    const { photographers } = await getPhotographers();
    console.log("photographers=" + photographers[0]);
    const idPhotographer = window.location.href.split("?")[1];
    console.log(idPhotographer);
    const photographer = await photographers.filter(
        (photographer) => photographer.id == idPhotographer
    );
    console.log("photographer=" + photographer);
    displayData(photographer);
}
init();
