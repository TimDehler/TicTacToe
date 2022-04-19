let statusBar = null;
let menu = null;
let gamemode = null;
let player = 1;
let singlePlayer = false;
let roundCounter = 0;
let gameModeIsGiven = false;
let gameStatus = false;
let noOtherTurn = true;
myButtons = [];

giveGameMode();

function load() {
  statusBar = document.getElementById("statusBar");
  menu = document.getElementById("menu");
  let myButtonList = document.querySelectorAll(".game_buttons > button");
  console.log(myButtonList);
  myButtons = Array.from(myButtonList);
  console.log(myButtons);
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
      gameModeIsGiven = true;
      startGame();
    });
  document.getElementById("multiplayer").addEventListener("click", function () {
    statusBar.innerHTML = "You chose Multiplayer";
    gameModeIsGiven = true;
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
    gameStatus = true;
    return;
  }
  if (checkIfPlayerWon(1) === true) {
    statusBar.innerHTML = "Spieler 1 hat gewonnen!";
    console.log("Spieler 1 hat gewonnen!");
    gameStatus = true;
    return;
  } else if (checkIfPlayerWon(2) === true) {
    statusBar.innerHTML = "Spieler 2 hat gewonnen!";
    gameStatus = true;
    return;
  }
}

function computerTurn() {
  if (
    (myButtons[1].value != "null" && roundCounter === 1) ||
    (myButtons[3].value != "null" && roundCounter === 1) ||
    (myButtons[5].value != "null" && roundCounter === 1) ||
    myButtons[7].value != "null"
  ) {
    myButtons[0].click();
    return;
  } else if (roundCounter === 1 && myButtons[4].value != "null") {
    console.log("Block Corner");
    myButtons[0].click();
    return;
  } else if (roundCounter === 1 && myButtons[4].value === "null") {
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
  } else if (roundCounter > 2) {
    for (let i = 0; i < myButtons.length; i++) {
      console.log("test");
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
    if (myButtons[4].value === "null") {
      myButtons[4].click();
      return;
    } else {
      for (let g = 0; g < myButtons.length; g++) {
        if (myButtons[g].value === "null") {
          myButtons[g].click();
          return;
        }
      }
    }
  }
}

function startGame() {
  document.querySelectorAll(".game_buttons > button").forEach((button) => {
    button.addEventListener("click", function () {
      if (player === 1 && this.value === "null") {
        console.log("player_turn");
        this.innerHTML = "x";
        this.value = 1;
        player = 2;
        roundCounter = roundCounter + 1;
        winningConditions();
        if (gameStatus === false && singlePlayer === true) {
          computerTurn();
        }
      } else if (player === 2 && this.value === "null") {
        if (noOtherTurn === false) {
          noOtherTurn = true;
        }
        this.innerHTML = "o";
        this.value = 2;
        player = 1;
        roundCounter = roundCounter + 1;
        winningConditions();
      } else {
        console.error("Error");
      }
    });
  });
}
