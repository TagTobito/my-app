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
exports.id = "pages/api/counter";
exports.ids = ["pages/api/counter"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./lib/dbConnect.js":
/*!**************************!*\
  !*** ./lib/dbConnect.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGODB_URI;\nif (!MONGODB_URI) {\n    throw new Error(\"Please define the MONGODB_URI environment variable inside .env.local\");\n}\nlet cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function dbConnect() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        const opts = {\n            useNewUrlParser: true,\n            useUnifiedTopology: true,\n            bufferCommands: false\n        };\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, opts).then((mongoose)=>{\n            return mongoose;\n        });\n    }\n    cached.conn = await cached.promise;\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZGJDb25uZWN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxXQUFXLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixXQUFXO0FBRTNDLElBQUksQ0FBQ0EsV0FBVyxFQUFFO0lBQ2QsTUFBTSxJQUFJRyxLQUFLLENBQ1gsc0VBQXNFLENBQ3pFLENBQUM7Q0FDRDtBQUVELElBQUlDLE1BQU0sR0FBR0MsTUFBTSxDQUFDTixRQUFRO0FBRTVCLElBQUksQ0FBQ0ssTUFBTSxFQUFFO0lBQ2JBLE1BQU0sR0FBR0MsTUFBTSxDQUFDTixRQUFRLEdBQUc7UUFBRU8sSUFBSSxFQUFFLElBQUk7UUFBRUMsT0FBTyxFQUFFLElBQUk7S0FBRSxDQUFDO0NBQ3hEO0FBRUQsZUFBZUMsU0FBUyxHQUFHO0lBQzNCLElBQUlKLE1BQU0sQ0FBQ0UsSUFBSSxFQUFFO1FBQ2IsT0FBT0YsTUFBTSxDQUFDRSxJQUFJLENBQUM7S0FDdEI7SUFFRCxJQUFJLENBQUNGLE1BQU0sQ0FBQ0csT0FBTyxFQUFFO1FBQ2pCLE1BQU1FLElBQUksR0FBRztZQUNiQyxlQUFlLEVBQUUsSUFBSTtZQUNyQkMsa0JBQWtCLEVBQUUsSUFBSTtZQUN4QkMsY0FBYyxFQUFFLEtBQUs7U0FDcEI7UUFFRFIsTUFBTSxDQUFDRyxPQUFPLEdBQUdSLHVEQUFnQixDQUFDQyxXQUFXLEVBQUVTLElBQUksQ0FBQyxDQUFDSyxJQUFJLENBQUMsQ0FBQ2YsUUFBUSxHQUFLO1lBQ3hFLE9BQU9BLFFBQVEsQ0FBQztTQUNmLENBQUMsQ0FBQztLQUNOO0lBQ0RLLE1BQU0sQ0FBQ0UsSUFBSSxHQUFHLE1BQU1GLE1BQU0sQ0FBQ0csT0FBTyxDQUFDO0lBQ25DLE9BQU9ILE1BQU0sQ0FBQ0UsSUFBSSxDQUFDO0NBQ3RCO0FBRUQsaUVBQWVFLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL2xpYi9kYkNvbm5lY3QuanM/MWQzYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuY29uc3QgTU9OR09EQl9VUkkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSTtcclxuXHJcbmlmICghTU9OR09EQl9VUkkpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAnUGxlYXNlIGRlZmluZSB0aGUgTU9OR09EQl9VUkkgZW52aXJvbm1lbnQgdmFyaWFibGUgaW5zaWRlIC5lbnYubG9jYWwnXHJcbiAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBjYWNoZWQgPSBnbG9iYWwubW9uZ29vc2U7XHJcblxyXG4gICAgaWYgKCFjYWNoZWQpIHtcclxuICAgIGNhY2hlZCA9IGdsb2JhbC5tb25nb29zZSA9IHsgY29ubjogbnVsbCwgcHJvbWlzZTogbnVsbCB9O1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGRiQ29ubmVjdCgpIHtcclxuICAgIGlmIChjYWNoZWQuY29ubikge1xyXG4gICAgICAgIHJldHVybiBjYWNoZWQuY29ubjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWNhY2hlZC5wcm9taXNlKSB7XHJcbiAgICAgICAgY29uc3Qgb3B0cyA9IHtcclxuICAgICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXHJcbiAgICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxyXG4gICAgICAgIGJ1ZmZlckNvbW1hbmRzOiBmYWxzZSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjYWNoZWQucHJvbWlzZSA9IG1vbmdvb3NlLmNvbm5lY3QoTU9OR09EQl9VUkksIG9wdHMpLnRoZW4oKG1vbmdvb3NlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG1vbmdvb3NlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY2FjaGVkLmNvbm4gPSBhd2FpdCBjYWNoZWQucHJvbWlzZTtcclxuICAgIHJldHVybiBjYWNoZWQuY29ubjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGJDb25uZWN0O1xyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJNT05HT0RCX1VSSSIsInByb2Nlc3MiLCJlbnYiLCJFcnJvciIsImNhY2hlZCIsImdsb2JhbCIsImNvbm4iLCJwcm9taXNlIiwiZGJDb25uZWN0Iiwib3B0cyIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsImJ1ZmZlckNvbW1hbmRzIiwiY29ubmVjdCIsInRoZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/dbConnect.js\n");

/***/ }),

