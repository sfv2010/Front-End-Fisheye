export function viewLightbox() {
    const lightboxModal = document.getElementById("lightboxModal");
    const lightboxSelected = document.querySelectorAll(".viewIn");
    const closeLightboxModalButton = document.querySelector(".closeLightbox");
    const zoomLightbox = document.querySelector(".viewInLightbox");
    const main = document.getElementById("main");
    // const focusInput = document.getElementById("firstName");
    function displayLightboxModal(e) {
        lightboxModal.style.display = "block";
        main.ariaHidden = "true";
        lightboxModal.ariaHidden = "false";
        console.log(lightboxSelected);

        zoomLightbox.setAttribute("src", e.target.getAttribute("src"));
    }
    function closeLightboxModal() {
        lightboxModal.style.display = "none";
        main.ariaHidden = "false";
        lightboxModal.ariaHidden = "true";
    }

    lightboxSelected.forEach((elem) => {
        elem.addEventListener("click", displayLightboxModal);
    });

    closeLightboxModalButton.addEventListener("click", closeLightboxModal);
}
