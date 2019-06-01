
// create array with words to play -->
var wordArray = ["ball", "strike", "hit", "catch", "throw", "mitt", "homerun", "single", "double", "triple", "catcher", "umpire", "pitch", "pitcher", "base", "bunt", "mound"];



// randomly choose a word -->
var word = wordArray[Math.floor(Math.random() * wordArray.length)];

//initialize variable for remainingLetters to update throughout -->
var remainingLetters = word.length;

//wins
var wins = 0;

//remaining guesses
var remainingGuesses = 6;

//array of guessed letters
var lettersGuessedArray = [];

// create an array of blank spaces to represent the word to be guessed. -->
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

//display stats to user
var score = document.getElementById('current-score');
var lettersGuessed = document.getElementById('letters-guessed');
var guessesLeft = document.getElementById('guesses-left');
var wordSolution = document.getElementById('word-solution');

var gameOver = document.getElementById('game-over');

score.textContent = "Wins: " + wins;
lettersGuessed.textContent = "Letters guessed: " + lettersGuessedArray;
guessesLeft.textContent = "Guesses remaining: " + remainingGuesses;
wordSolution.textContent = answerArray;




//function to count how many elements are in an array while ignoring empty elements
function countArray(array){
    var count = 0;
    for(var i =0; i<array.length;i++){
        if (array[i] === "_"){
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

//game over check
// wins check and update
//TODO: display
//TODO: repeat after win or loss

// When the user presses a key, it will run the following function...
document.onkeyup = function (event) {
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
    }else if(countArray(answerArray)===word.length){
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



















