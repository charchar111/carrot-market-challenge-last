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
exports.id = "pages/api/users/confirm/address";
exports.ids = ["pages/api/users/confirm/address"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "iron-session":
/*!*******************************!*\
  !*** external "iron-session" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("iron-session");;

/***/ }),

/***/ "(api)/./lib/db.ts":
/*!*******************!*\
  !*** ./lib/db.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst db = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) global.db = db;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZGIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBTTlDLE1BQU1DLEVBQUUsR0FBRyxJQUFJRCx3REFBWSxFQUFFO0FBRTdCLElBQUlFLElBQXNDLEVBQUVDLE1BQU0sQ0FBQ0YsRUFBRSxHQUFHQSxFQUFFLENBQUM7QUFFM0QsaUVBQWVBLEVBQUUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NhcnJvdC1tYXJrZXQtY2hhbGxlbmdlLWxhc3QvLi9saWIvZGIudHM/MWRmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICB2YXIgZGI6IFByaXNtYUNsaWVudCB8IHVuZGVmaW5lZDtcbn1cblxuY29uc3QgZGIgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSBnbG9iYWwuZGIgPSBkYjtcblxuZXhwb3J0IGRlZmF1bHQgZGI7XG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwiZGIiLCJwcm9jZXNzIiwiZ2xvYmFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/db.ts\n");

/***/ }),

/***/ "(api)/./lib/server/bcrypts.ts":
/*!*******************************!*\
  !*** ./lib/server/bcrypts.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ useBcrypts)\n/* harmony export */ });\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction useBcrypts() {\n    const saltRounds = 10;\n    const hassing = async function(text) {\n        let password;\n        password = await bcrypt__WEBPACK_IMPORTED_MODULE_0___default().hash(text, saltRounds);\n        return password;\n    };\n    const comparing = async function(text, hashedText) {\n        const match = await bcrypt__WEBPACK_IMPORTED_MODULE_0___default().compare(text, hashedText);\n        return match;\n    };\n    return {\n        hassing,\n        comparing\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvc2VydmVyL2JjcnlwdHMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTRCO0FBRWIsU0FBU0MsVUFBVSxHQUFHO0lBQ25DLE1BQU1DLFVBQVUsR0FBRyxFQUFFO0lBQ3JCLE1BQU1DLE9BQU8sR0FBRyxlQUFnQkMsSUFBWSxFQUFFO1FBQzVDLElBQUlDLFFBQVE7UUFDWkEsUUFBUSxHQUFHLE1BQU1MLGtEQUFXLENBQUNJLElBQUksRUFBRUYsVUFBVSxDQUFDLENBQUM7UUFDL0MsT0FBT0csUUFBUSxDQUFDO0tBQ2pCO0lBRUQsTUFBTUUsU0FBUyxHQUFHLGVBQWdCSCxJQUFZLEVBQUVJLFVBQWtCLEVBQUU7UUFDbEUsTUFBTUMsS0FBSyxHQUFHLE1BQU1ULHFEQUFjLENBQUNJLElBQUksRUFBRUksVUFBVSxDQUFDO1FBQ3BELE9BQU9DLEtBQUssQ0FBQztLQUNkO0lBRUQsT0FBTztRQUFFTixPQUFPO1FBQUVJLFNBQVM7S0FBRSxDQUFDO0NBQy9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2Fycm90LW1hcmtldC1jaGFsbGVuZ2UtbGFzdC8uL2xpYi9zZXJ2ZXIvYmNyeXB0cy50cz9lODIzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VCY3J5cHRzKCkge1xuICBjb25zdCBzYWx0Um91bmRzID0gMTA7XG4gIGNvbnN0IGhhc3NpbmcgPSBhc3luYyBmdW5jdGlvbiAodGV4dDogc3RyaW5nKSB7XG4gICAgbGV0IHBhc3N3b3JkO1xuICAgIHBhc3N3b3JkID0gYXdhaXQgYmNyeXB0Lmhhc2godGV4dCwgc2FsdFJvdW5kcyk7XG4gICAgcmV0dXJuIHBhc3N3b3JkO1xuICB9O1xuXG4gIGNvbnN0IGNvbXBhcmluZyA9IGFzeW5jIGZ1bmN0aW9uICh0ZXh0OiBzdHJpbmcsIGhhc2hlZFRleHQ6IHN0cmluZykge1xuICAgIGNvbnN0IG1hdGNoID0gYXdhaXQgYmNyeXB0LmNvbXBhcmUodGV4dCwgaGFzaGVkVGV4dCk7XG4gICAgcmV0dXJuIG1hdGNoO1xuICB9O1xuXG4gIHJldHVybiB7IGhhc3NpbmcsIGNvbXBhcmluZyB9O1xufVxuIl0sIm5hbWVzIjpbImJjcnlwdCIsInVzZUJjcnlwdHMiLCJzYWx0Um91bmRzIiwiaGFzc2luZyIsInRleHQiLCJwYXNzd29yZCIsImhhc2giLCJjb21wYXJpbmciLCJoYXNoZWRUZXh0IiwibWF0Y2giLCJjb21wYXJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/server/bcrypts.ts\n");

/***/ }),

