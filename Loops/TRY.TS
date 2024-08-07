// number guessing game 
import * as readline from 'readline';

const max = 100 ;
let randNum = Math.floor(Math.random()  * max) + 1 ;
console.log( "The number to be guessed is " ,randNum);
// Tracking the guess
let correctGuess = false ;
let guesses : number[] = [12,56,67,43,89,90,43]; 
let guessIndex = 0;
while(!correctGuess){
    
    
};