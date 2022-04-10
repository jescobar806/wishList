"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 99259:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
;// CONCATENATED MODULE: external "next-auth/react"
const react_namespaceObject = require("next-auth/react");
;// CONCATENATED MODULE: ./layouts/PrivateLayout.tsx



const PrivateLayout = ({ children  })=>{
    const { data: session , status  } = (0,react_namespaceObject.useSession)();
    (0,external_react_.useEffect)(()=>{
        console.log(session);
    }, [
        session
    ]);
    if (status === 'loading') return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: "Loading..."
    }));
    if (!session) {
        (0,react_namespaceObject.signIn)('auth0');
    } else {
        if (session.user.estado === 'Pendiente') {
            return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: "Usted no ha sido autorizado para ingresar aun"
            }));
        }
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    onClick: ()=>{
                        (0,react_namespaceObject.signOut)();
                    },
                    className: "w-32 bg-black text-white",
                    children: "Cerrar sesi\xf3n"
                }),
                "Esta es una ruta privada",
                children
            ]
        }));
    }
};
/* harmony default export */ const layouts_PrivateLayout = (PrivateLayout);

;// CONCATENATED MODULE: ./pages/_app.tsx




function MyApp({ Component , pageProps: { session , ...pageProps }  }) {
    console.log('estoy en el app');
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_namespaceObject.SessionProvider, {
        session: session,
        children: /*#__PURE__*/ jsx_runtime_.jsx(layouts_PrivateLayout, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 16689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 20997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(99259));
module.exports = __webpack_exports__;

})();