/***/ "(api)/./lib/server/withAPISession.ts":
/*!**************************************!*\
  !*** ./lib/server/withAPISession.ts ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ withAPISession)\n/* harmony export */ });\n/* harmony import */ var iron_session_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! iron-session/next */ \"(api)/./node_modules/iron-session/next/dist/index.mjs\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([iron_session_next__WEBPACK_IMPORTED_MODULE_0__]);\niron_session_next__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst SessionOption = {\n    cookieName: \"tweet-clone-id\",\n    password: \"1x2sj3]8jd1k193d8c1nm23281m3c82m132c1mcc18c1cm1cm\"\n};\nfunction withAPISession(handler) {\n    return (0,iron_session_next__WEBPACK_IMPORTED_MODULE_0__.withIronSessionApiRoute)(handler, SessionOption);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvc2VydmVyL3dpdGhBUElTZXNzaW9uLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTREO0FBRTVELE1BQU1DLGFBQWEsR0FBRztJQUNwQkMsVUFBVSxFQUFFLGdCQUFnQjtJQUM1QkMsUUFBUSxFQUFFLG1EQUFtRDtDQUU5RDtBQUNjLFNBQVNDLGNBQWMsQ0FBQ0MsT0FBWSxFQUFFO0lBQ25ELE9BQU9MLDBFQUF1QixDQUFDSyxPQUFPLEVBQUVKLGFBQWEsQ0FBQyxDQUFDO0NBQ3hEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2Fycm90LW1hcmtldC1jaGFsbGVuZ2UtbGFzdC8uL2xpYi9zZXJ2ZXIvd2l0aEFQSVNlc3Npb24udHM/MjkyYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3aXRoSXJvblNlc3Npb25BcGlSb3V0ZSB9IGZyb20gXCJpcm9uLXNlc3Npb24vbmV4dFwiO1xuXG5jb25zdCBTZXNzaW9uT3B0aW9uID0ge1xuICBjb29raWVOYW1lOiBcInR3ZWV0LWNsb25lLWlkXCIsXG4gIHBhc3N3b3JkOiBcIjF4MnNqM104amQxazE5M2Q4YzFubTIzMjgxbTNjODJtMTMyYzFtY2MxOGMxY20xY21cIixcbiAgLy8gZm9yIHRlc3QsIGNoYW5nZSBpZiByZWFsIHByb2R1Y3Rpb25cbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoQVBJU2Vzc2lvbihoYW5kbGVyOiBhbnkpIHtcbiAgcmV0dXJuIHdpdGhJcm9uU2Vzc2lvbkFwaVJvdXRlKGhhbmRsZXIsIFNlc3Npb25PcHRpb24pO1xufVxuIl0sIm5hbWVzIjpbIndpdGhJcm9uU2Vzc2lvbkFwaVJvdXRlIiwiU2Vzc2lvbk9wdGlvbiIsImNvb2tpZU5hbWUiLCJwYXNzd29yZCIsIndpdGhBUElTZXNzaW9uIiwiaGFuZGxlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/server/withAPISession.ts\n");

/***/ }),

