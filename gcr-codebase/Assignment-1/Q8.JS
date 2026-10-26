let salary = 40000;
let incrementRate = 10;
let projection = [];

for (let year = 1; year <= 5; year++) {
    salary *= (1 + incrementRate / 100);
    salary = Math.round(salary);

    projection.push({
        Year: year,
        Salary: `₹${salary}`
    });
}

console.table(projection);