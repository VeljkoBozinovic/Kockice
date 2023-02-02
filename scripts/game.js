//Indicator for player turn
const elArrowLeft = document.querySelector(
  ".container-player-header-arrowLeft"
);
const elArrowRight = document.querySelector(
  ".container-player-header-arrowRight"
);
//buttons
const elBtnRoll = document.querySelector(".btnRoll");
const elBtnStore = document.querySelector(".btnStore");
//Player One
const elP1Dice = document.querySelector(".playerOneDice");
const elP1Score = document.querySelector(".playerOneScore");
const elP1Current = document.querySelector(".playerOneCurrent");
//Player Two
const elP2Dice = document.querySelector(".playerTwoDice");
const elP2Score = document.querySelector(".playerTwoScore");
const elP2Current = document.querySelector(".playerTwoCurrent");
//Storage
let playerOneTurn = true;
let diceRandom = 0;
let scoreP1 = 0;
let scoreP2 = 0;
let current = 0;
//Winner page
const elWinnerPage = document.querySelector(".winner");
const elWinnerName = document.querySelector(".winner-container-player-name");

elBtnRoll.addEventListener("click", () => {
  diceRandom = Math.floor(Math.random() * 6) + 1;

  playerOneTurn === true
    ? (elP1Dice.src = `images/dice-${diceRandom}.png`)
    : (elP2Dice.src = `images/dice-${diceRandom}.png`);

  if (diceRandom === 1) {
    current = 0;

    if (playerOneTurn === true) {
      elP1Current.textContent = "Current: 0";
      scoreP1 += current;
      elP1Score.textContent = `Score: ${scoreP1}`;
      playerOneTurn = false;
      elArrowRight.classList.remove("displayTurnRight");
      elArrowLeft.classList.add("displayTurnLeft");
    } else {
      elP2Current.textContent = "Current: 0";
      scoreP2 += current;
      elP2Score.textContent = `Score: ${scoreP2}`;
      playerOneTurn = true;
      elArrowLeft.classList.remove("displayTurnLeft");
      elArrowRight.classList.add("displayTurnRight");
    }
  } else {
    current += diceRandom;

    playerOneTurn === true
      ? (elP1Current.textContent = `Current: ${current}`)
      : (elP2Current.textContent = `Current: ${current}`);
  }

  if (playerOneTurn === true && scoreP1 + current >= 50) {
    elWinnerPage.classList.remove("winner-hide");
    elWinnerName.innerHTML = nameOne;
  } else if (playerOneTurn === false && scoreP2 + current >= 50) {
    elWinnerPage.classList.remove("winner-hide");
    elWinnerName.innerHTML = nameTwo;
  }
});

elBtnStore.addEventListener("click", () => {
  if (playerOneTurn === true) {
    scoreP1 += current;
    current = 0;
    elP1Current.textContent = `Current: ${current}`;
    elP1Score.textContent = `Score: ${scoreP1}`;
    elP1Dice.src = `images/dice-placeholder.png`;
    playerOneTurn = false;
    elArrowLeft.classList.add("displayTurnLeft");
    elArrowRight.classList.remove("displayTurnRight");
  } else {
    scoreP2 += current;
    current = 0;
    elP2Current.textContent = `Current: ${current}`;
    elP2Score.textContent = `Score: ${scoreP2}`;
    elP2Dice.src = `images/dice-placeholder.png`;
    playerOneTurn = true;
    elArrowLeft.classList.remove("displayTurnLeft");
    elArrowRight.classList.add("displayTurnRight");
  }
});
