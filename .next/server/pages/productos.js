"use strict";
(() => {
var exports = {};
exports.id = 379;
exports.ids = [379];
exports.modules = {

/***/ 72476:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ productos),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
;// CONCATENATED MODULE: external "safe-json-stringify"
const external_safe_json_stringify_namespaceObject = require("safe-json-stringify");
var external_safe_json_stringify_default = /*#__PURE__*/__webpack_require__.n(external_safe_json_stringify_namespaceObject);
// EXTERNAL MODULE: ./node_modules/.prisma/client/index.js
var client = __webpack_require__(4836);
;// CONCATENATED MODULE: ./pages/productos.tsx




const prisma = new client.PrismaClient();
async function getServerSideProps() {
    // const productos = await prisma.producto.findMany({
    //   include: {
    //     inventario: {
    //       include: {
    //         movimientoInventario: {
    //           include: {
    //             usuario: true,
    //           },
    //         },
    //       },
    //     },
    //   },
    // });
    const productos = [];
    return {
        props: {
            productos: JSON.parse(external_safe_json_stringify_default()(productos))
        }
    };
}
const Productos = ({ productos  })=>{
    console.log('Esta es la variable en el front', productos);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            "Estos son mis productos:",
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: "Tabla producos"
            }),
            productos && productos.map((p)=>{
                return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: p.nombre
                }, p.id));
            })
        ]
    }));
};
/* harmony default export */ const productos = (Productos);


/***/ }),

/***/ 45423:
/***/ ((module) => {

module.exports = require("@prisma/client/runtime");

/***/ }),

/***/ 30207:
/***/ ((module) => {

module.exports = require("@prisma/client/runtime/index");

/***/ }),

/***/ 16689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 20997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 57147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 71017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [836], () => (__webpack_exec__(72476)));
module.exports = __webpack_exports__;

})();