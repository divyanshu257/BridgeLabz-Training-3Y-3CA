"use strict";

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const errors = [];

    if (username.length < 5) {
        errors.push("Username must have at least 5 characters.");
    }

    if (password.length < 8) {
        errors.push("Password must have at least 8 characters.");
    }

    if (!/[A-Z]/.test(password)) {
        errors.push("Password needs an uppercase letter.");
    }

    if (!/[a-z]/.test(password)) {
        errors.push("Password needs a lowercase letter.");
    }

    if (!/[0-9]/.test(password)) {
        errors.push("Password needs a number.");
    }

    if (!/[^A-Za-z0-9\s]/.test(password)) {
        errors.push("Password needs a special character.");
    }

    const message = document.getElementById("message");

    if (errors.length === 0) {
        message.textContent = "Login validation successful!";
        message.style.color = "green";
    } else {
        message.textContent = errors.join(" ");
        message.style.color = "red";
    }

    console.log(errors.length === 0 ? "Valid login input" : errors);
});