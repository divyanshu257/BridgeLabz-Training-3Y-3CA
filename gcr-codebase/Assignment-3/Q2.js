"use strict";

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

function calculateBonus(employee) {
    try {
        if (!employee || employee.name == null ||
            employee.salary == null || employee.years == null) {
            throw new Error("Missing employee property");
        }

        const salary = Number(employee.salary);
        const years = Number(employee.years);

        if (!Number.isFinite(salary) || !Number.isFinite(years)) {
            throw new Error("Invalid numeric data");
        }

        const bonus = years > 3 ? salary * 0.10 : salary * 0.05;
        const totalSalary = salary + bonus;

        console.log(`Employee: ${employee.name}`);
        console.log(`Salary: ₹${salary.toFixed(2)}`);
        console.log(`Experience: ${years} years`);
        console.log(`Bonus: ₹${bonus.toFixed(2)}`);
        console.log(`Total Salary: ₹${totalSalary.toFixed(2)}`);
        console.log("--------------------");
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}

for (const employee of employees) {
    calculateBonus(employee);
}