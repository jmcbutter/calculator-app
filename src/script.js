const VALID_KEYS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ".", "Backspace", "Delete", "ArrowLeft", "ArrowRight"]
const display = document.getElementById("display");
const buttons = document.querySelectorAll("[data-key]");

let currentValue = 0;
let previousValue = 0;

buttons.forEach(button => {
  button.addEventListener("click", (e) => {
    if (display.value != 0) {
      switch (e.target.getAttribute("data-key")) {
        case "0":
          display.value += "0";
          break;
        case "1":
          display.value += "1";
          break;
        case "2":
          display.value += "2";
          break;
        case "3":
          display.value += "3";
          break;
        case "4":
          display.value += "4";
          break;
        case "5":
          display.value += "5";
          break;
        case "6":
          display.value += "6";
          break;
        case "7":
          display.value += "7";
          break;
        case "8":
          display.value += "8";
          break;
        case "9":
          display.value += "9";
          break;
        case ".":
          if (!display.value.includes(".")) display.value += ".";
          break;
        case "+":
          previousValue = +display.value;
          display.value = 0;
      }
    }
  })
})