const elStart = document.querySelector(".start");
const elBtnStart = document.querySelector("input[type = 'submit']");
const elInputs = document.querySelectorAll("input[type = 'text']");
//Player names GAME
const elP1Name = document.querySelector(".playerOneName");
const elP2Name = document.querySelector(".playerTwoName");

let nameOne;
let nameTwo;

elBtnStart.addEventListener("click", (e) => {
  e.preventDefault();

  nameOne =
    elInputs[0].value !== "" ? elInputs[0].value : elInputs[0].placeholder;
  elP1Name.innerHTML = nameOne;
  nameTwo =
    elInputs[1].value !== "" ? elInputs[1].value : elInputs[1].placeholder;
  elP2Name.innerHTML = nameTwo;

  elStart.style.display = "none";
});
