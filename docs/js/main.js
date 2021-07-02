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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CanvasScreen\": () => (/* binding */ CanvasScreen)\n/* harmony export */ });\nclass CanvasScreen {\r\n    constructor(width, height, context) {\r\n        // コピーor生成\r\n        this.display = context;\r\n        // チェック\r\n        width = width <= 0 ? 1 : width;\r\n        height = height <= 0 ? 1 : height;\r\n        // 設定\r\n        this.display.canvas.width = width;\r\n        this.display.canvas.height = height;\r\n        // バッファ\r\n        this.buffer = document.createElement(\"canvas\").getContext(\"2d\");\r\n        this.buffer.canvas.width = width;\r\n        this.buffer.canvas.height = height;\r\n        this.buffer.imageSmoothingEnabled = false;\r\n        // きれいにしておこうね\r\n        this.clearBuffer();\r\n        this.updateDisp();\r\n    }\r\n    get(select) {\r\n        return select == \"buffer\" ? this.buffer : this.display;\r\n    }\r\n    clearBuffer() {\r\n        this.buffer.resetTransform();\r\n        if (this.buffer.globalAlpha != 1)\r\n            this.buffer.globalAlpha = 1;\r\n        this.buffer.fillStyle = \"#fff\";\r\n        this.buffer.fillRect(0, 0, this.buffer.canvas.width, this.buffer.canvas.height);\r\n    }\r\n    updateDisp() {\r\n        // this.display.resetTransform();\r\n        this.display.drawImage(this.buffer.canvas, 0, 0);\r\n        // this.clearBuffer();\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://game-study/./src/canvasscreen.ts?");

/***/ }),

/***/ "./src/deltatime.ts":
/*!**************************!*\
  !*** ./src/deltatime.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DeltaTime\": () => (/* binding */ DeltaTime)\n/* harmony export */ });\nclass DeltaTime {\r\n    constructor() {\r\n        this._lastTime = {};\r\n        this._lastDelta = {};\r\n    }\r\n    Update(key) {\r\n        if (key in this._lastTime) {\r\n            const tmp = this._lastTime[key];\r\n            this._lastTime[key] = performance.now();\r\n            this._lastDelta[key] = this._lastTime[key] - tmp;\r\n        }\r\n        else {\r\n            this._lastTime[key] = performance.now();\r\n        }\r\n    }\r\n    GetDelta(key) {\r\n        if (key in this._lastDelta) {\r\n            return this._lastDelta[key];\r\n        }\r\n        return 0;\r\n    }\r\n    GetDeltaKey2Key(from, to) {\r\n        if (from in this._lastTime && to in this._lastTime) {\r\n            return this._lastTime[to] - this._lastTime[from];\r\n        }\r\n        return 0;\r\n    }\r\n    GetDeltaKey2Now(from) {\r\n        if (from in this._lastTime) {\r\n            return performance.now() - this._lastTime[from];\r\n        }\r\n        return 0;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://game-study/./src/deltatime.ts?");

/***/ }),

/***/ "./src/game.ts":
/*!*********************!*\
  !*** ./src/game.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Game\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _canvasscreen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvasscreen */ \"./src/canvasscreen.ts\");\n/* harmony import */ var _deltatime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deltatime */ \"./src/deltatime.ts\");\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input */ \"./src/input.ts\");\n\r\n\r\n\r\nclass Game {\r\n    constructor(extScr) {\r\n        this._canvasScreen = new _canvasscreen__WEBPACK_IMPORTED_MODULE_0__.CanvasScreen(Game.Info.Width, Game.Info.Height, extScr.getContext(\"2d\"));\r\n        this._input = new _input__WEBPACK_IMPORTED_MODULE_2__.InputAIO();\r\n        this._deltaTime = new _deltatime__WEBPACK_IMPORTED_MODULE_1__.DeltaTime();\r\n    }\r\n    run() {\r\n        this.loop();\r\n    }\r\n    loop() {\r\n        this._deltaTime.Update(\"LoopStart\");\r\n        const id = requestAnimationFrame(this.loop.bind(this));\r\n        if (this._input.IsFocus) {\r\n            try {\r\n                this.main();\r\n            }\r\n            catch (error) {\r\n                console.error(error);\r\n                cancelAnimationFrame(id);\r\n            }\r\n        }\r\n    }\r\n    main() {\r\n        this._deltaTime.Update(\"MainStart\");\r\n        this._canvasScreen.clearBuffer();\r\n        console.log(this._deltaTime.GetDelta(\"LoopStart\").toFixed(1));\r\n        this._canvasScreen.updateDisp();\r\n    }\r\n}\r\nGame.Info = {\r\n    Width: 240,\r\n    Height: 320,\r\n};\r\n\n\n//# sourceURL=webpack://game-study/./src/game.ts?");

/***/ }),

/***/ "./src/input.ts":
/*!**********************!*\
  !*** ./src/input.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"InputAIO\": () => (/* binding */ InputAIO)\n/* harmony export */ });\nclass InputAIO {\r\n    constructor() {\r\n        const preventList = [\"touchmove\", \"mousewheel\", \"keydown\", \"keyup\", \"contextmenu\"];\r\n        const prevent = (e) => {\r\n            e.preventDefault();\r\n        };\r\n        window.addEventListener(\"focus\", () => {\r\n            this.isFocus = true;\r\n            for (const it of preventList) {\r\n                window.addEventListener(it, prevent, { passive: false });\r\n            }\r\n        });\r\n        window.addEventListener(\"blur\", () => {\r\n            this.isFocus = false;\r\n            for (const it of preventList) {\r\n                window.removeEventListener(it, prevent);\r\n            }\r\n        });\r\n    }\r\n    get IsFocus() {\r\n        return this.isFocus;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://game-study/./src/input.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.ts\");\n\r\nwindow.addEventListener(\"load\", () => {\r\n    const canvas = document.querySelector(\".game\");\r\n    const game = new _game__WEBPACK_IMPORTED_MODULE_0__.Game(canvas);\r\n    {\r\n        // フルスクリーン有効化\r\n        canvas.classList.add(\"full\");\r\n        // ダブルクリックでフルスクリーン\r\n        // canvas.addEventListener(\"dblclick\", () => {\r\n        //   canvas.classList.toggle(\"full\");\r\n        // });\r\n    }\r\n    game.run();\r\n});\r\n\n\n//# sourceURL=webpack://game-study/./src/main.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;