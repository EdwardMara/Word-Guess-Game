

// create array with words to play -->
var wordArray = ["ball", "strike", "hit", "catch", "throw", "mitt", "homerun", "single", "double", "triple", "catcher", "umpire", "pitch", "pitcher", "base", "bunt", "mound"];

var hasStarted = false;

//wins TODO:reset this
var wins = 0;

//remaining guesses TODO: reset this
var remainingGuesses = 6;

//array of guessed letters TODO: reset this
var lettersGuessedArray = [];

//function to count how many elements are in an array while ignoring empty elements
function countArray(array) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === "_") {
            count++;
        }
    }
    return remainingLetters - count;

}

//  take user input and process through word 
//accurately update remaining letters
//function takes user guess and updates letters guessed and remaining letters
function resolveGuess(input) {
    //guess is in the word
    if (word.indexOf(input) != -1) {
        for (var i = 0; i < word.length; i++) {
            if (word[i] === input) {
                answerArray[i] = input;
            }
        }
        lettersGuessedArray.push(input);


        //guess is not in the word
    } else {
        lettersGuessedArray.push(input);
        remainingGuesses--;

    }
}




//update display of remaining guesses, guessed letters and wins.
function updateDisplay() {
    score.textContent = "Wins: " + wins;
    lettersGuessed.textContent = "Letters guessed: " + lettersGuessedArray;
    guessesLeft.textContent = "Guesses remaining: " + remainingGuesses;
    wordSolution.textContent = answerArray;

}
//for some reason this is not a function, so i coded it explicitly in the onkeyup
function gameOver() {
    var x = document.getElementById("statsDiv");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    gameOver.textContent = "GAME OVER";


}





// function initialize() {
    // randomly choose a word -->
    var word = wordArray[Math.floor(Math.random() * wordArray.length)];

    //initialize variable for remainingLetters to update throughout -->
    var remainingLetters = word.length;


    // create an array of blank spaces to represent the word to be guessed. -->
    var answerArray = [];
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }



var score = document.getElementById('current-score');
var lettersGuessed = document.getElementById('letters-guessed');
var guessesLeft = document.getElementById('guesses-left');
var wordSolution = document.getElementById('word-solution');
var intro = document.getElementById('introDiv');

var gameOver = document.getElementById('game-over');

// intro.textContent = "Press any KEY TO START";
score.textContent = "Wins: " + wins;
lettersGuessed.textContent = "Letters guessed: " + lettersGuessedArray;
guessesLeft.textContent = "Guesses remaining: " + remainingGuesses;
wordSolution.textContent = answerArray;

//display stats to user
//game over check
// wins check and update
//TODO: display
//TODO: repeat after win or loss





document.onkeyup = function (event) {

    // When the user presses a key, it will run the following function...
    var userInput = event.key;
    resolveGuess(userInput);
    updateDisplay();
    if (remainingGuesses === 0) {
        var x = document.getElementById("statsDiv");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
        gameOver.textContent = "GAME OVER";
    } else if (countArray(answerArray) === word.length) {
        var x = document.getElementById("statsDiv");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
        gameOver.textContent = "YOU WIN!";
        wins++;


    }


}



















