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

eval("const VALID_KEYS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', \".\", \"Backspace\", \"Delete\", \"ArrowLeft\", \"ArrowRight\"]\nconst display = document.getElementById(\"display\");\nconst buttons = document.querySelectorAll(\"[data-key]\");\n\nlet currentValue = 0;\nlet previousValue = 0;\n\nbuttons.forEach(button => {\n  button.addEventListener(\"click\", (e) => {\n    if (display.value != 0) {\n      switch (e.target.getAttribute(\"data-key\")) {\n        case \"0\":\n          display.value += \"0\";\n          break;\n        case \"1\":\n          display.value += \"1\";\n          break;\n        case \"2\":\n          display.value += \"2\";\n          break;\n        case \"3\":\n          display.value += \"3\";\n          break;\n        case \"4\":\n          display.value += \"4\";\n          break;\n        case \"5\":\n          display.value += \"5\";\n          break;\n        case \"6\":\n          display.value += \"6\";\n          break;\n        case \"7\":\n          display.value += \"7\";\n          break;\n        case \"8\":\n          display.value += \"8\";\n          break;\n        case \"9\":\n          display.value += \"9\";\n          break;\n        case \".\":\n          if (!display.value.includes(\".\")) display.value += \".\";\n          break;\n        case \"+\":\n          previousValue = +display.value;\n          display.value = 0;\n      }\n    }\n  })\n})\n\n//# sourceURL=webpack://calculator-app-working/./src/script.js?");

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