"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/create-account",{

/***/ "./lib/client/useMutation.ts":
/*!***********************************!*\
  !*** ./lib/client/useMutation.ts ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ useMutation; }\n/* harmony export */ });\n/* harmony import */ var _home_taey8553_carrot_market_challenge_sandbox_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_taey8553_carrot_market_challenge_sandbox_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_taey8553_carrot_market_challenge_sandbox_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\nfunction useMutation(url) {\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), data = ref[0], setData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isLoading = ref1[0], setIsLoading = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), error = ref2[0], setError = ref2[1];\n    var mutation = function() {\n        var _ref = _asyncToGenerator(_home_taey8553_carrot_market_challenge_sandbox_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(formData) {\n            var response;\n            return _home_taey8553_carrot_market_challenge_sandbox_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        setIsLoading(true);\n                        _ctx.next = 3;\n                        return fetch(url, {\n                            method: \"POST\",\n                            headers: {\n                                \"Content-Type\": \"application/json\"\n                            },\n                            body: JSON.stringify(formData)\n                        });\n                    case 3:\n                        _ctx.next = 5;\n                        return _ctx.sent.json();\n                    case 5:\n                        response = _ctx.sent;\n                        setIsLoading(false);\n                        if (response === null || response === void 0 ? void 0 : response.ok) {\n                            _ctx.next = 9;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\", setError(response));\n                    case 9:\n                        return _ctx.abrupt(\"return\", setData(response));\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function mutation(formData) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return [\n        mutation,\n        {\n            data: data,\n            isLoading: isLoading,\n            error: error\n        }\n    ];\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvY2xpZW50L3VzZU11dGF0aW9uLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpQztBQUtsQixTQUFTQyxXQUFXLENBQUNDLEdBQVcsRUFBZ0I7SUFDN0QsSUFBd0JGLEdBQXdCLEdBQXhCQSwrQ0FBUSxFQUFnQixFQU5sRCxJQU1hLEdBQWFBLEdBQXdCLEdBQXJDLEVBTmIsT0FNc0IsR0FBSUEsR0FBd0IsR0FBNUI7SUFDcEIsSUFBa0NBLElBQXdCLEdBQXhCQSwrQ0FBUSxDQUFVLEtBQUssQ0FBQyxFQVA1RCxTQU9rQixHQUFrQkEsSUFBd0IsR0FBMUMsRUFQbEIsWUFPZ0MsR0FBSUEsSUFBd0IsR0FBNUI7SUFDOUIsSUFBMEJBLElBQWUsR0FBZkEsK0NBQVEsRUFBTyxFQVIzQyxLQVFjLEdBQWNBLElBQWUsR0FBN0IsRUFSZCxRQVF3QixHQUFJQSxJQUFlLEdBQW5CO0lBRXRCLElBQU1TLFFBQVE7bUJBQUcsNkxBQWdCQyxRQUFhLEVBQUU7Z0JBRXhDQyxRQUFROzs7O3dCQURkTCxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7OytCQUVYTSxLQUFLLENBQUNWLEdBQUcsRUFBRTs0QkFDZlcsTUFBTSxFQUFFLE1BQU07NEJBQ2RDLE9BQU8sRUFBRTtnQ0FDUCxjQUFjLEVBQUUsa0JBQWtCOzZCQUNuQzs0QkFDREMsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ1AsUUFBUSxDQUFDO3lCQUMvQixDQUFDOzs7K0JBUGlDLFVBUW5DUSxJQUFJLEVBQUU7O3dCQVJGUCxRQUFRLFlBUU47d0JBQ1JMLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQzs0QkFFZkssUUFBUSxhQUFSQSxRQUFRLFdBQUksR0FBWkEsS0FBQUEsQ0FBWSxHQUFaQSxRQUFRLENBQUVRLEVBQUU7Ozs7cURBQVNYLFFBQVEsQ0FBQ0csUUFBUSxDQUFDOztxREFDckNQLE9BQU8sQ0FBQ08sUUFBUSxDQUFDOzs7Ozs7U0FDekI7d0JBZktGLFFBQVEsQ0FBbUJDLFFBQWE7OztPQWU3QztJQUVELE9BQU87UUFBQ0QsUUFBUTtRQUFFO1lBQUVOLElBQUksRUFBSkEsSUFBSTtZQUFFRSxTQUFTLEVBQVRBLFNBQVM7WUFBRUUsS0FBSyxFQUFMQSxLQUFLO1NBQUU7S0FBQyxDQUFDO0NBQy9DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xpYi9jbGllbnQvdXNlTXV0YXRpb24udHM/ZmNjOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUmVzcG9uc2VEYXRhIH0gZnJvbSBcIi4uL3NlcnZlci93aXRoSGFuZGxlclwiO1xuXG50eXBlIEl1c2VNdXRhdGlvbiA9IFtGdW5jdGlvbiwgeyBkYXRhOiBhbnk7IGlzTG9hZGluZzogYm9vbGVhbjsgZXJyb3I6IGFueSB9XTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlTXV0YXRpb24odXJsOiBzdHJpbmcpOiBJdXNlTXV0YXRpb24ge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZTxSZXNwb25zZURhdGE+KCk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8YW55PigpO1xuXG4gIGNvbnN0IG11dGF0aW9uID0gYXN5bmMgZnVuY3Rpb24gKGZvcm1EYXRhOiBhbnkpIHtcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgY29uc3QgcmVzcG9uc2U6IFJlc3BvbnNlRGF0YSA9IGF3YWl0IChcbiAgICAgIGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKSxcbiAgICAgIH0pXG4gICAgKS5qc29uKCk7XG4gICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcblxuICAgIGlmICghcmVzcG9uc2U/Lm9rKSByZXR1cm4gc2V0RXJyb3IocmVzcG9uc2UpO1xuICAgIHJldHVybiBzZXREYXRhKHJlc3BvbnNlKTtcbiAgfTtcblxuICByZXR1cm4gW211dGF0aW9uLCB7IGRhdGEsIGlzTG9hZGluZywgZXJyb3IgfV07XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VNdXRhdGlvbiIsInVybCIsImRhdGEiLCJzZXREYXRhIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsIm11dGF0aW9uIiwiZm9ybURhdGEiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwianNvbiIsIm9rIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/client/useMutation.ts\n");

/***/ })

});