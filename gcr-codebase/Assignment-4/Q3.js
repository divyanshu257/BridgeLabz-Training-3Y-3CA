"use strict";

class Book {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = false;
    }

    issueBook() {
        if (this.isIssued) {
            console.log(`${this.title} is already issued.`);
        } else {
            this.isIssued = true;
            console.log(`${this.title} issued successfully.`);
        }
    }

    returnBook() {
        if (!this.isIssued) {
            console.log(`${this.title} is already available.`);
        } else {
            this.isIssued = false;
            console.log(`${this.title} returned successfully.`);
        }
    }
}

const books = [
    new Book("JavaScript Basics", "John", "101"),
    new Book("Learn Java", "James", "102"),
    new Book("Web Development", "David", "103")
];

console.log("Available Books:");

books.filter(book => !book.isIssued).forEach(book => {
    console.log(`${book.title} by ${book.author}, ISBN: ${book.ISBN}`);
});

const searchISBN = "102";
const selectedBook = books.find(book => book.ISBN === searchISBN);

if (selectedBook) {
    selectedBook.issueBook();
} else {
    console.log("Book not found.");
}

console.log("Available Books After Issue:");

books.filter(book => !book.isIssued).forEach(book => {
    console.log(book.title);
});