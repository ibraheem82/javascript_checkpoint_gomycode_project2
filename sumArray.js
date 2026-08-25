// Function to calculate the sum of all elements in an array
function sumArray(arr) {
    return arr.reduce((sum, current) => sum + current, 0);
}

// Alternative: Using a loop
function sumArrayLoop(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Test
const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers)); // 15
console.log(sumArrayLoop([10, 20, 30])); // 60
