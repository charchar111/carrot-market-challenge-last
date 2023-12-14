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

/***/ "./pages/create-account.tsx":
/*!**********************************!*\
  !*** ./pages/create-account.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CreateAccount; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Input */ \"./components/Input.tsx\");\n/* harmony import */ var _components_FormButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/FormButton */ \"./components/FormButton.tsx\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _lib_client_useMutation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/client/useMutation */ \"./lib/client/useMutation.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction CreateAccount() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    var ref = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useForm)(), register = ref.register, handleSubmit = ref.handleSubmit;\n    var ref1 = _slicedToArray((0,_lib_client_useMutation__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"/api/users/create\"), 2), mutation = ref1[0], ref2 = ref1[1], data = ref2.data, error1 = ref2.error, isLoading = ref2.isLoading;\n    var onValid = function onValid(formData) {\n        // console.log(formData);\n        if (isLoading) return;\n        if (data) return;\n        mutation(formData);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {\n        if (data === null || data === void 0 ? void 0 : data.ok) router.push(\"/\");\n    }, [\n        data\n    ]);\n    console.log(data, error1, isLoading);\n    var onInvalid = function onInvalid(error) {\n        console.log(error);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        title: \"Sign Up\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"flex flex-col p-2\",\n                action: \"\",\n                onSubmit: handleSubmit(onValid, onInvalid),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        label: \"Email\",\n                        register: _objectSpread({}, register(\"email\", {\n                            required: true\n                        }))\n                    }, void 0, false, {\n                        fileName: \"/home/taey8553/carrot-market-challenge/sandbox/pages/create-account.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        label: \"Username\",\n                        register: _objectSpread({}, register(\"username\", {\n                            required: true\n                        }))\n                    }, void 0, false, {\n                        fileName: \"/home/taey8553/carrot-market-challenge/sandbox/pages/create-account.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        label: \"Password\",\n                        type: \"password\",\n                        register: _objectSpread({}, register(\"password\", {\n                            required: true\n                        }))\n                    }, void 0, false, {\n                        fileName: \"/home/taey8553/carrot-market-challenge/sandbox/pages/create-account.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FormButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        text: \"Sign Up\"\n                    }, void 0, false, {\n                        fileName: \"/home/taey8553/carrot-market-challenge/sandbox/pages/create-account.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/taey8553/carrot-market-challenge/sandbox/pages/create-account.tsx\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/taey8553/carrot-market-challenge/sandbox/pages/create-account.tsx\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/taey8553/carrot-market-challenge/sandbox/pages/create-account.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n};\n_s(CreateAccount, \"8qvt8Tc8Ahf8m/BtNBoZWTvJmQo=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useForm,\n        _lib_client_useMutation__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = CreateAccount;\nvar _c;\n$RefreshReg$(_c, \"CreateAccount\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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InNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jcmVhdGUtYWNjb3VudC50c3g/NDUwZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW5wdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvSW5wdXRcIjtcbmltcG9ydCBGb3JtQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvcm1CdXR0b25cIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgeyBGaWVsZEVycm9ycywgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcbmltcG9ydCB1c2VNdXRhdGlvbiBmcm9tIFwiLi4vbGliL2NsaWVudC91c2VNdXRhdGlvblwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuaW50ZXJmYWNlIEZvcm1BY2NvdW50IHtcbiAgdXNlcm5hbWU6IHN0cmluZztcbiAgZW1haWw6IHN0cmluZztcbiAgcGFzc3dvcmQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JlYXRlQWNjb3VudCgpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCB9ID0gdXNlRm9ybTxGb3JtQWNjb3VudD4oKTtcbiAgY29uc3QgW211dGF0aW9uLCB7IGRhdGEsIGVycm9yLCBpc0xvYWRpbmcgfV0gPVxuICAgIHVzZU11dGF0aW9uKFwiL2FwaS91c2Vycy9jcmVhdGVcIik7XG4gIGNvbnN0IG9uVmFsaWQgPSBmdW5jdGlvbiAoZm9ybURhdGE6IEZvcm1BY2NvdW50KSB7XG4gICAgLy8gY29uc29sZS5sb2coZm9ybURhdGEpO1xuICAgIGlmIChpc0xvYWRpbmcpIHJldHVybjtcbiAgICBpZiAoZGF0YSkgcmV0dXJuO1xuICAgIG11dGF0aW9uKGZvcm1EYXRhKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkYXRhPy5vaykgcm91dGVyLnB1c2goXCIvXCIpO1xuICB9LCBbZGF0YV0pO1xuICBjb25zb2xlLmxvZyhkYXRhLCBlcnJvciwgaXNMb2FkaW5nKTtcblxuICBjb25zdCBvbkludmFsaWQgPSBmdW5jdGlvbiAoZXJyb3I6IEZpZWxkRXJyb3JzKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dCB0aXRsZT1cIlNpZ24gVXBcIj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxmb3JtXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBwLTJcIlxuICAgICAgICAgIGFjdGlvbj1cIlwiXG4gICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblZhbGlkLCBvbkludmFsaWQpfVxuICAgICAgICA+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcbiAgICAgICAgICAgIHJlZ2lzdGVyPXt7IC4uLnJlZ2lzdGVyKFwiZW1haWxcIiwgeyByZXF1aXJlZDogdHJ1ZSB9KSB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICBsYWJlbD1cIlVzZXJuYW1lXCJcbiAgICAgICAgICAgIHJlZ2lzdGVyPXt7IC4uLnJlZ2lzdGVyKFwidXNlcm5hbWVcIiwgeyByZXF1aXJlZDogdHJ1ZSB9KSB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICByZWdpc3Rlcj17eyAuLi5yZWdpc3RlcihcInBhc3N3b3JkXCIsIHsgcmVxdWlyZWQ6IHRydWUgfSkgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxGb3JtQnV0dG9uIHRleHQ9XCJTaWduIFVwXCIgLz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSW5wdXQiLCJGb3JtQnV0dG9uIiwiTGF5b3V0IiwidXNlRm9ybSIsInVzZU11dGF0aW9uIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiQ3JlYXRlQWNjb3VudCIsInJvdXRlciIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwibXV0YXRpb24iLCJkYXRhIiwiZXJyb3IiLCJpc0xvYWRpbmciLCJvblZhbGlkIiwiZm9ybURhdGEiLCJvayIsInB1c2giLCJjb25zb2xlIiwibG9nIiwib25JbnZhbGlkIiwidGl0bGUiLCJkaXYiLCJmb3JtIiwiY2xhc3NOYW1lIiwiYWN0aW9uIiwib25TdWJtaXQiLCJsYWJlbCIsInJlcXVpcmVkIiwidHlwZSIsInRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/create-account.tsx\n");

/***/ })

});