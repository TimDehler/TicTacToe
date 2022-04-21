/*
  Patch multiplayer emoji choosing
  Adjust scaling
*/

// Gaim is on
let gameState = true;

// Loading HTML Sections
let statusBar = null;
let choose_game_mode = null;

// Player one always begins
let player = 1;
console.log("presetting player --> 1");

// Will be set on giveGameMode, needed for picking emojis
let multiPlayer = false;
let singlePlayer = true;
console.log("presetting gamemode --> singleplayer");

// Roundcounter for computer turn and console logs
let roundCounter = 0;
console.log("presetting roundcounter --> 0");

// My Buttons Array to give the buttons number locations
myButtons = [];
console.log("initializing --> myButtons Array");

// Default player emojis
let player_one_emoji = "🚀";
let player_two_emoji = "👾";
console.log("presetting player emojis --> rocket / alien");

TICTACTOE();

// Main starting method
function TICTACTOE() {
  console.log("starting --> TICTACTOE()");
  load();
  document.getElementById("singleplayer").style.color = "blue";
}

// Loading all neccessary Buttons and sections
function load() {
  console.log("starting --> load()");
  statusBar = document.getElementById("statusBar");
  console.log("getting --> statusBar");
  choose_game_mode = document.getElementById("choose_game_mode");
  console.log("getting --> choose_game_mode");
  let myButtonList = document.querySelectorAll(".game_buttons > button");
  myButtons = Array.from(myButtonList);
  console.log("filling --> myButtons Array");
  loadEventListeners();
}

// Function loading all Evenlisteners for the buttons
function loadEventListeners() {
  console.log("starting --> loadEventListeners()");
  // Loading event Listeners for multi and singleplayer buttons
  console.log("loading --> menu buttons");
  document.querySelectorAll(".menu > button").forEach((button) => {
    button.addEventListener("click", function () {
      if (this === document.getElementById("singleplayer")) {
        singleplayer_mode();
      } else if (this === document.getElementById("multiplayer")) {
        multiplayer_mode();
      }
    });
  });
  console.log("loading --> emoji buttons");
  document.querySelectorAll(".upper_right > button").forEach((button) => {
    button.addEventListener("click", function () {
      if (singlePlayer === true) {
        if (this === document.getElementById("unicorn")) {
          player_one_emoji = "🦄";
          console.log("change --> player one emoji --> unicorn");
        } else if (
          this === document.getElementById("fries") &&
          this.value === "null"
        ) {
          player_one_emoji = "🍟";
          console.log("change --> player one emoji --> fries");
        } else if (
          this === document.getElementById("star") &&
          this.value === "null"
        ) {
          player_one_emoji = "🌠";
          console.log("change --> player one emoji --> star");
        } else if (this === document.getElementById("ape")) {
          player_one_emoji = "🙉";
          console.log("change --> player one emoji --> ape");
        } else if (
          this === document.getElementById("bike") &&
          this.value === "null"
        ) {
          player_one_emoji = "🚲";
          console.log("change --> player one emoji --> bike");
        }
      } else if (multiplayer === true) {
      }
    });
  });
  // Reset button
  document.getElementById("reset").addEventListener("click", function () {
    location.reload();
  });
  startGame();
}

// Function for starting singleplayer
function singleplayer_mode() {
  if (singlePlayer === true) {
    location.reload();
  } else if (singlePlayer === false) {
    document.getElementById("singleplayer").style.color = "blue";
    document.getElementById("multiplayer").style.color = "white";
    singlePlayer = true;
    multiplayer = false;
  }
}

// Function for starting multiplayer
function multiplayer_mode() {
  if (multiPlayer === true) {
    location.reload();
  } else if (multiPlayer === false) {
    document.getElementById("multiplayer").style.color = "blue";
    document.getElementById("singleplayer").style.color = "white";
    singlePlayer = false;
    multiPlayer = true;
  }
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
    statusBar.innerHTML = "Draw";
    gameState = false;
    return;
  }
  if (checkIfPlayerWon(1) === true) {
    statusBar.innerHTML = "Player 1 has won!";
    gameState = false;
    return;
  } else if (checkIfPlayerWon(2) === true) {
    statusBar.innerHTML = "Player 2 has won!";
    gameState = false;
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
        this.innerHTML = player_one_emoji;
        this.value = 1;
        winningConditions();
        if (gameState) {
          player = 2;
        } else {
          player = 3;
        }
        roundCounter = roundCounter + 1;

        if (singlePlayer === true && gameState === true) {
          computerTurn();
        }
      } else if (player === 2 && this.value === "null") {
        this.innerHTML = player_two_emoji;
        this.value = 2;
        winningConditions();
        if (gameState) {
          player = 1;
        } else {
          player = 3;
        }
        roundCounter = roundCounter + 1;
      }
    });
  });
}
