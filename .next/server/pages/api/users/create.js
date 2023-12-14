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
exports.id = "pages/api/users/create";
exports.ids = ["pages/api/users/create"];
exports.modules = {

/***/ "(api)/./lib/server/withHandler.ts":
/*!***********************************!*\
  !*** ./lib/server/withHandler.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ withHandler)\n/* harmony export */ });\nasync function withHandler({ method , handler , isPrivated =true  }) {\n    console.log(\"withHandler\");\n    return async function returnHandler(req, res) {\n        return res.status(200).json({\n            ok: true\n        });\n    };\n//   return async function (\n//     req: NextApiRequest,\n//     res: NextApiResponse<ResponseData>\n//   ) {\n//     return res.status(200).json({ ok: true });\n//     if (!req.method || !method.includes(req.method))\n//       return res.status(405).json({ ok: false });\n//     // 유저 인증\n//     // if(isPrivated &&) return res.status(401).json({ ok: false });\n//     try {\n//       await handler(req, res);\n//     } catch (error) {\n//       console.log(\"with handler error\", error);\n//       return res.status(500).json({ ok: false });\n//     }\n//   };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvc2VydmVyL3dpdGhIYW5kbGVyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFZZSxlQUFlQSxXQUFXLENBQUMsRUFDeENDLE1BQU0sR0FDTkMsT0FBTyxHQUNQQyxVQUFVLEVBQUcsSUFBSSxHQUNKLEVBQUU7SUFDZkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDM0IsT0FBTyxlQUFlQyxhQUFhLENBQ2pDQyxHQUFtQixFQUNuQkMsR0FBa0MsRUFDbEM7UUFDQSxPQUFPQSxHQUFHLENBQUNDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLEVBQUUsRUFBRSxJQUFJO1NBQUUsQ0FBQyxDQUFDO0tBQzNDLENBQUM7QUFDRiw0QkFBNEI7QUFDNUIsMkJBQTJCO0FBQzNCLHlDQUF5QztBQUN6QyxRQUFRO0FBQ1IsaURBQWlEO0FBRWpELHVEQUF1RDtBQUN2RCxvREFBb0Q7QUFDcEQ7QUFDQSx1RUFBdUU7QUFFdkUsWUFBWTtBQUNaLGlDQUFpQztBQUNqQyx3QkFBd0I7QUFDeEIsa0RBQWtEO0FBQ2xELG9EQUFvRDtBQUNwRCxRQUFRO0FBQ1IsT0FBTztDQUNSIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXByaXNtYS10eXBlc2NyaXB0LXRhaWx3aW5kLWJsdWVwcmludC8uL2xpYi9zZXJ2ZXIvd2l0aEhhbmRsZXIudHM/YWUxNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcbnR5cGUgUmVzcG9uc2VEYXRhID0ge1xuICBvazogYm9vbGVhbjtcbiAgbWVzc2FnZT86IHN0cmluZztcbiAgZXJyb3I/OiB7IG1lc3NhZ2U6IHN0cmluZyB9O1xufTtcbmludGVyZmFjZSBJV2l0aEhhbmRsZXIge1xuICBtZXRob2Q6IHN0cmluZ1tdO1xuICBoYW5kbGVyOiBGdW5jdGlvbjtcbiAgaXNQcml2YXRlZD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHdpdGhIYW5kbGVyKHtcbiAgbWV0aG9kLFxuICBoYW5kbGVyLFxuICBpc1ByaXZhdGVkID0gdHJ1ZSxcbn06IElXaXRoSGFuZGxlcikge1xuICBjb25zb2xlLmxvZyhcIndpdGhIYW5kbGVyXCIpO1xuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gcmV0dXJuSGFuZGxlcihcbiAgICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICAgIHJlczogTmV4dEFwaVJlc3BvbnNlPFJlc3BvbnNlRGF0YT5cbiAgKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgb2s6IHRydWUgfSk7XG4gIH07XG4gIC8vICAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uIChcbiAgLy8gICAgIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIC8vICAgICByZXM6IE5leHRBcGlSZXNwb25zZTxSZXNwb25zZURhdGE+XG4gIC8vICAgKSB7XG4gIC8vICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBvazogdHJ1ZSB9KTtcblxuICAvLyAgICAgaWYgKCFyZXEubWV0aG9kIHx8ICFtZXRob2QuaW5jbHVkZXMocmVxLm1ldGhvZCkpXG4gIC8vICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuanNvbih7IG9rOiBmYWxzZSB9KTtcbiAgLy8gICAgIC8vIOycoOyggCDsnbjspp1cbiAgLy8gICAgIC8vIGlmKGlzUHJpdmF0ZWQgJiYpIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbih7IG9rOiBmYWxzZSB9KTtcblxuICAvLyAgICAgdHJ5IHtcbiAgLy8gICAgICAgYXdhaXQgaGFuZGxlcihyZXEsIHJlcyk7XG4gIC8vICAgICB9IGNhdGNoIChlcnJvcikge1xuICAvLyAgICAgICBjb25zb2xlLmxvZyhcIndpdGggaGFuZGxlciBlcnJvclwiLCBlcnJvcik7XG4gIC8vICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG9rOiBmYWxzZSB9KTtcbiAgLy8gICAgIH1cbiAgLy8gICB9O1xufVxuIl0sIm5hbWVzIjpbIndpdGhIYW5kbGVyIiwibWV0aG9kIiwiaGFuZGxlciIsImlzUHJpdmF0ZWQiLCJjb25zb2xlIiwibG9nIiwicmV0dXJuSGFuZGxlciIsInJlcSIsInJlcyIsInN0YXR1cyIsImpzb24iLCJvayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/server/withHandler.ts\n");

/***/ }),

