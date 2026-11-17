const urdun = document.getElementById("urdun");
let firstNumber = 0;
let secondNumber = 0;
let action = null;

const getNumber = (number) => {
  if (action && firstNumber > 0) {
    secondNumber = secondNumber * 10 + number;
    urdun.textContent = secondNumber;
  } else {
    firstNumber = firstNumber * 10 + number;
    urdun.textContent = firstNumber;
  }
};

const getAction = (uildel) => {
  action = uildel;
};
const showHariu = () => {
  if (action === "nemeh") {
    hariu = firstNumber + secondNumber;
    urdun.textContent = hariu;
    action = null;
    firstNumber = hariu;
    secondNumber = 0;
  } else if (action === "hasah") {
    hariu = firstNumber - secondNumber;
    urdun.textContent = hariu;
    action = null;
    firstNumber = hariu;
    secondNumber = 0;
  } else if (action === "urjih") {
    hariu = firstNumber * secondNumber;
    urdun.textContent = hariu;
    action = null;
    firstNumber = hariu;
    secondNumber = 0;
  } else if (action === "huvaah") {
    hariu = firstNumber / secondNumber;
    urdun.textContent = hariu;
    action = null;
    firstNumber = hariu;
    secondNumber = 0;
  }
};
const clearall = () => {
  firstNumber = 0;
  secondNumber = 0;
  action = null;
  urdun.textContent = "";
};
