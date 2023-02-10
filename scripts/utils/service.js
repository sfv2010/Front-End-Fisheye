async function getPhotographers() {
    try {
        const resPhotographers = await fetch("data/photographers.json");
        console.log(resPhotographers);
        const jsonPhotographers = await resPhotographers.json();
        console.log(jsonPhotographers);
        // const dataPhotographers = jsonPhotographers.photographers;
        // console.log(dataPhotographers);
        return jsonPhotographers;
    } catch (error) {
        console.log(error);
        document.querySelector(".photographer_section").textContent =
            " Erreur d'affichage - nous sommes désolés ";
    }
}
