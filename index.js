// Import all functions (if using modules) or just include all files in HTML
// This file demonstrates all functions working together

console.log("=== String Manipulation ===");
console.log("Reverse 'hello':", reverseString("hello"));
console.log("Count 'JavaScript':", countCharacters("JavaScript"));
console.log("Capitalize 'hello world':", capitalizeWords("hello world"));

console.log("\n=== Array Functions ===");
const numbers = [3, 7, 1, 9, 4, 6, 8, 2, 5];
console.log("Max:", findMax(numbers));
console.log("Min:", findMin(numbers));
console.log("Sum:", sumArray(numbers));
console.log("Even numbers:", filterArray(numbers, n => n % 2 === 0));

console.log("\n=== Mathematical Functions ===");
console.log("Factorial of 5:", factorial(5));
console.log("Is 17 prime?", isPrime(17));
console.log("Fibonacci (8 terms):", fibonacci(8));
