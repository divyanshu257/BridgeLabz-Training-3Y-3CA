"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumbers = [];
const invalidNumbers = [];

for (let i = 0; i < apiData.length; i++) {
    const value = apiData[i];
    const numberValue = Number(value);
    const booleanValue = Boolean(value);
    const stringValue = String(value);

    // Blank strings, null, undefined and non-numeric values are rejected.
    const isValid = value !== null &&
        value !== undefined &&
        !(typeof value === "string" && value.trim() === "") &&
        !Number.isNaN(numberValue);

    if (isValid) {
        validNumbers.push(numberValue);
    } else {
        invalidNumbers.push(value);
    }

    console.log(`Entry ${i + 1}:`);
    console.log(`Original: ${String(value)}`);
    console.log(`Number: ${numberValue}`);
    console.log(`Boolean: ${booleanValue}`);
    console.log(`String: ${stringValue}`);
    console.log(`Status: ${isValid ? "Valid" : "Invalid"}`);
    console.log("--------------------");
}

console.log("Valid Numeric Data:", validNumbers);
console.log("Invalid Data:", invalidNumbers);
console.log("Valid Count:", validNumbers.length);
console.log("Invalid Count:", invalidNumbers.length);