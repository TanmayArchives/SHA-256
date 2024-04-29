const readline = require('readline');
const crypto = require('crypto');

// Function to generate SHA-256 hash 
function generateSHA256Hash(input) {
    // Hash the input using SHA-256 algorithm
    return crypto.createHash('sha256').update(input).digest('hex');
}

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Recursive function to prompt user for input and generate hash
function promptAndGenerateHash() {
    rl.question("Enter text to hash: ", function(userInput) {
        const hash = generateSHA256Hash(userInput);
        console.log("SHA-256 Hash:", hash);
        promptAndGenerateHash(); // Call itself to continue prompting
    });
}

// Start prompting the user
promptAndGenerateHash();
