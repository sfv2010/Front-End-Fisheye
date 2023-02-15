function displayModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}
window.onload = function () {
    const contact = document.querySelector(".contact_photographer");
    contact.addEventListener("click", displayModal);
};
