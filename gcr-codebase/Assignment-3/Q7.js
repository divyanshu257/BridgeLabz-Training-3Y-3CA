"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;

class InvalidOperationError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidOperationError";
    }
}

function calculate(operation, a, b) {
    switch (operation) {
        case "add":
            return a + b;

        case "divide":
            if (b === 0) {
                throw new Error("Cannot divide by zero");
            }
            return a / b;

        case "power":
            return Math.pow(a, b);

        case "root":
            if (a < 0) {
                throw new Error("Cannot calculate real square root of a negative number");
            }
            return Math.sqrt(a);

        case "subtract":
            return a - b;

        default:
            throw new InvalidOperationError(`Unknown operation: ${operation}`);
    }
}

for (const operation of operations) {
    try {
        const result = calculate(operation, num1, num2);
        console.log(`${operation}: ${result}`);
    } catch (error) {
        console.log(`${operation} Error: ${error.name} - ${error.message}`);
    }
}

// Additional tests for custom errors.
try {
    console.log(calculate("root", -25, 0));
} catch (error) {
    console.log(`Root Error: ${error.message}`);
}

try {
    console.log(calculate("multiply", num1, num2));
} catch (error) {
    console.log(`Operation Error: ${error.name} - ${error.message}`);
}