"use strict";
(() => {
var exports = {};
exports.id = 271;
exports.ids = [271];
exports.modules = {

/***/ 45423:
/***/ ((module) => {

module.exports = require("@prisma/client/runtime");

/***/ }),

/***/ 30207:
/***/ ((module) => {

module.exports = require("@prisma/client/runtime/index");

/***/ }),

/***/ 57147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 71017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 71432:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65659);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
const RutaApiProductos = async (req, res)=>{
// if (req.method === 'GET') {
//   console.log('hice un get');
//   const productos = await prisma.producto.findMany({
//     include: {
//       inventario: {
//         include: {
//           movimientoInventario: {
//             include: {
//               usuario: true,
//             },
//           },
//         },
//       },
//     },
//   });
//   res.status(200).json({ productos });
// }
// if (req.method === 'POST') {
//   const productoCreado = await prisma.producto.create({
//     data: {
//       nombre: 'Pantalla',
//       foto: 'foto pantalla',
//     },
//   });
//   res.status(200).json({ producto: productoCreado });
// }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RutaApiProductos);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [659], () => (__webpack_exec__(71432)));
module.exports = __webpack_exports__;

})();