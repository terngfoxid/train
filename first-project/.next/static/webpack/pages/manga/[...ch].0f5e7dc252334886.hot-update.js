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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChangeCh; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction ChangeCh(param) {\n    let { ch  } = param;\n    _s();\n    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    //show or not show\n    const toggleVisibility = ()=>{\n        if (window.pageYOffset > 300) {\n            setIsVisible(true);\n        } else {\n            setIsVisible(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"scroll\", toggleVisibility);\n        return ()=>{\n            window.removeEventListener(\"scroll\", toggleVisibility);\n        };\n    }, []);\n    const btn_style = {\n        symbol_style: \"w-5/6 text-zinc-200 text-2xl font-bold font-serif \",\n        btn_style: \" p-2 rounded shadow-md border border-gray-800 bg-[#4F526C] hover:bg-neutral-400\",\n        set_overlay: \"fixed bottom-2 left-2 md:bottom-5 md:right-5 \"\n    };\n    const clickBTT = (event)=>{\n        document.body.scrollTop = 0;\n        document.documentElement.scrollTop = 0;\n    };\n    console.log(ch);\n    if (ch == null) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n        fileName: \"C:\\\\Users\\\\terng\\\\train\\\\first-project\\\\components\\\\overlay\\\\ChangeCh.js\",\n        lineNumber: 40,\n        columnNumber: 9\n    }, this);\n    console.log(ch[1]);\n    const menu_list = [];\n    if (ch[1] > 1) {\n        menu_list.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {\n                className: btn_style.btn_style,\n                href: \"/\" + ch[0] + \"/\" + (ch[1] - 1),\n                children: \"Back\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\terng\\\\train\\\\first-project\\\\components\\\\overlay\\\\ChangeCh.js\",\n                lineNumber: 49,\n                columnNumber: 15\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\terng\\\\train\\\\first-project\\\\components\\\\overlay\\\\ChangeCh.js\",\n            lineNumber: 49,\n            columnNumber: 11\n        }, this));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: btn_style.set_overlay,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: isVisible ? \"opacity-100\" : \"opacity-0\",\n            children: menu_list\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\terng\\\\train\\\\first-project\\\\components\\\\overlay\\\\ChangeCh.js\",\n            lineNumber: 57,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\terng\\\\train\\\\first-project\\\\components\\\\overlay\\\\ChangeCh.js\",\n        lineNumber: 56,\n        columnNumber: 9\n    }, this);\n}\n_s(ChangeCh, \"J3yJOyGdBT4L7hs1p1XQYVGMdrY=\");\n_c = ChangeCh;\nvar _c;\n$RefreshReg$(_c, \"ChangeCh\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL292ZXJsYXkvQ2hhbmdlQ2guanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFBMkM7QUFFNUIsU0FBU0UsU0FBUyxLQUFJLEVBQUU7UUFBTixFQUFDQyxHQUFFLEVBQUMsR0FBSjs7SUFFN0IsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdKLCtDQUFRQSxDQUFDLEtBQUs7SUFFaEQsa0JBQWtCO0lBQ2xCLE1BQU1LLG1CQUFtQixJQUFNO1FBQzNCLElBQUlDLE9BQU9DLFdBQVcsR0FBRyxLQUFLO1lBQzFCSCxhQUFhLElBQUk7UUFDckIsT0FBTztZQUNIQSxhQUFhLEtBQUs7UUFDdEIsQ0FBQztJQUNMO0lBRUFMLGdEQUFTQSxDQUFDLElBQU07UUFDWk8sT0FBT0UsZ0JBQWdCLENBQUMsVUFBVUg7UUFFbEMsT0FBTyxJQUFNO1lBQ1RDLE9BQU9HLG1CQUFtQixDQUFDLFVBQVVKO1FBQ3pDO0lBQ0osR0FBRyxFQUFFO0lBRUwsTUFBTUssWUFDRjtRQUNJQyxjQUFjO1FBQ2RELFdBQVc7UUFDWEUsYUFBYTtJQUNqQjtJQUdKLE1BQU1DLFdBQVcsQ0FBQ0MsUUFBVTtRQUN4QkMsU0FBU0MsSUFBSSxDQUFDQyxTQUFTLEdBQUc7UUFDMUJGLFNBQVNHLGVBQWUsQ0FBQ0QsU0FBUyxHQUFHO0lBQ3pDO0lBRUFFLFFBQVFDLEdBQUcsQ0FBQ2xCO0lBRVosSUFBSUEsTUFBTSxJQUFJLEVBQUUscUJBQ1osOERBQUNtQjs7Ozs7SUFJTEYsUUFBUUMsR0FBRyxDQUFDbEIsRUFBRSxDQUFDLEVBQUU7SUFFakIsTUFBTW9CLFlBQVUsRUFBRTtJQUNsQixJQUFHcEIsRUFBRSxDQUFDLEVBQUUsR0FBRyxHQUFFO1FBQ1RvQixVQUFVQyxJQUFJLGVBQ1osOERBQUNDO3NCQUFHLDRFQUFDQztnQkFBS0MsV0FBV2hCLFVBQVVBLFNBQVM7Z0JBQUVpQixNQUFNLE1BQUl6QixFQUFFLENBQUMsRUFBRSxHQUFDLE1BQUtBLENBQUFBLEVBQUUsQ0FBQyxFQUFFLEdBQUM7MEJBQUk7Ozs7Ozs7Ozs7O0lBRTdFLENBQUM7SUFJSCxxQkFDSSw4REFBQ21CO1FBQUlLLFdBQVdoQixVQUFVRSxXQUFXO2tCQUNqQyw0RUFBQ1M7WUFBSUssV0FBV3ZCLFlBQVksZ0JBQWdCLFdBQVc7c0JBQ3REbUI7Ozs7Ozs7Ozs7O0FBSWIsQ0FBQztHQTNEdUJyQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL292ZXJsYXkvQ2hhbmdlQ2guanM/NDYxZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGFuZ2VDaCh7Y2h9KSB7XHJcblxyXG4gICAgY29uc3QgW2lzVmlzaWJsZSwgc2V0SXNWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIC8vc2hvdyBvciBub3Qgc2hvd1xyXG4gICAgY29uc3QgdG9nZ2xlVmlzaWJpbGl0eSA9ICgpID0+IHtcclxuICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gMzAwKSB7XHJcbiAgICAgICAgICAgIHNldElzVmlzaWJsZSh0cnVlKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldElzVmlzaWJsZShmYWxzZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdG9nZ2xlVmlzaWJpbGl0eSlcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRvZ2dsZVZpc2liaWxpdHkpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgY29uc3QgYnRuX3N0eWxlID0gKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3ltYm9sX3N0eWxlOiAndy01LzYgdGV4dC16aW5jLTIwMCB0ZXh0LTJ4bCBmb250LWJvbGQgZm9udC1zZXJpZiAnLFxyXG4gICAgICAgICAgICBidG5fc3R5bGU6IFwiIHAtMiByb3VuZGVkIHNoYWRvdy1tZCBib3JkZXIgYm9yZGVyLWdyYXktODAwIGJnLVsjNEY1MjZDXSBob3ZlcjpiZy1uZXV0cmFsLTQwMFwiLFxyXG4gICAgICAgICAgICBzZXRfb3ZlcmxheTogXCJmaXhlZCBib3R0b20tMiBsZWZ0LTIgbWQ6Ym90dG9tLTUgbWQ6cmlnaHQtNSBcIixcclxuICAgICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGNsaWNrQlRUID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSAwO1xyXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKGNoKVxyXG5cclxuICAgIGlmIChjaCA9PSBudWxsKSByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgPiAgICAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG5cclxuICAgIGNvbnNvbGUubG9nKGNoWzFdKVxyXG5cclxuICAgIGNvbnN0IG1lbnVfbGlzdD1bXTtcclxuICAgIGlmKGNoWzFdID4gMSl7XHJcbiAgICAgICAgbWVudV9saXN0LnB1c2goXHJcbiAgICAgICAgICA8bGk+PExpbmsgY2xhc3NOYW1lPXtidG5fc3R5bGUuYnRuX3N0eWxlfSBocmVmPXtcIi9cIitjaFswXStcIi9cIisoY2hbMV0tMSl9PkJhY2s8L0xpbms+PC9saT5cclxuICAgICAgICApXHJcbiAgICAgIH1cclxuXHJcbiAgICBcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtidG5fc3R5bGUuc2V0X292ZXJsYXl9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aXNWaXNpYmxlID8gJ29wYWNpdHktMTAwJyA6ICdvcGFjaXR5LTAnfT5cclxuICAgICAgICAgICAge21lbnVfbGlzdH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDaGFuZ2VDaCIsImNoIiwiaXNWaXNpYmxlIiwic2V0SXNWaXNpYmxlIiwidG9nZ2xlVmlzaWJpbGl0eSIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJidG5fc3R5bGUiLCJzeW1ib2xfc3R5bGUiLCJzZXRfb3ZlcmxheSIsImNsaWNrQlRUIiwiZXZlbnQiLCJkb2N1bWVudCIsImJvZHkiLCJzY3JvbGxUb3AiLCJkb2N1bWVudEVsZW1lbnQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwibWVudV9saXN0IiwicHVzaCIsImxpIiwiTGluayIsImNsYXNzTmFtZSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/overlay/ChangeCh.js\n"));

/***/ })

});