/***/ "(api)/./pages/api/users/create.ts":
/*!***********************************!*\
  !*** ./pages/api/users/create.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_server_withHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/server/withHandler */ \"(api)/./lib/server/withHandler.ts\");\n\nasync function Handler(req, res) {\n    // const { email, username, password } = req.body;\n    // if (!(email && username && password))\n    //   return res.status(400).json({ ok: false });\n    // console.log(email, username, password);\n    // const Bcrypts = useBcrypts();\n    // const hashedPassword = await Bcrypts.hassing(password);\n    // console.log(hashedPassword);\n    // const match = await Bcrypts.comparing(password, hashedPassword);\n    // console.log(match);\n    return res.status(200).json({\n        ok: true\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_server_withHandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    method: [\n        \"POST\"\n    ],\n    handler: Handler,\n    isPrivated: false\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlcnMvY3JlYXRlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQzBEO0FBUzFELGVBQWVDLE9BQU8sQ0FDcEJDLEdBQW1CLEVBQ25CQyxHQUFrQyxFQUNsQztJQUNBLGtEQUFrRDtJQUVsRCx3Q0FBd0M7SUFDeEMsZ0RBQWdEO0lBQ2hELDBDQUEwQztJQUMxQyxnQ0FBZ0M7SUFDaEMsMERBQTBEO0lBQzFELCtCQUErQjtJQUMvQixtRUFBbUU7SUFDbkUsc0JBQXNCO0lBRXRCLE9BQU9BLEdBQUcsQ0FBQ0MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7UUFBRUMsRUFBRSxFQUFFLElBQUk7S0FBRSxDQUFDLENBQUM7Q0FDM0M7QUFFRCxpRUFBZU4sbUVBQVcsQ0FBQztJQUN6Qk8sTUFBTSxFQUFFO1FBQUMsTUFBTTtLQUFDO0lBQ2hCQyxPQUFPLEVBQUVQLE9BQU87SUFDaEJRLFVBQVUsRUFBRSxLQUFLO0NBQ2xCLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1wcmlzbWEtdHlwZXNjcmlwdC10YWlsd2luZC1ibHVlcHJpbnQvLi9wYWdlcy9hcGkvdXNlcnMvY3JlYXRlLnRzP2VmY2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgd2l0aEhhbmRsZXIgZnJvbSBcIi4uLy4uLy4uL2xpYi9zZXJ2ZXIvd2l0aEhhbmRsZXJcIjtcbmltcG9ydCB1c2VCY3J5cHRzIGZyb20gXCIuLi8uLi8uLi9saWIvc2VydmVyL2JjcnlwdHNcIjtcblxudHlwZSBSZXNwb25zZURhdGEgPSB7XG4gIG9rOiBib29sZWFuO1xuICBtZXNzYWdlPzogc3RyaW5nO1xuICBlcnJvcj86IHsgbWVzc2FnZTogc3RyaW5nIH07XG59O1xuXG5hc3luYyBmdW5jdGlvbiBIYW5kbGVyKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxSZXNwb25zZURhdGE+XG4pIHtcbiAgLy8gY29uc3QgeyBlbWFpbCwgdXNlcm5hbWUsIHBhc3N3b3JkIH0gPSByZXEuYm9keTtcblxuICAvLyBpZiAoIShlbWFpbCAmJiB1c2VybmFtZSAmJiBwYXNzd29yZCkpXG4gIC8vICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgb2s6IGZhbHNlIH0pO1xuICAvLyBjb25zb2xlLmxvZyhlbWFpbCwgdXNlcm5hbWUsIHBhc3N3b3JkKTtcbiAgLy8gY29uc3QgQmNyeXB0cyA9IHVzZUJjcnlwdHMoKTtcbiAgLy8gY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBCY3J5cHRzLmhhc3NpbmcocGFzc3dvcmQpO1xuICAvLyBjb25zb2xlLmxvZyhoYXNoZWRQYXNzd29yZCk7XG4gIC8vIGNvbnN0IG1hdGNoID0gYXdhaXQgQmNyeXB0cy5jb21wYXJpbmcocGFzc3dvcmQsIGhhc2hlZFBhc3N3b3JkKTtcbiAgLy8gY29uc29sZS5sb2cobWF0Y2gpO1xuXG4gIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IG9rOiB0cnVlIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoSGFuZGxlcih7XG4gIG1ldGhvZDogW1wiUE9TVFwiXSxcbiAgaGFuZGxlcjogSGFuZGxlcixcbiAgaXNQcml2YXRlZDogZmFsc2UsXG59KTtcbiJdLCJuYW1lcyI6WyJ3aXRoSGFuZGxlciIsIkhhbmRsZXIiLCJyZXEiLCJyZXMiLCJzdGF0dXMiLCJqc29uIiwib2siLCJtZXRob2QiLCJoYW5kbGVyIiwiaXNQcml2YXRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/users/create.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/users/create.ts"));
module.exports = __webpack_exports__;

})();