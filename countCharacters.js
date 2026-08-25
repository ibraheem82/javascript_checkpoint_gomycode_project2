// Function to count the number of characters in a string
function countCharacters(str) {
    return str.length;
}

// Alternative: Count without spaces
function countCharactersNoSpaces(str) {
    return str.replace(/\s/g, '').length;
}

// Test
console.log(countCharacters("hello")); // 5
console.log(countCharacters("Hello World")); // 11
console.log(countCharactersNoSpaces("Hello World")); // 10