/***/ "(api)/./lib/models/counter.js":
/*!*******************************!*\
  !*** ./lib/models/counter.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst CounterSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    count: {\n        type: Number,\n        required: true,\n        default: 0\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Counter) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Counter\", CounterSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9kZWxzL2NvdW50ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLGFBQWEsR0FBRyxJQUFJRCx3REFBZSxDQUFDO0lBQ3RDRyxLQUFLLEVBQUU7UUFDSEMsSUFBSSxFQUFFQyxNQUFNO1FBQ1pDLFFBQVEsRUFBRSxJQUFJO1FBQ2RDLE9BQU8sRUFBRSxDQUFDO0tBQ2I7Q0FDSixDQUFDO0FBRUYsaUVBQWVQLGdFQUF1QixJQUFJQSxxREFBYyxDQUFDLFNBQVMsRUFBRUMsYUFBYSxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9saWIvbW9kZWxzL2NvdW50ZXIuanM/ZGFjZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuY29uc3QgQ291bnRlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gICAgY291bnQ6IHtcclxuICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgZGVmYXVsdDogMCxcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWxzLkNvdW50ZXIgfHwgbW9uZ29vc2UubW9kZWwoJ0NvdW50ZXInLCBDb3VudGVyU2NoZW1hKTtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiQ291bnRlclNjaGVtYSIsIlNjaGVtYSIsImNvdW50IiwidHlwZSIsIk51bWJlciIsInJlcXVpcmVkIiwiZGVmYXVsdCIsIm1vZGVscyIsIkNvdW50ZXIiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/models/counter.js\n");

/***/ }),

