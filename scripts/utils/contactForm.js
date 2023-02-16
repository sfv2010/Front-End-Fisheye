function displayModal() {
    const modal = document.getElementById("contact_modal");
    const main = document.getElementById("main");
    // const closeButton = document.querySelector(".closeModal");
    modal.style.display = "block";
    main.ariaHidden = "true";
    modal.ariaHidden = "false";
    // closeButton.focus();
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}
window.onload = function () {
    const contact = document.querySelector(".contact_photographer");
    console.log(contact);
    contact.addEventListener("click", displayModal);
};
