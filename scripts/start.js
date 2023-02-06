const elStart = document.querySelector(".start");
const elBtnStart = document.querySelector("input[type = 'submit']");
const elInputs = document.querySelectorAll("input[type = 'text']");
//Player names GAME
const elP1Name = document.querySelector(".playerOneName");
const elP2Name = document.querySelector(".playerTwoName");
//Countdown
const elCD = document.querySelector(".countdown");
const elCDParagraph = document.querySelector(".countdown-p");
let CD = 3;

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

  countdownTimer();
});

function countdownTimer() {
  elCD.classList.remove("CD-hide");

  let myInterval = setInterval(() => {
    CD--;

    if (CD === 1) {
      elCDParagraph.innerHTML = "Start!";
      setTimeout(() => {
        clearInterval(myInterval);
        elStart.style.display = "none";
      }, 1000);
    } else {
      elCDParagraph.innerHTML = CD;
    }
  }, 1000);
}
