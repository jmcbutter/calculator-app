// THEME TOGGLE
let themeSwitch = document.getElementById("toggle");
themeSwitch.addEventListener("change", (e) => document.body.setAttribute("data-theme", e.target.value));

const display = document.getElementById("display");
const buttons = Array.from(document.querySelectorAll("[data-key]"));

let leftOperand = 0;
let operator = "+";

let beginNewOperand = true;
let beginNewExpression = true;

const operandButtons = document.querySelectorAll("[data-type='value']");
operandButtons.forEach(button => button.addEventListener("click", (e) => {  
  const key = e.target.getAttribute("data-button");
  let rightOperand = display.value + key;
  let validOperand = /^([-+]?\d*\.?\d*)(?:[eE]([-+]?\d+))?$/.test(rightOperand);

  if (beginNewOperand) {
    rightOperand = key;
    beginNewOperand = false;
  }

  if (beginNewExpression) {
    leftOperand = 0;
    operator = "+";
    beginNewExpression = false;
  }

  if (validOperand) {
    display.value = rightOperand;
    if (needsLeadingZero()) {
      console.log(display.value);
      display.value = "0" + display.value;
    }
  }

  function needsLeadingZero() {
    return /^[-+]?[.].*/.test(display.value);
  }
}))

const operatorButtons = document.querySelectorAll("[data-type='operator']");
operatorButtons.forEach(button => button.addEventListener("click", (e) => {
  const key = e.target.getAttribute("data-button");
  const rightOperand = +display.value;
  const pendingDisplay = document.getElementById("pending");

  let result;
  switch(operator) {
    case "x":
      result = leftOperand * rightOperand;
      break;
    case "/":
      result = leftOperand / rightOperand;
      break;
    case "-":
      result = leftOperand - rightOperand;
      break;
    case "+":
      result = leftOperand + rightOperand;
      break;
    }

    if (keyIsEqualitySign() && !beginNewExpression) {
      pendingDisplay.textContent = leftOperand + " " + operator + " " + rightOperand + " =";
      display.value = +result;
      leftOperand = +result;
      beginNewOperand = true;
      beginNewExpression = true;
    } else if (!keyIsEqualitySign() && beginNewExpression) {
      console.log("test");
      pendingDisplay.textContent = leftOperand + " " + key;
      display.value = "0";
      operator = key;
      beginNewExpression = false;
    } else if (!keyIsEqualitySign()) {
      leftOperand = +result;
      operator = key;
      pendingDisplay.textContent = leftOperand + " " + operator;
      display.value = "0";
      beginNewOperand = true;
    }

    function keyIsEqualitySign() {
      return key == "=";
    }
}))

const clearButtons = document.querySelectorAll("[data-type='clear']");
clearButtons.forEach(button => button.addEventListener("click", (e) => {
  const key = e.target.getAttribute("data-button");
  const pendingDisplay = document.getElementById("pending");

  switch(key) {
    case "del":
      display.value = display.value.slice(0, -1);
      if (display.value == "") display.value = "0";
      break;
    case "reset":
      display.value = "0";
      pendingDisplay.textContent = "";
      leftOperand = 0;
      operator = "+";
      break;
  }
}))

window.addEventListener("keydown", (e) => {
  const correspondingButton = buttons.filter(button => {
    let keys = button.dataset.key.split(" ");
    return keys.includes(e.key);
  })[0];
  correspondingButton.dispatchEvent(new Event("click"));
})