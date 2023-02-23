//Function to fetch json data
export async function getPhotographers() {
    try {
        const resPhotographers = await fetch("data/photographers.json");
        const jsonPhotographers = await resPhotographers.json();
        return jsonPhotographers;
    } catch (error) {
        console.log(error);
        document.querySelector(".photographer_section").textContent =
            " Erreur d'affichage - nous sommes désolés ";
    }
}
