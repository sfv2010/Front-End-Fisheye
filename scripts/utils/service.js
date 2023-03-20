//Function to fetch json data
export async function getPhotographers() {
    try {
        const resPhotographers = await fetch("data/photographers.json");
        const jsPhotographers = await resPhotographers.json();
        return jsPhotographers;
    } catch (error) {
        console.log(error);
        document.querySelector(".photographer_section").textContent =
            " Erreur d'affichage - nous sommes désolés ";
    }
}
