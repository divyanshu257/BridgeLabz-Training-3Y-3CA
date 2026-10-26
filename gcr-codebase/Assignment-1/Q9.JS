let num1 = Math.floor(Math.random() * 20) + 1;
let num2 = Math.floor(Math.random() * 20) + 1;

let operators = ["+", "-", "*", "/"];
let operator = operators[Math.floor(Math.random() * operators.length)];

let answer;

switch (operator) {
    case "+":
        answer = num1 + num2;
        break;

    case "-":
        answer = num1 - num2;
        break;

    case "*":
        answer = num1 * num2;
        break;

    case "/":
        answer = num1 / num2;
        break;
}

console.log(`Question: ${num1} ${operator} ${num2}`);
console.log(`Correct Answer: ${operator === "/" ? answer.toFixed(2) : answer}`);