"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-client)/./components/NavBar/NavBar.jsx":
/*!**************************************!*\
  !*** ./components/NavBar/NavBar.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/react */ \"(app-client)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Nav = ()=>{\n    _s();\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession)();\n    const [providers, setProviders] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [toggleDropdown, setToggleDropdown] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const setUpProviders = async ()=>{\n            const response = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.getProviders)();\n            setProviders(response);\n        };\n        setUpProviders();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"flex-between w-full mb-16 pt-3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/\",\n                className: \"flex gap-2 flex-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: \"/assets/mahil\",\n                        alt: \"logo\",\n                        width: 30,\n                        height: 30,\n                        className: \"object-contain\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\myProject\\\\frontEnd\\\\my-app\\\\components\\\\NavBar\\\\NavBar.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"logo_text\",\n                        children: \"Promptopia\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\myProject\\\\frontEnd\\\\my-app\\\\components\\\\NavBar\\\\NavBar.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\myProject\\\\frontEnd\\\\my-app\\\\components\\\\NavBar\\\\NavBar.jsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sm:flex hidden\",\n                children: (session === null || session === void 0 ? void 0 : session.user) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex gap-3 md:gap-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/create-prompt\",\n                            className: \"black_btn\",\n                            children: \"Create Post\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\myProject\\\\frontEnd\\\\my-app\\\\components\\\\NavBar\\\\NavBar.jsx\",\n                            lineNumber: 42,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            onClick: next_auth_react__WEBPACK_IMPORTED_MODULE_4__.signOut,\n                            className: \"outline_btn\",\n                            children: \"Sign Out\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\myProject\\\\frontEnd\\\\my-app\\\\components\\\\NavBar\\\\NavBar.jsx\",\n                            lineNumber: 46,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/profile\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: session === null || session === void 0 ? void 0 : session.user.image,\n                                width: 37,\n                                height: 37,\n                                className: \"rounded-full\",\n                                alt: \"profile\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\myProject\\\\frontEnd\\\\my-app\\\\components\\\\NavBar\\\\NavBar.jsx\",\n                                lineNumber: 51,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\myProject\\\\frontEnd\\\\my-app\\\\components\\\\NavBar\\\\NavBar.jsx\",\n                            lineNumber: 50,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\myProject\\\\frontEnd\\\\my-app\\\\components\\\\NavBar\\\\NavBar.jsx\",\n                    lineNumber: 41,\n                    columnNumber: 11\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: providers && Object.values(providers).map((provider)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            onClick: ()=>{\n                                (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.signIn)(provider.id);\n                            },\n                            className: \"black_btn\",\n                            children: \"Sign in\"\n                        }, provider.name, false, {\n                            fileName: \"D:\\\\myProject\\\\frontEnd\\\\my-app\\\\components\\\\NavBar\\\\NavBar.jsx\",\n                            lineNumber: 64,\n                            columnNumber: 17\n                        }, undefined))\n                }, void 0, false)\n            }, void 0, false, {\n                fileName: \"D:\\\\myProject\\\\frontEnd\\\\my-app\\\\components\\\\NavBar\\\\NavBar.jsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sm:hidden flex relative\",\n                children: (session === null || session === void 0 ? void 0 : session.user) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: session === null || session === void 0 ? void 0 : session.user.image,\n                            width: 37,\n                            height: 37,\n                            className: \"rounded-full\",\n                            alt: \"profile\",\n                            onClick: ()=>setToggleDropdown(!toggleDropdown)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\myProject\\\\frontEnd\\\\my-app\\\\components\\\\NavBar\\\\NavBar.jsx\",\n                            lineNumber: 83,\n                            columnNumber: 13\n                        }, undefined),\n                        toggleDropdown && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"dropdown\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/profile\",\n                                    className: \"dropdown_link\",\n                                    onClick: ()=>setToggleDropdown(false),\n                                    children: \"My Profile\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\myProject\\\\frontEnd\\\\my-app\\\\components\\\\NavBar\\\\NavBar.jsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/create-prompt\",\n                                    className: \"dropdown_link\",\n                                    onClick: ()=>setToggleDropdown(false),\n                                    children: \"Create Prompt\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\myProject\\\\frontEnd\\\\my-app\\\\components\\\\NavBar\\\\NavBar.jsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"button\",\n                                    onClick: ()=>{\n                                        setToggleDropdown(false);\n                                        (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.signOut)();\n                                    },\n                                    className: \"mt-5 w-full black_btn\",\n                                    children: \"Sign Out\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\myProject\\\\frontEnd\\\\my-app\\\\components\\\\NavBar\\\\NavBar.jsx\",\n                                    lineNumber: 108,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\myProject\\\\frontEnd\\\\my-app\\\\components\\\\NavBar\\\\NavBar.jsx\",\n                            lineNumber: 93,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\myProject\\\\frontEnd\\\\my-app\\\\components\\\\NavBar\\\\NavBar.jsx\",\n                    lineNumber: 82,\n                    columnNumber: 11\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: providers && Object.values(providers).map((provider)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            onClick: ()=>{\n                                (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.signIn)(provider.id);\n                            },\n                            className: \"black_btn\",\n                            children: \"Sign in\"\n                        }, provider.name, false, {\n                            fileName: \"D:\\\\myProject\\\\frontEnd\\\\my-app\\\\components\\\\NavBar\\\\NavBar.jsx\",\n                            lineNumber: 125,\n                            columnNumber: 17\n                        }, undefined))\n                }, void 0, false)\n            }, void 0, false, {\n                fileName: \"D:\\\\myProject\\\\frontEnd\\\\my-app\\\\components\\\\NavBar\\\\NavBar.jsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\myProject\\\\frontEnd\\\\my-app\\\\components\\\\NavBar\\\\NavBar.jsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Nav, \"pQwkQD6kx3e0MFe+jjOLDX1MoSg=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession\n    ];\n});\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\nvar _c;\n$RefreshReg$(_c, \"Nav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9OYXZCYXIvTmF2QmFyLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFNkI7QUFDRTtBQUNhO0FBQ2dDO0FBRTVFLE1BQU1RLE1BQU0sSUFBTTs7SUFDaEIsTUFBTSxFQUFFQyxNQUFNQyxRQUFPLEVBQUUsR0FBR0osMkRBQVVBO0lBRXBDLE1BQU0sQ0FBQ0ssV0FBV0MsYUFBYSxHQUFHVCwrQ0FBUUEsQ0FBQyxJQUFJO0lBQy9DLE1BQU0sQ0FBQ1UsZ0JBQWdCQyxrQkFBa0IsR0FBR1gsK0NBQVFBLENBQUMsS0FBSztJQUUxREQsZ0RBQVNBLENBQUMsSUFBSTtRQUNaLE1BQU1hLGlCQUFpQixVQUFVO1lBQy9CLE1BQU1DLFdBQVcsTUFBTVQsNkRBQVlBO1lBRW5DSyxhQUFhSTtRQUNmO1FBQ0FEO0lBQ0YsR0FBRSxFQUFFO0lBRUoscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDbEIsa0RBQUlBO2dCQUFDbUIsTUFBSztnQkFBSUQsV0FBVTs7a0NBQ3ZCLDhEQUFDakIsbURBQUtBO3dCQUNKbUIsS0FBSTt3QkFDSkMsS0FBSTt3QkFDSkMsT0FBTzt3QkFDUEMsUUFBUTt3QkFDUkwsV0FBVTs7Ozs7O2tDQUVaLDhEQUFDTTt3QkFBRU4sV0FBVTtrQ0FBWTs7Ozs7Ozs7Ozs7OzBCQU0zQiw4REFBQ087Z0JBQUlQLFdBQVU7MEJBQ1pSLENBQUFBLG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBU2dCLElBQUksa0JBQ1osOERBQUNEO29CQUFJUCxXQUFVOztzQ0FDYiw4REFBQ2xCLGtEQUFJQTs0QkFBQ21CLE1BQUs7NEJBQWlCRCxXQUFVO3NDQUFZOzs7Ozs7c0NBSWxELDhEQUFDUzs0QkFBT0MsTUFBSzs0QkFBU0MsU0FBU3hCLG9EQUFPQTs0QkFBRWEsV0FBVTtzQ0FBYzs7Ozs7O3NDQUloRSw4REFBQ2xCLGtEQUFJQTs0QkFBQ21CLE1BQUs7c0NBQ1QsNEVBQUNsQixtREFBS0E7Z0NBQ0ptQixHQUFHLEVBQUVWLG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBU2dCLElBQUksQ0FBQ0ksS0FBSztnQ0FDeEJSLE9BQU87Z0NBQ1BDLFFBQVE7Z0NBQ1JMLFdBQVU7Z0NBQ1ZHLEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OENBS1Y7OEJBQ0dWLGFBQ0NvQixPQUFPQyxNQUFNLENBQUNyQixXQUFXc0IsR0FBRyxDQUFDLENBQUNDLHlCQUM1Qiw4REFBQ1A7NEJBQ0NDLE1BQUs7NEJBRUxDLFNBQVMsSUFBTTtnQ0FDYnpCLHVEQUFNQSxDQUFDOEIsU0FBU0MsRUFBRTs0QkFDcEI7NEJBQ0FqQixXQUFVO3NDQUNYOzJCQUxNZ0IsU0FBU0UsSUFBSTs7Ozs7aUNBVTNCOzs7Ozs7MEJBSUgsOERBQUNYO2dCQUFJUCxXQUFVOzBCQUNaUixDQUFBQSxvQkFBQUEscUJBQUFBLEtBQUFBLElBQUFBLFFBQVNnQixJQUFJLGtCQUNaLDhEQUFDRDtvQkFBSVAsV0FBVTs7c0NBQ2IsOERBQUNqQixtREFBS0E7NEJBQ0ptQixHQUFHLEVBQUVWLG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBU2dCLElBQUksQ0FBQ0ksS0FBSzs0QkFDeEJSLE9BQU87NEJBQ1BDLFFBQVE7NEJBQ1JMLFdBQVU7NEJBQ1ZHLEtBQUk7NEJBQ0pRLFNBQVMsSUFBTWYsa0JBQWtCLENBQUNEOzs7Ozs7d0JBR25DQSxnQ0FDQyw4REFBQ1k7NEJBQUlQLFdBQVU7OzhDQUNiLDhEQUFDbEIsa0RBQUlBO29DQUNIbUIsTUFBSztvQ0FDTEQsV0FBVTtvQ0FDVlcsU0FBUyxJQUFNZixrQkFBa0IsS0FBSzs4Q0FDdkM7Ozs7Ozs4Q0FHRCw4REFBQ2Qsa0RBQUlBO29DQUNIbUIsTUFBSztvQ0FDTEQsV0FBVTtvQ0FDVlcsU0FBUyxJQUFNZixrQkFBa0IsS0FBSzs4Q0FDdkM7Ozs7Ozs4Q0FHRCw4REFBQ2E7b0NBQ0NDLE1BQUs7b0NBQ0xDLFNBQVMsSUFBTTt3Q0FDYmYsa0JBQWtCLEtBQUs7d0NBQ3ZCVCx3REFBT0E7b0NBQ1Q7b0NBQ0FhLFdBQVU7OENBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQU9QOzhCQUNHUCxhQUNDb0IsT0FBT0MsTUFBTSxDQUFDckIsV0FBV3NCLEdBQUcsQ0FBQyxDQUFDQyx5QkFDNUIsOERBQUNQOzRCQUNDQyxNQUFLOzRCQUVMQyxTQUFTLElBQU07Z0NBQ2J6Qix1REFBTUEsQ0FBQzhCLFNBQVNDLEVBQUU7NEJBQ3BCOzRCQUNBakIsV0FBVTtzQ0FDWDsyQkFMTWdCLFNBQVNFLElBQUk7Ozs7O2lDQVUzQjs7Ozs7Ozs7Ozs7O0FBSVQ7R0FySU01Qjs7UUFDc0JGLHVEQUFVQTs7O0tBRGhDRTtBQXVJTiwrREFBZUEsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdkJhci9OYXZCYXIuanN4P2Y3ZjkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHNpZ25Jbiwgc2lnbk91dCwgdXNlU2Vzc2lvbiwgZ2V0UHJvdmlkZXJzIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xyXG5cclxuY29uc3QgTmF2ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpO1xyXG5cclxuICBjb25zdCBbcHJvdmlkZXJzLCBzZXRQcm92aWRlcnNdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3RvZ2dsZURyb3Bkb3duLCBzZXRUb2dnbGVEcm9wZG93bl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgY29uc3Qgc2V0VXBQcm92aWRlcnMgPSBhc3luYyAoKT0+e1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldFByb3ZpZGVycygpO1xyXG5cclxuICAgICAgc2V0UHJvdmlkZXJzKHJlc3BvbnNlKVxyXG4gICAgfVxyXG4gICAgc2V0VXBQcm92aWRlcnMoKTtcclxuICB9LFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPSdmbGV4LWJldHdlZW4gdy1mdWxsIG1iLTE2IHB0LTMnPlxyXG4gICAgICA8TGluayBocmVmPScvJyBjbGFzc05hbWU9J2ZsZXggZ2FwLTIgZmxleC1jZW50ZXInPlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgc3JjPScvYXNzZXRzL21haGlsJ1xyXG4gICAgICAgICAgYWx0PSdsb2dvJ1xyXG4gICAgICAgICAgd2lkdGg9ezMwfVxyXG4gICAgICAgICAgaGVpZ2h0PXszMH1cclxuICAgICAgICAgIGNsYXNzTmFtZT0nb2JqZWN0LWNvbnRhaW4nXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cCBjbGFzc05hbWU9J2xvZ29fdGV4dCc+UHJvbXB0b3BpYTwvcD5cclxuICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgey8qIHthbGVydChwcm92aWRlcnMpfSAqL31cclxuXHJcbiAgICAgIHsvKiBEZXNrdG9wIE5hdmlnYXRpb24gKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbTpmbGV4IGhpZGRlbic+XHJcbiAgICAgICAge3Nlc3Npb24/LnVzZXIgPyAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBnYXAtMyBtZDpnYXAtNSc+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9jcmVhdGUtcHJvbXB0JyBjbGFzc05hbWU9J2JsYWNrX2J0bic+XHJcbiAgICAgICAgICAgICAgQ3JlYXRlIFBvc3RcclxuICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIG9uQ2xpY2s9e3NpZ25PdXR9IGNsYXNzTmFtZT0nb3V0bGluZV9idG4nPlxyXG4gICAgICAgICAgICAgIFNpZ24gT3V0XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj0nL3Byb2ZpbGUnPlxyXG4gICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgc3JjPXtzZXNzaW9uPy51c2VyLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9ezM3fVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXszN31cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ncm91bmRlZC1mdWxsJ1xyXG4gICAgICAgICAgICAgICAgYWx0PSdwcm9maWxlJ1xyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICB7cHJvdmlkZXJzICYmXHJcbiAgICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyhwcm92aWRlcnMpLm1hcCgocHJvdmlkZXIpID0+IChcclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgdHlwZT0nYnV0dG9uJ1xyXG4gICAgICAgICAgICAgICAgICBrZXk9e3Byb3ZpZGVyLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzaWduSW4ocHJvdmlkZXIuaWQpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2JsYWNrX2J0bidcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgU2lnbiBpblxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHsvKiBNb2JpbGUgTmF2aWdhdGlvbiAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NtOmhpZGRlbiBmbGV4IHJlbGF0aXZlJz5cclxuICAgICAgICB7c2Vzc2lvbj8udXNlciA/IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4Jz5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgc3JjPXtzZXNzaW9uPy51c2VyLmltYWdlfVxyXG4gICAgICAgICAgICAgIHdpZHRoPXszN31cclxuICAgICAgICAgICAgICBoZWlnaHQ9ezM3fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0ncm91bmRlZC1mdWxsJ1xyXG4gICAgICAgICAgICAgIGFsdD0ncHJvZmlsZSdcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUb2dnbGVEcm9wZG93bighdG9nZ2xlRHJvcGRvd24pfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAge3RvZ2dsZURyb3Bkb3duICYmIChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZHJvcGRvd24nPlxyXG4gICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgaHJlZj0nL3Byb2ZpbGUnXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZHJvcGRvd25fbGluaydcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VG9nZ2xlRHJvcGRvd24oZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBNeSBQcm9maWxlXHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICBocmVmPScvY3JlYXRlLXByb21wdCdcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdkcm9wZG93bl9saW5rJ1xyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUb2dnbGVEcm9wZG93bihmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIENyZWF0ZSBQcm9tcHRcclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgdHlwZT0nYnV0dG9uJ1xyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VG9nZ2xlRHJvcGRvd24oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNpZ25PdXQoKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdtdC01IHctZnVsbCBibGFja19idG4nXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFNpZ24gT3V0XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICB7cHJvdmlkZXJzICYmXHJcbiAgICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyhwcm92aWRlcnMpLm1hcCgocHJvdmlkZXIpID0+IChcclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgdHlwZT0nYnV0dG9uJ1xyXG4gICAgICAgICAgICAgICAgICBrZXk9e3Byb3ZpZGVyLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzaWduSW4ocHJvdmlkZXIuaWQpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2JsYWNrX2J0bidcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgU2lnbiBpblxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmF2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXY7Il0sIm5hbWVzIjpbIkxpbmsiLCJJbWFnZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic2lnbkluIiwic2lnbk91dCIsInVzZVNlc3Npb24iLCJnZXRQcm92aWRlcnMiLCJOYXYiLCJkYXRhIiwic2Vzc2lvbiIsInByb3ZpZGVycyIsInNldFByb3ZpZGVycyIsInRvZ2dsZURyb3Bkb3duIiwic2V0VG9nZ2xlRHJvcGRvd24iLCJzZXRVcFByb3ZpZGVycyIsInJlc3BvbnNlIiwibmF2IiwiY2xhc3NOYW1lIiwiaHJlZiIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwicCIsImRpdiIsInVzZXIiLCJidXR0b24iLCJ0eXBlIiwib25DbGljayIsImltYWdlIiwiT2JqZWN0IiwidmFsdWVzIiwibWFwIiwicHJvdmlkZXIiLCJpZCIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./components/NavBar/NavBar.jsx\n"));

/***/ })

});