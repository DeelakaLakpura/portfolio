"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/Lading.jsx":
/*!***************************************!*\
  !*** ./src/app/components/Lading.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lottie_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lottie-react */ \"(app-pages-browser)/./node_modules/lottie-react/build/index.umd.js\");\n/* harmony import */ var lottie_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lottie_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_laoding_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/laoding.json */ \"(app-pages-browser)/./src/app/components/assets/laoding.json\");\n\n\n\n\nconst LoadingScreen = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center h-screen bg-gray-900\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((lottie_react__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    animationData: _assets_laoding_json__WEBPACK_IMPORTED_MODULE_3__,\n                    loop: true,\n                    autoPlay: true,\n                    className: \"w-32 h-32 md:w-68 md:h-68\"\n                }, void 0, false, {\n                    fileName: \"/Users/deelaka/Documents/Untitled/src/app/components/Lading.jsx\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"mt-4 text-xl font-bold text-white animate-bounce\",\n                    children: \"Loading, please wait...\"\n                }, void 0, false, {\n                    fileName: \"/Users/deelaka/Documents/Untitled/src/app/components/Lading.jsx\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/deelaka/Documents/Untitled/src/app/components/Lading.jsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/deelaka/Documents/Untitled/src/app/components/Lading.jsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, undefined);\n};\n_c = LoadingScreen;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoadingScreen);\nvar _c;\n$RefreshReg$(_c, \"LoadingScreen\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9MYWRpbmcuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBCO0FBQ1E7QUFDbUI7QUFFckQsTUFBTUcsZ0JBQWdCO0lBQ3BCLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0oscURBQU1BO29CQUNMSyxlQUFlSixpREFBZ0JBO29CQUMvQkssTUFBTTtvQkFDUkMsVUFBVTtvQkFDUkgsV0FBVTs7Ozs7OzhCQUVaLDhEQUFDSTtvQkFBR0osV0FBVTs4QkFBbUQ7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3pFO0tBakJNRjtBQW1CTiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvTGFkaW5nLmpzeD8xZGI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTG90dGllIGZyb20gJ2xvdHRpZS1yZWFjdCc7XG5pbXBvcnQgbG9hZGluZ0FuaW1hdGlvbiBmcm9tICcuL2Fzc2V0cy9sYW9kaW5nLmpzb24nOyBcblxuY29uc3QgTG9hZGluZ1NjcmVlbiA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtc2NyZWVuIGJnLWdyYXktOTAwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxMb3R0aWVcbiAgICAgICAgICBhbmltYXRpb25EYXRhPXtsb2FkaW5nQW5pbWF0aW9ufVxuICAgICAgICAgIGxvb3A9e3RydWV9XG4gICAgICAgIGF1dG9QbGF5PXt0cnVlfVxuICAgICAgICAgIGNsYXNzTmFtZT1cInctMzIgaC0zMiBtZDp3LTY4IG1kOmgtNjhcIlxuICAgICAgICAvPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwibXQtNCB0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIGFuaW1hdGUtYm91bmNlXCI+XG4gICAgICAgICAgTG9hZGluZywgcGxlYXNlIHdhaXQuLi5cbiAgICAgICAgPC9oMj5cbiAgICAgXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRpbmdTY3JlZW47XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJMb3R0aWUiLCJsb2FkaW5nQW5pbWF0aW9uIiwiTG9hZGluZ1NjcmVlbiIsImRpdiIsImNsYXNzTmFtZSIsImFuaW1hdGlvbkRhdGEiLCJsb29wIiwiYXV0b1BsYXkiLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Lading.jsx\n"));

/***/ })

});