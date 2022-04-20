let statusBar = null;
let choose_game_mode = null;
let player = 1;
let singlePlayer = false;
let roundCounter = 0;
myButtons = [];

giveGameMode();

function load() {
  statusBar = document.getElementById("statusBar");
  choose_game_mode = document.getElementById("choose_game_mode");
  let myButtonList = document.querySelectorAll(".game > button");
  myButtons = Array.from(myButtonList);
  document.getElementById("reset").addEventListener("click", function () {
    location.reload();
  });
}

function giveGameMode() {
  load();
  statusBar.innerHTML = "Choose a game mode";
  document
    .getElementById("singleplayer")
    .addEventListener("click", function () {
      statusBar.innerHTML = "You chose Singleplayer";
      singlePlayer = true;
      startGame();
    });
  document.getElementById("multiplayer").addEventListener("click", function () {
    statusBar.innerHTML = "You chose Multiplayer";
    startGame();
  });
}

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

function winningConditions() {
  if (
    roundCounter === 9 &&
    checkIfPlayerWon(1) === false &&
    checkIfPlayerWon(2) === false
  ) {
    console.log("untentschieden");
    statusBar.innerHTML = "Unentschieden";
    return;
  }
  if (checkIfPlayerWon(1) === true) {
    statusBar.innerHTML = "Spieler 1 hat gewonnen!";
    console.log("Spieler 1 hat gewonnen!");
    return;
  } else if (checkIfPlayerWon(2) === true) {
    statusBar.innerHTML = "Spieler 2 hat gewonnen!";
    return;
  }
}

function computerTurnNEW() {
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
  document.querySelectorAll(".game > button").forEach((button) => {
    button.addEventListener("click", function () {
      if (player === 1 && this.value === "null") {
        console.log("The player made his turn");
        this.innerHTML = "🚀";
        this.value = 1;
        player = 2;
        roundCounter = roundCounter + 1;
        winningConditions();
        if (singlePlayer === true) {
          computerTurnNEW();
        }
      } else if (player === 2 && this.value === "null") {
        this.innerHTML = "👾";
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