/***/ "(api)/./pages/api/counter.js":
/*!******************************!*\
  !*** ./pages/api/counter.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/dbConnect */ \"(api)/./lib/dbConnect.js\");\n/* harmony import */ var _lib_models_counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/models/counter */ \"(api)/./lib/models/counter.js\");\n\n\nasync function handler(req, res) {\n    await (0,_lib_dbConnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    if (req.method === \"GET\") {\n        let counter = await _lib_models_counter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({});\n        if (!counter) {\n            counter = await _lib_models_counter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create({\n                count: 0\n            });\n        }\n        res.status(200).json({\n            count: counter.count\n        });\n    } else if (req.method === \"POST\") {\n        const counter1 = await _lib_models_counter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({});\n        if (counter1) {\n            counter1.count += 1;\n            await counter1.save();\n        } else {\n            await _lib_models_counter__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create({\n                count: 1\n            });\n        }\n        res.status(200).json({\n            count: counter1.count\n        });\n    } else {\n        res.status(405).end(); // Method Not Allowed\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY291bnRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNEM7QUFDRztBQUVoQyxlQUFlRSxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzVDLE1BQU1KLDBEQUFTLEVBQUUsQ0FBQztJQUVsQixJQUFJRyxHQUFHLENBQUNFLE1BQU0sS0FBSyxLQUFLLEVBQUU7UUFDdEIsSUFBSUMsT0FBTyxHQUFHLE1BQU1MLG1FQUFlLENBQUMsRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQ0ssT0FBTyxFQUFFO1lBQ2RBLE9BQU8sR0FBRyxNQUFNTCxrRUFBYyxDQUFDO2dCQUFFUSxLQUFLLEVBQUUsQ0FBQzthQUFFLENBQUMsQ0FBQztTQUM1QztRQUNETCxHQUFHLENBQUNNLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVGLEtBQUssRUFBRUgsT0FBTyxDQUFDRyxLQUFLO1NBQUUsQ0FBQyxDQUFDO0tBQ2xELE1BQU0sSUFBSU4sR0FBRyxDQUFDRSxNQUFNLEtBQUssTUFBTSxFQUFFO1FBQzlCLE1BQU1DLFFBQU8sR0FBRyxNQUFNTCxtRUFBZSxDQUFDLEVBQUUsQ0FBQztRQUN6QyxJQUFJSyxRQUFPLEVBQUU7WUFDYkEsUUFBTyxDQUFDRyxLQUFLLElBQUksQ0FBQyxDQUFDO1lBQ25CLE1BQU1ILFFBQU8sQ0FBQ00sSUFBSSxFQUFFLENBQUM7U0FDcEIsTUFBTTtZQUNQLE1BQU1YLGtFQUFjLENBQUM7Z0JBQUVRLEtBQUssRUFBRSxDQUFDO2FBQUUsQ0FBQyxDQUFDO1NBQ2xDO1FBQ0RMLEdBQUcsQ0FBQ00sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUYsS0FBSyxFQUFFSCxRQUFPLENBQUNHLEtBQUs7U0FBRSxDQUFDLENBQUM7S0FDbEQsTUFBTTtRQUNITCxHQUFHLENBQUNNLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0csR0FBRyxFQUFFLENBQUMsQ0FBQyxxQkFBcUI7S0FDL0M7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3BhZ2VzL2FwaS9jb3VudGVyLmpzP2RiOGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRiQ29ubmVjdCBmcm9tICcuLi8uLi9saWIvZGJDb25uZWN0JztcclxuaW1wb3J0IENvdW50ZXIgZnJvbSAnLi4vLi4vbGliL21vZGVscy9jb3VudGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICAgIGF3YWl0IGRiQ29ubmVjdCgpO1xyXG5cclxuICAgIGlmIChyZXEubWV0aG9kID09PSAnR0VUJykge1xyXG4gICAgICAgIGxldCBjb3VudGVyID0gYXdhaXQgQ291bnRlci5maW5kT25lKHt9KTtcclxuICAgICAgICBpZiAoIWNvdW50ZXIpIHtcclxuICAgICAgICBjb3VudGVyID0gYXdhaXQgQ291bnRlci5jcmVhdGUoeyBjb3VudDogMCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBjb3VudDogY291bnRlci5jb3VudCB9KTtcclxuICAgIH0gZWxzZSBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XHJcbiAgICAgICAgY29uc3QgY291bnRlciA9IGF3YWl0IENvdW50ZXIuZmluZE9uZSh7fSk7XHJcbiAgICAgICAgaWYgKGNvdW50ZXIpIHtcclxuICAgICAgICBjb3VudGVyLmNvdW50ICs9IDE7XHJcbiAgICAgICAgYXdhaXQgY291bnRlci5zYXZlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhd2FpdCBDb3VudGVyLmNyZWF0ZSh7IGNvdW50OiAxIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGNvdW50OiBjb3VudGVyLmNvdW50IH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXMuc3RhdHVzKDQwNSkuZW5kKCk7IC8vIE1ldGhvZCBOb3QgQWxsb3dlZFxyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJkYkNvbm5lY3QiLCJDb3VudGVyIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImNvdW50ZXIiLCJmaW5kT25lIiwiY3JlYXRlIiwiY291bnQiLCJzdGF0dXMiLCJqc29uIiwic2F2ZSIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/counter.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/counter.js"));
module.exports = __webpack_exports__;

})();