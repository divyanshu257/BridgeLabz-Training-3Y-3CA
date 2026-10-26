"use strict";

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const seats = Number(document.getElementById("seats").value);

    const nameValid = /^[A-Za-z ]+$/.test(name);
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const seatsValid = Number.isInteger(seats) && seats >= 1 && seats <= 10;

    if (!nameValid || !emailValid || !seatsValid) {
        document.getElementById("output").textContent =
            "Invalid input. Check name, email and seats (1-10).";
        return;
    }

    const booking = { name, email, seats };

    document.getElementById("output").textContent =
        `Booking Confirmed! Name: ${booking.name}, Email: ${booking.email}, Seats: ${booking.seats}`;

    console.log("Ticket Details:", booking);
});