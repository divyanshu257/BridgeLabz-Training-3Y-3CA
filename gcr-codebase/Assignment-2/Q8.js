const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

let total = cart.reduce((sum, product) => sum + product.price, 0);
let discountedTotal = 0;

for (let product of cart) {
    let price = product.price;

    if (product.category === "electronics") {
        price -= price * 0.10;
    } else if (product.category === "fashion") {
        price -= price * 0.05;
    }

    discountedTotal += price;
}

if (total > 50000) {
    discountedTotal -= discountedTotal * 0.05;
}

console.log(`Original Total: ₹${total}`);
console.log(`Final Total: ₹${discountedTotal.toFixed(2)}`);