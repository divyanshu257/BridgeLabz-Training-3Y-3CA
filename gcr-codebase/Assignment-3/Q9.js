"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const cleanData = [];
const errors = [];

for (let i = 0; i < rawData.length; i++) {
    try {
        const parsed = JSON.parse(rawData[i]);

        if (parsed.user == null || parsed.age == null) {
            throw new Error("Missing user or age key");
        }

        const age = Number(parsed.age);

        if (!Number.isFinite(age)) {
            throw new Error("Invalid age value");
        }

        const user = {
            user: parsed.user,
            age: age
        };

        cleanData.push(user);
        console.log(`Line ${i + 1}: Valid JSON`);
    } catch (error) {
        errors.push({
            line: i + 1,
            message: error.message
        });

        console.log(`Line ${i + 1}: Error - ${error.message}`);
    }
}

const under18 = cleanData.filter(person => person.age < 18);

console.log("Clean Data:", cleanData);
console.log("Under-18 Users:", under18);
console.log("Errors:", errors);
console.log(`Valid Count: ${cleanData.length}`);
console.log(`Error Count: ${errors.length}`);