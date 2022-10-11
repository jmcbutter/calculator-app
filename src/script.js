// THEME TOGGLE
let themeSwitch = document.getElementById("toggle");
themeSwitch.addEventListener("change", (e) => document.body.setAttribute("data-theme", e.target.value));


const buttons = document.querySelectorAll("[data-button]");
const display = document.getElementById("display");

display.addEventListener("change", (e) => console.log(e.target.value));
buttons.forEach(button => button.addEventListener("click", onButtonClick));

let pendingValue = "0";
let pendingOperator = "+";

let valueEntered = false;

function onButtonClick(e) {
  //If the button is a number, add the number to the display
  //If the button is an operator, add the displayed number to the pending calculation area along with the operator and reset display to 0
  //    Complete any pending calculations as well
  //If the button is del, remove the last number from the display. If there are no more numbers in the display, reset the display to 0
  //If the button is reset, remove any pending calculations and reset the display to 0
  //Check displayed value + new value against regex pattern. If it matches, allow new value. Otherwise, disallow it
  const numberRegex = new RegExp('^([-+]?\\d*\\.?\\d*)(?:[eE]([-+]?\\d+))?$');
  const key = e.target.getAttribute("data-button");

  if (numberRegex.test(display.value + key)) {
    display.value = display.value + key;
    if (display.value[1] != "." && display.value[0] == "0") {
      display.value = display.value.slice(1);
    }
    valueEntered = true;   
  }

  const operatorRegex = new RegExp('[\/]|[x]|[=]|[+]|[-]');
  const pendingDisplay = document.getElementById("pending");

  if (operatorRegex.test(key)) {
    let newValue;
    switch(pendingOperator) {
      case "x":
        newValue = +pendingValue * +display.value;
        break;
      case "/":
        newValue = +pendingValue / +display.value;
        break;
      case "-":
        newValue = +pendingValue - +display.value;
        break;
      case "+":
        newValue = +pendingValue + +display.value;
        break;
    }
    if (key == "=" && valueEntered) pendingDisplay.textContent = pendingValue + " " + pendingOperator + " " + display.value + " =";
    if (valueEntered) {
      pendingValue = +newValue;
      valueEntered = false;
    }
    if (key != "=") {
      pendingOperator = key;
      pendingDisplay.textContent = pendingValue + " " + key;
      display.value = "0";
    } else {
      display.value = pendingValue;
    }

  }

  const clearRegex = new RegExp('del|reset');

  if (clearRegex.test(key)) {
    switch(key) {
      case "del":
        display.value = display.value.slice(0, -1);
        if (display.value == "") display.value = "0";
        break;
      case "reset":
        display.value = "0";
        pendingDisplay.textContent = "";
        pendingValue = 0;
        pendingOperator = "+";
        break;
    }
  }
}