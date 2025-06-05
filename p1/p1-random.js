/*
    CIT 281 Project 1
    Name: Paige
*/

// Function to get a random integer between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Function to generate a random string of lowercase letters
function generateRandomString() {
    const length = getRandomInteger(5, 26); // Random length between 5 and 25
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz'; // All lowercase letters

    for (let i = 0; i < length; i++) {
        result += characters[getRandomInteger(0, characters.length)]; // Randomly pick a character
    }

    console.log(`${length} lowercase letters: ${result}`); // Output the result
}

// Call the function to generate and output the random string
generateRandomString();
