var msg1 = document.getElementById("message1");
var msg2 = document.getElementById("message2");
var msg3 = document.getElementById("message3");

var answer = Math.floor(Math.random()*10)+1;
var numofguesses = 0;
var guessedNums = [];

function play(){
    var userGuess = document.getElementById("guess").value;

    if(userGuess < 1 || userGuess > 10) {
        alert("Please enter a number between 1-10 ");
    } else {
        guessedNums.push(userGuess);
        numofguesses += 1;
        if (userGuess < answer){
            msg1.textContent = "Your guess is low.";
            msg2.textContent = "Number of guess: " + numofguesses;
            msg3.textContent = "Guessed numbers are:  "+ guessedNums;
        } else if (userGuess > answer) {
            msg1.textContent = "your guess is high.";
            msg2.textContent = "Number of guess: " + numofguesses;
            msg3.textContent = "Guessed Numbers are: "+ guessedNums;
        } else if (userGuess == answer) {
            msg1.textContent = "👏 You are correct!!!";
            msg2.textContent = "The Number is: " + answer;
            msg3.textContent = "You guessed it in:  "+ numofguesses+ " Attempts.";
        }
        
    }
}
