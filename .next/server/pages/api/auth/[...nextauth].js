"use strict";
(() => {
var exports = {};
exports.id = 748;
exports.ids = [748];
exports.modules = {

/***/ 53524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 48185:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _nextauth_)
});

;// CONCATENATED MODULE: external "next-auth"
const external_next_auth_namespaceObject = require("next-auth");
var external_next_auth_default = /*#__PURE__*/__webpack_require__.n(external_next_auth_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/auth0"
const auth0_namespaceObject = require("next-auth/providers/auth0");
var auth0_default = /*#__PURE__*/__webpack_require__.n(auth0_namespaceObject);
;// CONCATENATED MODULE: external "@next-auth/prisma-adapter"
const prisma_adapter_namespaceObject = require("@next-auth/prisma-adapter");
// EXTERNAL MODULE: external "@prisma/client"
var client_ = __webpack_require__(53524);
;// CONCATENATED MODULE: ./pages/api/auth/[...nextauth].ts




const prisma = new client_.PrismaClient();
/* harmony default export */ const _nextauth_ = (external_next_auth_default()({
    adapter: (0,prisma_adapter_namespaceObject.PrismaAdapter)(prisma),
    callbacks: {
        async signIn ({ user , account , profile , email , credentials  }) {
            if (user.estado === 'NoAutorizado') return false;
            return true;
        },
        async session ({ session , user , token  }) {
            console.log(session, user, token);
            const session2 = {
                ...session,
                user
            };
            return session2;
        }
    },
    providers: [
        auth0_default()({
            clientId: process.env.AUTH0_CLIENT_ID,
            clientSecret: process.env.AUTH0_CLIENT_SECRET,
            issuer: process.env.AUTH0_ISSUER
        }), 
    ]
}));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(48185));
module.exports = __webpack_exports__;

})();