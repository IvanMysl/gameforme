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
const CheckContains = (teg) => {
  if (teg.textContent === "") {
    return true;
  } else {
    return false;
  }
};
let control = true;
td1.addEventListener("click", () => {
  if (CheckContains(td1)) {
    if (control) {
      td1.innerHTML = "X";
      infoTitle.innerHTML = "Ход игрока 2 (O)";
    } else {
      td1.innerHTML = "O";
      infoTitle.innerHTML = "Ход игрока 1 (X)";
    }
    control = !control;
  }
  else{
    td1.innerHTML = "";
    control = !control;
    infoTitle.innerHTML = "Ход игрока 1 (X)";
  }
});

td2.addEventListener("click", () => {
  if (CheckContains(td2)) {
    if (control) {
      td2.innerHTML = "X";
      infoTitle.innerHTML = "Ход игрока 2 (O)";
    } else {
      td2.innerHTML = "O";
      infoTitle.innerHTML = "Ход игрока 1 (X)";
    }
    control = !control;
  }
});

td3.addEventListener("click", () => {
  if (CheckContains(td3)) {
    if (control) {
      td3.innerHTML = "X";
      infoTitle.innerHTML = "Ход игрока 2 (O)";
    } else {
      td3.innerHTML = "O";
      infoTitle.innerHTML = "Ход игрока 1 (X)";
    }
    control = !control;
  }
});

td4.addEventListener("click", () => {
  if (CheckContains(td4)) {
    if (control) {
      td4.innerHTML = "X";
      infoTitle.innerHTML = "Ход игрока 2 (O)";
    } else {
      td4.innerHTML = "O";
      infoTitle.innerHTML = "Ход игрока 1 (X)";
    }
    control = !control;
  }
});

td5.addEventListener("click", () => {
  if (CheckContains(td5)) {
    if (control) {
      td5.innerHTML = "X";
      infoTitle.innerHTML = "Ход игрока 2 (O)";
    } else {
      td5.innerHTML = "O";
      infoTitle.innerHTML = "Ход игрока 1 (X)";
    }
    control = !control;
  }
});

td6.addEventListener("click", () => {
  if (CheckContains(td6)) {
    if (control) {
      td6.innerHTML = "X";
      infoTitle.innerHTML = "Ход игрока 2 (O)";
    } else {
      td6.innerHTML = "O";
      infoTitle.innerHTML = "Ход игрока 1 (X)";
    }
    control = !control;
  }
});

td7.addEventListener("click", () => {
  if (CheckContains(td7)) {
    if (control) {
      td7.innerHTML = "X";
      infoTitle.innerHTML = "Ход игрока 2 (O)";
    } else {
      td7.innerHTML = "O";
      infoTitle.innerHTML = "Ход игрока 1 (X)";
    }
    control = !control;
  }
});

td8.addEventListener("click", () => {
  if (CheckContains(td8)) {
    if (control) {
      td8.innerHTML = "X";
      infoTitle.innerHTML = "Ход игрока 2 (O)";
    } else {
      td8.innerHTML = "O";
      infoTitle.innerHTML = "Ход игрока 1 (X)";
    }
    control = !control;
  }
});

td9.addEventListener("click", () => {
  if (CheckContains(td9)) {
    if (control) {
      td9.innerHTML = "X";
      infoTitle.innerHTML = "Ход игрока 2 (O)";
    } else {
      td9.innerHTML = "O";
      infoTitle.innerHTML = "Ход игрока 1 (X)";
    }
    control = !control;
  }
});
