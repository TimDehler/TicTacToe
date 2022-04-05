let player = Math.floor(Math.random() * (2 - 1 + 1) + 1);
//console.log(player);

let roundCounter = 0;
//console.log(roundCounter);

function winningConditions() {
  if (roundCounter === 9) {
    console.log("unentschieden");
    return;
  }
  if (checkIfPlayerWon(1) === true) {
    console.log(`Spieler 1 hat gewonnen`);
  } else if (checkIfPlayerWon(2) === true) {
    console.log(`Spieler 2 hat gewonnen`);
  }
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
  }
}

document.querySelectorAll(".game > button").forEach((button) => {
  button.addEventListener("click", function () {
    if (player == 1) {
      this.innerHTML = "x";
      this.value = 1;
      player = 2;
      roundCounter = roundCounter + 1;
      //console.log(roundCounter);
      winningConditions();
    } else if (player == 2) {
      this.innerHTML = "o";
      this.value = 2;
      player = 1;
      roundCounter = roundCounter + 1;
      //console.log(roundCounter);
      winningConditions();
    } else {
      console.log(Error);
    }
  });
});
