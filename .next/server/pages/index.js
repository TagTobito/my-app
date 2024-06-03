"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Home() {\n    const { 0: count , 1: setCount  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"/api/counter\").then((res)=>res.json()).then((data)=>setCount(data.count));\n    }, []);\n    const incrementCounter = async ()=>{\n        const res = await fetch(\"/api/counter\", {\n            method: \"POST\"\n        });\n        const data = await res.json();\n        setCount(data.count);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center items-center h-screen\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-2xl mb-4\",\n                    children: [\n                        \"Contador: \",\n                        count\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\garri\\\\OneDrive\\\\Escritorio\\\\my-app\\\\pages\\\\index.js\",\n                    lineNumber: 23,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"px-4 py-2 bg-blue-500 text-white rounded\",\n                    onClick: incrementCounter,\n                    children: \"Incrementar\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\garri\\\\OneDrive\\\\Escritorio\\\\my-app\\\\pages\\\\index.js\",\n                    lineNumber: 24,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\garri\\\\OneDrive\\\\Escritorio\\\\my-app\\\\pages\\\\index.js\",\n            lineNumber: 22,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\garri\\\\OneDrive\\\\Escritorio\\\\my-app\\\\pages\\\\index.js\",\n        lineNumber: 21,\n        columnNumber: 9\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQTRDO0FBRTdCLFNBQVNFLElBQUksR0FBRztJQUMzQixNQUFNLEtBQUNDLEtBQUssTUFBRUMsUUFBUSxNQUFJSiwrQ0FBUSxDQUFDLENBQUMsQ0FBQztJQUVyQ0MsZ0RBQVMsQ0FBQyxJQUFNO1FBQ1pJLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FDcEJDLElBQUksQ0FBQ0MsQ0FBQUEsR0FBRyxHQUFJQSxHQUFHLENBQUNDLElBQUksRUFBRSxDQUFDLENBQ3ZCRixJQUFJLENBQUNHLENBQUFBLElBQUksR0FBSUwsUUFBUSxDQUFDSyxJQUFJLENBQUNOLEtBQUssQ0FBQyxDQUFDLENBQUM7S0FDdkMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLE1BQU1PLGdCQUFnQixHQUFHLFVBQVk7UUFDakMsTUFBTUgsR0FBRyxHQUFHLE1BQU1GLEtBQUssQ0FBQyxjQUFjLEVBQUU7WUFDeENNLE1BQU0sRUFBRSxNQUFNO1NBQ2IsQ0FBQztRQUNGLE1BQU1GLElBQUksR0FBRyxNQUFNRixHQUFHLENBQUNDLElBQUksRUFBRTtRQUM3QkosUUFBUSxDQUFDSyxJQUFJLENBQUNOLEtBQUssQ0FBQyxDQUFDO0tBQ3hCO0lBRUQscUJBQ0ksOERBQUNTLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLDJDQUEyQztrQkFDMUQsNEVBQUNELEtBQUc7WUFBQ0MsU0FBUyxFQUFDLGFBQWE7OzhCQUN4Qiw4REFBQ0MsR0FBQztvQkFBQ0QsU0FBUyxFQUFDLGVBQWU7O3dCQUFDLFlBQVU7d0JBQUNWLEtBQUs7Ozs7Ozt3QkFBSzs4QkFDbEQsOERBQUNZLFFBQU07b0JBQ1BGLFNBQVMsRUFBQywwQ0FBMEM7b0JBQ3BERyxPQUFPLEVBQUVOLGdCQUFnQjs4QkFDeEIsYUFFRDs7Ozs7d0JBQVM7Ozs7OztnQkFDUDs7Ozs7WUFDQSxDQUNSO0NBQ0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gICAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZldGNoKCcvYXBpL2NvdW50ZXInKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgIC50aGVuKGRhdGEgPT4gc2V0Q291bnQoZGF0YS5jb3VudCkpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGluY3JlbWVudENvdW50ZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9hcGkvY291bnRlcicsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICBzZXRDb3VudChkYXRhLmNvdW50KTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGgtc2NyZWVuXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtYi00XCI+Q29udGFkb3I6IHtjb3VudH08L3A+XHJcbiAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiBiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHJvdW5kZWRcIiBcclxuICAgICAgICAgICAgb25DbGljaz17aW5jcmVtZW50Q291bnRlcn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICBJbmNyZW1lbnRhclxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSG9tZSIsImNvdW50Iiwic2V0Q291bnQiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImluY3JlbWVudENvdW50ZXIiLCJtZXRob2QiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();