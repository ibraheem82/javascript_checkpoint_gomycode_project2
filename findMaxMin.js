// Function to find the maximum value in an array
function findMax(arr) {
    if (arr.length === 0) return undefined;
    return Math.max(...arr);
}

// Function to find the minimum value in an array
function findMin(arr) {
    if (arr.length === 0) return undefined;
    return Math.min(...arr);
}

// Alternative: Without Math methods
function findMaxManual(arr) {
    if (arr.length === 0) return undefined;
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
    }
    return max;
}

function findMinManual(arr) {
    if (arr.length === 0) return undefined;
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
    }
    return min;
}

// Test
const numbers = [3, 7, 1, 9, 4, 6, 8, 2, 5];
console.log(findMax(numbers)); // 9
console.log(findMin(numbers)); // 1
