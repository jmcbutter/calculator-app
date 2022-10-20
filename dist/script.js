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

eval("// THEME TOGGLE\nlet themeSwitch = document.getElementById(\"toggle\");\nthemeSwitch.addEventListener(\"change\", (e) => document.body.setAttribute(\"data-theme\", e.target.value));\n\nconst display = document.getElementById(\"display\");\nconst buttons = Array.from(document.querySelectorAll(\"[data-key]\"));\n\nlet leftOperand = 0;\nlet operator = \"+\";\n\nlet beginNewOperand = true;\nlet beginNewExpression = true;\n\nconst operandButtons = document.querySelectorAll(\"[data-type='value']\");\noperandButtons.forEach(button => button.addEventListener(\"click\", (e) => {  \n  const key = e.target.getAttribute(\"data-button\");\n  let rightOperand = display.value + key;\n  let validOperand = /^([-+]?\\d*\\.?\\d*)(?:[eE]([-+]?\\d+))?$/.test(rightOperand);\n\n  if (beginNewOperand) {\n    rightOperand = key;\n    beginNewOperand = false;\n  }\n\n  if (beginNewExpression) {\n    leftOperand = 0;\n    operator = \"+\";\n    beginNewExpression = false;\n  }\n\n  if (validOperand) {\n    display.value = rightOperand;\n    if (needsLeadingZero()) {\n      console.log(display.value);\n      display.value = \"0\" + display.value;\n    }\n  }\n\n  function needsLeadingZero() {\n    return /^[-+]?[.].*/.test(display.value);\n  }\n}))\n\nconst operatorButtons = document.querySelectorAll(\"[data-type='operator']\");\noperatorButtons.forEach(button => button.addEventListener(\"click\", (e) => {\n  const key = e.target.getAttribute(\"data-button\");\n  const rightOperand = +display.value;\n  const pendingDisplay = document.getElementById(\"pending\");\n\n  let result;\n  switch(operator) {\n    case \"x\":\n      result = leftOperand * rightOperand;\n      break;\n    case \"/\":\n      result = leftOperand / rightOperand;\n      break;\n    case \"-\":\n      result = leftOperand - rightOperand;\n      break;\n    case \"+\":\n      result = leftOperand + rightOperand;\n      break;\n    }\n\n    if (keyIsEqualitySign() && !beginNewExpression) {\n      pendingDisplay.textContent = leftOperand + \" \" + operator + \" \" + rightOperand + \" =\";\n      display.value = +result;\n      leftOperand = +result;\n      beginNewOperand = true;\n      beginNewExpression = true;\n    } else if (!keyIsEqualitySign() && beginNewExpression) {\n      console.log(\"test\");\n      pendingDisplay.textContent = leftOperand + \" \" + key;\n      display.value = \"0\";\n      operator = key;\n      beginNewExpression = false;\n    } else if (!keyIsEqualitySign()) {\n      leftOperand = +result;\n      operator = key;\n      pendingDisplay.textContent = leftOperand + \" \" + operator;\n      display.value = \"0\";\n      beginNewOperand = true;\n    }\n\n    function keyIsEqualitySign() {\n      return key == \"=\";\n    }\n}))\n\nconst clearButtons = document.querySelectorAll(\"[data-type='clear']\");\nclearButtons.forEach(button => button.addEventListener(\"click\", (e) => {\n  const key = e.target.getAttribute(\"data-button\");\n  const pendingDisplay = document.getElementById(\"pending\");\n\n  switch(key) {\n    case \"del\":\n      display.value = display.value.slice(0, -1);\n      if (display.value == \"\") display.value = \"0\";\n      break;\n    case \"reset\":\n      display.value = \"0\";\n      pendingDisplay.textContent = \"\";\n      leftOperand = 0;\n      operator = \"+\";\n      break;\n  }\n}))\n\nwindow.addEventListener(\"keydown\", (e) => {\n  const correspondingButton = buttons.filter(button => {\n    let keys = button.dataset.key.split(\" \");\n    return keys.includes(e.key);\n  })[0];\n  correspondingButton.dispatchEvent(new Event(\"click\"));\n})\n\n//# sourceURL=webpack://calculator-app-working/./src/script.js?");

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