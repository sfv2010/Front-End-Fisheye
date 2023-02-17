function displayModal() {
    const modal = document.getElementById("contact_modal");
    const main = document.getElementById("main");
    const focusInput = document.getElementById("lastName");
    modal.style.display = "block";
    main.ariaHidden = "true";
    modal.ariaHidden = "false";
    focusInput.focus();
}
function closeModal() {
    const modal = document.getElementById("contact_modal");
    const main = document.getElementById("main");
    modal.style.display = "none";

    main.ariaHidden = "false";
    modal.ariaHidden = "true";
}
const contact = document.querySelector(".contact_photographer");
console.log(contact);
contact.addEventListener("click", displayModal);

const closeModalButton = document.querySelector(".closeModal");
closeModalButton.addEventListener("click", closeModal);
