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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChangeCh; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction ChangeCh(ch) {\n    _s();\n    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    //show or not show\n    const toggleVisibility = ()=>{\n        if (window.pageYOffset > 300) {\n            setIsVisible(true);\n        } else {\n            setIsVisible(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"scroll\", toggleVisibility);\n        return ()=>{\n            window.removeEventListener(\"scroll\", toggleVisibility);\n        };\n    }, []);\n    const btn_style = {\n        symbol_style: \"w-5/6 text-zinc-200 text-2xl font-bold font-serif \",\n        btn_style: \" p-2 rounded shadow-md border border-gray-800 bg-[#4F526C] hover:bg-neutral-400\",\n        set_overlay: \"fixed bottom-2 left-2 md:bottom-5 md:right-5 \"\n    };\n    const clickBTT = (event)=>{\n        document.body.scrollTop = 0;\n        document.documentElement.scrollTop = 0;\n    };\n    console.log(ch[1]);\n    const menu_list = [];\n    if (ch[1] > 1) {\n        menu_list.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {\n                className: btn_style.btn_style,\n                href: \"/\" + ch[0] + \"/\" + (ch[1] - 1),\n                children: \"Back\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\terng\\\\train\\\\first-project\\\\components\\\\overlay\\\\ChangeCh.js\",\n                lineNumber: 42,\n                columnNumber: 15\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\terng\\\\train\\\\first-project\\\\components\\\\overlay\\\\ChangeCh.js\",\n            lineNumber: 42,\n            columnNumber: 11\n        }, this));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: btn_style.set_overlay,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: isVisible ? \"opacity-100\" : \"opacity-0\",\n            children: menu_list\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\terng\\\\train\\\\first-project\\\\components\\\\overlay\\\\ChangeCh.js\",\n            lineNumber: 48,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\terng\\\\train\\\\first-project\\\\components\\\\overlay\\\\ChangeCh.js\",\n        lineNumber: 47,\n        columnNumber: 9\n    }, this);\n}\n_s(ChangeCh, \"J3yJOyGdBT4L7hs1p1XQYVGMdrY=\");\n_c = ChangeCh;\nvar _c;\n$RefreshReg$(_c, \"ChangeCh\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL292ZXJsYXkvQ2hhbmdlQ2guanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFBMkM7QUFFNUIsU0FBU0UsU0FBU0MsRUFBRSxFQUFFOztJQUVqQyxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR0osK0NBQVFBLENBQUMsS0FBSztJQUVoRCxrQkFBa0I7SUFDbEIsTUFBTUssbUJBQW1CLElBQU07UUFDM0IsSUFBSUMsT0FBT0MsV0FBVyxHQUFHLEtBQUs7WUFDMUJILGFBQWEsSUFBSTtRQUNyQixPQUFPO1lBQ0hBLGFBQWEsS0FBSztRQUN0QixDQUFDO0lBQ0w7SUFFQUwsZ0RBQVNBLENBQUMsSUFBTTtRQUNaTyxPQUFPRSxnQkFBZ0IsQ0FBQyxVQUFVSDtRQUVsQyxPQUFPLElBQU07WUFDVEMsT0FBT0csbUJBQW1CLENBQUMsVUFBVUo7UUFDekM7SUFDSixHQUFHLEVBQUU7SUFFTCxNQUFNSyxZQUNGO1FBQ0lDLGNBQWM7UUFDZEQsV0FBVztRQUNYRSxhQUFhO0lBQ2pCO0lBR0osTUFBTUMsV0FBVyxDQUFDQyxRQUFVO1FBQ3hCQyxTQUFTQyxJQUFJLENBQUNDLFNBQVMsR0FBRztRQUMxQkYsU0FBU0csZUFBZSxDQUFDRCxTQUFTLEdBQUc7SUFDekM7SUFFQUUsUUFBUUMsR0FBRyxDQUFDbEIsRUFBRSxDQUFDLEVBQUU7SUFFakIsTUFBTW1CLFlBQVUsRUFBRTtJQUNsQixJQUFHbkIsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFFO1FBQ1RtQixVQUFVQyxJQUFJLGVBQ1osOERBQUNDO3NCQUFHLDRFQUFDQztnQkFBS0MsV0FBV2YsVUFBVUEsU0FBUztnQkFBRWdCLE1BQU0sTUFBSXhCLEVBQUUsQ0FBQyxFQUFFLEdBQUMsTUFBS0EsQ0FBQUEsRUFBRSxDQUFDLEVBQUUsR0FBQzswQkFBSTs7Ozs7Ozs7Ozs7SUFFN0UsQ0FBQztJQUVILHFCQUNJLDhEQUFDeUI7UUFBSUYsV0FBV2YsVUFBVUUsV0FBVztrQkFDakMsNEVBQUNlO1lBQUlGLFdBQVd0QixZQUFZLGdCQUFnQixXQUFXO3NCQUN0RGtCOzs7Ozs7Ozs7OztBQUliLENBQUM7R0FsRHVCcEI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9vdmVybGF5L0NoYW5nZUNoLmpzPzQ2MWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hhbmdlQ2goY2gpIHtcclxuXHJcbiAgICBjb25zdCBbaXNWaXNpYmxlLCBzZXRJc1Zpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgLy9zaG93IG9yIG5vdCBzaG93XHJcbiAgICBjb25zdCB0b2dnbGVWaXNpYmlsaXR5ID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiAzMDApIHtcclxuICAgICAgICAgICAgc2V0SXNWaXNpYmxlKHRydWUpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0SXNWaXNpYmxlKGZhbHNlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0b2dnbGVWaXNpYmlsaXR5KVxyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdG9nZ2xlVmlzaWJpbGl0eSlcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBjb25zdCBidG5fc3R5bGUgPSAoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzeW1ib2xfc3R5bGU6ICd3LTUvNiB0ZXh0LXppbmMtMjAwIHRleHQtMnhsIGZvbnQtYm9sZCBmb250LXNlcmlmICcsXHJcbiAgICAgICAgICAgIGJ0bl9zdHlsZTogXCIgcC0yIHJvdW5kZWQgc2hhZG93LW1kIGJvcmRlciBib3JkZXItZ3JheS04MDAgYmctWyM0RjUyNkNdIGhvdmVyOmJnLW5ldXRyYWwtNDAwXCIsXHJcbiAgICAgICAgICAgIHNldF9vdmVybGF5OiBcImZpeGVkIGJvdHRvbS0yIGxlZnQtMiBtZDpib3R0b20tNSBtZDpyaWdodC01IFwiLFxyXG4gICAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgY2xpY2tCVFQgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IDA7XHJcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2coY2hbMV0pXHJcblxyXG4gICAgY29uc3QgbWVudV9saXN0PVtdO1xyXG4gICAgaWYoY2hbMV0gPiAxKXtcclxuICAgICAgICBtZW51X2xpc3QucHVzaChcclxuICAgICAgICAgIDxsaT48TGluayBjbGFzc05hbWU9e2J0bl9zdHlsZS5idG5fc3R5bGV9IGhyZWY9e1wiL1wiK2NoWzBdK1wiL1wiKyhjaFsxXS0xKX0+QmFjazwvTGluaz48L2xpPlxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2J0bl9zdHlsZS5zZXRfb3ZlcmxheX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtpc1Zpc2libGUgPyAnb3BhY2l0eS0xMDAnIDogJ29wYWNpdHktMCd9PlxyXG4gICAgICAgICAgICB7bWVudV9saXN0fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNoYW5nZUNoIiwiY2giLCJpc1Zpc2libGUiLCJzZXRJc1Zpc2libGUiLCJ0b2dnbGVWaXNpYmlsaXR5Iiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImJ0bl9zdHlsZSIsInN5bWJvbF9zdHlsZSIsInNldF9vdmVybGF5IiwiY2xpY2tCVFQiLCJldmVudCIsImRvY3VtZW50IiwiYm9keSIsInNjcm9sbFRvcCIsImRvY3VtZW50RWxlbWVudCIsImNvbnNvbGUiLCJsb2ciLCJtZW51X2xpc3QiLCJwdXNoIiwibGkiLCJMaW5rIiwiY2xhc3NOYW1lIiwiaHJlZiIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/overlay/ChangeCh.js\n"));

/***/ })

});