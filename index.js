const td1 = document.querySelector(".td1");
const td2 = document.querySelector(".td2");
const td3 = document.querySelector(".td3");
const td4 = document.querySelector(".td4");
const td5 = document.querySelector(".td5");
const td6 = document.querySelector(".td6");
const td7 = document.querySelector(".td7");
const td8 = document.querySelector(".td8");
const td9 = document.querySelector(".td9");
const infoTitle = document.querySelector(".info__title");
const buttonCancel = document.querySelector(".cancel");
const buttonNewGame = document.querySelector(".newGame");
const finishMenu = document.querySelector(".finishWin");
const winner = document.querySelector(".winner");
const startGame = document.querySelector(".startGame");
const startMenu = document.querySelector(".menuStart");
startGame.addEventListener("click", () => {
  startMenu.style.display = "none";
});
const CheckContains = (teg) => {
  if (teg.textContent === "") {
    return true;
  } else {
    return false;
  }
};
let mainControl = 0,
  control = true,
  lastPress = 0,
  winControl = 0,
  playerWin = 0;
const showButton = () => {
  if (
    td1.textContent === "" &&
    td2.textContent === "" &&
    td3.textContent === "" &&
    td4.textContent === "" &&
    td5.textContent === "" &&
    td6.textContent === "" &&
    td7.textContent === "" &&
    td8.textContent === "" &&
    td9.textContent === ""
  ) {
    buttonCancel.style.display = "none";
  } else {
    buttonCancel.style.display = "block";
  }
};
showButton();
const win = () => {
  if (
    td1.textContent === "X" &&
    td2.textContent === "X" &&
    td3.textContent === "X"
  ) {
    td1.style.color = "green";
    td2.style.color = "green";
    td3.style.color = "green";
    playerWin = 1;
    winControl = 1;
  } else if (
    td4.textContent === "X" &&
    td5.textContent === "X" &&
    td6.textContent === "X"
  ) {
    td4.style.color = "green";
    td5.style.color = "green";
    td6.style.color = "green";
    playerWin = 1;
    winControl = 1;
  } else if (
    td7.textContent === "X" &&
    td8.textContent === "X" &&
    td9.textContent === "X"
  ) {
    td7.style.color = "green";
    td8.style.color = "green";
    td9.style.color = "green";
    playerWin = 1;
    winControl = 1;
  } else if (
    td1.textContent === "X" &&
    td4.textContent === "X" &&
    td7.textContent === "X"
  ) {
    td1.style.color = "green";
    td4.style.color = "green";
    td7.style.color = "green";
    playerWin = 1;
    winControl = 1;
  } else if (
    td2.textContent === "X" &&
    td5.textContent === "X" &&
    td8.textContent === "X"
  ) {
    td2.style.color = "green";
    td5.style.color = "green";
    td8.style.color = "green";
    playerWin = 1;
    winControl = 1;
  } else if (
    td3.textContent === "X" &&
    td6.textContent === "X" &&
    td9.textContent === "X"
  ) {
    td3.style.color = "green";
    td6.style.color = "green";
    td9.style.color = "green";
    playerWin = 1;
    winControl = 1;
  } else if (
    td1.textContent === "X" &&
    td5.textContent === "X" &&
    td9.textContent === "X"
  ) {
    td1.style.color = "green";
    td5.style.color = "green";
    td9.style.color = "green";
    playerWin = 1;
    winControl = 1;
  } else if (
    td3.textContent === "X" &&
    td5.textContent === "X" &&
    td7.textContent === "X"
  ) {
    td3.style.color = "green";
    td5.style.color = "green";
    td7.style.color = "green";
    playerWin = 1;
    winControl = 1;
  } else if (
    td1.textContent === "O" &&
    td2.textContent === "O" &&
    td3.textContent === "O"
  ) {
    td1.style.color = "green";
    td2.style.color = "green";
    td3.style.color = "green";
    playerWin = 2;
    winControl = 1;
  } else if (
    td4.textContent === "O" &&
    td5.textContent === "O" &&
    td6.textContent === "O"
  ) {
    td4.style.color = "green";
    td5.style.color = "green";
    td6.style.color = "green";
    playerWin = 2;
    winControl = 1;
  } else if (
    td7.textContent === "O" &&
    td8.textContent === "O" &&
    td9.textContent === "O"
  ) {
    td7.style.color = "green";
    td8.style.color = "green";
    td9.style.color = "green";
    playerWin = 2;
    winControl = 1;
  } else if (
    td1.textContent === "O" &&
    td4.textContent === "O" &&
    td7.textContent === "O"
  ) {
    td1.style.color = "green";
    td4.style.color = "green";
    td7.style.color = "green";
    playerWin = 2;
    winControl = 1;
  } else if (
    td2.textContent === "O" &&
    td5.textContent === "O" &&
    td8.textContent === "O"
  ) {
    td2.style.color = "green";
    td5.style.color = "green";
    td8.style.color = "green";
    playerWin = 2;
    winControl = 1;
  } else if (
    td3.textContent === "O" &&
    td6.textContent === "O" &&
    td9.textContent === "O"
  ) {
    td3.style.color = "green";
    td6.style.color = "green";
    td9.style.color = "green";
    playerWin = 2;
    winControl = 1;
  } else if (
    td1.textContent === "O" &&
    td5.textContent === "O" &&
    td9.textContent === "O"
  ) {
    td1.style.color = "green";
    td5.style.color = "green";
    td9.style.color = "green";
    playerWin = 2;
    winControl = 1;
  } else if (
    td3.textContent === "O" &&
    td5.textContent === "O" &&
    td7.textContent === "O"
  ) {
    td3.style.color = "green";
    td5.style.color = "green";
    td7.style.color = "green";
    playerWin = 2;
    winControl = 1;
  } else if (
    td1.textContent !== "" &&
    td2.textContent !== "" &&
    td3.textContent !== "" &&
    td4.textContent !== "" &&
    td5.textContent !== "" &&
    td6.textContent !== "" &&
    td7.textContent !== "" &&
    td8.textContent !== "" &&
    td9.textContent !== ""
  ) {
    winControl = -1;
  }
};
buttonCancel.addEventListener("click", () => {
  if (winControl === 0) {
    if (lastPress != -1) {
      if (lastPress === 1) {
        if (infoTitle.innerHTML === "Ход игрока 2 (O)") {
          infoTitle.innerHTML = "Ход игрока 1 (X)";
        } else {
          infoTitle.innerHTML = "Ход игрока 2 (O)";
        }
        td1.innerHTML = "";
        control = !control;
      }

      if (lastPress === 2) {
        if (infoTitle.innerHTML === "Ход игрока 2 (O)") {
          infoTitle.innerHTML = "Ход игрока 1 (X)";
        } else {
          infoTitle.innerHTML = "Ход игрока 2 (O)";
        }
        td2.innerHTML = "";
        control = !control;
      }

      if (lastPress === 3) {
        if (infoTitle.innerHTML === "Ход игрока 2 (O)") {
          infoTitle.innerHTML = "Ход игрока 1 (X)";
        } else {
          infoTitle.innerHTML = "Ход игрока 2 (O)";
        }
        td3.innerHTML = "";
        control = !control;
      }

      if (lastPress === 4) {
        if (infoTitle.innerHTML === "Ход игрока 2 (O)") {
          infoTitle.innerHTML = "Ход игрока 1 (X)";
        } else {
          infoTitle.innerHTML = "Ход игрока 2 (O)";
        }
        td4.innerHTML = "";
        control = !control;
      }

      if (lastPress === 5) {
        if (infoTitle.innerHTML === "Ход игрока 2 (O)") {
          infoTitle.innerHTML = "Ход игрока 1 (X)";
        } else {
          infoTitle.innerHTML = "Ход игрока 2 (O)";
        }
        td5.innerHTML = "";
        control = !control;
      }

      if (lastPress === 6) {
        if (infoTitle.innerHTML === "Ход игрока 2 (O)") {
          infoTitle.innerHTML = "Ход игрока 1 (X)";
        } else {
          infoTitle.innerHTML = "Ход игрока 2 (O)";
        }
        td6.innerHTML = "";
        control = !control;
      }

      if (lastPress === 7) {
        if (infoTitle.innerHTML === "Ход игрока 2 (O)") {
          infoTitle.innerHTML = "Ход игрока 1 (X)";
        } else {
          infoTitle.innerHTML = "Ход игрока 2 (O)";
        }
        td7.innerHTML = "";
        control = !control;
      }

      if (lastPress === 8) {
        if (infoTitle.innerHTML === "Ход игрока 2 (O)") {
          infoTitle.innerHTML = "Ход игрока 1 (X)";
        } else {
          infoTitle.innerHTML = "Ход игрока 2 (O)";
        }
        td8.innerHTML = "";
        control = !control;
      }

      if (lastPress === 9) {
        if (infoTitle.innerHTML === "Ход игрока 2 (O)") {
          infoTitle.innerHTML = "Ход игрока 1 (X)";
        } else {
          infoTitle.innerHTML = "Ход игрока 2 (O)";
        }
        td9.innerHTML = "";
        control = !control;
      }
      lastPress = -1;
      buttonCancel.style.border = "none";
      buttonCancel.style.color = "black";
      showButton();
    } else {
      buttonCancel.style.border = "4px solid red";
      buttonCancel.style.color = "red";
    }
  }
});
const finish = () => {
  if (winControl != 0) {
    if (winControl === 1) {
      finishMenu.style.display = "flex";
      winner.innerHTML = `Победитель: ${playerWin} игрок`;
    }
    if (winControl === -1) {
      finishMenu.style.display = "flex";
      winner.innerHTML = `Ничья`;
    }
  }
};
buttonNewGame.addEventListener("click", () => {
  td1.innerHTML = "";
  td2.innerHTML = "";
  td3.innerHTML = "";
  td4.innerHTML = "";
  td5.innerHTML = "";
  td6.innerHTML = "";
  td7.innerHTML = "";
  td8.innerHTML = "";
  td9.innerHTML = "";
  (mainControl = 0),
    (control = true),
    (lastPress = 0),
    (winControl = 0),
    (playerWin = 0);
  finishMenu.style.display = "none";
  td1.style.color = "black";
  td2.style.color = "black";
  td3.style.color = "black";
  td4.style.color = "black";
  td5.style.color = "black";
  td6.style.color = "black";
  td7.style.color = "black";
  td8.style.color = "black";
  td9.style.color = "black";
  infoTitle.innerHTML = "Ход игрока 1 (X)";
  showButton();
});
td1.addEventListener("click", () => {
  if (winControl === 0) {
    if (CheckContains(td1)) {
      if (control) {
        td1.innerHTML = "X";
        infoTitle.innerHTML = "Ход игрока 2 (O)";
      } else {
        td1.innerHTML = "O";
        infoTitle.innerHTML = "Ход игрока 1 (X)";
      }
      control = !control;
      lastPress = 1;
      buttonCancel.style.border = "none";
      buttonCancel.style.color = "black";
      showButton();
      win();
      finish();
    }
  }
});

