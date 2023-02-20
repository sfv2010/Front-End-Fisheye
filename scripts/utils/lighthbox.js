export function viewLightbox() {
    const lightboxModal = document.getElementById("lightboxModal");
    const main = document.getElementById("main");
    // const focusInput = document.getElementById("firstName");
    function displayLightboxModal() {
        lightboxModal.style.display = "block";
        main.ariaHidden = "true";
        lightboxModal.ariaHidden = "false";
        // focusInput.focus();
    }
    function closeLightboxModal() {
        lightboxModal.style.display = "none";

        main.ariaHidden = "false";
        lightboxModal.ariaHidden = "true";
    }
    const LightboxSelected = document.querySelectorAll(".viewInLightbox");
    LightboxSelected.forEach((elem) => {
        console.log(elem);
        elem.addEventListener("click", displayLightboxModal);
    });

    const closeLightboxModalButton = document.querySelector(".closeModal");
    closeLightboxModalButton.addEventListener("click", closeLightboxModal);
}