/***/ "(api)/./lib/server/withHandler.ts":
/*!***********************************!*\
  !*** ./lib/server/withHandler.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ withHandler)\n/* harmony export */ });\nfunction withHandler({ method , handler , isPrivated =true  }) {\n    return async function(req, res) {\n        if (!req.method || !method.includes(req.method)) return res.status(405).json({\n            ok: false\n        });\n        // 유저 인증\n        // if(isPrivated &&) return res.status(401).json({ ok: false });\n        try {\n            await handler(req, res);\n        } catch (error) {\n            console.log(\"with handler error\", error);\n            return res.status(500).json({\n                ok: false\n            });\n        }\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvc2VydmVyL3dpdGhIYW5kbGVyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFZZSxTQUFTQSxXQUFXLENBQUMsRUFDbENDLE1BQU0sR0FDTkMsT0FBTyxHQUNQQyxVQUFVLEVBQUcsSUFBSSxHQUNKLEVBQUU7SUFDZixPQUFPLGVBQ0xDLEdBQW1CLEVBQ25CQyxHQUFrQyxFQUNsQztRQUNBLElBQUksQ0FBQ0QsR0FBRyxDQUFDSCxNQUFNLElBQUksQ0FBQ0EsTUFBTSxDQUFDSyxRQUFRLENBQUNGLEdBQUcsQ0FBQ0gsTUFBTSxDQUFDLEVBQzdDLE9BQU9JLEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsRUFBRSxFQUFFLEtBQUs7U0FBRSxDQUFDLENBQUM7UUFDN0M7UUFDQSxnRUFBZ0U7UUFFaEUsSUFBSTtZQUNGLE1BQU1QLE9BQU8sQ0FBQ0UsR0FBRyxFQUFFQyxHQUFHLENBQUMsQ0FBQztTQUN6QixDQUFDLE9BQU9LLEtBQUssRUFBRTtZQUNkQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRUYsS0FBSyxDQUFDLENBQUM7WUFDekMsT0FBT0wsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBRUMsRUFBRSxFQUFFLEtBQUs7YUFBRSxDQUFDLENBQUM7U0FDNUM7S0FDRixDQUFDO0NBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXJyb3QtbWFya2V0LWNoYWxsZW5nZS1sYXN0Ly4vbGliL3NlcnZlci93aXRoSGFuZGxlci50cz9hZTE1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuZXhwb3J0IHR5cGUgUmVzcG9uc2VEYXRhID0ge1xuICBvazogYm9vbGVhbjtcbiAgbWVzc2FnZT86IHN0cmluZztcbiAgZXJyb3I/OiB7IG1lc3NhZ2U6IHN0cmluZyB9O1xufTtcbmludGVyZmFjZSBJV2l0aEhhbmRsZXIge1xuICBtZXRob2Q6IHN0cmluZ1tdO1xuICBoYW5kbGVyOiBGdW5jdGlvbjtcbiAgaXNQcml2YXRlZD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhIYW5kbGVyKHtcbiAgbWV0aG9kLFxuICBoYW5kbGVyLFxuICBpc1ByaXZhdGVkID0gdHJ1ZSxcbn06IElXaXRoSGFuZGxlcikge1xuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gKFxuICAgIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gICAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8UmVzcG9uc2VEYXRhPlxuICApIHtcbiAgICBpZiAoIXJlcS5tZXRob2QgfHwgIW1ldGhvZC5pbmNsdWRlcyhyZXEubWV0aG9kKSlcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuanNvbih7IG9rOiBmYWxzZSB9KTtcbiAgICAvLyDsnKDsoIAg7J247KadXG4gICAgLy8gaWYoaXNQcml2YXRlZCAmJikgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgb2s6IGZhbHNlIH0pO1xuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGhhbmRsZXIocmVxLCByZXMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIndpdGggaGFuZGxlciBlcnJvclwiLCBlcnJvcik7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBvazogZmFsc2UgfSk7XG4gICAgfVxuICB9O1xufVxuIl0sIm5hbWVzIjpbIndpdGhIYW5kbGVyIiwibWV0aG9kIiwiaGFuZGxlciIsImlzUHJpdmF0ZWQiLCJyZXEiLCJyZXMiLCJpbmNsdWRlcyIsInN0YXR1cyIsImpzb24iLCJvayIsImVycm9yIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/server/withHandler.ts\n");

/***/ }),

