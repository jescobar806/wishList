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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "@next-auth/prisma-adapter":
/*!********************************************!*\
  !*** external "@next-auth/prisma-adapter" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@next-auth/prisma-adapter");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/auth0":
/*!********************************************!*\
  !*** external "next-auth/providers/auth0" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/auth0");

/***/ }),

/***/ "./pages/api/auth/[...nextauth].ts":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_auth0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/auth0 */ \"next-auth/providers/auth0\");\n/* harmony import */ var next_auth_providers_auth0__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_auth0__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"@next-auth/prisma-adapter\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_3__.PrismaClient();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__.PrismaAdapter)(prisma),\n    callbacks: {\n        async signIn ({ user , account , profile , email , credentials  }) {\n            if (user.estado === 'NoAutorizado') return false;\n            return true;\n        },\n        async session ({ session , user , token  }) {\n            console.log(session, user, token);\n            const session2 = {\n                ...session,\n                user\n            };\n            return session2;\n        }\n    },\n    providers: [\n        next_auth_providers_auth0__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.AUTH0_CLIENT_ID,\n            clientSecret: process.env.AUTH0_CLIENT_SECRET,\n            issuer: process.env.AUTH0_ISSUER\n        }), \n    ]\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFnQztBQUNxQjtBQUNJO0FBQ1o7QUFFN0MsS0FBSyxDQUFDSSxNQUFNLEdBQUcsR0FBRyxDQUFDRCx3REFBWTtBQUUvQixpRUFBZUgsZ0RBQVEsQ0FBQyxDQUFDO0lBQ3ZCSyxPQUFPLEVBQUVILHdFQUFhLENBQUNFLE1BQU07SUFDN0JFLFNBQVMsRUFBRSxDQUFDO2NBQ0pDLE1BQU0sRUFBQyxDQUFDLENBQUNDLElBQUksR0FBRUMsT0FBTyxHQUFFQyxPQUFPLEdBQUVDLEtBQUssR0FBRUMsV0FBVyxFQUFDLENBQUMsRUFBRSxDQUFDO1lBQzVELEVBQUUsRUFBRUosSUFBSSxDQUFDSyxNQUFNLEtBQUssQ0FBYyxlQUFFLE1BQU0sQ0FBQyxLQUFLO1lBRWhELE1BQU0sQ0FBQyxJQUFJO1FBQ2IsQ0FBQztjQUNLQyxPQUFPLEVBQUMsQ0FBQyxDQUFDQSxPQUFPLEdBQUVOLElBQUksR0FBRU8sS0FBSyxFQUFDLENBQUMsRUFBRSxDQUFDO1lBQ3ZDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsT0FBTyxFQUFFTixJQUFJLEVBQUVPLEtBQUs7WUFDaEMsS0FBSyxDQUFDRyxRQUFRLEdBQUcsQ0FBQzttQkFBSUosT0FBTztnQkFBRU4sSUFBSTtZQUFDLENBQUM7WUFDckMsTUFBTSxDQUFDVSxRQUFRO1FBQ2pCLENBQUM7SUFDSCxDQUFDO0lBRURDLFNBQVMsRUFBRSxDQUFDO1FBQ1ZsQixnRUFBYSxDQUFDLENBQUM7WUFDYm1CLFFBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLGVBQWU7WUFDckNDLFlBQVksRUFBRUgsT0FBTyxDQUFDQyxHQUFHLENBQUNHLG1CQUFtQjtZQUM3Q0MsTUFBTSxFQUFFTCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0ssWUFBWTtRQUNsQyxDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUMsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2VzdGlvbi1kZS1wcm95ZWN0b3MvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzPzJlOGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gJ25leHQtYXV0aCc7XG5pbXBvcnQgQXV0aDBQcm92aWRlciBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2F1dGgwJztcbmltcG9ydCB7IFByaXNtYUFkYXB0ZXIgfSBmcm9tICdAbmV4dC1hdXRoL3ByaXNtYS1hZGFwdGVyJztcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcblxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XG4gIGFkYXB0ZXI6IFByaXNtYUFkYXB0ZXIocHJpc21hKSxcbiAgY2FsbGJhY2tzOiB7XG4gICAgYXN5bmMgc2lnbkluKHsgdXNlciwgYWNjb3VudCwgcHJvZmlsZSwgZW1haWwsIGNyZWRlbnRpYWxzIH0pIHtcbiAgICAgIGlmICh1c2VyLmVzdGFkbyA9PT0gJ05vQXV0b3JpemFkbycpIHJldHVybiBmYWxzZTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiwgdXNlciwgdG9rZW4gfSkge1xuICAgICAgY29uc29sZS5sb2coc2Vzc2lvbiwgdXNlciwgdG9rZW4pO1xuICAgICAgY29uc3Qgc2Vzc2lvbjIgPSB7IC4uLnNlc3Npb24sIHVzZXIgfTtcbiAgICAgIHJldHVybiBzZXNzaW9uMjtcbiAgICB9LFxuICB9LFxuXG4gIHByb3ZpZGVyczogW1xuICAgIEF1dGgwUHJvdmlkZXIoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkFVVEgwX0NMSUVOVF9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuQVVUSDBfQ0xJRU5UX1NFQ1JFVCxcbiAgICAgIGlzc3VlcjogcHJvY2Vzcy5lbnYuQVVUSDBfSVNTVUVSLFxuICAgIH0pLFxuICBdLFxufSk7XG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJBdXRoMFByb3ZpZGVyIiwiUHJpc21hQWRhcHRlciIsIlByaXNtYUNsaWVudCIsInByaXNtYSIsImFkYXB0ZXIiLCJjYWxsYmFja3MiLCJzaWduSW4iLCJ1c2VyIiwiYWNjb3VudCIsInByb2ZpbGUiLCJlbWFpbCIsImNyZWRlbnRpYWxzIiwiZXN0YWRvIiwic2Vzc2lvbiIsInRva2VuIiwiY29uc29sZSIsImxvZyIsInNlc3Npb24yIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiQVVUSDBfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiQVVUSDBfQ0xJRU5UX1NFQ1JFVCIsImlzc3VlciIsIkFVVEgwX0lTU1VFUiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/auth/[...nextauth].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();