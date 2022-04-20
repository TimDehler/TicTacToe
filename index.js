/*
  Fix problem with computer playing along after game has ended
  Patch multiplyer emoji choosing
  Patch single/multiplayer so you can go on playing after a round without reset
*/

let statusBar = null;
let choose_game_mode = null;

// Player one always begins
let player = 1;

// Will be set on giveGameMode, needed for picking emojis
let multiplayer = false;
let singlePlayer = false;

// Roundcounter for computer turn and console logs
let roundCounter = 0;

// My Buttons Array to give the buttons number locations
myButtons = [];

// Will be filled with the chosen emojis
let player_one_emoji = null;
let player_two_emoji = null;

TICTACTOE();

// Main starting method
function TICTACTOE() {
  console.log("test");
  load();
  document.getElementById("reset").addEventListener("click", function () {
    location.reload();
  });
}

// Loading all neccessary Buttons and sections
function load() {
  console.log("test2");
  statusBar = document.getElementById("statusBar");
  choose_game_mode = document.getElementById("choose_game_mode");
  let myButtonList = document.querySelectorAll(".game_buttons > button");
  myButtons = Array.from(myButtonList);
  console.log(myButtons);
  giveGameMode();
}

// function to declare the game mode
function giveGameMode() {
  console.log("test3");
  statusBar.innerHTML = "Choose a game mode";
  document
    .getElementById("singleplayer")
    .addEventListener("click", function () {
      statusBar.innerHTML = "You chose Singleplayer";
      singlePlayer = true;
      pickEmojiSingleplayer();
    });
  document.getElementById("multiplayer").addEventListener("click", function () {
    statusBar.innerHTML = "You chose Multiplayer";
    player_one_emoji = "🚀";
    player_two_emoji = "👾";
    startGame();
  });
}

// Function to pick your Emoji on Singleplayer--> depending on game mode
function pickEmojiSingleplayer() {
  console.log("Player 1 pick your Emoji");
  statusBar.innerHTML = "Pick your Emoji";
  document.querySelectorAll(".upper_right > button").forEach((button) => {
    button.addEventListener("click", function () {
      player_two_emoji = "👾";
      if (
        this === document.getElementById("unicorn") &&
        this.value === "null"
      ) {
        player_one_emoji = "🦄";
        startGame();
      } else if (
        this === document.getElementById("fries") &&
        this.value === "null"
      ) {
        player_one_emoji = "🍟";
        startGame();
      } else if (
        this === document.getElementById("star") &&
        this.value === "null"
      ) {
        player_one_emoji = "🌠";
        startGame();
      } else if (
        this === document.getElementById("ape") &&
        this.value === "null"
      ) {
        player_one_emoji = "🙉";
        startGame();
      } else if (
        this === document.getElementById("bike") &&
        this.value === "null"
      ) {
        player_one_emoji = "🚲";
        startGame();
      } else if (
        this === document.getElementById("default") &&
        this.value === "null"
      ) {
        player_one_emoji = "🚀";
        startGame();
      } else {
        console.error("Error");
      }
    });
  });
}

// Prototype for combining single / mult emoji choosing
function chooseEmoji() {
  console.log("not empty");
}

// Function with possible win situations
function checkIfPlayerWon(player) {
  if (
    my_button_1.value == player &&
    my_button_2.value == player &&
    my_button_3.value == player
  ) {
    return true;
  } else if (
    my_button_4.value == player &&
    my_button_5.value == player &&
    my_button_6.value == player
  ) {
    return true;
  } else if (
    my_button_7.value == player &&
    my_button_8.value == player &&
    my_button_9.value == player
  ) {
    return true;
  } else if (
    my_button_1.value == player &&
    my_button_5.value == player &&
    my_button_9.value == player
  ) {
    return true;
  } else if (
    my_button_3.value == player &&
    my_button_5.value == player &&
    my_button_7.value == player
  ) {
    return true;
  } else if (
    my_button_1.value == player &&
    my_button_4.value == player &&
    my_button_7.value == player
  ) {
    return true;
  } else if (
    my_button_2.value == player &&
    my_button_5.value == player &&
    my_button_8.value == player
  ) {
    return true;
  } else if (
    my_button_3.value == player &&
    my_button_6.value == player &&
    my_button_9.value == player
  ) {
    return true;
  } else {
    return false;
  }
}

// Test if one of the players won or if it is a draw
function winningConditions() {
  if (
    roundCounter === 9 &&
    checkIfPlayerWon(1) === false &&
    checkIfPlayerWon(2) === false
  ) {
    console.log("Draw");
    statusBar.innerHTML = "Draw";
    return;
  }
  if (checkIfPlayerWon(1) === true) {
    statusBar.innerHTML = "Player 1 has won!";
    console.log("Player 1 has won!");
    return;
  } else if (checkIfPlayerWon(2) === true) {
    statusBar.innerHTML = "Player 2 has won!";
    console.log("Player 2 has won!");
    return;
  }
}

// Function for the intelligent computer opponent
function computerTurn() {
  // First computer move on round 1
  if (roundCounter === 1) {
    // First mmove not in a corner --> block upper left corner
    if (
      myButtons[1].value != "null" ||
      myButtons[3].value != "null" ||
      myButtons[5].value != "null" ||
      myButtons[7].value != "null" ||
      myButtons[4].value != "null"
    ) {
      myButtons[0].click();
      // First move in a corner --> block across corner
    } else if (roundCounter === 1) {
      console.log("Block across");
      if (myButtons[0].value != "null") {
        myButtons[8].click();
        return;
      } else if (myButtons[2].value != "null") {
        myButtons[6].click();
        return;
      } else if (myButtons[6].value != "null") {
        myButtons[2].click();
        return;
      } else if (myButtons[8].value != "null") {
        myButtons[0].click();
        return;
      }
    }
  }
  // Test if computer can win --> win
  if (roundCounter > 2) {
    for (let i = 0; i < myButtons.length; i++) {
      if (myButtons[i].value === "null") {
        myButtons[i].value = "2";
        if (checkIfPlayerWon(2) === true) {
          myButtons[i].value = "null";
          myButtons[i].click();
          return;
        } else {
          myButtons[i].value = "null";
        }
      }
    }
    // Test if player can win --> block
    for (let i = 0; i < myButtons.length; i++) {
      if (myButtons[i].value === "null") {
        myButtons[i].value = "1";
        if (checkIfPlayerWon(1) === true) {
          myButtons[i].value = "null";
          myButtons[i].click();
          return;
        } else {
          myButtons[i].value = "null";
        }
      }
    }
    // Make a random move if no intelligent move is aviable
    for (let i = 0; i < myButtons.length; i++) {
      if (myButtons[i].value === "null") {
        myButtons[i].click();
        return;
      }
    }
  }
}

function startGame() {
  statusBar.innerHTML = "Make your first move";
  document.querySelectorAll(".game_buttons > button").forEach((button) => {
    button.addEventListener("click", function () {
      if (player === 1 && this.value === "null") {
        console.log("The player made his turn");
        this.innerHTML = player_one_emoji;
        this.value = 1;
        player = 2;
        roundCounter = roundCounter + 1;
        winningConditions();
        if (singlePlayer === true) {
          computerTurn();
        }
      } else if (player === 2 && this.value === "null") {
        this.innerHTML = player_two_emoji;
        this.value = 2;
        player = 1;
        roundCounter = roundCounter + 1;
        console.log("The computer made his turn");
        winningConditions();
      } else {
        console.error("Error");
      }
    });
  });
}
