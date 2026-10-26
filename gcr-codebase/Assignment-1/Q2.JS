let userName = "Rahul";
let age = 20;
let isActive = true;
let subjects = ["JavaScript", "Java", "Python"];
let user = { city: "Mathura", course: "B.Tech" };
let address = null;
let phone;

console.table([
    { Label: "User Name", Value: userName, Type: typeof userName },
    { Label: "Age", Value: age, Type: typeof age },
    { Label: "Active", Value: isActive, Type: typeof isActive },
    { Label: "Subjects", Value: subjects.join(", "), Type: Array.isArray(subjects) ? "array" : typeof subjects },
    { Label: "User Object", Value: JSON.stringify(user), Type: typeof user },
    { Label: "Address", Value: address, Type: address === null ? "null" : typeof address },
    { Label: "Phone", Value: phone, Type: typeof phone }
]);