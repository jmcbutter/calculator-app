const VALID_KEYS = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  ".",
  "Backspace",
  "Delete",
  "ArrowLeft",
  "ArrowRight",
];
const display = document.getElementById("display");
const heldDisplay = document.getElementById("held-calc");
const buttons = document.querySelectorAll("[data-key]");

let displayValue;
let heldCalculationValue = 0;
let heldCalculationOperator = "+";

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.getAttribute("data-key")) {
      case "0":
        if (heldCalculationOperator == "=") {
          heldCalculationValue = "0";
          heldCalculationOperator = "+";
          display.value = 0;
        }
        if (display.value == "0") {
          display.value = "0";
        } else {
          display.value += "0";
        }
        break;
      case "1":
        if (heldCalculationOperator == "=") {
          heldCalculationValue = "0";
          heldCalculationOperator = "+";
          display.value = 0;
        }
        if (display.value == "0") {
          display.value = "1";
        } else {
          display.value += "1";
        }
        break;
      case "2":
        if (heldCalculationOperator == "=") {
          heldCalculationValue = "0";
          heldCalculationOperator = "+";
          display.value = 0;
        }
        if (display.value == "0") {
          display.value = "2";
        } else {
          display.value += "2";
        }
        break;
      case "3":
        if (heldCalculationOperator == "=") {
          heldCalculationValue = "0";
          heldCalculationOperator = "+";
          display.value = 0;
        }
        if (display.value == "0") {
          display.value = "3";
        } else {
          display.value += "3";
        }
        break;
      case "4":
        if (heldCalculationOperator == "=") {
          heldCalculationValue = "0";
          heldCalculationOperator = "+";
          display.value = 0;
        }
        if (display.value == "0") {
          display.value = "4";
        } else {
          display.value += "4";
        }
        break;
      case "5":
        if (heldCalculationOperator == "=") {
          heldCalculationValue = "0";
          heldCalculationOperator = "+";
          display.value = 0;
        }
        if (display.value == "0") {
          display.value = "5";
        } else {
          display.value += "5";
        }
        break;
      case "6":
        if (heldCalculationOperator == "=") {
          heldCalculationValue = "0";
          heldCalculationOperator = "+";
          display.value = 0;
        }
        if (display.value == "0") {
          display.value = "6";
        } else {
          display.value += "6";
        }
        break;
      case "7":
        if (heldCalculationOperator == "=") {
          heldCalculationValue = "0";
          heldCalculationOperator = "+";
          display.value = 0;
        }
        if (display.value == "0") {
          display.value = "7";
        } else {
          display.value += "7";
        }
        break;
      case "8":
        if (heldCalculationOperator == "=") {
          heldCalculationValue = "0";
          heldCalculationOperator = "+";
          display.value = 0;
        }
        if (display.value == "0") {
          display.value = "8";
        } else {
          display.value += "8";
        }
        break;
      case "9":
        if (heldCalculationOperator == "=") {
          heldCalculationValue = "0";
          heldCalculationOperator = "+";
          display.value = 0;
        }
        if (display.value == "0") {
          display.value = "9";
        } else {
          display.value += "9";
        }
        break;
      case ".":
        if (heldCalculationOperator == "=") {
          heldCalculationValue = "0";
          heldCalculationOperator = "+";
          display.value = 0;
        }
        if (display.value.includes(".")) break;
        if (display.value == "0") {
          display.value = "0.";
        } else {
          display.value += ".";
        }
        break;
      case "+":
        switch (heldCalculationOperator) {
          case "+":
            heldCalculationValue += +display.value;
            break;
          case "-":
            heldCalculationValue -= +display.value;
            break;
          case "*":
            heldCalculationValue *= +display.value;
            break;
          case "/":
            heldCalculationValue /= +display.value;
            break;
        }
        heldCalculationOperator = "+";
        heldDisplay.textContent = +heldCalculationValue + " + ";
        display.value = 0;
        break;
      case "-":
        switch (heldCalculationOperator) {
          case "+":
            heldCalculationValue += +display.value;
            break;
          case "-":
            heldCalculationValue -= +display.value;
            break;
          case "*":
            heldCalculationValue *= +display.value;
            break;
          case "/":
            heldCalculationValue /= +display.value;
            break;
        }
        heldCalculationOperator = "-";
        heldDisplay.textContent = +heldCalculationValue + " - ";
        display.value = 0;
        break;
      case "x X *":
        switch (heldCalculationOperator) {
          case "+":
            heldCalculationValue += +display.value;
            break;
          case "-":
            heldCalculationValue -= +display.value;
            break;
          case "*":
            heldCalculationValue *= +display.value;
            break;
          case "/":
            heldCalculationValue /= +display.value;
            break;
        }
        heldCalculationOperator = "*";
        heldDisplay.textContent = +heldCalculationValue + " x ";
        display.value = 0;
        break;
      case "/":
        switch (heldCalculationOperator) {
          case "+":
            heldCalculationValue += +display.value;
            break;
          case "-":
            heldCalculationValue -= +display.value;
            break;
          case "*":
            heldCalculationValue *= +display.value;
            break;
          case "/":
            heldCalculationValue /= +display.value;
            break;
        }
        heldCalculationOperator = "/";
        heldDisplay.textContent = +heldCalculationValue + " / ";
        display.value = 0;
        break;
      case "Enter =":
        switch (heldCalculationOperator) {
          case "+":
            displayValue = +heldCalculationValue + +display.value;
            break;
          case "-":
            displayValue = +heldCalculationValue - +display.value;
            break;
          case "*":
            displayValue = +heldCalculationValue * +display.value;
            break;
          case "/":
            displayValue = +heldCalculationValue / +display.value;
            break;
        }
        heldCalculationOperator = "=";
        heldCalculationValue = displayValue;
        heldDisplay.textContent = "";
        display.value = +displayValue;
        break;
      case "Delete Backspace":
        display.value = display.value.slice(0, -1);
        if (display.value == 0) display.value = "0";
        break;
      case "C c":
        heldCalculationOperator = "+";
        heldCalculationValue = "0";
        heldDisplay.textContent = "";
        display.value = "0";
    }
  });
});