td2.addEventListener("click", () => {
  if (winControl === 0) {
    if (CheckContains(td2)) {
      if (control) {
        td2.innerHTML = "X";
        infoTitle.innerHTML = "Ход игрока 2 (O)";
      } else {
        td2.innerHTML = "O";
        infoTitle.innerHTML = "Ход игрока 1 (X)";
      }
      control = !control;
      lastPress = 2;
      buttonCancel.style.border = "none";
      buttonCancel.style.color = "black";
      showButton();
      win();
      finish();
    }
  }
});

td3.addEventListener("click", () => {
  if (winControl === 0) {
    if (CheckContains(td3)) {
      if (control) {
        td3.innerHTML = "X";
        infoTitle.innerHTML = "Ход игрока 2 (O)";
      } else {
        td3.innerHTML = "O";
        infoTitle.innerHTML = "Ход игрока 1 (X)";
      }
      control = !control;
      lastPress = 3;
      buttonCancel.style.border = "none";
      buttonCancel.style.color = "black";
      showButton();
      win();
      finish();
    }
  }
});

td4.addEventListener("click", () => {
  if (winControl === 0) {
    if (CheckContains(td4)) {
      if (control) {
        td4.innerHTML = "X";
        infoTitle.innerHTML = "Ход игрока 2 (O)";
      } else {
        td4.innerHTML = "O";
        infoTitle.innerHTML = "Ход игрока 1 (X)";
      }
      control = !control;
      lastPress = 4;
      buttonCancel.style.border = "none";
      buttonCancel.style.color = "black";
      showButton();
      win();
      finish();
      playerWin = 1;
    }
  }
});

