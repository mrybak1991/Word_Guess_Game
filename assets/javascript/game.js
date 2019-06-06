

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
'use strict'

// create intial game stage 
// put "-" on screen

function gameStage() {
    Guesses = Attempts;
    Word = Math.floor(Math.random() * (possibleWords.length));
    gL = [];
    guessingWord = [];
    for (var i = 0; i < possibleWords[Word].length; i++) {
        guessingWord.push("_");
    }
    // hide images that i want to reappear later in the game 
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

// update the game screen to show correct wins, show base picture, word being guessed, how many guesses left
// and letters being guessed   
function updateGame() {
    document.getElementById("wins").textContent = wins;
    document.getElementById("not_win").style.cssText = "display: block"
    var guessingWordvar = "";
    for (var i = 0; i < guessingWord.length; i++) {
        guessingWordvar += guessingWord[i];
    }
    document.getElementById('current_word').textContent = guessingWordvar;
    document.getElementById("guess_left").textContent = Guesses;
    document.getElementById("letters").textContent = gL;
}
;

// update guesses 
function guessTry(letter) {
    if (Guesses > 0) {
        if (gL.indexOf(letter) === -1) {
            gL.push(letter);
            guessVal(letter);
        }
    }
}
;
function guessVal(letter) {
    var location = [];
    for (var i = 0; i < possibleWords[Word].length; i++) {
        if (possibleWords[Word][i] === letter) {
            location.push(i);
        }
    }
    if (location.length<= 0) {
        Guesses--;
    }
    else {
        for (var i = 0; i < location.length; i++) {
            guessingWord[location[i]] = letter;
        }
    }
}
;
//specific case wins by guessed words and show picture 
function Win1(){
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

function Win2(){
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

function Win3(){
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

function Win4(){
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

function Win5(){
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

//update if user runs out of guesses 
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

// fire this bad boy up!
document.onkeyup = function (event) {
    if (gameOver) {
        gameStage();
        gameOver = false;
    }
    else {
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            guessTry(event.key);
            updateGame();
            Win1();
            Win2();
            Win3();
            Win4();
            Win5();
            loss();
        }
    }
};

gameStage();
updateGame();
