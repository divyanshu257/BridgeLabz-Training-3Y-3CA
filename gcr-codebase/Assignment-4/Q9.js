"use strict";

class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, quantity) {
        this.items.push({ name, price, quantity });
    }

    getTotal() {
        return this.items.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
    }

    applyCoupon(coupon) {
        // Accept only SAVE followed by digits or DISC followed by digits.
        const match = /^(SAVE|DISC)(\d+)$/.exec(coupon);

        if (!match) {
            throw new Error("Invalid coupon format");
        }

        const discountPercent = Number(match[2]);

        if (discountPercent < 1 || discountPercent > 100) {
            throw new Error("Coupon discount must be between 1% and 100%");
        }

        return this.getTotal() * (1 - discountPercent / 100);
    }
}

const cart = new Cart();

cart.addItem("Laptop", 50000, 1);
cart.addItem("Mouse", 1000, 2);
cart.addItem("Keyboard", 2000, 1);

const coupon = "SAVE20";

try {
    const originalTotal = cart.getTotal();
    const finalTotal = cart.applyCoupon(coupon);

    console.log("Cart Items:", cart.items);
    console.log(`Original Total: ₹${originalTotal.toFixed(2)}`);
    console.log(`Coupon: ${coupon}`);
    console.log(`Final Total: ₹${finalTotal.toFixed(2)}`);
    console.log(`You Save: ₹${(originalTotal - finalTotal).toFixed(2)}`);
} catch (error) {
    console.log(`Coupon Error: ${error.message}`);
}