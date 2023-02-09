async function getPhotographers() {
    try {
        const resPhotographers = await fetch("data/photographers.json");
        console.log(resPhotographers);
        const jsonPhotographers = await resPhotographers.json();
        console.log(jsonPhotographers);
        const dataPhotographers = jsonPhotographers.photographers;
        console.log(dataPhotographers);
        return { dataPhotographers: { ...photographers } };
    } catch (error) {
        console.log(error);
        // document.querySelector(h2).textContent =
        //     " Erreur d'affichage - nous sommes désolés ";
    }
}
