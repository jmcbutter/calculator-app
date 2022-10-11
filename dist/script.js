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

eval("// THEME TOGGLE\nlet themeSwitch = document.getElementById(\"toggle\");\nthemeSwitch.addEventListener(\"change\", (e) => document.body.setAttribute(\"data-theme\", e.target.value));\n\n\nconst buttons = document.querySelectorAll(\"[data-button]\");\nconst display = document.getElementById(\"display\");\n\ndisplay.addEventListener(\"change\", (e) => console.log(e.target.value));\nbuttons.forEach(button => button.addEventListener(\"click\", onButtonClick));\n\nlet pendingValue = \"0\";\nlet pendingOperator = \"+\";\n\nlet valueEntered = false;\n\nfunction onButtonClick(e) {\n  //If the button is a number, add the number to the display\n  //If the button is an operator, add the displayed number to the pending calculation area along with the operator and reset display to 0\n  //    Complete any pending calculations as well\n  //If the button is del, remove the last number from the display. If there are no more numbers in the display, reset the display to 0\n  //If the button is reset, remove any pending calculations and reset the display to 0\n  //Check displayed value + new value against regex pattern. If it matches, allow new value. Otherwise, disallow it\n  const numberRegex = new RegExp('^([-+]?\\\\d*\\\\.?\\\\d*)(?:[eE]([-+]?\\\\d+))?$');\n  const key = e.target.getAttribute(\"data-button\");\n\n  if (numberRegex.test(display.value + key)) {\n    display.value = display.value + key;\n    if (display.value[1] != \".\" && display.value[0] == \"0\") {\n      display.value = display.value.slice(1);\n    }\n    valueEntered = true;   \n  }\n\n  const operatorRegex = new RegExp('[\\/]|[x]|[=]|[+]|[-]');\n  const pendingDisplay = document.getElementById(\"pending\");\n\n  if (operatorRegex.test(key)) {\n    let newValue;\n    switch(pendingOperator) {\n      case \"x\":\n        newValue = +pendingValue * +display.value;\n        break;\n      case \"/\":\n        newValue = +pendingValue / +display.value;\n        break;\n      case \"-\":\n        newValue = +pendingValue - +display.value;\n        break;\n      case \"+\":\n        newValue = +pendingValue + +display.value;\n        break;\n    }\n    if (key == \"=\" && valueEntered) pendingDisplay.textContent = pendingValue + \" \" + pendingOperator + \" \" + display.value + \" =\";\n    if (valueEntered) {\n      pendingValue = +newValue;\n      valueEntered = false;\n    }\n    if (key != \"=\") {\n      pendingOperator = key;\n      pendingDisplay.textContent = pendingValue + \" \" + key;\n      display.value = \"0\";\n    } else {\n      display.value = pendingValue;\n    }\n\n  }\n\n  const clearRegex = new RegExp('del|reset');\n\n  if (clearRegex.test(key)) {\n    switch(key) {\n      case \"del\":\n        display.value = display.value.slice(0, -1);\n        if (display.value == \"\") display.value = \"0\";\n        break;\n      case \"reset\":\n        display.value = \"0\";\n        pendingDisplay.textContent = \"\";\n        pendingValue = 0;\n        pendingOperator = \"+\";\n        break;\n    }\n  }\n}\n\n//# sourceURL=webpack://calculator-app-working/./src/script.js?");

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