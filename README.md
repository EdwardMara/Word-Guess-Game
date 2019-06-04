<h1>Word-Guess-Game</h2>

Choose a theme for your game! In the demo, we picked an 80s theme: 80s questions, 80s sound and an 80s aesthetic. You can choose any subject for your theme, though, so be creative!
Use key events to listen for the letters that your players will type.
Display the following on the page:
Press any key to get started!
Wins: (# of times user guessed the word correctly).

Number of Guesses Remaining: (# of guesses remaining for the user).
Letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H).
After the user wins/loses the game should automatically choose another word and make the user play it.

<h3>Notes</h3>

implement functions for new word initialization, reset guesses, counting elements in answer array while ignoring blanks,and resolution for keystroke guesses.

variables declared in a function cannot be called outside of it.  Scope played a big part in troubleshooting my code. I had to rethink some of my functions and variable declarations in order to proper manipulate certain states in the game. Things like wins and letters guessed needed variables that required initial declaration outside of the scope of any specific functions in order to update them through the functions.

Using remainingLetters as a status variable initially would not account for the fact that there might be more than one occurance of the guessed letter in the solution word. In order to account for multiple correct solutions for 1 guess, i made a function countArray(array), that counts how many elements are in an array while skipping empty elements.  This function also updates the remainingLetters function.  When remainingLetters = 0, the game ends with a win.

<h3>Link to deployed GitHub</h3>
<a href="https://edwardmara.github.io/Word-Guess-Game/">edwardmara.github.io</a>

