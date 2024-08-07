"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const max = 100;
let randNum = Math.floor(Math.random() * max) + 1;
console.log("The number to be guessed is ", randNum);
// Tracking the guess
let correctGuess = false;
let guesses = [12, 56, 67, 43, 89, 90, 43];
let guessIndex = 0;
while (!correctGuess && guessIndex < guesses.length) {
    let currentGuess = guesses[guessIndex];
    if (currentGuess === randNum) {
        console.log("Cogratulations you have guessed it right", currentGuess);
        correctGuess = true;
    }
    else if (currentGuess < randNum) {
        console.log("Sorry Invalid guess,your guess is to low", currentGuess);
    }
    else {
        console.log("Your guess is too high then the number to  be guessed ", currentGuess);
    }
    guessIndex++;
}
if (!correctGuess) {
    console.log("Sorry none of Your guesses was correct");
}
;
