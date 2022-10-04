/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Display.js":
/*!***************************!*\
  !*** ./src/js/Display.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Display = (function () {\n  const display = document.getElementById(\"display\");\n\n  function clearDisplay() {\n    display.value = formatValue('0');\n    display.dispatchEvent(new Event(\"input\"));\n  }\n\n  function addValue(value) {\n    display.value = display.value == formatValue('0') \n                    ? formatValue(value) \n                    : formatValue(combineValues(display.value, value));\n    display.dispatchEvent(new InputEvent(\"input\"));\n    \n  }\n\n  function removeValue() {\n    let newValue = removeSeparators(display.value.slice(0, -1));\n    display.value = formatValue(newValue);\n    if (!display.value) clearDisplay();\n  }\n\n  function combineValues(a, b) {\n    return removeSeparators(a) + removeSeparators(b);\n  }\n\n  function removeSeparators(value) {\n    return value.replaceAll(\",\", \"\");\n  }\n\n  function formatValue(value) {\n    return (+value).toLocaleString(\"en-US\");\n  }\n\n  function getValue() {\n    return display.value;\n  }\n\n  return {\n    clearDisplay,\n    addValue,\n    removeValue,\n    removeSeparators,\n    formatValue,\n    getValue,\n  }\n})()\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Display);\n\n//# sourceURL=webpack://calculator-app-working/./src/js/Display.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_Display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/Display */ \"./src/js/Display.js\");\n\nconst VALID_KEYS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', \".\", \"Backspace\", \"Delete\", \"ArrowLeft\", \"ArrowRight\"]\n\nlet buttons = document.querySelectorAll(\"[data-key]\");\nbuttons.forEach(button => {\n  button.addEventListener(\"click\", (e) => {\n    console.log(e.target.getAttribute(\"data-key\"));\n  })\n})\n\nconst display = document.getElementById(\"display\");\n\ndisplay.addEventListener(\"keydown\", (e) => {\n  let key = e.key;\n  if (!VALID_KEYS.includes(key)) e.preventDefault();\n  if (key == \".\" && display.value.includes(\".\")) e.preventDefault();\n})\n\ndisplay.addEventListener(\"focus\", (e) => {\n  display.value = _js_Display__WEBPACK_IMPORTED_MODULE_0__[\"default\"].removeSeparators(display.value);\n  if (display.value == 0) display.value = \"\";\n})\n\ndisplay.addEventListener(\"blur\", () => {\n  display.value = _js_Display__WEBPACK_IMPORTED_MODULE_0__[\"default\"].formatValue(display.value);\n})\n\n//# sourceURL=webpack://calculator-app-working/./src/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;