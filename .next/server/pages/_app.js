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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./layouts/PrivateLayout.tsx":
/*!***********************************!*\
  !*** ./layouts/PrivateLayout.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst PrivateLayout = ({ children  })=>{\n    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(session);\n    }, [\n        session\n    ]);\n    if (status === 'loading') return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        __source: {\n            fileName: \"/Users/juanfelipeescobar/Desktop/Desarrollo/wishList/layouts/PrivateLayout.tsx\",\n            lineNumber: 11,\n            columnNumber: 36\n        },\n        __self: undefined,\n        children: \"Loading...\"\n    }));\n    if (!session) {\n        (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signIn)('auth0');\n    } else {\n        if (session.user.estado === 'Pendiente') {\n            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                __source: {\n                    fileName: \"/Users/juanfelipeescobar/Desktop/Desarrollo/wishList/layouts/PrivateLayout.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 14\n                },\n                __self: undefined,\n                children: \"Usted no ha sido autorizado para ingresar aun\"\n            }));\n        }\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: \"flex flex-col\",\n            __source: {\n                fileName: \"/Users/juanfelipeescobar/Desktop/Desarrollo/wishList/layouts/PrivateLayout.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            },\n            __self: undefined,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                    onClick: ()=>{\n                        (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)();\n                    },\n                    className: \"w-32 bg-black text-white\",\n                    __source: {\n                        fileName: \"/Users/juanfelipeescobar/Desktop/Desarrollo/wishList/layouts/PrivateLayout.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    },\n                    __self: undefined,\n                    children: \"Cerrar sesi\\xf3n\"\n                }),\n                \"Esta es una ruta privada\",\n                children\n            ]\n        }));\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PrivateLayout);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9sYXlvdXRzL1ByaXZhdGVMYXlvdXQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ3FCO0FBRTdELEtBQUssQ0FBQ0ssYUFBYSxJQUFJLENBQUMsQ0FBQ0MsUUFBUSxFQUFDLENBQUMsR0FBSyxDQUFDO0lBQ3ZDLEtBQUssQ0FBQyxDQUFDLENBQUNDLElBQUksRUFBRUMsT0FBTyxHQUFFQyxNQUFNLEVBQUMsQ0FBQyxHQUFRUCwyREFBVTtJQUVqREQsZ0RBQVMsS0FBTyxDQUFDO1FBQ2ZTLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxPQUFPO0lBQ3JCLENBQUMsRUFBRSxDQUFDQTtRQUFBQSxPQUFPO0lBQUEsQ0FBQztJQUVaLEVBQUUsRUFBRUMsTUFBTSxLQUFLLENBQVMsVUFBRSxNQUFNLHNFQUFFRyxDQUFHOzs7Ozs7O2tCQUFDLENBQVU7O0lBRWhELEVBQUUsR0FBR0osT0FBTyxFQUFFLENBQUM7UUFDYkwsdURBQU0sQ0FBQyxDQUFPO0lBQ2hCLENBQUMsTUFBTSxDQUFDO1FBQ04sRUFBRSxFQUFFSyxPQUFPLENBQUNLLElBQUksQ0FBQ0MsTUFBTSxLQUFLLENBQVcsWUFBRSxDQUFDO1lBQ3hDLE1BQU0sc0VBQUVGLENBQUc7Ozs7Ozs7MEJBQUMsQ0FBNkM7O1FBQzNELENBQUM7UUFDRCxNQUFNLHVFQUNIQSxDQUFHO1lBQUNHLFNBQVMsRUFBQyxDQUFlOzs7Ozs7OztxRkFDM0JDLENBQU07b0JBQ0xDLE9BQU8sTUFBUSxDQUFDO3dCQUNkYix3REFBTztvQkFDVCxDQUFDO29CQUNEVyxTQUFTLEVBQUMsQ0FBMEI7Ozs7Ozs7OEJBQ3JDLENBRUQ7O2dCQUFTLENBRVQ7Z0JBQUNULFFBQVE7OztJQUdmLENBQUM7QUFDSCxDQUFDO0FBRUQsaUVBQWVELGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dlc3Rpb24tZGUtcHJveWVjdG9zLy4vbGF5b3V0cy9Qcml2YXRlTGF5b3V0LnRzeD81OWU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTZXNzaW9uLCBzaWduSW4sIHNpZ25PdXQgfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xuXG5jb25zdCBQcml2YXRlTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCB7IGRhdGE6IHNlc3Npb24sIHN0YXR1cyB9OiBhbnkgPSB1c2VTZXNzaW9uKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhzZXNzaW9uKTtcbiAgfSwgW3Nlc3Npb25dKTtcblxuICBpZiAoc3RhdHVzID09PSAnbG9hZGluZycpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XG5cbiAgaWYgKCFzZXNzaW9uKSB7XG4gICAgc2lnbkluKCdhdXRoMCcpO1xuICB9IGVsc2Uge1xuICAgIGlmIChzZXNzaW9uLnVzZXIuZXN0YWRvID09PSAnUGVuZGllbnRlJykge1xuICAgICAgcmV0dXJuIDxkaXY+VXN0ZWQgbm8gaGEgc2lkbyBhdXRvcml6YWRvIHBhcmEgaW5ncmVzYXIgYXVuPC9kaXY+O1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wnPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgc2lnbk91dCgpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgY2xhc3NOYW1lPSd3LTMyIGJnLWJsYWNrIHRleHQtd2hpdGUnXG4gICAgICAgID5cbiAgICAgICAgICBDZXJyYXIgc2VzacOzblxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgRXN0YSBlcyB1bmEgcnV0YSBwcml2YWRhXG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByaXZhdGVMYXlvdXQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTZXNzaW9uIiwic2lnbkluIiwic2lnbk91dCIsIlByaXZhdGVMYXlvdXQiLCJjaGlsZHJlbiIsImRhdGEiLCJzZXNzaW9uIiwic3RhdHVzIiwiY29uc29sZSIsImxvZyIsImRpdiIsInVzZXIiLCJlc3RhZG8iLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./layouts/PrivateLayout.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var layouts_PrivateLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! layouts/PrivateLayout */ \"./layouts/PrivateLayout.tsx\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction MyApp({ Component , pageProps: { session , ...pageProps }  }) {\n    console.log('estoy en el app');\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_auth_react__WEBPACK_IMPORTED_MODULE_2__.SessionProvider, {\n        session: session,\n        __source: {\n            fileName: \"/Users/juanfelipeescobar/Desktop/Desarrollo/wishList/pages/_app.tsx\",\n            lineNumber: 9,\n            columnNumber: 5\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(layouts_PrivateLayout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            __source: {\n                fileName: \"/Users/juanfelipeescobar/Desktop/Desarrollo/wishList/pages/_app.tsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            },\n            __self: this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {\n                ...pageProps,\n                __source: {\n                    fileName: \"/Users/juanfelipeescobar/Desktop/Desarrollo/wishList/pages/_app.tsx\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                },\n                __self: this\n            })\n        })\n    }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBaUQ7QUFFQTtBQUNuQjtTQUVyQkUsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxHQUFFQyxTQUFTLEVBQUUsQ0FBQyxDQUFDQyxPQUFPLE1BQUtELFNBQVMsQ0FBQyxDQUFDLEVBQVcsQ0FBQyxFQUFFLENBQUM7SUFDN0VFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQWlCO0lBQzdCLE1BQU0sc0VBQ0hOLDREQUFlO1FBQUNJLE9BQU8sRUFBRUEsT0FBTzs7Ozs7Ozt1RkFDOUJMLDZEQUFhOzs7Ozs7OzJGQUNYRyxTQUFTO21CQUFLQyxTQUFTOzs7Ozs7Ozs7O0FBSWhDLENBQUM7QUFFRCxpRUFBZUYsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2VzdGlvbi1kZS1wcm95ZWN0b3MvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcml2YXRlTGF5b3V0IGZyb20gJ2xheW91dHMvUHJpdmF0ZUxheW91dCc7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0IHsgU2Vzc2lvblByb3ZpZGVyIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0JztcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wczogeyBzZXNzaW9uLCAuLi5wYWdlUHJvcHMgfSB9OiBBcHBQcm9wcykge1xuICBjb25zb2xlLmxvZygnZXN0b3kgZW4gZWwgYXBwJyk7XG4gIHJldHVybiAoXG4gICAgPFNlc3Npb25Qcm92aWRlciBzZXNzaW9uPXtzZXNzaW9ufT5cbiAgICAgIDxQcml2YXRlTGF5b3V0PlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L1ByaXZhdGVMYXlvdXQ+XG4gICAgPC9TZXNzaW9uUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIlByaXZhdGVMYXlvdXQiLCJTZXNzaW9uUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInNlc3Npb24iLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();