let themeSwitch = document.getElementById("toggle");
themeSwitch.addEventListener("change", (e) => document.body.setAttribute("data-theme", e.target.value));

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

//TODO: Limit size of answer, provide eX when answer exceeds bounds of display using toExponential()
//TODO: Limit size of heldDisplay, provide eX when answer exceeds bounds
//TODO: Limit size of decimals to 10 places(?)

let heldCalculationValue = 0;
let heldCalculationOperator = "+";
let state = State();

let operators = document.querySelectorAll("[data-operator]");
operators.forEach(operator => {
  operator.addEventListener("click", (e) => {
    let key = e.target.getAttribute("data-operator");
    let displayedValue = display.value;
    state.operateOnState(displayedValue);
    state.setOperator(key);
  })
})

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let key = e.target.getAttribute("data-key");
    let displayedValue = display.value;
    switch (e.target.getAttribute("data-key")) {
      case "+":
      case "-":
      case "x X *":
      case "/":
      case "Enter =":
        switch (heldCalculationOperator) {
          case "+":
            heldCalculationValue += +displayedValue;
            break;
          case "-":
            heldCalculationValue -= +displayedValue;
            break;
          case "x":
            heldCalculationValue *= +displayedValue;
            break;
          case "/":
            heldCalculationValue /= +displayedValue;
            break;
        }
        heldCalculationOperator = operator(key);
        heldDisplay.textContent = heldDisplayValue(key);
        display.value = displayValue(key);
        break;
      case "Delete Backspace":
        if (heldCalculationOperator == "=") {
         heldCalculationValue = "0";
         heldCalculationOperator = "+"; 
        }
        if (display.value == "") {
          display.value = "0";
        } else {
          display.value = displayedValue.slice(0, -1);
        }
        break;
      case "C c":
        display.value = "0";
        
        heldCalculationValue = "0";
        heldCalculationOperator = "+";
        
        heldDisplay.textContent = "";
        break;
      case ".":
        if (display.value.includes(".")) break;
      default:
        if (heldCalculationOperator == "=") {
          display.value = "0";
         
          heldCalculationValue = "0";
          heldCalculationOperator = "+";
        }
        if (display.value == "0") {
          display.value = newNumeric(key);
        } else {
          display.value += key;
        }
        break;
    }

    function newNumeric(key) {
      if (key == ".") {
        return "0" + key;
      } else {
        return key;
      }
    }

    function operator(key) {
      if (key == "x X *") {
        return "x";
      } else if (key == "Enter =") {
        return "=";
      } else {
        return key;
      }
    }

    function heldDisplayValue(key) {
      if (key == "Enter =") {
        return "";
      } else {
        return +heldCalculationValue + " " + operator(key) + " ";
      }
    }

    function displayValue(key) {
      if (key == "Enter =") {
        return +heldCalculationValue;
      } else {
        return "0";
      }
    }
  });
});

function State() {
  let value = "0";
  let operator = "+";

  function operateOnState(newValue) {
    newValue = +newValue;
    switch (operator) {
      case "+":
        value += newValue;
        break;
      case "-":
        value -= newValue;
        break;
      case "x":
        value *= newValue;
        break;
      case "/":
        value /= newValue;
        break;
    }
  }

  function setOperator(newOperator) {
    operator = newOperator;
    console.log(operator);
  }

  function setValue(newValue) {
    value = newValue;
  }

  function getValue() {
    return value;
  }
  
  return {
    operateOnState,
    setOperator,
    setValue,
    getValue,
  }
}
  // let displayedValue = display.value;
  //     heldCalculationOperator = operator(key);
  //     heldDisplay.textContent = heldDisplayValue(key);
  //     display.value = displayValue(key);
  //     break;
  //   case "Delete Backspace":
  //     if (heldCalculationOperator == "=") {
  //       heldCalculationValue = "0";
  //       heldCalculationOperator = "+"; 
  //     }
  //     if (display.value == "") {
  //       display.value = "0";
  //     } else {
  //       display.value = displayedValue.slice(0, -1);
  //     }
  //     break;
  //   case "C c":
  //     display.value = "0";
      
  //     heldCalculationValue = "0";
  //     heldCalculationOperator = "+";
      
  //     heldDisplay.textContent = "";
  //     break;
  //   case ".":
  //     if (display.value.includes(".")) break;
  //   default:
  //     if (heldCalculationOperator == "=") {
  //       display.value = "0";
        
  //       heldCalculationValue = "0";
  //       heldCalculationOperator = "+";
  //     }
  //     if (display.value == "0") {
  //       display.value = newNumeric(key);
  //     } else {
  //       display.value += key;
  //     }
  //     break;
  // }

  // function newNumeric(key) {
  //   if (key == ".") {
  //     return "0" + key;
  //   } else {
  //     return key;
  //   }
  // }

  // function operator(key) {
  //   if (key == "x X *") {
  //     return "x";
  //   } else if (key == "Enter =") {
  //     return "=";
  //   } else {
  //     return key;
  //   }
  // }

  // function heldDisplayValue(key) {
  //   if (key == "Enter =") {
  //     return "";
  //   } else {
  //     return +heldCalculationValue + " " + operator(key) + " ";
  //   }
  // }

  // function displayValue(key) {
  //   if (key == "Enter =") {
  //     return +heldCalculationValue;
  //   } else {
  //     return "0";
  //   }
  // }
