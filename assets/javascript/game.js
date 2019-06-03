
// global variables 
'use script';

var possibleWords = [
    "tiesto",
    // "hardwell",
    // "marlo",
    // "afrojack",
    // "zedd"
];

const maxAttempts = 8;
var guessedLetters = [];
var currentWordIndex;
var guessingWord = [];
var remainingGuesses = 0;
var gameStarted = false;
var hasFinished = false;
var wins = 0;
// function to reset variables in the game
function gameReset() {
    remainingGuesses = maxAttempts;
    currentWordIndex = Math.floor(Math.random() * (possibleWords.length));
    guessedLetters = [];
    guessingWord = [];
    for (var i = 0; i < possibleWords[currentWordIndex].length; i++) {
        guessingWord.push("_");
    }
    // hide other images 
    document.getElementById("tiesto").style.cssText = "display: none";
    document.getElementById("hardwell").style.cssText = "display: none";
    document.getElementById("marlo").style.cssText = "display: none";
    document.getElementById("afrojack").style.cssText = "display: none";
    document.getElementById("zedd").style.cssText = "display: none";
    document.getElementById("bomb").style.cssText = "display: none";
    updateGame();
}
;
function updateGame() {
    document.getElementById("wins").textContent = wins;
    document.getElementById("not_win").style.cssText = "display: block"
    var guessingWordText = "";
    for (var i = 0; i < guessingWord.length; i++) {
        guessingWordText += guessingWord[i];
    }
    document.getElementById('current_word').textContent = guessingWordText;
    document.getElementById("guess_left").textContent = remainingGuesses;
    document.getElementById("letters").textContent = guessedLetters;
}
;
function confirmGuess(letter) {
    var positions = [];
    for (var i = 0; i < possibleWords[currentWordIndex].length; i++) {
        if (possibleWords[currentWordIndex][i] === letter) {
            positions.push(i);
        }
    }
    if (positions.length <= 0) {
        remainingGuesses--;
    }
    else {
        for (var i = 0; i < positions.length; i++) {
            guessingWord[positions[i]] = letter;
        }
    }
}
;

function checkWin() {
    if (document.getElementById("cuurent_word") = "tiesto") {
        document.getElementById("not_win").style.cssText = "display:none";
        document.getElementById("tiesto").style.cssText = "display:block";
        wins++;
        hasFinished = true; 

    }
};
// function checkWin() {
//     if (guessingWord.indexOf("_") === -1) {
//         document.getElementById("not_win").style.cssText = "display:none";
//         document.getElementById("tiesto").style.cssText = "display:block";
//         wins++;
//         hasFinished = true;
//     }
// }
// ;
function checkLoss() {
    if (remainingGuesses <= 0) {
        document.getElementById("bomb").style.cssText = "display: block";
        hasFinished = true;
    }
}
;
function makeGuess(letter) {
    if (remainingGuesses > 0) {
        if (guessedLetters.indexOf(letter) === -1) {
            guessedLetters.push(letter);
            confirmGuess(letter);
        }
    }
}
;
document.onkeyup = function (event) {
    if (hasFinished) {
        gameReset();
        hasFinished = false;
    }
    else {
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            makeGuess(event.key.toLowerCase());
            updateGame();
            checkWin();
            checkLoss();
        }
    }
};
