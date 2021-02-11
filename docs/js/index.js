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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CanvasScreen\": () => /* binding */ CanvasScreen\n/* harmony export */ });\nclass CanvasScreen {\r\n    constructor(width, height, context) {\r\n        // コピーor生成\r\n        if (context) {\r\n            this.display = context;\r\n        }\r\n        else {\r\n            this.display = document.createElement(\"canvas\").getContext(\"2d\");\r\n            document.body.appendChild(this.display.canvas);\r\n        }\r\n        // チェック\r\n        width = width <= 0 ? 100 : width;\r\n        height = width <= 0 ? 100 : height;\r\n        // 設定\r\n        this.display.canvas.width = width;\r\n        this.display.canvas.height = height;\r\n        // ダブルクリックでフルスクリーン\r\n        this.display.canvas.addEventListener(\"dblclick\", () => {\r\n            this.display.canvas.classList.toggle(\"full\");\r\n        });\r\n        // バッファ\r\n        this.buffer = document.createElement(\"canvas\").getContext(\"2d\");\r\n        this.buffer.canvas.width = width;\r\n        this.buffer.canvas.height = height;\r\n        this.buffer.imageSmoothingEnabled = false;\r\n        // きれいにしておこうね\r\n        this.clearBuffer();\r\n        this.updateDisp();\r\n    }\r\n    get(select) {\r\n        return select == \"buffer\" ? this.buffer : this.display;\r\n    }\r\n    clearBuffer() {\r\n        this.buffer.resetTransform();\r\n        this.buffer.fillStyle = \"#fff\";\r\n        this.buffer.fillRect(0, 0, this.buffer.canvas.width, this.buffer.canvas.height);\r\n    }\r\n    updateDisp() {\r\n        // this.display.resetTransform();\r\n        this.display.drawImage(this.buffer.canvas, 0, 0);\r\n        // this.clearBuffer();\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://game-study/./src/canvasscreen.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvasscreen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvasscreen */ \"./src/canvasscreen.ts\");\n/* harmony import */ var _tlog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tlog */ \"./src/tlog.ts\");\n\r\n\r\nconst Game = (function () {\r\n    const C = {};\r\n    let screen;\r\n    let gamepads;\r\n    function start() {\r\n        screen = new _canvasscreen__WEBPACK_IMPORTED_MODULE_0__.CanvasScreen(320, 240, document.getElementById(\"game\").getContext(\"2d\"));\r\n        gamepads = navigator.getGamepads();\r\n        window.addEventListener(\"gamepadconnected\", (e) => {\r\n            const f = e;\r\n            (0,_tlog__WEBPACK_IMPORTED_MODULE_1__.tlog)(f.gamepad.id, f.gamepad.index);\r\n        });\r\n        loop();\r\n    }\r\n    function loop() {\r\n        requestAnimationFrame(loop);\r\n        screen.updateDisp();\r\n        screen.clearBuffer();\r\n        const buf = screen.get(\"buffer\");\r\n        gamepads = navigator.getGamepads();\r\n        for (const gamepad of gamepads) {\r\n            if (gamepad) {\r\n                // tlog(gamepad.index);\r\n                gamepad.axes.forEach((v, i) => {\r\n                    if (i % 2 == 0) {\r\n                        // ベース描画\r\n                        buf.fillStyle = \"#aaa\";\r\n                        buf.fillRect(((i / 2) | 0) * 24 + 2, gamepad.index * 24 + 2, 20, 20);\r\n                        buf.fillStyle = \"#000\";\r\n                        buf.fillRect(((i / 2) | 0) * 24 + 12, gamepad.index * 24 + 10, v * 10, 4);\r\n                    }\r\n                    else {\r\n                        buf.fillStyle = \"#000\";\r\n                        buf.fillRect(((i / 2) | 0) * 24 + 10, gamepad.index * 24 + 12, 4, v * 10);\r\n                    }\r\n                });\r\n                gamepad.buttons.forEach((v, i) => {\r\n                    buf.fillStyle = v.pressed ? \"#000\" : \"#aaa\";\r\n                    buf.fillRect((((gamepad.axes.length + 1) / 2) | 0) * 24 + i * 12 + 2, gamepad.index * 24 + 2, 8, 20);\r\n                });\r\n            }\r\n        }\r\n    }\r\n    return {\r\n        start: start,\r\n    };\r\n})();\r\nwindow.addEventListener(\"load\", Game.start);\r\n\n\n//# sourceURL=webpack://game-study/./src/index.ts?");

/***/ }),

/***/ "./src/tlog.ts":
/*!*********************!*\
  !*** ./src/tlog.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"tlog\": () => /* binding */ tlog\n/* harmony export */ });\nconst tlog =  true\r\n    ? function (message, ...optionalParams) {\r\n        console.log(performance.now() | 0, message, ...optionalParams);\r\n    }\r\n    : 0;\r\n\n\n//# sourceURL=webpack://game-study/./src/tlog.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;