/***/ "(api)/./pages/api/users/confirm/address.ts":
/*!********************************************!*\
  !*** ./pages/api/users/confirm/address.ts ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_server_withHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/server/withHandler */ \"(api)/./lib/server/withHandler.ts\");\n/* harmony import */ var _lib_server_bcrypts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/server/bcrypts */ \"(api)/./lib/server/bcrypts.ts\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/db */ \"(api)/./lib/db.ts\");\n/* harmony import */ var _lib_server_withAPISession__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/server/withAPISession */ \"(api)/./lib/server/withAPISession.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_server_withAPISession__WEBPACK_IMPORTED_MODULE_3__]);\n_lib_server_withAPISession__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nasync function Handler(req, res) {\n    const { email , password  } = req.body;\n    if (!(email && password)) return res.status(400).json({\n        ok: false\n    });\n    const user = await _lib_db__WEBPACK_IMPORTED_MODULE_2__[\"default\"].user.findUnique({\n        where: {\n            email\n        }\n    });\n    if (!user) return res.status(404).json({\n        ok: false,\n        error: {\n            message: \"user account or password doesn't match\"\n        }\n    });\n    const Bcrypts = (0,_lib_server_bcrypts__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const match = await Bcrypts.comparing(password, user?.password);\n    if (!match) return res.status(404).json({\n        ok: false,\n        error: {\n            message: \"user account or password doesn't match\"\n        }\n    });\n    console.log(user);\n    req.session.user = {\n        id: user.id\n    };\n    return res.status(200).json({\n        ok: true\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_lib_server_withAPISession__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,_lib_server_withHandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    method: [\n        \"POST\"\n    ],\n    handler: Handler,\n    isPrivated: false\n})));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlcnMvY29uZmlybS9hZGRyZXNzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ21EO0FBQ0w7QUFDcEI7QUFDK0I7QUFnQnpELGVBQWVJLE9BQU8sQ0FDcEJDLEdBQW1CLEVBQ25CQyxHQUFrQyxFQUNsQztJQUNBLE1BQU0sRUFBRUMsS0FBSyxHQUFFQyxRQUFRLEdBQUUsR0FBR0gsR0FBRyxDQUFDSSxJQUFJO0lBQ3BDLElBQUksQ0FBQyxDQUFDRixLQUFLLElBQUlDLFFBQVEsQ0FBQyxFQUFFLE9BQU9GLEdBQUcsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7UUFBRUMsRUFBRSxFQUFFLEtBQUs7S0FBRSxDQUFDLENBQUM7SUFDckUsTUFBTUMsSUFBSSxHQUFHLE1BQU1YLCtEQUFrQixDQUFDO1FBQUVhLEtBQUssRUFBRTtZQUFFUixLQUFLO1NBQUU7S0FBRSxDQUFDO0lBQzNELElBQUksQ0FBQ00sSUFBSSxFQUNQLE9BQU9QLEdBQUcsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7UUFDMUJDLEVBQUUsRUFBRSxLQUFLO1FBQ1RJLEtBQUssRUFBRTtZQUFFQyxPQUFPLEVBQUUsd0NBQXdDO1NBQUU7S0FDN0QsQ0FBQyxDQUFDO0lBQ0wsTUFBTUMsT0FBTyxHQUFHakIsK0RBQVUsRUFBRTtJQUM1QixNQUFNa0IsS0FBSyxHQUFHLE1BQU1ELE9BQU8sQ0FBQ0UsU0FBUyxDQUFDWixRQUFRLEVBQUVLLElBQUksRUFBRUwsUUFBUSxDQUFDO0lBQy9ELElBQUksQ0FBQ1csS0FBSyxFQUNSLE9BQU9iLEdBQUcsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7UUFDMUJDLEVBQUUsRUFBRSxLQUFLO1FBQ1RJLEtBQUssRUFBRTtZQUFFQyxPQUFPLEVBQUUsd0NBQXdDO1NBQUU7S0FDN0QsQ0FBQyxDQUFDO0lBQ0xJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVCxJQUFJLENBQUMsQ0FBQztJQUNsQlIsR0FBRyxDQUFDa0IsT0FBTyxDQUFDVixJQUFJLEdBQUc7UUFBRVcsRUFBRSxFQUFFWCxJQUFJLENBQUNXLEVBQUU7S0FBRSxDQUFDO0lBRW5DLE9BQU9sQixHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1FBQUVDLEVBQUUsRUFBRSxJQUFJO0tBQUUsQ0FBQyxDQUFDO0NBQzNDO0FBRUQsaUVBQWVULHNFQUFjLENBQzNCSCxtRUFBVyxDQUFDO0lBQ1Z5QixNQUFNLEVBQUU7UUFBQyxNQUFNO0tBQUM7SUFDaEJDLE9BQU8sRUFBRXRCLE9BQU87SUFDaEJ1QixVQUFVLEVBQUUsS0FBSztDQUNsQixDQUFDLENBQ0gsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NhcnJvdC1tYXJrZXQtY2hhbGxlbmdlLWxhc3QvLi9wYWdlcy9hcGkvdXNlcnMvY29uZmlybS9hZGRyZXNzLnRzP2QzZjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgd2l0aEhhbmRsZXIgZnJvbSBcIkAvbGliL3NlcnZlci93aXRoSGFuZGxlclwiO1xuaW1wb3J0IHVzZUJjcnlwdHMgZnJvbSBcIkAvbGliL3NlcnZlci9iY3J5cHRzXCI7XG5pbXBvcnQgZGIgZnJvbSBcIkAvbGliL2RiXCI7XG5pbXBvcnQgd2l0aEFQSVNlc3Npb24gZnJvbSBcIkAvbGliL3NlcnZlci93aXRoQVBJU2Vzc2lvblwiO1xuXG50eXBlIFJlc3BvbnNlRGF0YSA9IHtcbiAgb2s6IGJvb2xlYW47XG4gIG1lc3NhZ2U/OiBzdHJpbmc7XG4gIGVycm9yPzogeyBtZXNzYWdlOiBzdHJpbmcgfTtcbn07XG5cbmRlY2xhcmUgbW9kdWxlIFwiaXJvbi1zZXNzaW9uXCIge1xuICBpbnRlcmZhY2UgSXJvblNlc3Npb25EYXRhIHtcbiAgICB1c2VyPzoge1xuICAgICAgaWQ6IG51bWJlcjtcbiAgICB9O1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIEhhbmRsZXIoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFJlc3BvbnNlRGF0YT5cbikge1xuICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gcmVxLmJvZHk7XG4gIGlmICghKGVtYWlsICYmIHBhc3N3b3JkKSkgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgb2s6IGZhbHNlIH0pO1xuICBjb25zdCB1c2VyID0gYXdhaXQgZGIudXNlci5maW5kVW5pcXVlKHsgd2hlcmU6IHsgZW1haWwgfSB9KTtcbiAgaWYgKCF1c2VyKVxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7XG4gICAgICBvazogZmFsc2UsXG4gICAgICBlcnJvcjogeyBtZXNzYWdlOiBcInVzZXIgYWNjb3VudCBvciBwYXNzd29yZCBkb2Vzbid0IG1hdGNoXCIgfSxcbiAgICB9KTtcbiAgY29uc3QgQmNyeXB0cyA9IHVzZUJjcnlwdHMoKTtcbiAgY29uc3QgbWF0Y2ggPSBhd2FpdCBCY3J5cHRzLmNvbXBhcmluZyhwYXNzd29yZCwgdXNlcj8ucGFzc3dvcmQpO1xuICBpZiAoIW1hdGNoKVxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7XG4gICAgICBvazogZmFsc2UsXG4gICAgICBlcnJvcjogeyBtZXNzYWdlOiBcInVzZXIgYWNjb3VudCBvciBwYXNzd29yZCBkb2Vzbid0IG1hdGNoXCIgfSxcbiAgICB9KTtcbiAgY29uc29sZS5sb2codXNlcik7XG4gIHJlcS5zZXNzaW9uLnVzZXIgPSB7IGlkOiB1c2VyLmlkIH07XG5cbiAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgb2s6IHRydWUgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhBUElTZXNzaW9uKFxuICB3aXRoSGFuZGxlcih7XG4gICAgbWV0aG9kOiBbXCJQT1NUXCJdLFxuICAgIGhhbmRsZXI6IEhhbmRsZXIsXG4gICAgaXNQcml2YXRlZDogZmFsc2UsXG4gIH0pXG4pO1xuIl0sIm5hbWVzIjpbIndpdGhIYW5kbGVyIiwidXNlQmNyeXB0cyIsImRiIiwid2l0aEFQSVNlc3Npb24iLCJIYW5kbGVyIiwicmVxIiwicmVzIiwiZW1haWwiLCJwYXNzd29yZCIsImJvZHkiLCJzdGF0dXMiLCJqc29uIiwib2siLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiZXJyb3IiLCJtZXNzYWdlIiwiQmNyeXB0cyIsIm1hdGNoIiwiY29tcGFyaW5nIiwiY29uc29sZSIsImxvZyIsInNlc3Npb24iLCJpZCIsIm1ldGhvZCIsImhhbmRsZXIiLCJpc1ByaXZhdGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/users/confirm/address.ts\n");

