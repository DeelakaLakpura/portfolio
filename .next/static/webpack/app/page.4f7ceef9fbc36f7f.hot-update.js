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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/react */ \"(app-pages-browser)/./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper */ \"(app-pages-browser)/./node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css */ \"(app-pages-browser)/./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css/pagination */ \"(app-pages-browser)/./node_modules/swiper/modules/pagination/pagination.min.css\");\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/css/navigation */ \"(app-pages-browser)/./node_modules/swiper/modules/navigation/navigation.min.css\");\n/* harmony import */ var swiper_css_autoplay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/css/autoplay */ \"(app-pages-browser)/./node_modules/swiper/modules/autoplay/autoplay.min.css\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst CarSlider = (param)=>{\n    let { cars } = param;\n    _s();\n    const progressCircle = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const progressContent = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const onAutoplayTimeLeft = (s, time, progress)=>{\n        progressCircle.current.style.setProperty(\"--progress\", 1 - progress);\n        progressContent.current.textContent = \"\".concat(Math.ceil(time / 800), \"s\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-3xl font-bold text-green-600 mb-4 text-center\",\n                children: \"My Projects\"\n            }, void 0, false, {\n                fileName: \"/Users/deelaka/Desktop/portfolio/src/app/components/ProjectCard.jsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {\n                modules: [\n                    swiper__WEBPACK_IMPORTED_MODULE_3__.Autoplay,\n                    swiper__WEBPACK_IMPORTED_MODULE_3__.Pagination\n                ],\n                pagination: {\n                    clickable: true,\n                    dynamicBullets: true\n                },\n                autoplay: {\n                    delay: 3000,\n                    disableOnInteraction: false\n                },\n                onAutoplayTimeLeft: onAutoplayTimeLeft,\n                className: \"max-w-screen-lg mx-auto\",\n                slidesPerView: 3,\n                spaceBetween: 20,\n                loop: true,\n                breakpoints: {\n                    640: {\n                        slidesPerView: 1,\n                        spaceBetween: 10\n                    },\n                    768: {\n                        slidesPerView: 2,\n                        spaceBetween: 15\n                    },\n                    1024: {\n                        slidesPerView: 3,\n                        spaceBetween: 20\n                    }\n                },\n                children: [\n                    cars.map((car, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                            style: {\n                                \"--swiper-pagination-color\": \"#FFBA08\",\n                                \"--swiper-pagination-bullet-inactive-color\": \"#999999\",\n                                \"--swiper-pagination-bullet-inactive-opacity\": \"1\",\n                                \"--swiper-pagination-bullet-size\": \"16px\",\n                                \"--swiper-pagination-bullet-horizontal-gap\": \"6px\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n                                className: \"relative max-w-xs rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105\",\n                                initial: {\n                                    opacity: 0,\n                                    y: 50\n                                },\n                                animate: {\n                                    opacity: 1,\n                                    y: 0\n                                },\n                                transition: {\n                                    duration: 0.5,\n                                    delay: index * 0.1\n                                },\n                                whileHover: {\n                                    scale: 1.1,\n                                    rotate: 1\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        className: \"w-full h-64 object-cover\",\n                                        src: car.imageUrl,\n                                        alt: car.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/deelaka/Desktop/portfolio/src/app/components/ProjectCard.jsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n                                        className: \"absolute text-center inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white\",\n                                        initial: {\n                                            opacity: 0\n                                        },\n                                        whileHover: {\n                                            opacity: 1\n                                        },\n                                        transition: {\n                                            duration: 0.3\n                                        },\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.h2, {\n                                                className: \"text-xl font-bold mb-2\",\n                                                initial: {\n                                                    y: 20,\n                                                    opacity: 0\n                                                },\n                                                animate: {\n                                                    scale: 1,\n                                                    opacity: 1\n                                                },\n                                                transition: {\n                                                    duration: 0.3\n                                                },\n                                                children: car.title\n                                            }, void 0, false, {\n                                                fileName: \"/Users/deelaka/Desktop/portfolio/src/app/components/ProjectCard.jsx\",\n                                                lineNumber: 78,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.p, {\n                                                className: \"text-base mb-4 px-2 text-center\",\n                                                initial: {\n                                                    y: 20,\n                                                    opacity: 0\n                                                },\n                                                whileHover: {\n                                                    y: 0,\n                                                    opacity: 1\n                                                },\n                                                transition: {\n                                                    duration: 0.3\n                                                },\n                                                children: car.description\n                                            }, void 0, false, {\n                                                fileName: \"/Users/deelaka/Desktop/portfolio/src/app/components/ProjectCard.jsx\",\n                                                lineNumber: 86,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n                                                className: \"flex justify-center space-x-4\",\n                                                initial: {\n                                                    scale: 0.8,\n                                                    opacity: 0\n                                                },\n                                                animate: {\n                                                    scale: 1,\n                                                    opacity: 1\n                                                },\n                                                transition: {\n                                                    duration: 0.3\n                                                },\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                        href: car.githubUrl,\n                                                        target: \"_blank\",\n                                                        rel: \"noopener noreferrer\",\n                                                        className: \"transition-colors\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                            className: \"fab fa-github text-white hover:text-blue-400 text-2xl\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/deelaka/Desktop/portfolio/src/app/components/ProjectCard.jsx\",\n                                                            lineNumber: 106,\n                                                            columnNumber: 21\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/deelaka/Desktop/portfolio/src/app/components/ProjectCard.jsx\",\n                                                        lineNumber: 100,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                        href: car.demoUrl,\n                                                        target: \"_blank\",\n                                                        rel: \"noopener noreferrer\",\n                                                        className: \"transition-colors\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                            className: \"fas fa-external-link-alt text-white hover:text-green-400 text-2xl\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/deelaka/Desktop/portfolio/src/app/components/ProjectCard.jsx\",\n                                                            lineNumber: 114,\n                                                            columnNumber: 21\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/deelaka/Desktop/portfolio/src/app/components/ProjectCard.jsx\",\n                                                        lineNumber: 108,\n                                                        columnNumber: 19\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/deelaka/Desktop/portfolio/src/app/components/ProjectCard.jsx\",\n                                                lineNumber: 94,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/deelaka/Desktop/portfolio/src/app/components/ProjectCard.jsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/deelaka/Desktop/portfolio/src/app/components/ProjectCard.jsx\",\n                                lineNumber: 60,\n                                columnNumber: 13\n                            }, undefined)\n                        }, index, false, {\n                            fileName: \"/Users/deelaka/Desktop/portfolio/src/app/components/ProjectCard.jsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, undefined)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"autoplay-progress\",\n                        slot: \"container-end\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                ref: progressCircle\n                            }, void 0, false, {\n                                fileName: \"/Users/deelaka/Desktop/portfolio/src/app/components/ProjectCard.jsx\",\n                                lineNumber: 122,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                ref: progressContent\n                            }, void 0, false, {\n                                fileName: \"/Users/deelaka/Desktop/portfolio/src/app/components/ProjectCard.jsx\",\n                                lineNumber: 123,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/deelaka/Desktop/portfolio/src/app/components/ProjectCard.jsx\",\n                        lineNumber: 121,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/deelaka/Desktop/portfolio/src/app/components/ProjectCard.jsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/deelaka/Desktop/portfolio/src/app/components/ProjectCard.jsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CarSlider, \"8em5FzriZtKGsUEmeHBX0+TVJp0=\");\n_c = CarSlider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CarSlider);\nvar _c;\n$RefreshReg$(_c, \"CarSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Qcm9qZWN0Q2FyZC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFzQztBQUNhO0FBQ0w7QUFDMUI7QUFDVztBQUNBO0FBQ0Y7QUFDVTtBQUV2QyxNQUFNTyxZQUFZO1FBQUMsRUFBRUMsSUFBSSxFQUFFOztJQUN6QixNQUFNQyxpQkFBaUJSLDZDQUFNQSxDQUFDO0lBQzlCLE1BQU1TLGtCQUFrQlQsNkNBQU1BLENBQUM7SUFFL0IsTUFBTVUscUJBQXFCLENBQUNDLEdBQUdDLE1BQU1DO1FBQ25DTCxlQUFlTSxPQUFPLENBQUNDLEtBQUssQ0FBQ0MsV0FBVyxDQUFDLGNBQWMsSUFBSUg7UUFDM0RKLGdCQUFnQkssT0FBTyxDQUFDRyxXQUFXLEdBQUcsR0FBeUIsT0FBdEJDLEtBQUtDLElBQUksQ0FBQ1AsT0FBTyxNQUFLO0lBQ2pFO0lBRUEscUJBQ0UsOERBQUNRO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBcUQ7Ozs7OzswQkFDbkUsOERBQUNwQixnREFBTUE7Z0JBQ0xzQixTQUFTO29CQUFDcEIsNENBQVFBO29CQUFFQyw4Q0FBVUE7aUJBQUM7Z0JBQy9Cb0IsWUFBWTtvQkFDVkMsV0FBVztvQkFDWEMsZ0JBQWdCO2dCQUNsQjtnQkFDQUMsVUFBVTtvQkFDUkMsT0FBTztvQkFDUEMsc0JBQXNCO2dCQUN4QjtnQkFDQW5CLG9CQUFvQkE7Z0JBQ3BCVyxXQUFVO2dCQUNWUyxlQUFlO2dCQUNmQyxjQUFjO2dCQUNkQyxNQUFNO2dCQUNOQyxhQUFhO29CQUNYLEtBQUs7d0JBQ0hILGVBQWU7d0JBQ2ZDLGNBQWM7b0JBQ2hCO29CQUNBLEtBQUs7d0JBQ0hELGVBQWU7d0JBQ2ZDLGNBQWM7b0JBQ2hCO29CQUNBLE1BQU07d0JBQ0pELGVBQWU7d0JBQ2ZDLGNBQWM7b0JBQ2hCO2dCQUNGOztvQkFFQ3hCLEtBQUsyQixHQUFHLENBQUMsQ0FBQ0MsS0FBS0Msc0JBQ2QsOERBQUNsQyxxREFBV0E7NEJBQWFhLE9BQU87Z0NBQzlCLDZCQUE2QjtnQ0FDN0IsNkNBQTZDO2dDQUM3QywrQ0FBK0M7Z0NBQy9DLG1DQUFtQztnQ0FDbkMsNkNBQTZDOzRCQUMvQztzQ0FDRSw0RUFBQ1YsaURBQU1BLENBQUNlLEdBQUc7Z0NBRVRDLFdBQVU7Z0NBQ1ZnQixTQUFTO29DQUFFQyxTQUFTO29DQUFHQyxHQUFHO2dDQUFHO2dDQUM3QkMsU0FBUztvQ0FBRUYsU0FBUztvQ0FBR0MsR0FBRztnQ0FBRTtnQ0FDNUJFLFlBQVk7b0NBQUVDLFVBQVU7b0NBQUtkLE9BQU9RLFFBQVE7Z0NBQUk7Z0NBQ2hETyxZQUFZO29DQUFFQyxPQUFPO29DQUFLQyxRQUFRO2dDQUFFOztrREFHcEMsOERBQUNDO3dDQUFJekIsV0FBVTt3Q0FBMkIwQixLQUFLWixJQUFJYSxRQUFRO3dDQUFFQyxLQUFLZCxJQUFJZSxLQUFLOzs7Ozs7a0RBRzNFLDhEQUFDN0MsaURBQU1BLENBQUNlLEdBQUc7d0NBQ1RDLFdBQVU7d0NBQ1ZnQixTQUFTOzRDQUFFQyxTQUFTO3dDQUFFO3dDQUN0QkssWUFBWTs0Q0FBRUwsU0FBUzt3Q0FBRTt3Q0FDekJHLFlBQVk7NENBQUVDLFVBQVU7d0NBQUk7OzBEQUU1Qiw4REFBQ3JDLGlEQUFNQSxDQUFDaUIsRUFBRTtnREFDUkQsV0FBVTtnREFDVmdCLFNBQVM7b0RBQUVFLEdBQUc7b0RBQUlELFNBQVM7Z0RBQUU7Z0RBQzdCRSxTQUFTO29EQUFFSSxPQUFPO29EQUFHTixTQUFTO2dEQUFFO2dEQUNoQ0csWUFBWTtvREFBRUMsVUFBVTtnREFBSTswREFFM0JQLElBQUllLEtBQUs7Ozs7OzswREFFWiw4REFBQzdDLGlEQUFNQSxDQUFDOEMsQ0FBQztnREFDUDlCLFdBQVU7Z0RBQ1ZnQixTQUFTO29EQUFFRSxHQUFHO29EQUFJRCxTQUFTO2dEQUFFO2dEQUM3QkssWUFBWTtvREFBRUosR0FBRztvREFBR0QsU0FBUztnREFBRTtnREFDL0JHLFlBQVk7b0RBQUVDLFVBQVU7Z0RBQUk7MERBRTNCUCxJQUFJaUIsV0FBVzs7Ozs7OzBEQUVsQiw4REFBQy9DLGlEQUFNQSxDQUFDZSxHQUFHO2dEQUNUQyxXQUFVO2dEQUNWZ0IsU0FBUztvREFBRU8sT0FBTztvREFBS04sU0FBUztnREFBRTtnREFDbENFLFNBQVM7b0RBQUVJLE9BQU87b0RBQUdOLFNBQVM7Z0RBQUU7Z0RBQ2hDRyxZQUFZO29EQUFFQyxVQUFVO2dEQUFJOztrRUFFNUIsOERBQUNXO3dEQUNDQyxNQUFNbkIsSUFBSW9CLFNBQVM7d0RBQ25CQyxRQUFPO3dEQUNQQyxLQUFJO3dEQUNKcEMsV0FBVTtrRUFFViw0RUFBQ3FDOzREQUFFckMsV0FBVTs7Ozs7Ozs7Ozs7a0VBRWYsOERBQUNnQzt3REFDQ0MsTUFBTW5CLElBQUl3QixPQUFPO3dEQUNqQkgsUUFBTzt3REFDUEMsS0FBSTt3REFDSnBDLFdBQVU7a0VBRVYsNEVBQUNxQzs0REFBRXJDLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQTdETGU7Ozs7O2tDQW9FcEIsOERBQUNoQjt3QkFBSUMsV0FBVTt3QkFBb0J1QyxNQUFLOzswQ0FDdEMsOERBQUNDO2dDQUFLQyxLQUFLdEQ7Ozs7OzswQ0FDWCw4REFBQ3FEO2dDQUFLQyxLQUFLckQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtyQjtHQXRITUg7S0FBQUE7QUF3SE4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL1Byb2plY3RDYXJkLmpzeD82MWNjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tIFwic3dpcGVyL3JlYWN0XCI7XG5pbXBvcnQgeyBBdXRvcGxheSwgUGFnaW5hdGlvbiB9IGZyb20gXCJzd2lwZXJcIjtcbmltcG9ydCBcInN3aXBlci9jc3NcIjtcbmltcG9ydCBcInN3aXBlci9jc3MvcGFnaW5hdGlvblwiO1xuaW1wb3J0IFwic3dpcGVyL2Nzcy9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgXCJzd2lwZXIvY3NzL2F1dG9wbGF5XCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5jb25zdCBDYXJTbGlkZXIgPSAoeyBjYXJzIH0pID0+IHtcbiAgY29uc3QgcHJvZ3Jlc3NDaXJjbGUgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IHByb2dyZXNzQ29udGVudCA9IHVzZVJlZihudWxsKTtcblxuICBjb25zdCBvbkF1dG9wbGF5VGltZUxlZnQgPSAocywgdGltZSwgcHJvZ3Jlc3MpID0+IHtcbiAgICBwcm9ncmVzc0NpcmNsZS5jdXJyZW50LnN0eWxlLnNldFByb3BlcnR5KFwiLS1wcm9ncmVzc1wiLCAxIC0gcHJvZ3Jlc3MpO1xuICAgIHByb2dyZXNzQ29udGVudC5jdXJyZW50LnRleHRDb250ZW50ID0gYCR7TWF0aC5jZWlsKHRpbWUgLyA4MDApfXNgO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwLTRcIj5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1ncmVlbi02MDAgbWItNCB0ZXh0LWNlbnRlclwiPk15IFByb2plY3RzPC9oMj5cbiAgICAgIDxTd2lwZXJcbiAgICAgICAgbW9kdWxlcz17W0F1dG9wbGF5LCBQYWdpbmF0aW9uXX1cbiAgICAgICAgcGFnaW5hdGlvbj17e1xuICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICBkeW5hbWljQnVsbGV0czogdHJ1ZSxcbiAgICAgICAgfX1cbiAgICAgICAgYXV0b3BsYXk9e3tcbiAgICAgICAgICBkZWxheTogMzAwMCxcbiAgICAgICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXG4gICAgICAgIH19XG4gICAgICAgIG9uQXV0b3BsYXlUaW1lTGVmdD17b25BdXRvcGxheVRpbWVMZWZ0fVxuICAgICAgICBjbGFzc05hbWU9XCJtYXgtdy1zY3JlZW4tbGcgbXgtYXV0b1wiXG4gICAgICAgIHNsaWRlc1BlclZpZXc9ezN9XG4gICAgICAgIHNwYWNlQmV0d2Vlbj17MjB9XG4gICAgICAgIGxvb3A9e3RydWV9XG4gICAgICAgIGJyZWFrcG9pbnRzPXt7XG4gICAgICAgICAgNjQwOiB7XG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIDc2ODoge1xuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMTUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICAxMDI0OiB7XG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcbiAgICAgICAgICB9LFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7Y2Fycy5tYXAoKGNhciwgaW5kZXgpID0+IChcbiAgICAgICAgICA8U3dpcGVyU2xpZGUga2V5PXtpbmRleH0gc3R5bGU9e3tcbiAgICAgICAgICAgIFwiLS1zd2lwZXItcGFnaW5hdGlvbi1jb2xvclwiOiBcIiNGRkJBMDhcIixcbiAgICAgICAgICAgIFwiLS1zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtaW5hY3RpdmUtY29sb3JcIjogXCIjOTk5OTk5XCIsXG4gICAgICAgICAgICBcIi0tc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWluYWN0aXZlLW9wYWNpdHlcIjogXCIxXCIsXG4gICAgICAgICAgICBcIi0tc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LXNpemVcIjogXCIxNnB4XCIsXG4gICAgICAgICAgICBcIi0tc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWhvcml6b250YWwtZ2FwXCI6IFwiNnB4XCJcbiAgICAgICAgICB9fT5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIG1heC13LXhzIHJvdW5kZWQtbGcgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvdy1sZyB0cmFuc2l0aW9uLXRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMDVcIlxuICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDUwIH19XG4gICAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjUsIGRlbGF5OiBpbmRleCAqIDAuMSB9fVxuICAgICAgICAgICAgICB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjEsIHJvdGF0ZTogMSB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7LyogSW1hZ2UgKi99XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidy1mdWxsIGgtNjQgb2JqZWN0LWNvdmVyXCIgc3JjPXtjYXIuaW1hZ2VVcmx9IGFsdD17Y2FyLnRpdGxlfSAvPlxuXG4gICAgICAgICAgICAgIHsvKiBPdmVybGF5IGZvciBEZXRhaWxzICovfVxuICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRleHQtY2VudGVyIGluc2V0LTAgYmctYmxhY2sgYmctb3BhY2l0eS02MCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICAgICAgICB3aGlsZUhvdmVyPXt7IG9wYWNpdHk6IDEgfX1cbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjMgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxtb3Rpb24uaDJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIG1iLTJcIlxuICAgICAgICAgICAgICAgICAgaW5pdGlhbD17eyB5OiAyMCwgb3BhY2l0eTogMCB9fVxuICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17eyBzY2FsZTogMSwgb3BhY2l0eTogMSB9fVxuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC4zIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2Nhci50aXRsZX1cbiAgICAgICAgICAgICAgICA8L21vdGlvbi5oMj5cbiAgICAgICAgICAgICAgICA8bW90aW9uLnBcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmFzZSBtYi00IHB4LTIgdGV4dC1jZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgaW5pdGlhbD17eyB5OiAyMCwgb3BhY2l0eTogMCB9fVxuICAgICAgICAgICAgICAgICAgd2hpbGVIb3Zlcj17eyB5OiAwLCBvcGFjaXR5OiAxIH19XG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjMgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7Y2FyLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIDwvbW90aW9uLnA+XG4gICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgc3BhY2UteC00XCJcbiAgICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgc2NhbGU6IDAuOCwgb3BhY2l0eTogMCB9fVxuICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17eyBzY2FsZTogMSwgb3BhY2l0eTogMSB9fVxuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC4zIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17Y2FyLmdpdGh1YlVybH1cbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWdpdGh1YiB0ZXh0LXdoaXRlIGhvdmVyOnRleHQtYmx1ZS00MDAgdGV4dC0yeGxcIj48L2k+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBocmVmPXtjYXIuZGVtb1VybH1cbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWV4dGVybmFsLWxpbmstYWx0IHRleHQtd2hpdGUgaG92ZXI6dGV4dC1ncmVlbi00MDAgdGV4dC0yeGxcIj48L2k+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgPC9Td2lwZXJTbGlkZT5cbiAgICAgICAgKSl9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0b3BsYXktcHJvZ3Jlc3NcIiBzbG90PVwiY29udGFpbmVyLWVuZFwiPlxuICAgICAgICAgIDxzcGFuIHJlZj17cHJvZ3Jlc3NDaXJjbGV9Pjwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiByZWY9e3Byb2dyZXNzQ29udGVudH0+PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU3dpcGVyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyU2xpZGVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwiU3dpcGVyIiwiU3dpcGVyU2xpZGUiLCJBdXRvcGxheSIsIlBhZ2luYXRpb24iLCJtb3Rpb24iLCJDYXJTbGlkZXIiLCJjYXJzIiwicHJvZ3Jlc3NDaXJjbGUiLCJwcm9ncmVzc0NvbnRlbnQiLCJvbkF1dG9wbGF5VGltZUxlZnQiLCJzIiwidGltZSIsInByb2dyZXNzIiwiY3VycmVudCIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJ0ZXh0Q29udGVudCIsIk1hdGgiLCJjZWlsIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJtb2R1bGVzIiwicGFnaW5hdGlvbiIsImNsaWNrYWJsZSIsImR5bmFtaWNCdWxsZXRzIiwiYXV0b3BsYXkiLCJkZWxheSIsImRpc2FibGVPbkludGVyYWN0aW9uIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsImxvb3AiLCJicmVha3BvaW50cyIsIm1hcCIsImNhciIsImluZGV4IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsIndoaWxlSG92ZXIiLCJzY2FsZSIsInJvdGF0ZSIsImltZyIsInNyYyIsImltYWdlVXJsIiwiYWx0IiwidGl0bGUiLCJwIiwiZGVzY3JpcHRpb24iLCJhIiwiaHJlZiIsImdpdGh1YlVybCIsInRhcmdldCIsInJlbCIsImkiLCJkZW1vVXJsIiwic2xvdCIsInNwYW4iLCJyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/ProjectCard.jsx\n"));

/***/ })

});