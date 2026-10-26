let bonus = 5000;

function calculateSalary() {
    let salary = 40000;
    let isPermanent = true;

    let totalSalary = salary;

    if (isPermanent) {
        totalSalary += bonus;
    }

    console.log(`Total Salary: ₹${totalSalary}`);
    console.log(`Global Bonus: ₹${bonus}`);
}

calculateSalary();