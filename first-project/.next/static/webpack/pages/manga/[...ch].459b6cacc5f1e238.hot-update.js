"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/manga/[...ch]",{

/***/ "./components/overlay/ChangeCh.js":
/*!****************************************!*\
  !*** ./components/overlay/ChangeCh.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChangeCh; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction ChangeCh(param) {\n    let { ch , total_ch  } = param;\n    _s();\n    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    //show or not show\n    const toggleVisibility = ()=>{\n        if (window.pageYOffset > 300) {\n            setIsVisible(true);\n        } else {\n            setIsVisible(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"scroll\", toggleVisibility);\n        return ()=>{\n            window.removeEventListener(\"scroll\", toggleVisibility);\n        };\n    }, []);\n    const btn_style = {\n        symbol_style: \" w-5/6 text-zinc-200 text-2xl font-bold font-serif \",\n        btn_style: \" p-2 rounded shadow-md border border-gray-800 bg-[#4F526C] hover:bg-neutral-400\",\n        set_overlay: \"fixed bottom-2 left-2 md:bottom-5 md:left-5 \",\n        select_style: \"p-2 rounded shadow-md border border-gray-800 text-zinc-200 text-2xl bg-[#4F526C] inline-block align-top\"\n    };\n    const clickBtnBack = (event)=>{\n        next_router__WEBPACK_IMPORTED_MODULE_3___default().push(\"/manga/\" + ch[0] + \"/\" + (parseInt(ch[1], 10) - 1));\n    };\n    const clickBtnNext = (event)=>{\n        next_router__WEBPACK_IMPORTED_MODULE_3___default().push(\"/manga/\" + ch[0] + \"/\" + (parseInt(ch[1], 10) + 1));\n    };\n    console.log(ch);\n    if (ch == null) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: btn_style.set_overlay,\n        children: \" \"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\terng\\\\train\\\\first-project\\\\components\\\\overlay\\\\ChangeCh.js\",\n        lineNumber: 45,\n        columnNumber: 9\n    }, this);\n    //add back btn\n    const menu_list = [];\n    if (ch[1] > 1) {\n        menu_list.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: clickBtnBack,\n            className: btn_style.btn_style + \" rotate-180\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                xmlns: \"http://www.w3.org/2000/svg\",\n                width: \"32\",\n                height: \"32\",\n                viewBox: \"0 0 24 24\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                    fill: \"white\",\n                    d: \"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2 12l-4.5 4.5 1.527 1.5 5.973-6-5.973-6-1.527 1.5 4.5 4.5z\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\terng\\\\train\\\\first-project\\\\components\\\\overlay\\\\ChangeCh.js\",\n                    lineNumber: 54,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\terng\\\\train\\\\first-project\\\\components\\\\overlay\\\\ChangeCh.js\",\n                lineNumber: 53,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\terng\\\\train\\\\first-project\\\\components\\\\overlay\\\\ChangeCh.js\",\n            lineNumber: 52,\n            columnNumber: 13\n        }, this));\n    }\n    //---add select ch\n    const ch_list = [];\n    for(let i = 0; i < total_ch; i++){\n        const ch_num = i + 1;\n        if (ch_num == ch[1]) {\n            ch_list.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                value: \"\" + ch_num + \"\",\n                selected: true,\n                children: [\n                    \"ตอนที่ \",\n                    ch_num\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\terng\\\\train\\\\first-project\\\\components\\\\overlay\\\\ChangeCh.js\",\n                lineNumber: 70,\n                columnNumber: 17\n            }, this));\n        } else {\n            ch_list.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                value: \"\" + ch_num + \"\",\n                children: [\n                    \"ตอนที่ \",\n                    ch_num\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\terng\\\\train\\\\first-project\\\\components\\\\overlay\\\\ChangeCh.js\",\n                lineNumber: 75,\n                columnNumber: 17\n            }, this));\n        }\n    }\n    menu_list.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n        id: \"chapter\",\n        className: btn_style.select_style,\n        children: ch_list\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\terng\\\\train\\\\first-project\\\\components\\\\overlay\\\\ChangeCh.js\",\n        lineNumber: 81,\n        columnNumber: 9\n    }, this));\n    //---\n    //add next btn\n    if (ch[1] < total_ch) {\n        menu_list.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: clickBtnNext,\n            className: btn_style.btn_style,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                xmlns: \"http://www.w3.org/2000/svg\",\n                width: \"32\",\n                height: \"32\",\n                viewBox: \"0 0 24 24\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                    fill: \"white\",\n                    d: \"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2 12l-4.5 4.5 1.527 1.5 5.973-6-5.973-6-1.527 1.5 4.5 4.5z\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\terng\\\\train\\\\first-project\\\\components\\\\overlay\\\\ChangeCh.js\",\n                    lineNumber: 93,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\terng\\\\train\\\\first-project\\\\components\\\\overlay\\\\ChangeCh.js\",\n                lineNumber: 92,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\terng\\\\train\\\\first-project\\\\components\\\\overlay\\\\ChangeCh.js\",\n            lineNumber: 91,\n            columnNumber: 13\n        }, this));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: btn_style.set_overlay,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: isVisible ? \"opacity-100\" : \"invisible\",\n            children: menu_list\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\terng\\\\train\\\\first-project\\\\components\\\\overlay\\\\ChangeCh.js\",\n            lineNumber: 104,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\terng\\\\train\\\\first-project\\\\components\\\\overlay\\\\ChangeCh.js\",\n        lineNumber: 103,\n        columnNumber: 9\n    }, this);\n}\n_s(ChangeCh, \"J3yJOyGdBT4L7hs1p1XQYVGMdrY=\");\n_c = ChangeCh;\nvar _c;\n$RefreshReg$(_c, \"ChangeCh\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OztJQUt0QixDQUFDO0lBRUQscUJBQ0ksOERBQUNaO1FBQUlDLFdBQVdaLFVBQVVFLFdBQVc7a0JBQ2pDLDRFQUFDUztZQUFJQyxXQUFXbkIsWUFBWSxnQkFBZ0IsV0FBVztzQkFDbERvQjs7Ozs7Ozs7Ozs7QUFJakIsQ0FBQztHQXhHdUJ2QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL292ZXJsYXkvQ2hhbmdlQ2guanM/NDYxZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYW5nZUNoKHsgY2gsIHRvdGFsX2NoIH0pIHtcclxuXHJcbiAgICBjb25zdCBbaXNWaXNpYmxlLCBzZXRJc1Zpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgLy9zaG93IG9yIG5vdCBzaG93XHJcbiAgICBjb25zdCB0b2dnbGVWaXNpYmlsaXR5ID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiAzMDApIHtcclxuICAgICAgICAgICAgc2V0SXNWaXNpYmxlKHRydWUpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0SXNWaXNpYmxlKGZhbHNlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0b2dnbGVWaXNpYmlsaXR5KVxyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdG9nZ2xlVmlzaWJpbGl0eSlcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBjb25zdCBidG5fc3R5bGUgPSAoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzeW1ib2xfc3R5bGU6ICcgdy01LzYgdGV4dC16aW5jLTIwMCB0ZXh0LTJ4bCBmb250LWJvbGQgZm9udC1zZXJpZiAnLFxyXG4gICAgICAgICAgICBidG5fc3R5bGU6IFwiIHAtMiByb3VuZGVkIHNoYWRvdy1tZCBib3JkZXIgYm9yZGVyLWdyYXktODAwIGJnLVsjNEY1MjZDXSBob3ZlcjpiZy1uZXV0cmFsLTQwMFwiLFxyXG4gICAgICAgICAgICBzZXRfb3ZlcmxheTogXCJmaXhlZCBib3R0b20tMiBsZWZ0LTIgbWQ6Ym90dG9tLTUgbWQ6bGVmdC01IFwiLFxyXG4gICAgICAgICAgICBzZWxlY3Rfc3R5bGU6IFwicC0yIHJvdW5kZWQgc2hhZG93LW1kIGJvcmRlciBib3JkZXItZ3JheS04MDAgdGV4dC16aW5jLTIwMCB0ZXh0LTJ4bCBiZy1bIzRGNTI2Q10gaW5saW5lLWJsb2NrIGFsaWduLXRvcFwiXHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBjbGlja0J0bkJhY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBSb3V0ZXIucHVzaChcIi9tYW5nYS9cIiArIGNoWzBdICsgXCIvXCIgKyAocGFyc2VJbnQoY2hbMV0sIDEwKSAtIDEpKVxyXG4gICAgfVxyXG4gICAgY29uc3QgY2xpY2tCdG5OZXh0ID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgUm91dGVyLnB1c2goXCIvbWFuZ2EvXCIgKyBjaFswXSArIFwiL1wiICsgKHBhcnNlSW50KGNoWzFdLCAxMCkgKyAxKSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhjaClcclxuXHJcbiAgICBpZiAoY2ggPT0gbnVsbCkgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YnRuX3N0eWxlLnNldF9vdmVybGF5fT4gPC9kaXY+XHJcbiAgICApXHJcblxyXG4gICAgLy9hZGQgYmFjayBidG5cclxuICAgIGNvbnN0IG1lbnVfbGlzdCA9IFtdO1xyXG4gICAgaWYgKGNoWzFdID4gMSkge1xyXG4gICAgICAgIG1lbnVfbGlzdC5wdXNoKFxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2NsaWNrQnRuQmFja30gY2xhc3NOYW1lPXtidG5fc3R5bGUuYnRuX3N0eWxlICsgXCIgcm90YXRlLTE4MFwifT5cclxuICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwid2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTEyIDJjNS41MTQgMCAxMCA0LjQ4NiAxMCAxMHMtNC40ODYgMTAtMTAgMTAtMTAtNC40ODYtMTAtMTAgNC40ODYtMTAgMTAtMTB6bTAtMmMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMiAxMmwtNC41IDQuNSAxLjUyNyAxLjUgNS45NzMtNi01Ljk3My02LTEuNTI3IDEuNSA0LjUgNC41elwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgLy8tLS1hZGQgc2VsZWN0IGNoXHJcbiAgICBjb25zdCBjaF9saXN0ID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b3RhbF9jaDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgY2hfbnVtID0gaSArIDFcclxuICAgICAgICBpZiAoY2hfbnVtID09IGNoWzFdKSB7XHJcbiAgICAgICAgICAgIGNoX2xpc3QucHVzaChcclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e1wiXCIgKyBjaF9udW0gKyBcIlwifSBzZWxlY3RlZD7guJXguK3guJnguJfguLXguYgge2NoX251bX08L29wdGlvbj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY2hfbGlzdC5wdXNoKFxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17XCJcIiArIGNoX251bSArIFwiXCJ9PuC4leC4reC4meC4l+C4teC5iCB7Y2hfbnVtfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1lbnVfbGlzdC5wdXNoKFxyXG4gICAgICAgIDxzZWxlY3QgaWQ9XCJjaGFwdGVyXCIgY2xhc3NOYW1lPXtidG5fc3R5bGUuc2VsZWN0X3N0eWxlfT5cclxuICAgICAgICAgICAge2NoX2xpc3R9XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICApXHJcblxyXG4gICAgLy8tLS1cclxuXHJcbiAgICAvL2FkZCBuZXh0IGJ0blxyXG4gICAgaWYgKGNoWzFdIDwgKHRvdGFsX2NoKSkge1xyXG4gICAgICAgIG1lbnVfbGlzdC5wdXNoKFxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2NsaWNrQnRuTmV4dH0gY2xhc3NOYW1lPXtidG5fc3R5bGUuYnRuX3N0eWxlfT5cclxuICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwid2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTEyIDJjNS41MTQgMCAxMCA0LjQ4NiAxMCAxMHMtNC40ODYgMTAtMTAgMTAtMTAtNC40ODYtMTAtMTAgNC40ODYtMTAgMTAtMTB6bTAtMmMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMiAxMmwtNC41IDQuNSAxLjUyNyAxLjUgNS45NzMtNi01Ljk3My02LTEuNTI3IDEuNSA0LjUgNC41elwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YnRuX3N0eWxlLnNldF9vdmVybGF5fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2lzVmlzaWJsZSA/ICdvcGFjaXR5LTEwMCcgOiAnaW52aXNpYmxlJ30+XHJcbiAgICAgICAgICAgICAgICB7bWVudV9saXN0fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJSb3V0ZXIiLCJDaGFuZ2VDaCIsImNoIiwidG90YWxfY2giLCJpc1Zpc2libGUiLCJzZXRJc1Zpc2libGUiLCJ0b2dnbGVWaXNpYmlsaXR5Iiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImJ0bl9zdHlsZSIsInN5bWJvbF9zdHlsZSIsInNldF9vdmVybGF5Iiwic2VsZWN0X3N0eWxlIiwiY2xpY2tCdG5CYWNrIiwiZXZlbnQiLCJwdXNoIiwicGFyc2VJbnQiLCJjbGlja0J0bk5leHQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwibWVudV9saXN0IiwiYnV0dG9uIiwib25DbGljayIsInN2ZyIsInhtbG5zIiwid2lkdGgiLCJoZWlnaHQiLCJ2aWV3Qm94IiwicGF0aCIsImZpbGwiLCJkIiwiY2hfbGlzdCIsImkiLCJjaF9udW0iLCJvcHRpb24iLCJ2YWx1ZSIsInNlbGVjdGVkIiwic2VsZWN0IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/overlay/ChangeCh.js\n"));

/***/ })

});