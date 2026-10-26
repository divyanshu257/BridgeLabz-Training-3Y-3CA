"use strict";

const user = {
    name: "John",
    email: "john@mail.com",
    age: 21
};

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const ageInput = document.getElementById("age");

nameInput.value = user.name;
emailInput.value = user.email;
ageInput.value = user.age;

function displayUser() {
    document.getElementById("output").textContent =
        JSON.stringify(user, null, 2);
}

document.getElementById("userForm").addEventListener("submit", function (event) {
    event.preventDefault();

    user.name = nameInput.value.trim();
    user.email = emailInput.value.trim();
    user.age = Number(ageInput.value);

    displayUser();
    console.log("Updated User:", user);
});

displayUser();