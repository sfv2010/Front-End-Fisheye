function displayModal() {
    const modal = document.getElementById("contact_modal");
    const main = document.getElementById("main");
    const focusInput = document.getElementById("firstName");
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
contact.addEventListener("click", displayModal);

const closeModalButton = document.querySelector(".closeModal");
closeModalButton.addEventListener("click", closeModal);

//-------Function validation
const form = document.querySelector("form");
function validate(e) {
    // e.preventDefault(); //not to send data before validation

    const firstElem = document.getElementById("firstName");
    const lastElem = document.getElementById("lastName");
    const emailElem = document.getElementById("email");
    const textareaElem = document.getElementById("message");

    //function to display error messages
    const createError = (elem, errorMessage) => {
        //create span element
        const errorSpan = document.createElement("span");
        //add class
        errorSpan.classList.add("error");
        //add error message
        errorSpan.textContent = errorMessage;
        //add aria-live
        errorSpan.ariaLive = "polite";
        //append to parent element
        elem.parentNode.appendChild(errorSpan);
    };

    // Collect all items that display errors and delete them after each submission
    const errorElems = form.querySelectorAll(".error ");
    errorElems.forEach((elem) => {
        elem.remove();
    });
    //---------name validation---------
    const firstValue = firstElem.value.trim();
    const namePattern = /^[a-zA-Z  '\-éèêëçäà]+$/;
    if (firstValue.length < 2 || !namePattern.test(firstElem.value)) {
        createError(
            firstElem,
            "Veuillez entrer au moins 2 caractères sans chiffres."
        );
        firstElem.classList.add("inputError");
        e.preventDefault(); //not to send data before validation
    } else {
        firstElem.classList.remove("inputError");
    }

    const lastValue = lastElem.value.trim();
    if (lastValue.length < 2 || !namePattern.test(lastElem.value)) {
        createError(
            lastElem,
            "Veuillez entrer au moins 2 caractères sans chiffres."
        );
        lastElem.classList.add("inputError");
        e.preventDefault(); //not to send data before validation
    } else {
        lastElem.classList.remove("inputError");
    }
    //---------email validation---------
    const pattern =
        /^[a-zA-Z0-9_+-]+(\.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/; //test() display an error
    if (emailElem.value === "" || !pattern.test(emailElem.value)) {
        createError(emailElem, "Veuillez entrer une adresse mail valide.");
        emailElem.classList.add("inputError");
        e.preventDefault(); //not to send data before validation
    } else {
        emailElem.classList.remove("inputError");
    }
    //---------textarea validation---------
    const textareaValue = textareaElem.value.trim();
    if (textareaValue.length < 5) {
        createError(
            textareaElem,
            "Veuillez entrer un message d'au moins 5 caractères."
        );
        textareaElem.classList.add("inputError");
        e.preventDefault(); //not to send data before validation
    } else {
        textareaElem.classList.remove("inputError");
    }
    console.log({
        firstName: firstValue,
        lastName: lastValue,
        email: emailElem.value,
        textarea: textareaValue,
    });
}

form.addEventListener("submit", validate);
