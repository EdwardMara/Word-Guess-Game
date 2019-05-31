
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

score.textContent = "Wins: "+wins;
lettersGuessed.textContent = "Letters guessed: "+lettersGuessedArray;
guessesLeft.textContent = "Guesses remaining: "+remainingGuesses;
wordSolution.textContent = answerArray;





//  TODO: take user input and process through word 

//function takes user guess and updates letters guessed and remaining letters
function resolveGuess(input) {
    if (word.indexOf(input) != -1) {
        for (var i = 0; i < word.length; i++) {
            if (word[i] === input) {
                answerArray[i] = input;
                lettersGuessedArray.push(input);
                remainingLetters--;
                remainingGuesses--;
             }
        }
    }else{
        lettersGuessedArray.push(input);
        remainingGuesses--;
    }
}

//update display of remaining guesses, guessed letters and wins.
function updateDisplay(){
    
}



    // When the user presses a key, it will run the following function...
    document.onkeyup = function (event) {

        // Determine which key was pressed, make it lowercase, and set it to the userInput variable.
        var userInput = event.key.toLowerCase();
        



    }





//         <!--for (length of word)
//                 if(guessed letter === letter in word)
//                     replace blank with guess
//                     remainingLetters - 1  -->
//     <!-- TODO: update and display wins and losses-->



