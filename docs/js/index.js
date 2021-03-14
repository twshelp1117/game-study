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

/***/ "./src/canvasscreen.ts":
/*!*****************************!*\
  !*** ./src/canvasscreen.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CanvasScreen\": () => (/* binding */ CanvasScreen)\n/* harmony export */ });\nclass CanvasScreen {\r\n    constructor(width, height, context) {\r\n        // コピーor生成\r\n        if (context) {\r\n            this.display = context;\r\n        }\r\n        else {\r\n            this.display = document.createElement(\"canvas\").getContext(\"2d\");\r\n            document.body.appendChild(this.display.canvas);\r\n        }\r\n        // チェック\r\n        width = width <= 0 ? 100 : width;\r\n        height = width <= 0 ? 100 : height;\r\n        // 設定\r\n        this.display.canvas.width = width;\r\n        this.display.canvas.height = height;\r\n        // バッファ\r\n        this.buffer = document.createElement(\"canvas\").getContext(\"2d\");\r\n        this.buffer.canvas.width = width;\r\n        this.buffer.canvas.height = height;\r\n        this.buffer.imageSmoothingEnabled = false;\r\n        // きれいにしておこうね\r\n        this.clearBuffer();\r\n        this.updateDisp();\r\n    }\r\n    get(select) {\r\n        return select == \"buffer\" ? this.buffer : this.display;\r\n    }\r\n    clearBuffer() {\r\n        this.buffer.resetTransform();\r\n        if (this.buffer.globalAlpha != 1)\r\n            this.buffer.globalAlpha = 1;\r\n        this.buffer.fillStyle = \"#fff\";\r\n        this.buffer.fillRect(0, 0, this.buffer.canvas.width, this.buffer.canvas.height);\r\n    }\r\n    updateDisp() {\r\n        // this.display.resetTransform();\r\n        this.display.drawImage(this.buffer.canvas, 0, 0);\r\n        // this.clearBuffer();\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://game-study/./src/canvasscreen.ts?");

/***/ }),

/***/ "./src/game.ts":
/*!*********************!*\
  !*** ./src/game.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Game\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _canvasscreen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvasscreen */ \"./src/canvasscreen.ts\");\n\r\nclass Game {\r\n    constructor(extScr) {\r\n        this.frameCount = 0;\r\n        this.canvasScreen = new _canvasscreen__WEBPACK_IMPORTED_MODULE_0__.CanvasScreen(Game.info.width, Game.info.height, extScr?.getContext(\"2d\"));\r\n    }\r\n    run() {\r\n        this.loop();\r\n    }\r\n    loop() {\r\n        const id = requestAnimationFrame(this.loop.bind(this));\r\n        try {\r\n            this.main();\r\n            this.frameCount++;\r\n        }\r\n        catch (error) {\r\n            console.error(error);\r\n            cancelAnimationFrame(id);\r\n        }\r\n    }\r\n    main() {\r\n        this.canvasScreen.clearBuffer();\r\n        this.canvasScreen.updateDisp();\r\n    }\r\n}\r\nGame.info = {\r\n    width: 240,\r\n    height: 320,\r\n};\r\n\n\n//# sourceURL=webpack://game-study/./src/game.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.ts\");\n\r\nwindow.addEventListener(\"load\", () => {\r\n    const canvas = document.querySelector(\".game\");\r\n    const game = new _game__WEBPACK_IMPORTED_MODULE_0__.Game(canvas);\r\n    // ダブルクリックでフルスクリーン\r\n    canvas?.addEventListener(\"dblclick\", () => {\r\n        canvas.classList.toggle(\"full\");\r\n    });\r\n    game.run();\r\n});\r\n\n\n//# sourceURL=webpack://game-study/./src/index.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;