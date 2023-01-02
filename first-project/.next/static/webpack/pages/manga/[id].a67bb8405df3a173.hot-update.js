"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/manga/[id]",{

/***/ "./components/manga/Ch_Card.js":
/*!*************************************!*\
  !*** ./components/manga/Ch_Card.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Ch_Card; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Ch_Card(param) {\n    let { total_ch , id  } = param;\n    const total_row = parseInt(parseInt(total_ch) / 2);\n    const card_style = {\n        ch_name_style: \"bg-neutral-700 block py-3 pl-3 pr-4 text-zinc-200 text-2x1 font-serif text-left rounded hover:bg-neutral-600\",\n        shape: \"w-11/12 rounded-lg shadow-md border border-gray-500 bg-neutral-800\",\n        position: \"flex justify-center\",\n        ch_show_style: \"grid grid-rows-5 grid-flow-col gap-1\",\n        ch_link_style: \"w-5/6\"\n    };\n    const ch_list = [];\n    //วนลูปใส่ตอน\n    for(let i = total_ch; i > 0; i--){\n        const ch_num = i;\n        ch_list.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n            className: card_style.ch_name_style,\n            href: \"/manga/\" + id + \"/\" + ch_num,\n            children: [\n                \"ตอนที่ \",\n                ch_num,\n                \" \"\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\terng\\\\train\\\\first-project\\\\components\\\\manga\\\\Ch_Card.js\",\n            lineNumber: 22,\n            columnNumber: 13\n        }, this));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: card_style.position,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: card_style.shape,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\terng\\\\train\\\\first-project\\\\components\\\\manga\\\\Ch_Card.js\",\n                    lineNumber: 30,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: card_style.position,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: card_style.ch_link_style,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: card_style.ch_show_style,\n                            children: ch_list\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\terng\\\\train\\\\first-project\\\\components\\\\manga\\\\Ch_Card.js\",\n                            lineNumber: 33,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\terng\\\\train\\\\first-project\\\\components\\\\manga\\\\Ch_Card.js\",\n                        lineNumber: 32,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\terng\\\\train\\\\first-project\\\\components\\\\manga\\\\Ch_Card.js\",\n                    lineNumber: 31,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\terng\\\\train\\\\first-project\\\\components\\\\manga\\\\Ch_Card.js\",\n                    lineNumber: 40,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\terng\\\\train\\\\first-project\\\\components\\\\manga\\\\Ch_Card.js\",\n            lineNumber: 29,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\terng\\\\train\\\\first-project\\\\components\\\\manga\\\\Ch_Card.js\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, this);\n}\n_c = Ch_Card;\nvar _c;\n$RefreshReg$(_c, \"Ch_Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21hbmdhL0NoX0NhcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUE2QjtBQUVkLFNBQVNDLFFBQVEsS0FBZ0IsRUFBRTtRQUFsQixFQUFFQyxTQUFRLEVBQUdDLEdBQUUsRUFBQyxHQUFoQjtJQUU1QixNQUFNQyxZQUFZQyxTQUFVQSxTQUFTSCxZQUFVO0lBRS9DLE1BQU1JLGFBQ0Y7UUFDSUMsZUFBZTtRQUNmQyxPQUFPO1FBQ1BDLFVBQVU7UUFDVkMsZUFBZTtRQUNmQyxlQUFlO0lBQ25CO0lBR0osTUFBTUMsVUFBVSxFQUFFO0lBQ2xCLGFBQWE7SUFDYixJQUFLLElBQUlDLElBQUlYLFVBQVVXLElBQUksR0FBR0EsSUFBSztRQUMvQixNQUFNQyxTQUFTRDtRQUNmRCxRQUFRRyxJQUFJLGVBQ1IsOERBQUNmLGtEQUFJQTtZQUFDZ0IsV0FBV1YsV0FBV0MsYUFBYTtZQUFFVSxNQUFNLFlBQVVkLEtBQUcsTUFBSVc7O2dCQUFRO2dCQUFRQTtnQkFBTzs7Ozs7OztJQUVqRztJQUdBLHFCQUNJLDhEQUFDSTtRQUFJRixXQUFXVixXQUFXRyxRQUFRO2tCQUMvQiw0RUFBQ1M7WUFBSUYsV0FBV1YsV0FBV0UsS0FBSzs7OEJBQzVCLDhEQUFDVzs7Ozs7OEJBQ0QsOERBQUNEO29CQUFJRixXQUFXVixXQUFXRyxRQUFROzhCQUMvQiw0RUFBQ1M7d0JBQUlGLFdBQVdWLFdBQVdLLGFBQWE7a0NBQ3BDLDRFQUFDTzs0QkFBSUYsV0FBV1YsV0FBV0ksYUFBYTtzQ0FFbkNFOzs7Ozs7Ozs7Ozs7Ozs7OzhCQUtiLDhEQUFDTzs7Ozs7Ozs7Ozs7Ozs7OztBQUlqQixDQUFDO0tBekN1QmxCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbWFuZ2EvQ2hfQ2FyZC5qcz8zZGI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoX0NhcmQoeyB0b3RhbF9jaCAsIGlkfSkge1xyXG5cclxuICAgIGNvbnN0IHRvdGFsX3JvdyA9IHBhcnNlSW50KChwYXJzZUludCh0b3RhbF9jaCkvMikpXHJcblxyXG4gICAgY29uc3QgY2FyZF9zdHlsZSA9IChcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNoX25hbWVfc3R5bGU6ICdiZy1uZXV0cmFsLTcwMCBibG9jayBweS0zIHBsLTMgcHItNCB0ZXh0LXppbmMtMjAwIHRleHQtMngxIGZvbnQtc2VyaWYgdGV4dC1sZWZ0IHJvdW5kZWQgaG92ZXI6YmctbmV1dHJhbC02MDAnLFxyXG4gICAgICAgICAgICBzaGFwZTogXCJ3LTExLzEyIHJvdW5kZWQtbGcgc2hhZG93LW1kIGJvcmRlciBib3JkZXItZ3JheS01MDAgYmctbmV1dHJhbC04MDBcIixcclxuICAgICAgICAgICAgcG9zaXRpb246IFwiZmxleCBqdXN0aWZ5LWNlbnRlclwiLFxyXG4gICAgICAgICAgICBjaF9zaG93X3N0eWxlOiBcImdyaWQgZ3JpZC1yb3dzLTUgZ3JpZC1mbG93LWNvbCBnYXAtMVwiLFxyXG4gICAgICAgICAgICBjaF9saW5rX3N0eWxlOiBcInctNS82XCIsXHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBjaF9saXN0ID0gW107XHJcbiAgICAvL+C4p+C4meC4peC4ueC4m+C5g+C4quC5iOC4leC4reC4mVxyXG4gICAgZm9yIChsZXQgaSA9IHRvdGFsX2NoOyBpID4gMDsgaS0tKSB7XHJcbiAgICAgICAgY29uc3QgY2hfbnVtID0gaSBcclxuICAgICAgICBjaF9saXN0LnB1c2goXHJcbiAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT17Y2FyZF9zdHlsZS5jaF9uYW1lX3N0eWxlfSBocmVmPXtcIi9tYW5nYS9cIitpZCtcIi9cIitjaF9udW19PuC4leC4reC4meC4l+C4teC5iCB7Y2hfbnVtfSA8L0xpbms+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjYXJkX3N0eWxlLnBvc2l0aW9ufT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NhcmRfc3R5bGUuc2hhcGV9PlxyXG4gICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2FyZF9zdHlsZS5wb3NpdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NhcmRfc3R5bGUuY2hfbGlua19zdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjYXJkX3N0eWxlLmNoX3Nob3dfc3R5bGV9PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaF9saXN0fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJMaW5rIiwiQ2hfQ2FyZCIsInRvdGFsX2NoIiwiaWQiLCJ0b3RhbF9yb3ciLCJwYXJzZUludCIsImNhcmRfc3R5bGUiLCJjaF9uYW1lX3N0eWxlIiwic2hhcGUiLCJwb3NpdGlvbiIsImNoX3Nob3dfc3R5bGUiLCJjaF9saW5rX3N0eWxlIiwiY2hfbGlzdCIsImkiLCJjaF9udW0iLCJwdXNoIiwiY2xhc3NOYW1lIiwiaHJlZiIsImRpdiIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/manga/Ch_Card.js\n"));

/***/ })

});