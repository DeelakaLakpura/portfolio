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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/react */ \"(app-pages-browser)/./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper */ \"(app-pages-browser)/./node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css */ \"(app-pages-browser)/./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css/pagination */ \"(app-pages-browser)/./node_modules/swiper/modules/pagination/pagination.min.css\");\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/css/navigation */ \"(app-pages-browser)/./node_modules/swiper/modules/navigation/navigation.min.css\");\n/* harmony import */ var swiper_css_autoplay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/css/autoplay */ \"(app-pages-browser)/./node_modules/swiper/modules/autoplay/autoplay.min.css\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst CarSlider = (param)=>{\n    let { cars } = param;\n    _s();\n    const progressCircle = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const progressContent = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const onAutoplayTimeLeft = (s, time, progress)=>{\n        progressCircle.current.style.setProperty(\"--progress\", 1 - progress);\n        progressContent.current.textContent = \"\".concat(Math.ceil(time / 800), \"s\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-3xl font-bold text-green-600 mb-4 text-center\",\n                children: \"My Projects\"\n            }, void 0, false, {\n                fileName: \"/Users/deelaka/Desktop/portfolio/src/app/components/ProjectCard.jsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {\n                modules: [\n                    swiper__WEBPACK_IMPORTED_MODULE_3__.Autoplay,\n                    swiper__WEBPACK_IMPORTED_MODULE_3__.Pagination\n                ],\n                pagination: {\n                    clickable: true,\n                    dynamicBullets: true\n                },\n                autoplay: {\n                    delay: 3000,\n                    disableOnInteraction: false\n                },\n                onAutoplayTimeLeft: onAutoplayTimeLeft,\n                className: \"max-w-screen-lg mx-auto\",\n                slidesPerView: 3,\n                spaceBetween: 20,\n                loop: true,\n                breakpoints: {\n                    640: {\n                        slidesPerView: 1,\n                        spaceBetween: 10\n                    },\n                    768: {\n                        slidesPerView: 2,\n                        spaceBetween: 15\n                    },\n                    1024: {\n                        slidesPerView: 3,\n                        spaceBetween: 20\n                    }\n                },\n                children: [\n                    cars.map((car, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                            s: true,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n                                className: \"relative max-w-xs rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105\",\n                                initial: {\n                                    opacity: 0,\n                                    y: 50\n                                },\n                                animate: {\n                                    opacity: 1,\n                                    y: 0\n                                },\n                                transition: {\n                                    duration: 0.5,\n                                    delay: index * 0.1\n                                },\n                                whileHover: {\n                                    scale: 1.1,\n                                    rotate: 1\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        className: \"w-full h-64 object-cover\",\n                                        src: car.imageUrl,\n                                        alt: car.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/deelaka/Desktop/portfolio/src/app/components/ProjectCard.jsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n                                        className: \"absolute text-center inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white\",\n                                        initial: {\n                                            opacity: 0\n                                        },\n                                        whileHover: {\n                                            opacity: 1\n                                        },\n                                        transition: {\n                                            duration: 0.3\n                                        },\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.h2, {\n                                                className: \"text-xl font-bold mb-2\",\n                                                initial: {\n                                                    y: 20,\n                                                    opacity: 0\n                                                },\n                                                animate: {\n                                                    scale: 1,\n                                                    opacity: 1\n                                                },\n                                                transition: {\n                                                    duration: 0.3\n                                                },\n                                                children: car.title\n                                            }, void 0, false, {\n                                                fileName: \"/Users/deelaka/Desktop/portfolio/src/app/components/ProjectCard.jsx\",\n                                                lineNumber: 72,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.p, {\n                                                className: \"text-base mb-4 px-2 text-center\",\n                                                initial: {\n                                                    y: 20,\n                                                    opacity: 0\n                                                },\n                                                whileHover: {\n                                                    y: 0,\n                                                    opacity: 1\n                                                },\n                                                transition: {\n                                                    duration: 0.3\n                                                },\n                                                children: car.description\n                                            }, void 0, false, {\n                                                fileName: \"/Users/deelaka/Desktop/portfolio/src/app/components/ProjectCard.jsx\",\n                                                lineNumber: 80,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n                                                className: \"flex justify-center space-x-4\",\n                                                initial: {\n                                                    scale: 0.8,\n                                                    opacity: 0\n                                                },\n                                                animate: {\n                                                    scale: 1,\n                                                    opacity: 1\n                                                },\n                                                transition: {\n                                                    duration: 0.3\n                                                },\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                        href: car.githubUrl,\n                                                        target: \"_blank\",\n                                                        rel: \"noopener noreferrer\",\n                                                        className: \"transition-colors\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                            className: \"fab fa-github text-white hover:text-blue-400 text-2xl\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/deelaka/Desktop/portfolio/src/app/components/ProjectCard.jsx\",\n                                                            lineNumber: 100,\n                                                            columnNumber: 21\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/deelaka/Desktop/portfolio/src/app/components/ProjectCard.jsx\",\n                                                        lineNumber: 94,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                        href: car.demoUrl,\n                                                        target: \"_blank\",\n                                                        rel: \"noopener noreferrer\",\n                                                        className: \"transition-colors\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                            className: \"fas fa-external-link-alt text-white hover:text-green-400 text-2xl\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/deelaka/Desktop/portfolio/src/app/components/ProjectCard.jsx\",\n                                                            lineNumber: 108,\n                                                            columnNumber: 21\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/deelaka/Desktop/portfolio/src/app/components/ProjectCard.jsx\",\n                                                        lineNumber: 102,\n                                                        columnNumber: 19\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/deelaka/Desktop/portfolio/src/app/components/ProjectCard.jsx\",\n                                                lineNumber: 88,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/deelaka/Desktop/portfolio/src/app/components/ProjectCard.jsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/deelaka/Desktop/portfolio/src/app/components/ProjectCard.jsx\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, undefined)\n                        }, index, false, {\n                            fileName: \"/Users/deelaka/Desktop/portfolio/src/app/components/ProjectCard.jsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, undefined)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"autoplay-progress\",\n                        slot: \"container-end\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                ref: progressCircle\n                            }, void 0, false, {\n                                fileName: \"/Users/deelaka/Desktop/portfolio/src/app/components/ProjectCard.jsx\",\n                                lineNumber: 116,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                ref: progressContent\n                            }, void 0, false, {\n                                fileName: \"/Users/deelaka/Desktop/portfolio/src/app/components/ProjectCard.jsx\",\n                                lineNumber: 117,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/deelaka/Desktop/portfolio/src/app/components/ProjectCard.jsx\",\n                        lineNumber: 115,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/deelaka/Desktop/portfolio/src/app/components/ProjectCard.jsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/deelaka/Desktop/portfolio/src/app/components/ProjectCard.jsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CarSlider, \"8em5FzriZtKGsUEmeHBX0+TVJp0=\");\n_c = CarSlider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CarSlider);\nvar _c;\n$RefreshReg$(_c, \"CarSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Qcm9qZWN0Q2FyZC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFzQztBQUNhO0FBQ0w7QUFDMUI7QUFDVztBQUNBO0FBQ0Y7QUFDVTtBQUV2QyxNQUFNTyxZQUFZO1FBQUMsRUFBRUMsSUFBSSxFQUFFOztJQUN6QixNQUFNQyxpQkFBaUJSLDZDQUFNQSxDQUFDO0lBQzlCLE1BQU1TLGtCQUFrQlQsNkNBQU1BLENBQUM7SUFFL0IsTUFBTVUscUJBQXFCLENBQUNDLEdBQUdDLE1BQU1DO1FBQ25DTCxlQUFlTSxPQUFPLENBQUNDLEtBQUssQ0FBQ0MsV0FBVyxDQUFDLGNBQWMsSUFBSUg7UUFDM0RKLGdCQUFnQkssT0FBTyxDQUFDRyxXQUFXLEdBQUcsR0FBeUIsT0FBdEJDLEtBQUtDLElBQUksQ0FBQ1AsT0FBTyxNQUFLO0lBQ2pFO0lBRUEscUJBQ0UsOERBQUNRO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBcUQ7Ozs7OzswQkFDbkUsOERBQUNwQixnREFBTUE7Z0JBQ0xzQixTQUFTO29CQUFDcEIsNENBQVFBO29CQUFFQyw4Q0FBVUE7aUJBQUM7Z0JBQy9Cb0IsWUFBWTtvQkFDVkMsV0FBVztvQkFDWEMsZ0JBQWdCO2dCQUNsQjtnQkFDQUMsVUFBVTtvQkFDUkMsT0FBTztvQkFDUEMsc0JBQXNCO2dCQUN4QjtnQkFDQW5CLG9CQUFvQkE7Z0JBQ3BCVyxXQUFVO2dCQUNWUyxlQUFlO2dCQUNmQyxjQUFjO2dCQUNkQyxNQUFNO2dCQUNOQyxhQUFhO29CQUNYLEtBQUs7d0JBQ0hILGVBQWU7d0JBQ2ZDLGNBQWM7b0JBQ2hCO29CQUNBLEtBQUs7d0JBQ0hELGVBQWU7d0JBQ2ZDLGNBQWM7b0JBQ2hCO29CQUNBLE1BQU07d0JBQ0pELGVBQWU7d0JBQ2ZDLGNBQWM7b0JBQ2hCO2dCQUNGOztvQkFFQ3hCLEtBQUsyQixHQUFHLENBQUMsQ0FBQ0MsS0FBS0Msc0JBQ2QsOERBQUNsQyxxREFBV0E7NEJBQWFTLENBQUM7c0NBQ3hCLDRFQUFDTixpREFBTUEsQ0FBQ2UsR0FBRztnQ0FFVEMsV0FBVTtnQ0FDVmdCLFNBQVM7b0NBQUVDLFNBQVM7b0NBQUdDLEdBQUc7Z0NBQUc7Z0NBQzdCQyxTQUFTO29DQUFFRixTQUFTO29DQUFHQyxHQUFHO2dDQUFFO2dDQUM1QkUsWUFBWTtvQ0FBRUMsVUFBVTtvQ0FBS2QsT0FBT1EsUUFBUTtnQ0FBSTtnQ0FDaERPLFlBQVk7b0NBQUVDLE9BQU87b0NBQUtDLFFBQVE7Z0NBQUU7O2tEQUdwQyw4REFBQ0M7d0NBQUl6QixXQUFVO3dDQUEyQjBCLEtBQUtaLElBQUlhLFFBQVE7d0NBQUVDLEtBQUtkLElBQUllLEtBQUs7Ozs7OztrREFHM0UsOERBQUM3QyxpREFBTUEsQ0FBQ2UsR0FBRzt3Q0FDVEMsV0FBVTt3Q0FDVmdCLFNBQVM7NENBQUVDLFNBQVM7d0NBQUU7d0NBQ3RCSyxZQUFZOzRDQUFFTCxTQUFTO3dDQUFFO3dDQUN6QkcsWUFBWTs0Q0FBRUMsVUFBVTt3Q0FBSTs7MERBRTVCLDhEQUFDckMsaURBQU1BLENBQUNpQixFQUFFO2dEQUNSRCxXQUFVO2dEQUNWZ0IsU0FBUztvREFBRUUsR0FBRztvREFBSUQsU0FBUztnREFBRTtnREFDN0JFLFNBQVM7b0RBQUVJLE9BQU87b0RBQUdOLFNBQVM7Z0RBQUU7Z0RBQ2hDRyxZQUFZO29EQUFFQyxVQUFVO2dEQUFJOzBEQUUzQlAsSUFBSWUsS0FBSzs7Ozs7OzBEQUVaLDhEQUFDN0MsaURBQU1BLENBQUM4QyxDQUFDO2dEQUNQOUIsV0FBVTtnREFDVmdCLFNBQVM7b0RBQUVFLEdBQUc7b0RBQUlELFNBQVM7Z0RBQUU7Z0RBQzdCSyxZQUFZO29EQUFFSixHQUFHO29EQUFHRCxTQUFTO2dEQUFFO2dEQUMvQkcsWUFBWTtvREFBRUMsVUFBVTtnREFBSTswREFFM0JQLElBQUlpQixXQUFXOzs7Ozs7MERBRWxCLDhEQUFDL0MsaURBQU1BLENBQUNlLEdBQUc7Z0RBQ1RDLFdBQVU7Z0RBQ1ZnQixTQUFTO29EQUFFTyxPQUFPO29EQUFLTixTQUFTO2dEQUFFO2dEQUNsQ0UsU0FBUztvREFBRUksT0FBTztvREFBR04sU0FBUztnREFBRTtnREFDaENHLFlBQVk7b0RBQUVDLFVBQVU7Z0RBQUk7O2tFQUU1Qiw4REFBQ1c7d0RBQ0NDLE1BQU1uQixJQUFJb0IsU0FBUzt3REFDbkJDLFFBQU87d0RBQ1BDLEtBQUk7d0RBQ0pwQyxXQUFVO2tFQUVWLDRFQUFDcUM7NERBQUVyQyxXQUFVOzs7Ozs7Ozs7OztrRUFFZiw4REFBQ2dDO3dEQUNDQyxNQUFNbkIsSUFBSXdCLE9BQU87d0RBQ2pCSCxRQUFPO3dEQUNQQyxLQUFJO3dEQUNKcEMsV0FBVTtrRUFFViw0RUFBQ3FDOzREQUFFckMsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MkJBdkRMZTs7Ozs7a0NBOERwQiw4REFBQ2hCO3dCQUFJQyxXQUFVO3dCQUFvQnVDLE1BQUs7OzBDQUN0Qyw4REFBQ0M7Z0NBQUtDLEtBQUt0RDs7Ozs7OzBDQUNYLDhEQUFDcUQ7Z0NBQUtDLEtBQUtyRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3JCO0dBaEhNSDtLQUFBQTtBQWtITiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvUHJvamVjdENhcmQuanN4PzYxY2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gXCJzd2lwZXIvcmVhY3RcIjtcbmltcG9ydCB7IEF1dG9wbGF5LCBQYWdpbmF0aW9uIH0gZnJvbSBcInN3aXBlclwiO1xuaW1wb3J0IFwic3dpcGVyL2Nzc1wiO1xuaW1wb3J0IFwic3dpcGVyL2Nzcy9wYWdpbmF0aW9uXCI7XG5pbXBvcnQgXCJzd2lwZXIvY3NzL25hdmlnYXRpb25cIjtcbmltcG9ydCBcInN3aXBlci9jc3MvYXV0b3BsYXlcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmNvbnN0IENhclNsaWRlciA9ICh7IGNhcnMgfSkgPT4ge1xuICBjb25zdCBwcm9ncmVzc0NpcmNsZSA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgcHJvZ3Jlc3NDb250ZW50ID0gdXNlUmVmKG51bGwpO1xuXG4gIGNvbnN0IG9uQXV0b3BsYXlUaW1lTGVmdCA9IChzLCB0aW1lLCBwcm9ncmVzcykgPT4ge1xuICAgIHByb2dyZXNzQ2lyY2xlLmN1cnJlbnQuc3R5bGUuc2V0UHJvcGVydHkoXCItLXByb2dyZXNzXCIsIDEgLSBwcm9ncmVzcyk7XG4gICAgcHJvZ3Jlc3NDb250ZW50LmN1cnJlbnQudGV4dENvbnRlbnQgPSBgJHtNYXRoLmNlaWwodGltZSAvIDgwMCl9c2A7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNFwiPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LWdyZWVuLTYwMCBtYi00IHRleHQtY2VudGVyXCI+TXkgUHJvamVjdHM8L2gyPlxuICAgICAgPFN3aXBlclxuICAgICAgICBtb2R1bGVzPXtbQXV0b3BsYXksIFBhZ2luYXRpb25dfVxuICAgICAgICBwYWdpbmF0aW9uPXt7XG4gICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgIGR5bmFtaWNCdWxsZXRzOiB0cnVlLFxuICAgICAgICB9fVxuICAgICAgICBhdXRvcGxheT17e1xuICAgICAgICAgIGRlbGF5OiAzMDAwLFxuICAgICAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcbiAgICAgICAgfX1cbiAgICAgICAgb25BdXRvcGxheVRpbWVMZWZ0PXtvbkF1dG9wbGF5VGltZUxlZnR9XG4gICAgICAgIGNsYXNzTmFtZT1cIm1heC13LXNjcmVlbi1sZyBteC1hdXRvXCJcbiAgICAgICAgc2xpZGVzUGVyVmlldz17M31cbiAgICAgICAgc3BhY2VCZXR3ZWVuPXsyMH1cbiAgICAgICAgbG9vcD17dHJ1ZX1cbiAgICAgICAgYnJlYWtwb2ludHM9e3tcbiAgICAgICAgICA2NDA6IHtcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IDEwLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgNzY4OiB7XG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxNSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIDEwMjQ6IHtcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxuICAgICAgICAgIH0sXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtjYXJzLm1hcCgoY2FyLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxTd2lwZXJTbGlkZSBrZXk9e2luZGV4fSBzPlxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICBcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgbWF4LXcteHMgcm91bmRlZC1sZyBvdmVyZmxvdy1oaWRkZW4gc2hhZG93LWxnIHRyYW5zaXRpb24tdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTEwNVwiXG4gICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogNTAgfX1cbiAgICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSwgZGVsYXk6IGluZGV4ICogMC4xIH19XG4gICAgICAgICAgICAgIHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMSwgcm90YXRlOiAxIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHsvKiBJbWFnZSAqL31cbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3LWZ1bGwgaC02NCBvYmplY3QtY292ZXJcIiBzcmM9e2Nhci5pbWFnZVVybH0gYWx0PXtjYXIudGl0bGV9IC8+XG5cbiAgICAgICAgICAgICAgey8qIE92ZXJsYXkgZm9yIERldGFpbHMgKi99XG4gICAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdGV4dC1jZW50ZXIgaW5zZXQtMCBiZy1ibGFjayBiZy1vcGFjaXR5LTYwIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxuICAgICAgICAgICAgICAgIHdoaWxlSG92ZXI9e3sgb3BhY2l0eTogMSB9fVxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMyB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPG1vdGlvbi5oMlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgbWItMlwiXG4gICAgICAgICAgICAgICAgICBpbml0aWFsPXt7IHk6IDIwLCBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgICAgICAgICBhbmltYXRlPXt7IHNjYWxlOiAxLCBvcGFjaXR5OiAxIH19XG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjMgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7Y2FyLnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmgyPlxuICAgICAgICAgICAgICAgIDxtb3Rpb24ucFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIG1iLTQgcHgtMiB0ZXh0LWNlbnRlclwiXG4gICAgICAgICAgICAgICAgICBpbml0aWFsPXt7IHk6IDIwLCBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgICAgICAgICB3aGlsZUhvdmVyPXt7IHk6IDAsIG9wYWNpdHk6IDEgfX1cbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMyB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtjYXIuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgPC9tb3Rpb24ucD5cbiAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBzcGFjZS14LTRcIlxuICAgICAgICAgICAgICAgICAgaW5pdGlhbD17eyBzY2FsZTogMC44LCBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgICAgICAgICBhbmltYXRlPXt7IHNjYWxlOiAxLCBvcGFjaXR5OiAxIH19XG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjMgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBocmVmPXtjYXIuZ2l0aHViVXJsfVxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtZ2l0aHViIHRleHQtd2hpdGUgaG92ZXI6dGV4dC1ibHVlLTQwMCB0ZXh0LTJ4bFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e2Nhci5kZW1vVXJsfVxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZXh0ZXJuYWwtbGluay1hbHQgdGV4dC13aGl0ZSBob3Zlcjp0ZXh0LWdyZWVuLTQwMCB0ZXh0LTJ4bFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICA8L1N3aXBlclNsaWRlPlxuICAgICAgICApKX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRvcGxheS1wcm9ncmVzc1wiIHNsb3Q9XCJjb250YWluZXItZW5kXCI+XG4gICAgICAgICAgPHNwYW4gcmVmPXtwcm9ncmVzc0NpcmNsZX0+PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIHJlZj17cHJvZ3Jlc3NDb250ZW50fT48L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Td2lwZXI+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJTbGlkZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJTd2lwZXIiLCJTd2lwZXJTbGlkZSIsIkF1dG9wbGF5IiwiUGFnaW5hdGlvbiIsIm1vdGlvbiIsIkNhclNsaWRlciIsImNhcnMiLCJwcm9ncmVzc0NpcmNsZSIsInByb2dyZXNzQ29udGVudCIsIm9uQXV0b3BsYXlUaW1lTGVmdCIsInMiLCJ0aW1lIiwicHJvZ3Jlc3MiLCJjdXJyZW50Iiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsInRleHRDb250ZW50IiwiTWF0aCIsImNlaWwiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsIm1vZHVsZXMiLCJwYWdpbmF0aW9uIiwiY2xpY2thYmxlIiwiZHluYW1pY0J1bGxldHMiLCJhdXRvcGxheSIsImRlbGF5IiwiZGlzYWJsZU9uSW50ZXJhY3Rpb24iLCJzbGlkZXNQZXJWaWV3Iiwic3BhY2VCZXR3ZWVuIiwibG9vcCIsImJyZWFrcG9pbnRzIiwibWFwIiwiY2FyIiwiaW5kZXgiLCJpbml0aWFsIiwib3BhY2l0eSIsInkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwid2hpbGVIb3ZlciIsInNjYWxlIiwicm90YXRlIiwiaW1nIiwic3JjIiwiaW1hZ2VVcmwiLCJhbHQiLCJ0aXRsZSIsInAiLCJkZXNjcmlwdGlvbiIsImEiLCJocmVmIiwiZ2l0aHViVXJsIiwidGFyZ2V0IiwicmVsIiwiaSIsImRlbW9VcmwiLCJzbG90Iiwic3BhbiIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/ProjectCard.jsx\n"));

/***/ })

});