td5.addEventListener("click", () => {
  if (winControl === 0) {
    if (CheckContains(td5)) {
      if (control) {
        td5.innerHTML = "X";
        infoTitle.innerHTML = "Ход игрока 2 (O)";
      } else {
        td5.innerHTML = "O";
        infoTitle.innerHTML = "Ход игрока 1 (X)";
      }
      control = !control;
      lastPress = 5;
      buttonCancel.style.border = "none";
      buttonCancel.style.color = "black";
      showButton();
      win();
      finish();
    }
  }
});

td6.addEventListener("click", () => {
  if (winControl === 0) {
    if (CheckContains(td6)) {
      if (control) {
        td6.innerHTML = "X";
        infoTitle.innerHTML = "Ход игрока 2 (O)";
      } else {
        td6.innerHTML = "O";
        infoTitle.innerHTML = "Ход игрока 1 (X)";
      }
      control = !control;
      lastPress = 6;
      buttonCancel.style.border = "none";
      buttonCancel.style.color = "black";
      showButton();
      win();
      finish();
    }
  }
});

td7.addEventListener("click", () => {
  if (winControl === 0) {
    if (CheckContains(td7)) {
      if (control) {
        td7.innerHTML = "X";
        infoTitle.innerHTML = "Ход игрока 2 (O)";
      } else {
        td7.innerHTML = "O";
        infoTitle.innerHTML = "Ход игрока 1 (X)";
      }
      control = !control;
      lastPress = 7;
      buttonCancel.style.border = "none";
      buttonCancel.style.color = "black";
      showButton();
      win();
      finish();
    }
  }
});

td8.addEventListener("click", () => {
  if (winControl === 0) {
    if (CheckContains(td8)) {
      if (control) {
        td8.innerHTML = "X";
        infoTitle.innerHTML = "Ход игрока 2 (O)";
      } else {
        td8.innerHTML = "O";
        infoTitle.innerHTML = "Ход игрока 1 (X)";
      }
      control = !control;
      lastPress = 8;
      buttonCancel.style.border = "none";
      buttonCancel.style.color = "black";
      showButton();
      win();
      finish();
    }
  }
});

td9.addEventListener("click", () => {
  if (winControl === 0) {
    if (CheckContains(td9)) {
      if (control) {
        td9.innerHTML = "X";
        infoTitle.innerHTML = "Ход игрока 2 (O)";
      } else {
        td9.innerHTML = "O";
        infoTitle.innerHTML = "Ход игрока 1 (X)";
      }
      control = !control;
      lastPress = 9;
      buttonCancel.style.border = "none";
      buttonCancel.style.color = "black";
      showButton();
      win();
      finish();
    }
  }
});