/***/ }),

/***/ "(api)/./node_modules/iron-session/next/dist/index.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/iron-session/next/dist/index.mjs ***!
  \*******************************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"withIronSessionApiRoute\": () => (/* binding */ withIronSessionApiRoute),\n/* harmony export */   \"withIronSessionSsr\": () => (/* binding */ withIronSessionSsr)\n/* harmony export */ });\n/* harmony import */ var iron_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! iron-session */ \"iron-session\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([iron_session__WEBPACK_IMPORTED_MODULE_0__]);\niron_session__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// next/index.ts\n\n\n// src/getPropertyDescriptorForReqSession.ts\nfunction getPropertyDescriptorForReqSession(session) {\n  return {\n    enumerable: true,\n    get() {\n      return session;\n    },\n    set(value) {\n      const keys = Object.keys(value);\n      const currentKeys = Object.keys(session);\n      currentKeys.forEach((key) => {\n        if (!keys.includes(key)) {\n          delete session[key];\n        }\n      });\n      keys.forEach((key) => {\n        session[key] = value[key];\n      });\n    }\n  };\n}\n\n// next/index.ts\nfunction withIronSessionApiRoute(handler, options) {\n  return async function nextApiHandlerWrappedWithIronSession(req, res) {\n    let sessionOptions;\n    if (options instanceof Function) {\n      sessionOptions = await options(req, res);\n    } else {\n      sessionOptions = options;\n    }\n    const session = await (0,iron_session__WEBPACK_IMPORTED_MODULE_0__.getIronSession)(req, res, sessionOptions);\n    Object.defineProperty(\n      req,\n      \"session\",\n      getPropertyDescriptorForReqSession(session)\n    );\n    return handler(req, res);\n  };\n}\nfunction withIronSessionSsr(handler, options) {\n  return async function nextGetServerSidePropsHandlerWrappedWithIronSession(context) {\n    let sessionOptions;\n    if (options instanceof Function) {\n      sessionOptions = await options(context.req, context.res);\n    } else {\n      sessionOptions = options;\n    }\n    const session = await (0,iron_session__WEBPACK_IMPORTED_MODULE_0__.getIronSession)(\n      context.req,\n      context.res,\n      sessionOptions\n    );\n    Object.defineProperty(\n      context.req,\n      \"session\",\n      getPropertyDescriptorForReqSession(session)\n    );\n    return handler(context);\n  };\n}\n\n//# sourceMappingURL=index.mjs.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvaXJvbi1zZXNzaW9uL25leHQvZGlzdC9pbmRleC5tanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDOEM7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLDBCQUEwQiw0REFBYztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsMEJBQTBCLDREQUFjO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlFO0FBQ0Ysa0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXJyb3QtbWFya2V0LWNoYWxsZW5nZS1sYXN0Ly4vbm9kZV9tb2R1bGVzL2lyb24tc2Vzc2lvbi9uZXh0L2Rpc3QvaW5kZXgubWpzP2Q5ZDMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbmV4dC9pbmRleC50c1xuaW1wb3J0IHsgZ2V0SXJvblNlc3Npb24gfSBmcm9tIFwiaXJvbi1zZXNzaW9uXCI7XG5cbi8vIHNyYy9nZXRQcm9wZXJ0eURlc2NyaXB0b3JGb3JSZXFTZXNzaW9uLnRzXG5mdW5jdGlvbiBnZXRQcm9wZXJ0eURlc2NyaXB0b3JGb3JSZXFTZXNzaW9uKHNlc3Npb24pIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldCgpIHtcbiAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgIH0sXG4gICAgc2V0KHZhbHVlKSB7XG4gICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuICAgICAgY29uc3QgY3VycmVudEtleXMgPSBPYmplY3Qua2V5cyhzZXNzaW9uKTtcbiAgICAgIGN1cnJlbnRLZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAoIWtleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgIGRlbGV0ZSBzZXNzaW9uW2tleV07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgc2Vzc2lvbltrZXldID0gdmFsdWVba2V5XTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn1cblxuLy8gbmV4dC9pbmRleC50c1xuZnVuY3Rpb24gd2l0aElyb25TZXNzaW9uQXBpUm91dGUoaGFuZGxlciwgb3B0aW9ucykge1xuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gbmV4dEFwaUhhbmRsZXJXcmFwcGVkV2l0aElyb25TZXNzaW9uKHJlcSwgcmVzKSB7XG4gICAgbGV0IHNlc3Npb25PcHRpb25zO1xuICAgIGlmIChvcHRpb25zIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgIHNlc3Npb25PcHRpb25zID0gYXdhaXQgb3B0aW9ucyhyZXEsIHJlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlc3Npb25PcHRpb25zID0gb3B0aW9ucztcbiAgICB9XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldElyb25TZXNzaW9uKHJlcSwgcmVzLCBzZXNzaW9uT3B0aW9ucyk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFxuICAgICAgcmVxLFxuICAgICAgXCJzZXNzaW9uXCIsXG4gICAgICBnZXRQcm9wZXJ0eURlc2NyaXB0b3JGb3JSZXFTZXNzaW9uKHNlc3Npb24pXG4gICAgKTtcbiAgICByZXR1cm4gaGFuZGxlcihyZXEsIHJlcyk7XG4gIH07XG59XG5mdW5jdGlvbiB3aXRoSXJvblNlc3Npb25Tc3IoaGFuZGxlciwgb3B0aW9ucykge1xuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gbmV4dEdldFNlcnZlclNpZGVQcm9wc0hhbmRsZXJXcmFwcGVkV2l0aElyb25TZXNzaW9uKGNvbnRleHQpIHtcbiAgICBsZXQgc2Vzc2lvbk9wdGlvbnM7XG4gICAgaWYgKG9wdGlvbnMgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgc2Vzc2lvbk9wdGlvbnMgPSBhd2FpdCBvcHRpb25zKGNvbnRleHQucmVxLCBjb250ZXh0LnJlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlc3Npb25PcHRpb25zID0gb3B0aW9ucztcbiAgICB9XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldElyb25TZXNzaW9uKFxuICAgICAgY29udGV4dC5yZXEsXG4gICAgICBjb250ZXh0LnJlcyxcbiAgICAgIHNlc3Npb25PcHRpb25zXG4gICAgKTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG4gICAgICBjb250ZXh0LnJlcSxcbiAgICAgIFwic2Vzc2lvblwiLFxuICAgICAgZ2V0UHJvcGVydHlEZXNjcmlwdG9yRm9yUmVxU2Vzc2lvbihzZXNzaW9uKVxuICAgICk7XG4gICAgcmV0dXJuIGhhbmRsZXIoY29udGV4dCk7XG4gIH07XG59XG5leHBvcnQge1xuICB3aXRoSXJvblNlc3Npb25BcGlSb3V0ZSxcbiAgd2l0aElyb25TZXNzaW9uU3NyXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgubWpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./node_modules/iron-session/next/dist/index.mjs\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/users/confirm/address.ts"));
module.exports = __webpack_exports__;

})();