//Rock, Paper, Scissors - By Liam Doherty
function rps(player) {

    //Array of choices for the computer//
    var choices = ["rock", "paper", "scissors"];
    // Pick a random index based on the array length
    //Pick a random item from the choices array and assigns it to the computer var//
    var computer = choices[Math.floor(Math.random() * choices.length)];

    //if/else statements depending on the outcome of play//
    //Compare player's choice with computer's choice to decide win, lose, or draw//

    if (player == computer) {
        //Displays the result on the web page//
        document.getElementById("result").innerHTML = "It's a draw! You both chose " + player;
    }
    else if (player == "rock" && computer == "scissors") {
        document.getElementById("result").innerHTML = "You win, Rock beats scissors";
    }
    else if (player == "rock" && computer == "paper") {
        document.getElementById("result").innerHTML = "You lose, paper beats rock";
    }
    else if (player == "scissors" && computer == "paper") {
        document.getElementById("result").innerHTML = "You win, scissors beats paper";
    }
    else if (player == "scissors" && computer == "rock") {
        document.getElementById("result").innerHTML = "You lose, rock beats scissors";
    }
    else if (player == "paper" && computer == "rock") {
        document.getElementById("result").innerHTML = "You win, paper beats rock";

    }
    else if (player == "paper" && computer == "scissors") {
        document.getElementById("result").innerHTML = "You lose, scissors beats paper";
    }
    // Display player and computer choices on the web page
    document.getElementById("playerChoice").innerHTML = "You Chose: " + player;
    document.getElementById("computerChoice").innerHTML = "The Computer chose: " + computer;

}

