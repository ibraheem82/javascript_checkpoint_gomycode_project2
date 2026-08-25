// Function to reverse a given string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Alternative solution without built-in methods
function reverseStringManual(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Test
console.log(reverseString("hello")); // "olleh"
console.log(reverseString("JavaScript")); // "tpircSavaJ"
