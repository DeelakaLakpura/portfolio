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

/***/ "(app-pages-browser)/./src/app/components/ProjectCard.jsx":
/*!********************************************!*\
  !*** ./src/app/components/ProjectCard.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/react */ \"(app-pages-browser)/./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper */ \"(app-pages-browser)/./node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css */ \"(app-pages-browser)/./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css/pagination */ \"(app-pages-browser)/./node_modules/swiper/modules/pagination/pagination.min.css\");\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/css/navigation */ \"(app-pages-browser)/./node_modules/swiper/modules/navigation/navigation.min.css\");\n/* harmony import */ var swiper_css_autoplay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/css/autoplay */ \"(app-pages-browser)/./node_modules/swiper/modules/autoplay/autoplay.min.css\");\n\nvar _s = $RefreshSig$();\n\n\n // Import Pagination\n\n\n\n\n\nconst CarSlider = (param)=>{\n    let { cars } = param;\n    _s();\n    const progressCircle = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const progressContent = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const onAutoplayTimeLeft = (s, time, progress)=>{\n        progressCircle.current.style.setProperty(\"--progress\", 1 - progress);\n        progressContent.current.textContent = \"\".concat(Math.ceil(time / 800), \"s\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-3xl font-bold text-green-600 mb-4 text-center\",\n                children: \"My Projects\"\n            }, void 0, false, {\n                fileName: \"/Users/deelaka/Desktop/portfolio/src/app/components/ProjectCard.jsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {\n                modules: [\n                    swiper__WEBPACK_IMPORTED_MODULE_3__.Autoplay,\n                    swiper__WEBPACK_IMPORTED_MODULE_3__.Pagination\n                ],\n                pagination: {\n                    clickable: true,\n                    el: \".swiper-pagination\"\n                },\n                autoplay: {\n                    delay: 3000,\n                    disableOnInteraction: true\n                },\n                onAutoplayTimeLeft: onAutoplayTimeLeft,\n                className: \"max-w-screen-lg mx-auto\",\n                slidesPerView: 3,\n                spaceBetween: 20,\n                loop: true,\n                breakpoints: {\n                    640: {\n                        slidesPerView: 1,\n                        spaceBetween: 10\n                    },\n                    768: {\n                        slidesPerView: 2,\n                        spaceBetween: 15\n                    },\n                    1024: {\n                        slidesPerView: 3,\n                        spaceBetween: 20\n                    }\n                },\n                children: [\n                    cars.map((car, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative max-w-xs rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 \".concat(index % 2 === 0 ? \"animate-fadeInLeft\" : \"animate-fadeInRight\"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        className: \"w-full h-64 object-cover\",\n                                        src: car.imageUrl,\n                                        alt: car.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/deelaka/Desktop/portfolio/src/app/components/ProjectCard.jsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white opacity-0 transition-opacity duration-300 hover:opacity-100\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                className: \"text-xl font-bold mb-2\",\n                                                children: car.title\n                                            }, void 0, false, {\n                                                fileName: \"/Users/deelaka/Desktop/portfolio/src/app/components/ProjectCard.jsx\",\n                                                lineNumber: 66,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-base mb-4 px-2 text-center\",\n                                                children: car.description\n                                            }, void 0, false, {\n                                                fileName: \"/Users/deelaka/Desktop/portfolio/src/app/components/ProjectCard.jsx\",\n                                                lineNumber: 67,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex justify-center space-x-4\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                        href: car.githubUrl,\n                                                        target: \"_blank\",\n                                                        rel: \"noopener noreferrer\",\n                                                        className: \"transition-colors\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                            className: \"fab fa-github text-white hover:text-blue-400 text-2xl\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/deelaka/Desktop/portfolio/src/app/components/ProjectCard.jsx\",\n                                                            lineNumber: 70,\n                                                            columnNumber: 21\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/deelaka/Desktop/portfolio/src/app/components/ProjectCard.jsx\",\n                                                        lineNumber: 69,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                        href: car.demoUrl,\n                                                        target: \"_blank\",\n                                                        rel: \"noopener noreferrer\",\n                                                        className: \"transition-colors\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                            className: \"fas fa-external-link-alt text-white hover:text-green-400 text-2xl\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/deelaka/Desktop/portfolio/src/app/components/ProjectCard.jsx\",\n                                                            lineNumber: 73,\n                                                            columnNumber: 21\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/deelaka/Desktop/portfolio/src/app/components/ProjectCard.jsx\",\n                                                        lineNumber: 72,\n                                                        columnNumber: 19\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/deelaka/Desktop/portfolio/src/app/components/ProjectCard.jsx\",\n                                                lineNumber: 68,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/deelaka/Desktop/portfolio/src/app/components/ProjectCard.jsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/deelaka/Desktop/portfolio/src/app/components/ProjectCard.jsx\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, undefined)\n                        }, index, false, {\n                            fileName: \"/Users/deelaka/Desktop/portfolio/src/app/components/ProjectCard.jsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, undefined)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"autoplay-progress\",\n                        slot: \"container-end\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                ref: progressCircle\n                            }, void 0, false, {\n                                fileName: \"/Users/deelaka/Desktop/portfolio/src/app/components/ProjectCard.jsx\",\n                                lineNumber: 81,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                ref: progressContent\n                            }, void 0, false, {\n                                fileName: \"/Users/deelaka/Desktop/portfolio/src/app/components/ProjectCard.jsx\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/deelaka/Desktop/portfolio/src/app/components/ProjectCard.jsx\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"swiper-pagination mt-4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/deelaka/Desktop/portfolio/src/app/components/ProjectCard.jsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, undefined),\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/deelaka/Desktop/portfolio/src/app/components/ProjectCard.jsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/deelaka/Desktop/portfolio/src/app/components/ProjectCard.jsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CarSlider, \"8em5FzriZtKGsUEmeHBX0+TVJp0=\");\n_c = CarSlider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CarSlider);\nvar _c;\n$RefreshReg$(_c, \"CarSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Qcm9qZWN0Q2FyZC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ2E7QUFDTCxDQUFDLG9CQUFvQjtBQUMvQztBQUNXO0FBQ0E7QUFDRjtBQUNVO0FBRXZDLE1BQU1PLFlBQVk7UUFBQyxFQUFFQyxJQUFJLEVBQUU7O0lBQ3pCLE1BQU1DLGlCQUFpQlIsNkNBQU1BLENBQUM7SUFDOUIsTUFBTVMsa0JBQWtCVCw2Q0FBTUEsQ0FBQztJQUUvQixNQUFNVSxxQkFBcUIsQ0FBQ0MsR0FBR0MsTUFBTUM7UUFDbkNMLGVBQWVNLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDQyxXQUFXLENBQUMsY0FBYyxJQUFJSDtRQUMzREosZ0JBQWdCSyxPQUFPLENBQUNHLFdBQVcsR0FBRyxHQUF5QixPQUF0QkMsS0FBS0MsSUFBSSxDQUFDUCxPQUFPLE1BQUs7SUFDakU7SUFFQSxxQkFDRSw4REFBQ1E7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUFxRDs7Ozs7OzBCQUNuRSw4REFBQ3BCLGdEQUFNQTtnQkFDTHNCLFNBQVM7b0JBQUNwQiw0Q0FBUUE7b0JBQUVDLDhDQUFVQTtpQkFBQztnQkFDL0JvQixZQUFZO29CQUNWQyxXQUFXO29CQUNYQyxJQUFJO2dCQUNOO2dCQUNBQyxVQUFVO29CQUNSQyxPQUFPO29CQUNQQyxzQkFBc0I7Z0JBQ3hCO2dCQUNBbkIsb0JBQW9CQTtnQkFDcEJXLFdBQVU7Z0JBQ1ZTLGVBQWU7Z0JBQ2ZDLGNBQWM7Z0JBQ2RDLE1BQU07Z0JBQ05DLGFBQWE7b0JBQ1gsS0FBSzt3QkFDSEgsZUFBZTt3QkFDZkMsY0FBYztvQkFDaEI7b0JBQ0EsS0FBSzt3QkFDSEQsZUFBZTt3QkFDZkMsY0FBYztvQkFDaEI7b0JBQ0EsTUFBTTt3QkFDSkQsZUFBZTt3QkFDZkMsY0FBYztvQkFDaEI7Z0JBQ0Y7O29CQUVDeEIsS0FBSzJCLEdBQUcsQ0FBQyxDQUFDQyxLQUFLQyxzQkFDZCw4REFBQ2xDLHFEQUFXQTtzQ0FDViw0RUFBQ2tCO2dDQUNDQyxXQUFXLHlHQUVWLE9BRENlLFFBQVEsTUFBTSxJQUFJLHVCQUF1Qjs7a0RBSTNDLDhEQUFDQzt3Q0FBSWhCLFdBQVU7d0NBQTJCaUIsS0FBS0gsSUFBSUksUUFBUTt3Q0FBRUMsS0FBS0wsSUFBSU0sS0FBSzs7Ozs7O2tEQUczRSw4REFBQ3JCO3dDQUNDQyxXQUFVOzswREFFViw4REFBQ0M7Z0RBQUdELFdBQVU7MERBQTBCYyxJQUFJTSxLQUFLOzs7Ozs7MERBQ2pELDhEQUFDQztnREFBRXJCLFdBQVU7MERBQW1DYyxJQUFJUSxXQUFXOzs7Ozs7MERBQy9ELDhEQUFDdkI7Z0RBQUlDLFdBQVU7O2tFQUNiLDhEQUFDdUI7d0RBQUVDLE1BQU1WLElBQUlXLFNBQVM7d0RBQUVDLFFBQU87d0RBQVNDLEtBQUk7d0RBQXNCM0IsV0FBVTtrRUFDMUUsNEVBQUM0Qjs0REFBRTVCLFdBQVU7Ozs7Ozs7Ozs7O2tFQUVmLDhEQUFDdUI7d0RBQUVDLE1BQU1WLElBQUllLE9BQU87d0RBQUVILFFBQU87d0RBQVNDLEtBQUk7d0RBQXNCM0IsV0FBVTtrRUFDeEUsNEVBQUM0Qjs0REFBRTVCLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQXBCTGU7Ozs7O2tDQTJCcEIsOERBQUNoQjt3QkFBSUMsV0FBVTt3QkFBb0I4QixNQUFLOzswQ0FDdEMsOERBQUNDO2dDQUFLQyxLQUFLN0M7Ozs7OzswQ0FDWCw4REFBQzRDO2dDQUFLQyxLQUFLNUM7Ozs7Ozs7Ozs7OztrQ0FFYiw4REFBQ1c7d0JBQUlDLFdBQVU7Ozs7OztvQkFBK0I7Ozs7Ozs7Ozs7Ozs7QUFJdEQ7R0E5RU1mO0tBQUFBO0FBZ0ZOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9Qcm9qZWN0Q2FyZC5qc3g/NjFjYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSAnc3dpcGVyL3JlYWN0JztcbmltcG9ydCB7IEF1dG9wbGF5LCBQYWdpbmF0aW9uIH0gZnJvbSAnc3dpcGVyJzsgLy8gSW1wb3J0IFBhZ2luYXRpb25cbmltcG9ydCAnc3dpcGVyL2Nzcyc7XG5pbXBvcnQgJ3N3aXBlci9jc3MvcGFnaW5hdGlvbic7XG5pbXBvcnQgJ3N3aXBlci9jc3MvbmF2aWdhdGlvbic7XG5pbXBvcnQgJ3N3aXBlci9jc3MvYXV0b3BsYXknO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuY29uc3QgQ2FyU2xpZGVyID0gKHsgY2FycyB9KSA9PiB7XG4gIGNvbnN0IHByb2dyZXNzQ2lyY2xlID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBwcm9ncmVzc0NvbnRlbnQgPSB1c2VSZWYobnVsbCk7XG5cbiAgY29uc3Qgb25BdXRvcGxheVRpbWVMZWZ0ID0gKHMsIHRpbWUsIHByb2dyZXNzKSA9PiB7XG4gICAgcHJvZ3Jlc3NDaXJjbGUuY3VycmVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1wcm9ncmVzcycsIDEgLSBwcm9ncmVzcyk7XG4gICAgcHJvZ3Jlc3NDb250ZW50LmN1cnJlbnQudGV4dENvbnRlbnQgPSBgJHtNYXRoLmNlaWwodGltZSAvIDgwMCl9c2A7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNFwiPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LWdyZWVuLTYwMCBtYi00IHRleHQtY2VudGVyXCI+TXkgUHJvamVjdHM8L2gyPlxuICAgICAgPFN3aXBlclxuICAgICAgICBtb2R1bGVzPXtbQXV0b3BsYXksIFBhZ2luYXRpb25dfSAvLyBBZGQgUGFnaW5hdGlvblxuICAgICAgICBwYWdpbmF0aW9uPXt7XG4gICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgIGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJywgLy8gVGFyZ2V0IGN1c3RvbSBwYWdpbmF0aW9uIGNsYXNzXG4gICAgICAgIH19XG4gICAgICAgIGF1dG9wbGF5PXt7XG4gICAgICAgICAgZGVsYXk6IDMwMDAsXG4gICAgICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IHRydWUsXG4gICAgICAgIH19XG4gICAgICAgIG9uQXV0b3BsYXlUaW1lTGVmdD17b25BdXRvcGxheVRpbWVMZWZ0fVxuICAgICAgICBjbGFzc05hbWU9XCJtYXgtdy1zY3JlZW4tbGcgbXgtYXV0b1wiXG4gICAgICAgIHNsaWRlc1BlclZpZXc9ezN9XG4gICAgICAgIHNwYWNlQmV0d2Vlbj17MjB9XG4gICAgICAgIGxvb3A9e3RydWV9XG4gICAgICAgIGJyZWFrcG9pbnRzPXt7XG4gICAgICAgICAgNjQwOiB7XG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIDc2ODoge1xuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMTUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICAxMDI0OiB7XG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcbiAgICAgICAgICB9LFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7Y2Fycy5tYXAoKGNhciwgaW5kZXgpID0+IChcbiAgICAgICAgICA8U3dpcGVyU2xpZGUga2V5PXtpbmRleH0+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHJlbGF0aXZlIG1heC13LXhzIHJvdW5kZWQtbGcgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvdy1sZyB0cmFuc2l0aW9uLXRyYW5zZm9ybSB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTA1ICR7XG4gICAgICAgICAgICAgICAgaW5kZXggJSAyID09PSAwID8gJ2FuaW1hdGUtZmFkZUluTGVmdCcgOiAnYW5pbWF0ZS1mYWRlSW5SaWdodCdcbiAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHsvKiBJbWFnZSAqL31cbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3LWZ1bGwgaC02NCBvYmplY3QtY292ZXJcIiBzcmM9e2Nhci5pbWFnZVVybH0gYWx0PXtjYXIudGl0bGV9IC8+XG5cbiAgICAgICAgICAgICAgey8qIE92ZXJsYXkgZm9yIERldGFpbHMgKi99XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWJsYWNrIGJnLW9wYWNpdHktNjAgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdGV4dC13aGl0ZSBvcGFjaXR5LTAgdHJhbnNpdGlvbi1vcGFjaXR5IGR1cmF0aW9uLTMwMCBob3ZlcjpvcGFjaXR5LTEwMFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgbWItMlwiPntjYXIudGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgbWItNCBweC0yIHRleHQtY2VudGVyXCI+e2Nhci5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHNwYWNlLXgtNFwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17Y2FyLmdpdGh1YlVybH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIGNsYXNzTmFtZT1cInRyYW5zaXRpb24tY29sb3JzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1naXRodWIgdGV4dC13aGl0ZSBob3Zlcjp0ZXh0LWJsdWUtNDAwIHRleHQtMnhsXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17Y2FyLmRlbW9Vcmx9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiBjbGFzc05hbWU9XCJ0cmFuc2l0aW9uLWNvbG9yc1wiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZXh0ZXJuYWwtbGluay1hbHQgdGV4dC13aGl0ZSBob3Zlcjp0ZXh0LWdyZWVuLTQwMCB0ZXh0LTJ4bFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L1N3aXBlclNsaWRlPlxuICAgICAgICApKX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRvcGxheS1wcm9ncmVzc1wiIHNsb3Q9XCJjb250YWluZXItZW5kXCI+XG4gICAgICAgICAgPHNwYW4gcmVmPXtwcm9ncmVzc0NpcmNsZX0+PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIHJlZj17cHJvZ3Jlc3NDb250ZW50fT48L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN3aXBlci1wYWdpbmF0aW9uIG10LTRcIj48L2Rpdj4gey8qIEFkZCBjdXN0b20gcGFnaW5hdGlvbiAqL31cbiAgICAgIDwvU3dpcGVyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyU2xpZGVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwiU3dpcGVyIiwiU3dpcGVyU2xpZGUiLCJBdXRvcGxheSIsIlBhZ2luYXRpb24iLCJtb3Rpb24iLCJDYXJTbGlkZXIiLCJjYXJzIiwicHJvZ3Jlc3NDaXJjbGUiLCJwcm9ncmVzc0NvbnRlbnQiLCJvbkF1dG9wbGF5VGltZUxlZnQiLCJzIiwidGltZSIsInByb2dyZXNzIiwiY3VycmVudCIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJ0ZXh0Q29udGVudCIsIk1hdGgiLCJjZWlsIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJtb2R1bGVzIiwicGFnaW5hdGlvbiIsImNsaWNrYWJsZSIsImVsIiwiYXV0b3BsYXkiLCJkZWxheSIsImRpc2FibGVPbkludGVyYWN0aW9uIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsImxvb3AiLCJicmVha3BvaW50cyIsIm1hcCIsImNhciIsImluZGV4IiwiaW1nIiwic3JjIiwiaW1hZ2VVcmwiLCJhbHQiLCJ0aXRsZSIsInAiLCJkZXNjcmlwdGlvbiIsImEiLCJocmVmIiwiZ2l0aHViVXJsIiwidGFyZ2V0IiwicmVsIiwiaSIsImRlbW9VcmwiLCJzbG90Iiwic3BhbiIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/ProjectCard.jsx\n"));

/***/ })

});