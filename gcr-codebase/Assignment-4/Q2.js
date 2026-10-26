"use strict";

const form = document.getElementById("studentForm");

const fields = [
    {
        id: "name",
        errorId: "nameError",
        regex: /^[A-Za-z ]+$/,
        message: "Name must contain only alphabets."
    },
    {
        id: "email",
        errorId: "emailError",
        regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Enter a valid email address."
    },
    {
        id: "phone",
        errorId: "phoneError",
        regex: /^\d{10}$/,
        message: "Phone must contain exactly 10 digits."
    },
    {
        id: "password",
        errorId: "passwordError",
        regex: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9\s])\S+$/,
        message: "Password needs uppercase, number and special character."
    }
];

function validateField(field) {
    const input = document.getElementById(field.id);
    const error = document.getElementById(field.errorId);
    const isValid = field.regex.test(input.value.trim());

    input.style.borderColor = isValid ? "green" : "red";
    error.textContent = isValid ? "" : field.message;

    return isValid;
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const results = fields.map(validateField);
    const allValid = results.every(Boolean);

    document.getElementById("result").textContent =
        allValid ? "Registration successful!" : "Please correct the errors.";
});