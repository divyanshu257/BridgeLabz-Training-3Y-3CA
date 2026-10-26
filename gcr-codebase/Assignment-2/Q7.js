let feedback = "Great product! Fast delivery and amazing sound quality!";

let words = feedback.trim().split(/\s+/);
let lowerFeedback = feedback.toLowerCase();

console.log(`Word Count: ${words.length}`);

if (!lowerFeedback.includes("bad") && !lowerFeedback.includes("poor")) {
    console.log("Positive Feedback");
} else {
    console.log("Needs Improvement");
}