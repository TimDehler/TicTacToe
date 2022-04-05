let player = Math.floor(Math.random() * (2 - 1 + 1) + 1);
//console.log(player);

let roundCounter = 0;
//console.log(roundCounter);

function winningConditions() {
  if (roundCounter < 9) {
    if (
      my_button_1.value == 1 &&
      my_button_2.value == 1 &&
      my_button_3.value == 1
    ) {
      console.log("Spieler 1 hat gewonnen");
    } else if (
      my_button_4.value == 1 &&
      my_button_5.value == 1 &&
      my_button_6.value == 1
    ) {
      console.log("Spieler 1 hat gewonnen");
    } else if (
      my_button_7.value == 1 &&
      my_button_8.value == 1 &&
      my_button_9.value == 1
    ) {
      console.log("Spieler 1 hat gewonnen");
    } else if (
      my_button_1.value == 1 &&
      my_button_5.value == 1 &&
      my_button_9.value == 1
    ) {
      console.log("Spieler 1 hat gewonnen");
    } else if (
      my_button_3.value == 1 &&
      my_button_5.value == 1 &&
      my_button_7.value == 1
    ) {
      console.log("Spieler 1 hat gewonnen");
    } else if (
      my_button_1.value == 1 &&
      my_button_4.value == 1 &&
      my_button_7.value == 1
    ) {
      console.log("Spieler 1 hat gewonnen");
    } else if (
      my_button_2.value == 1 &&
      my_button_5.value == 1 &&
      my_button_8.value == 1
    ) {
      console.log("Spieler 1 hat gewonnen");
    } else if (
      my_button_3.value == 1 &&
      my_button_6.value == 1 &&
      my_button_9.value == 1
    ) {
      console.log("Spieler 1 hat gewonnen");
    }
    if (
      my_button_1.value == 2 &&
      my_button_2.value == 2 &&
      my_button_3.value == 2
    ) {
      console.log("Spieler 2 hat gewonnen");
    } else if (
      my_button_4.value == 2 &&
      my_button_5.value == 2 &&
      my_button_6.value == 2
    ) {
      console.log("Spieler 2 hat gewonnen");
    } else if (
      my_button_7.value == 2 &&
      my_button_8.value == 2 &&
      my_button_9.value == 2
    ) {
      console.log("Spieler 2 hat gewonnen");
    } else if (
      my_button_1.value == 2 &&
      my_button_5.value == 2 &&
      my_button_9.value == 2
    ) {
      console.log("Spieler 2 hat gewonnen");
    } else if (
      my_button_3.value == 2 &&
      my_button_5.value == 2 &&
      my_button_7.value == 2
    ) {
      console.log("Spieler 2 hat gewonnen");
    } else if (
      my_button_1.value == 2 &&
      my_button_4.value == 2 &&
      my_button_7.value == 2
    ) {
      console.log("Spieler 2 hat gewonnen");
    } else if (
      my_button_2.value == 2 &&
      my_button_5.value == 2 &&
      my_button_8.value == 2
    ) {
      console.log("Spieler 2 hat gewonnen");
    } else if (
      my_button_3.value == 2 &&
      my_button_6.value == 2 &&
      my_button_9.value == 2
    ) {
      console.log("Spieler 2 hat gewonnen");
    }
  } else {
    console.log("unentschieden");
  }
}

document.querySelectorAll(".game > button").forEach((button) => {
  button.addEventListener("click", function () {
    if (player == 1) {
      this.innerHTML = "x";
      this.value = 1;
      player = 2;
      roundCounter = roundCounter + 1;
      console.log(roundCounter);
      winningConditions();
    } else if (player == 2) {
      this.innerHTML = "o";
      this.value = 2;
      player = 1;
      roundCounter = roundCounter + 1;
      console.log(roundCounter);
      winningConditions();
    } else {
      console.log(Error);
    }
  });
});
