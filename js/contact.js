const contact = document.querySelector(".success");
const form = document.querySelector(".contact-form");
const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");
const button = document.querySelector("#submit");

function validateForm(event) {
    event.preventDefault();

    if (checkLength(firstName.value, 1)) {
        firstNameError.style.display = "none";
    } else {
        firstNameError.style.display = "block";
    }

    if (checkLength(subject.value, 9)) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    if (validateEmail(email.value)) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (checkLength(address.value, 24)) {
        addressError.style.display = "none";
    } else {
        addressError.style.display = "block";
    }

    if ((checkLength(firstName.value, 1)) &&
        (checkLength(subject.value, 9)) &&
        (validateEmail(email.value)) &&
        (checkLength(address.value, 24))) {
        contact.innerHTML +=
            `<div class="success">Congrats! Your form has been submitted.</div>`
    }
}

button.addEventListener("click", validateForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

