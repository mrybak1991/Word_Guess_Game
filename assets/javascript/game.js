



// global variables 
var possibleWords = [
    "tiesto",
    "hardwell",
    "marlo",
    "afrojack",
    "zedd"
];

var wins = 0;
var gL = [];
var cWord;
var guessingWord = [];
var Guesses = 0;
var gameOver = false;
const Attempts = 8;

// function to reset variables in the game
// using strict mode to help identify variable errors 
'use strict'
function gameReset() {
    Guesses = Attempts;
    cWord = Math.floor(Math.random() * (possibleWords.length));
    gL = [];
    guessingWord = [];
    for (var i = 0; i < possibleWords[cWord].length; i++) {
        guessingWord.push("_");
    }
    // hide other images 
    document.getElementById("tiesto").style.cssText = "display: none";
    document.getElementById("hardwell").style.cssText = "display: none";
    document.getElementById("marlo").style.cssText = "display: none";
    document.getElementById("afrojack").style.cssText = "display: none";
    document.getElementById("zedd").style.cssText = "display: none";
    document.getElementById("bomb").style.cssText = "display: none";
    document.getElementById("card2").style.borderColor = "pink";
    document.getElementById("card3").style.borderColor = "pink";
    updateGame();
}
;

// this function updates wins, brings back the base image and updates 
function updateGame() {
    document.getElementById("wins").textContent = wins;
    document.getElementById("not_win").style.cssText = "display: block"
    var guessingWordText = "";
    for (var i = 0; i < guessingWord.length; i++) {
        guessingWordText += guessingWord[i];
    }
    document.getElementById('current_word').textContent = guessingWordText;
    document.getElementById("guess_left").textContent = Guesses;
    document.getElementById("letters").textContent = gL;
}
;

// if correct letter is picked add it to positions array 


function makeGuess(letter) {
    if (Guesses > 0) {
        if (gL.indexOf(letter) === -1) {
            gL.push(letter);
            confirmGuess(letter);
        }
    }
}
;

function confirmGuess(letter) {
    var positions = [];
    for (var i = 0; i < possibleWords[cWord].length; i++) {
        if (possibleWords[cWord][i] === letter) {
            positions.push(i);
        }
    }
    // subtracting remaining guesses
    if (positions.length<= 0) {
        Guesses--;
    }
    else {
        for (var i = 0; i < positions.length; i++) {
            guessingWord[positions[i]] = letter;
        }
    }
}
;
// checking for specific case wins by guessed words 
// had to convert an array to a string by using join ... thanks for the help Mitchell 
function checkWin1(){
    if (guessingWord.join("") === "tiesto")
    { 
        document.getElementById("not_win").style.cssText = "display:none";
        document.getElementById("tiesto").style.cssText = "display:block";
        document.getElementById("card2").style.borderColor = "green";
        document.getElementById("card3").style.borderColor = "green";
        wins++;
        gameOver = true;
        setTimeout(function(){
             alert("You have won!")
        }
        ,200
        )
        
    }
};

function checkWin2(){
    if (guessingWord.join("") === "hardwell")
    {   
        document.getElementById("not_win").style.cssText = "display:none";
        document.getElementById("hardwell").style.cssText = "display:block";
        document.getElementById("card2").style.borderColor = "green";
        document.getElementById("card3").style.borderColor = "green";
        wins++;
        gameOver = true;
        setTimeout(function(){
            alert("You have won!")
       }
       ,200
       )
    }
};

function checkWin3(){
    if (guessingWord.join("") === "marlo")
    {   
        document.getElementById("not_win").style.cssText = "display:none";
        document.getElementById("marlo").style.cssText = "display:block";
        document.getElementById("card2").style.borderColor = "green";
        document.getElementById("card3").style.borderColor = "green";
        wins++;
        gameOver = true;
        setTimeout(function(){
            alert("You have won!")
       }
       ,200
       )
    }
};

function checkWin4(){
    if (guessingWord.join("") === "afrojack")
    {   
        document.getElementById("not_win").style.cssText = "display:none";
        document.getElementById("afrojack").style.cssText = "display:block";
        document.getElementById("card2").style.borderColor = "green";
        document.getElementById("card3").style.borderColor = "green";
        wins++;
        gameOver = true;
        setTimeout(function(){
            alert("You have won!")
       }
       ,200
       )
    }
};

function checkWin5(){
    if (guessingWord.join("") === "zedd")
    {   
        document.getElementById("not_win").style.cssText = "display:none";
        document.getElementById("zedd").style.cssText = "display:block";
        document.getElementById("card2").style.borderColor = "green";
        document.getElementById("card3").style.borderColor = "green";
        wins++;
        gameOver = true;
        setTimeout(function(){
            alert("You have won!")
       }
       ,200
       )
    }
};

// if guesses are less than zero fire on the below functions
function loss() {
    if (Guesses <= 0) {
        document.getElementById("not_win").style.cssText = "display:none";
        document.getElementById("bomb").style.cssText = "display: block";
        document.getElementById("card2").style.borderColor = "red";
        document.getElementById("card3").style.borderColor = "red";
        gameOver = true;
        setTimeout(function(){
            alert("You have lost!")
       }
       ,200
       )
    }
}
;


document.onkeyup = function (event) {
    if (gameOver) {
        gameReset();
        gameOver = false;
    }
    else {
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            makeGuess(event.key.toLowerCase());
            updateGame();
            checkWin1();
            checkWin2();
            checkWin3();
            checkWin4();
            checkWin5();
            loss();
        }
    }
};

gameReset();
updateGame();
