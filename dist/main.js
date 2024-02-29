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

/***/ "./node_modules/simpledrop-js/index.js":
/*!*********************************************!*\
  !*** ./node_modules/simpledrop-js/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("// class DropDownMenu {\n//   constructor(button, menuItems) {\n//     this.button = button\n//     this.menuItems = menuItems\n//   }\n\n//   buttonEventListener() {\n//     this.button.addEventListener('click', () => {\n//       this.menuItems.forEach((item) => {\n//         item.hidden = !item.hidden;\n//       })\n//     })\n//   }\n// }\nexports.newDropDownMenu = function (button, menuItemContainer) {\n  button.addEventListener(\"click\", () => {\n    menuItemContainer.style.display =\n      menuItemContainer.style.display === \"none\" ? \"block\" : \"none\";\n  });\n};\n\n\n//# sourceURL=webpack://test-module/./node_modules/simpledrop-js/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var simpledrop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simpledrop-js */ \"./node_modules/simpledrop-js/index.js\");\n\n\nconst btn = document.getElementById(\"menu\");\nconst dropdown = document.getElementById(\"dropdown\");\n\n(0,simpledrop_js__WEBPACK_IMPORTED_MODULE_0__.newDropDownMenu)(btn, dropdown);\nconsole.log(\"hi\");\n\n\n//# sourceURL=webpack://test-module/./src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;