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

/***/ "./components/overlay/BackToTop.js":
/*!*****************************************!*\
  !*** ./components/overlay/BackToTop.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BackToTop; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction BackToTop() {\n    _s();\n    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    //show or not show\n    const toggleVisibility = ()=>{\n        if (window.pageYOffset > 300) {\n            setIsVisible(true);\n        } else {\n            setIsVisible(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"scroll\", toggleVisibility);\n        return ()=>{\n            window.removeEventListener(\"scroll\", toggleVisibility);\n        };\n    }, []);\n    const btn_style = {\n        symbol_style: \"w-5/6 text-zinc-200 text-2xl font-bold font-serif \",\n        btn_style: \" p-2 rounded shadow-md border border-gray-800 bg-[#4F526C] hover:bg-neutral-400\",\n        set_overlay: \"fixed bottom-2 right-2 md:bottom-5 md:right-5 \"\n    };\n    const clickBTT = (event)=>{\n        document.body.scrollTop = 0;\n        document.documentElement.scrollTop = 0;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: btn_style.set_overlay,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: isVisible ? clickBTT : \"\",\n            className: isVisible ? btn_style.btn_style + \" \" + \"opacity-100\" : \"opacity-0 \",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                \"aria-hidden\": \"true\",\n                focusable: \"false\",\n                \"data-prefix\": \"fas\",\n                class: \"w-8 h-8 md:w-8 md:h-8\",\n                role: \"img\",\n                xmlns: \"http://www.w3.org/2000/svg\",\n                viewBox: \"0 0 448 512\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                    fill: \"white\",\n                    d: \"M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\terng\\\\train\\\\first-project\\\\components\\\\overlay\\\\BackToTop.js\",\n                    lineNumber: 50,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\terng\\\\train\\\\first-project\\\\components\\\\overlay\\\\BackToTop.js\",\n                lineNumber: 41,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\terng\\\\train\\\\first-project\\\\components\\\\overlay\\\\BackToTop.js\",\n            lineNumber: 39,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\terng\\\\train\\\\first-project\\\\components\\\\overlay\\\\BackToTop.js\",\n        lineNumber: 38,\n        columnNumber: 9\n    }, this);\n}\n_s(BackToTop, \"J3yJOyGdBT4L7hs1p1XQYVGMdrY=\");\n_c = BackToTop;\nvar _c;\n$RefreshReg$(_c, \"BackToTop\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL292ZXJsYXkvQmFja1RvVG9wLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQTJDO0FBRTVCLFNBQVNFLFlBQVk7O0lBRWhDLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHSCwrQ0FBUUEsQ0FBQyxLQUFLO0lBRWhELGtCQUFrQjtJQUNsQixNQUFNSSxtQkFBbUIsSUFBTTtRQUMzQixJQUFJQyxPQUFPQyxXQUFXLEdBQUcsS0FBSztZQUMxQkgsYUFBYSxJQUFJO1FBQ3JCLE9BQU87WUFDSEEsYUFBYSxLQUFLO1FBQ3RCLENBQUM7SUFDTDtJQUVBSixnREFBU0EsQ0FBQyxJQUFNO1FBQ1pNLE9BQU9FLGdCQUFnQixDQUFDLFVBQVVIO1FBRWxDLE9BQU8sSUFBTTtZQUNUQyxPQUFPRyxtQkFBbUIsQ0FBQyxVQUFVSjtRQUN6QztJQUNKLEdBQUcsRUFBRTtJQUVMLE1BQU1LLFlBQ0Y7UUFDSUMsY0FBYztRQUNkRCxXQUFXO1FBQ1hFLGFBQWE7SUFDakI7SUFHSixNQUFNQyxXQUFXLENBQUNDLFFBQVU7UUFDeEJDLFNBQVNDLElBQUksQ0FBQ0MsU0FBUyxHQUFHO1FBQzFCRixTQUFTRyxlQUFlLENBQUNELFNBQVMsR0FBRztJQUN6QztJQUVBLHFCQUNJLDhEQUFDRTtRQUFJQyxXQUFXVixVQUFVRSxXQUFXO2tCQUNqQyw0RUFBQ1M7WUFBT0MsU0FBU25CLFlBQVlVLFdBQVcsRUFBRTtZQUFFTyxXQUFXakIsWUFBWU8sVUFBVUEsU0FBUyxHQUFHLE1BQU0sZ0JBQWdCLFlBQVk7c0JBRXZILDRFQUFDYTtnQkFDR0MsZUFBWTtnQkFDWkMsV0FBVTtnQkFDVkMsZUFBWTtnQkFDWkMsT0FBTTtnQkFDTkMsTUFBSztnQkFDTEMsT0FBTTtnQkFDTkMsU0FBUTswQkFFUiw0RUFBQ0M7b0JBQ0dDLE1BQUs7b0JBQ0xDLEdBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU0xQixDQUFDO0dBdkR1Qi9CO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvb3ZlcmxheS9CYWNrVG9Ub3AuanM/Mjg0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYWNrVG9Ub3AoKSB7XHJcblxyXG4gICAgY29uc3QgW2lzVmlzaWJsZSwgc2V0SXNWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIC8vc2hvdyBvciBub3Qgc2hvd1xyXG4gICAgY29uc3QgdG9nZ2xlVmlzaWJpbGl0eSA9ICgpID0+IHtcclxuICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gMzAwKSB7XHJcbiAgICAgICAgICAgIHNldElzVmlzaWJsZSh0cnVlKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldElzVmlzaWJsZShmYWxzZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdG9nZ2xlVmlzaWJpbGl0eSlcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRvZ2dsZVZpc2liaWxpdHkpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgY29uc3QgYnRuX3N0eWxlID0gKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3ltYm9sX3N0eWxlOiAndy01LzYgdGV4dC16aW5jLTIwMCB0ZXh0LTJ4bCBmb250LWJvbGQgZm9udC1zZXJpZiAnLFxyXG4gICAgICAgICAgICBidG5fc3R5bGU6IFwiIHAtMiByb3VuZGVkIHNoYWRvdy1tZCBib3JkZXIgYm9yZGVyLWdyYXktODAwIGJnLVsjNEY1MjZDXSBob3ZlcjpiZy1uZXV0cmFsLTQwMFwiLFxyXG4gICAgICAgICAgICBzZXRfb3ZlcmxheTogXCJmaXhlZCBib3R0b20tMiByaWdodC0yIG1kOmJvdHRvbS01IG1kOnJpZ2h0LTUgXCIsXHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBjbGlja0JUVCA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gMDtcclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID0gMDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtidG5fc3R5bGUuc2V0X292ZXJsYXl9PlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2lzVmlzaWJsZSA/IGNsaWNrQlRUIDogXCJcIn0gY2xhc3NOYW1lPXtpc1Zpc2libGUgPyBidG5fc3R5bGUuYnRuX3N0eWxlICsgXCIgXCIgKyAnb3BhY2l0eS0xMDAnIDogJ29wYWNpdHktMCAnfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICBmb2N1c2FibGU9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1wcmVmaXg9XCJmYXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidy04IGgtOCBtZDp3LTggbWQ6aC04XCJcclxuICAgICAgICAgICAgICAgICAgICByb2xlPVwiaW1nXCJcclxuICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMzQuOSAyODkuNWwtMjIuMi0yMi4yYy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUwyMDcgMzljOS40LTkuNCAyNC42LTkuNCAzMy45IDBsMTk0LjMgMTk0LjNjOS40IDkuNCA5LjQgMjQuNiAwIDMzLjlMNDEzIDI4OS40Yy05LjUgOS41LTI1IDkuMy0zNC4zLS40TDI2NCAxNjguNlY0NTZjMCAxMy4zLTEwLjcgMjQtMjQgMjRoLTMyYy0xMy4zIDAtMjQtMTAuNy0yNC0yNFYxNjguNkw2OS4yIDI4OS4xYy05LjMgOS44LTI0LjggMTAtMzQuMy40elwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkJhY2tUb1RvcCIsImlzVmlzaWJsZSIsInNldElzVmlzaWJsZSIsInRvZ2dsZVZpc2liaWxpdHkiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYnRuX3N0eWxlIiwic3ltYm9sX3N0eWxlIiwic2V0X292ZXJsYXkiLCJjbGlja0JUVCIsImV2ZW50IiwiZG9jdW1lbnQiLCJib2R5Iiwic2Nyb2xsVG9wIiwiZG9jdW1lbnRFbGVtZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsInN2ZyIsImFyaWEtaGlkZGVuIiwiZm9jdXNhYmxlIiwiZGF0YS1wcmVmaXgiLCJjbGFzcyIsInJvbGUiLCJ4bWxucyIsInZpZXdCb3giLCJwYXRoIiwiZmlsbCIsImQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/overlay/BackToTop.js\n"));

/***/ })

});