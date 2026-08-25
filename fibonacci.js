// Function to generate Fibonacci sequence up to n terms
function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

// Alternative: Generate up to a maximum value
function fibonacciUpTo(maxValue) {
    if (maxValue < 0) return [];
    const sequence = [0, 1];
    while (true) {
        const next = sequence[sequence.length - 1] + sequence[sequence.length - 2];
        if (next > maxValue) break;
        sequence.push(next);
    }
    return sequence;
}

// Test
console.log(fibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
console.log(fibonacci(5)); // [0, 1, 1, 2, 3]
console.log(fibonacciUpTo(100)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
