let productName = " wireless headphones PRO ";

let cleaned = productName.trim().toLowerCase();

cleaned = cleaned
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

cleaned = cleaned.replace("Pro", "Pro Edition");

console.log(`Product Title: ${cleaned}`);
console.log(`Title Length: ${cleaned.length}`);