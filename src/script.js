let themeSwitch = document.getElementById("toggle");
themeSwitch.addEventListener("change", (e) => document.body.setAttribute("data-theme", e.target.value));

const heldDisplay = document.getElementById("held-calc");
const buttons = document.querySelectorAll("[data-key]");

//TODO: Limit size of answer, provide eX when answer exceeds bounds of display using toExponential()
//TODO: Limit size of heldDisplay, provide eX when answer exceeds bounds
//TODO: Limit size of decimals to 10 places(?)

let heldCalculationValue = 0;
let heldCalculationOperator = "+";
let state = State();
let display = Display();

let operatorKeys = document.querySelectorAll("[data-operator]");
operatorKeys.forEach(key => {
  key.addEventListener("click", (e) => {
    let key = e.target.getAttribute("data-operator");
    let displayedValue = display.getValue();

    state.operateOnState(displayedValue);
    state.setOperator(key);
    display.updateHeldDisplayAfterOperator(state);
    display.updateDisplayAfterOperator(state);
  })
})

let valueKeys = document.querySelectorAll("[data-value]");
valueKeys.forEach(key => {
  key.addEventListener("click", (e) => {
   let key = e.target.getAttribute("data-value");

   if (state.getOperator() == "=") {
     display.clearDisplay();
     display.clearHeldDisplay();
     state.clearState();
   }

    display.updateDisplayAfterValue(key);
   
  })
})

let deletionKeys = document.querySelectorAll("[data-deleter]");
deletionKeys.forEach(key => {
  key.addEventListener("click", (e) => {
    let key = e.target.getAttribute("data-deleter");
    
    if (key == "delete") {
      display.deleteValue();
      if (state.getOperator() == "=") {
        state.clearState();
       } 
       if (display.getValue() == "") {
         display.clearDisplay();
       }
    } else if (key == "clear") {
      display.clearDisplay();
      display.clearHeldDisplay();
      state.clearState();
    }
  });
});

function State() {
  let value = 0;
  let operator = "+";
  let prev = 0;
  let prevOperator;

  function operateOnState(newValue) {
    prev = value;
    prevOperator = operator;
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

  function getOperator() {
    return operator;
  }

  function getPrevious() {
    return prev;
  }

  function getPreviousOperator() {
    return prevOperator;
  }

  function clearState() {
    value = 0;
    operator = "+";
  }
  
  return {
    operateOnState,
    setOperator,
    setValue,
    getValue,
    getOperator,
    clearState,
    getPrevious,
    getPreviousOperator,
  }
}

function Display() {
  const display = document.getElementById("display");
  const heldDisplay = document.getElementById("held-calc");

  function getValue() {
    return +display.value;
  }

  function updateDisplayAfterOperator(state) {
    if (state.getOperator() == "=") {
      display.value = state.getValue();
    } else {
      display.value = "0";
    }
  }

  function updateHeldDisplayAfterOperator(state) {
    if (state.getOperator() == "=") {
      heldDisplay.textContent = state.getPrevious() + " " + state.getPreviousOperator() + " " + display.value + " = ";
    } else {
      heldDisplay.textContent = state.getValue() + " " + state.getOperator() + " ";
    }
  }

  function updateDisplayAfterValue(value) {
    if (value == ".") {
      updateDisplayAfterPeriod();
    } else if (display.value == "0") {
      display.value = value;
    } else {
      display.value += value;
    }
  }

  function updateDisplayAfterPeriod() {
    if (display.value == "0") {
      display.value = "0.";
    } else if (display.value.includes(".")) {
      return;
    } else {
      display.value += ".";
    }
  }

  function clearDisplay() {
    display.value = "0";
  }

  function clearHeldDisplay() {
    heldDisplay.textContent = "";
  }

  function deleteValue() {
    display.value = display.value.slice(0, -1);
  }


  return {
    getValue,
    updateDisplayAfterOperator,
    updateHeldDisplayAfterOperator,
    updateDisplayAfterValue,
    clearDisplay,
    clearHeldDisplay,
    deleteValue,
  }
}
