let total = 7500;
let discountPercentage = 0;

if (total >= 10000) {
    discountPercentage = 25;
} else if (total >= 5000) {
    discountPercentage = 15;
} else if (total >= 2000) {
    discountPercentage = 5;
}

let discount = Math.round(total * discountPercentage / 100);
let finalPrice = Math.round(total - discount);

console.log(`Original Total: ₹${total}`);
console.log(`Discount: ${discountPercentage}%`);
console.log(`Discount Amount: ₹${discount}`);
console.log(`Final Price: ₹${finalPrice}`);