"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const valid = [];
const invalid = [];

class TransactionError extends Error {
    constructor(type, message) {
        super(message);
        this.name = type;
    }
}

for (let i = 0; i < transactions.length; i++) {
    try {
        const transaction = transactions[i];

        // Reject null entries before accessing their properties.
        if (transaction === null) {
            throw new TransactionError("NullEntryError", "Transaction is null");
        }

        if (transaction.id == null || transaction.amount == null) {
            throw new TransactionError(
                "MissingFieldError",
                "Missing transaction ID or amount"
            );
        }

        if (transaction.amount < 0) {
            throw new TransactionError(
                "NegativeAmountError",
                "Transaction amount cannot be negative"
            );
        }

        valid.push(transaction);
        console.log(`Transaction ${transaction.id}: Valid`);
    } catch (error) {
        invalid.push({
            index: i + 1,
            type: error.name,
            message: error.message
        });

        console.log(`Transaction ${i + 1}: ${error.name} - ${error.message}`);
    }
}

console.log("Valid Transactions:", valid);
console.log("Invalid Transactions:", invalid);
console.log(`Successful Count: ${valid.length}`);
console.log(`Failed Count: ${invalid.length}`);