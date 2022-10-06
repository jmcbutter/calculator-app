/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ (() => {

eval("let themeSwitch = document.getElementById(\"toggle\");\nthemeSwitch.addEventListener(\"change\", (e) => document.body.setAttribute(\"data-theme\", e.target.value));\n\nconst heldDisplay = document.getElementById(\"held-calc\");\nconst buttons = document.querySelectorAll(\"[data-key]\");\n\n//TODO: Limit size of answer, provide eX when answer exceeds bounds of display using toExponential()\n//TODO: Limit size of heldDisplay, provide eX when answer exceeds bounds\n//TODO: Limit size of decimals to 10 places(?)\n\nlet heldCalculationValue = 0;\nlet heldCalculationOperator = \"+\";\nlet state = State();\nlet display = Display();\n\nlet operatorKeys = document.querySelectorAll(\"[data-operator]\");\noperatorKeys.forEach(key => {\n  key.addEventListener(\"click\", (e) => {\n    let key = e.target.getAttribute(\"data-operator\");\n    let displayedValue = display.getValue();\n\n    state.operateOnState(displayedValue);\n    state.setOperator(key);\n    display.updateHeldDisplayAfterOperator(state);\n    display.updateDisplayAfterOperator(state);\n  })\n})\n\nlet valueKeys = document.querySelectorAll(\"[data-value]\");\nvalueKeys.forEach(key => {\n  key.addEventListener(\"click\", (e) => {\n   let key = e.target.getAttribute(\"data-value\");\n\n   if (state.getOperator() == \"=\") {\n     display.clearDisplay();\n     display.clearHeldDisplay();\n     state.clearState();\n   }\n\n    display.updateDisplayAfterValue(key);\n   \n  })\n})\n\nlet deletionKeys = document.querySelectorAll(\"[data-deleter]\");\ndeletionKeys.forEach(key => {\n  key.addEventListener(\"click\", (e) => {\n    let key = e.target.getAttribute(\"data-deleter\");\n    \n    if (key == \"delete\") {\n      display.deleteValue();\n      if (state.getOperator() == \"=\") {\n        state.clearState();\n       } \n       if (display.getValue() == \"\") {\n         display.clearDisplay();\n       }\n    } else if (key == \"clear\") {\n      display.clearDisplay();\n      display.clearHeldDisplay();\n      state.clearState();\n    }\n  });\n});\n\nfunction State() {\n  let value = 0;\n  let operator = \"+\";\n  let prev = 0;\n  let prevOperator;\n\n  function operateOnState(newValue) {\n    prev = value;\n    prevOperator = operator;\n    switch (operator) {\n      case \"+\":\n        value += newValue;\n        break;\n      case \"-\":\n        value -= newValue;\n        break;\n      case \"x\":\n        value *= newValue;\n        break;\n      case \"/\":\n        value /= newValue;\n        break;\n    }\n  }\n\n  function setOperator(newOperator) {\n    operator = newOperator;\n    console.log(operator);\n  }\n\n  function setValue(newValue) {\n    value = newValue;\n  }\n\n  function getValue() {\n    return value;\n  }\n\n  function getOperator() {\n    return operator;\n  }\n\n  function getPrevious() {\n    return prev;\n  }\n\n  function getPreviousOperator() {\n    return prevOperator;\n  }\n\n  function clearState() {\n    value = 0;\n    operator = \"+\";\n  }\n  \n  return {\n    operateOnState,\n    setOperator,\n    setValue,\n    getValue,\n    getOperator,\n    clearState,\n    getPrevious,\n    getPreviousOperator,\n  }\n}\n\nfunction Display() {\n  const display = document.getElementById(\"display\");\n  const heldDisplay = document.getElementById(\"held-calc\");\n\n  function getValue() {\n    return +display.value;\n  }\n\n  function updateDisplayAfterOperator(state) {\n    if (state.getOperator() == \"=\") {\n      display.value = state.getValue();\n    } else {\n      display.value = \"0\";\n    }\n  }\n\n  function updateHeldDisplayAfterOperator(state) {\n    if (state.getOperator() == \"=\") {\n      heldDisplay.textContent = state.getPrevious() + \" \" + state.getPreviousOperator() + \" \" + display.value + \" = \";\n    } else {\n      heldDisplay.textContent = state.getValue() + \" \" + state.getOperator() + \" \";\n    }\n  }\n\n  function updateDisplayAfterValue(value) {\n    if (value == \".\") {\n      updateDisplayAfterPeriod();\n    } else if (display.value == \"0\") {\n      display.value = value;\n    } else {\n      display.value += value;\n    }\n  }\n\n  function updateDisplayAfterPeriod() {\n    if (display.value == \"0\") {\n      display.value = \"0.\";\n    } else if (display.value.includes(\".\")) {\n      return;\n    } else {\n      display.value += \".\";\n    }\n  }\n\n  function clearDisplay() {\n    display.value = \"0\";\n  }\n\n  function clearHeldDisplay() {\n    heldDisplay.textContent = \"\";\n  }\n\n  function deleteValue() {\n    display.value = display.value.slice(0, -1);\n  }\n\n\n  return {\n    getValue,\n    updateDisplayAfterOperator,\n    updateHeldDisplayAfterOperator,\n    updateDisplayAfterValue,\n    clearDisplay,\n    clearHeldDisplay,\n    deleteValue,\n  }\n}\n\n\n//# sourceURL=webpack://calculator-app-working/./src/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/script.js"]();
/******/ 	
/******/ })()
;