// Function to capitalize the first letter of each word in a sentence
function capitalizeWords(sentence) {
    return sentence
        .split(' ')
        .map(word => {
            if (word.length === 0) return word;
            return word[0].toUpperCase() + word.slice(1).toLowerCase();
        })
        .join(' ');
}

// Alternative: Using regex
function capitalizeWordsRegex(sentence) {
    return sentence.replace(/\b\w/g, char => char.toUpperCase());
}

// Test
console.log(capitalizeWords("hello world")); // "Hello World"
console.log(capitalizeWords("javascript is awesome")); // "Javascript Is Awesome"
console.log(capitalizeWords("the quick brown fox")); // "The Quick Brown Fox"
