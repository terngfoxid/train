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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChangeCh; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction ChangeCh(param) {\n    let { ch , total_ch  } = param;\n    _s();\n    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    //show or not show\n    const toggleVisibility = ()=>{\n        if (window.pageYOffset > 300) {\n            setIsVisible(true);\n        } else {\n            setIsVisible(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"scroll\", toggleVisibility);\n        return ()=>{\n            window.removeEventListener(\"scroll\", toggleVisibility);\n        };\n    }, []);\n    const btn_style = {\n        symbol_style: \" w-5/6 text-zinc-200 text-2xl font-bold font-serif \",\n        btn_style: \" p-2 rounded shadow-md border border-gray-800 bg-[#4F526C] hover:bg-neutral-400\",\n        set_overlay: \"fixed bottom-2 left-2 md:bottom-5 md:left-5 \"\n    };\n    const clickBTT = (event)=>{\n        document.body.scrollTop = 0;\n        document.documentElement.scrollTop = 0;\n    };\n    console.log(ch);\n    if (ch == null) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: btn_style.set_overlay,\n        children: \" \"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\terng\\\\train\\\\first-project\\\\components\\\\overlay\\\\ChangeCh.js\",\n        lineNumber: 41,\n        columnNumber: 9\n    }, this);\n    //console.log(ch[1])\n    const menu_list = [];\n    if (ch[1] > 1) {\n        menu_list.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            className: btn_style.btn_style,\n            href: \"/manga/\" + ch[0] + \"/\" + (parseInt(ch[1], 10) - 1),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                \"aria-hidden\": \"true\",\n                focusable: \"false\",\n                \"data-prefix\": \"fas\",\n                class: \"w-8 h-8 md:w-8 md:h-8\",\n                role: \"img\",\n                xmlns: \"http://www.w3.org/2000/svg\",\n                viewBox: \"0 0 448 512\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                    fill: \"white\",\n                    d: \"M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\terng\\\\train\\\\first-project\\\\components\\\\overlay\\\\ChangeCh.js\",\n                    lineNumber: 59,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\terng\\\\train\\\\first-project\\\\components\\\\overlay\\\\ChangeCh.js\",\n                lineNumber: 50,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\terng\\\\train\\\\first-project\\\\components\\\\overlay\\\\ChangeCh.js\",\n            lineNumber: 49,\n            columnNumber: 13\n        }, this));\n    }\n    if (ch[1] < total_ch) {\n        menu_list.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n            className: btn_style.btn_style,\n            href: \"/manga/\" + ch[0] + \"/\" + (parseInt(ch[1], 10) + 1)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\terng\\\\train\\\\first-project\\\\components\\\\overlay\\\\ChangeCh.js\",\n            lineNumber: 69,\n            columnNumber: 13\n        }, this));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: btn_style.set_overlay,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: isVisible ? \"opacity-100\" : \"opacity-0\",\n            children: menu_list\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\terng\\\\train\\\\first-project\\\\components\\\\overlay\\\\ChangeCh.js\",\n            lineNumber: 77,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\terng\\\\train\\\\first-project\\\\components\\\\overlay\\\\ChangeCh.js\",\n        lineNumber: 76,\n        columnNumber: 9\n    }, this);\n}\n_s(ChangeCh, \"J3yJOyGdBT4L7hs1p1XQYVGMdrY=\");\n_c = ChangeCh;\nvar _c;\n$RefreshReg$(_c, \"ChangeCh\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL292ZXJsYXkvQ2hhbmdlQ2guanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUEyQztBQUNmO0FBRWIsU0FBU0csU0FBUyxLQUFnQixFQUFFO1FBQWxCLEVBQUVDLEdBQUUsRUFBRUMsU0FBUSxFQUFFLEdBQWhCOztJQUU3QixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR04sK0NBQVFBLENBQUMsS0FBSztJQUVoRCxrQkFBa0I7SUFDbEIsTUFBTU8sbUJBQW1CLElBQU07UUFDM0IsSUFBSUMsT0FBT0MsV0FBVyxHQUFHLEtBQUs7WUFDMUJILGFBQWEsSUFBSTtRQUNyQixPQUFPO1lBQ0hBLGFBQWEsS0FBSztRQUN0QixDQUFDO0lBQ0w7SUFFQVAsZ0RBQVNBLENBQUMsSUFBTTtRQUNaUyxPQUFPRSxnQkFBZ0IsQ0FBQyxVQUFVSDtRQUVsQyxPQUFPLElBQU07WUFDVEMsT0FBT0csbUJBQW1CLENBQUMsVUFBVUo7UUFDekM7SUFDSixHQUFHLEVBQUU7SUFFTCxNQUFNSyxZQUNGO1FBQ0lDLGNBQWM7UUFDZEQsV0FBVztRQUNYRSxhQUFhO0lBQ2pCO0lBR0osTUFBTUMsV0FBVyxDQUFDQyxRQUFVO1FBQ3hCQyxTQUFTQyxJQUFJLENBQUNDLFNBQVMsR0FBRztRQUMxQkYsU0FBU0csZUFBZSxDQUFDRCxTQUFTLEdBQUc7SUFDekM7SUFFQUUsUUFBUUMsR0FBRyxDQUFDbkI7SUFFWixJQUFJQSxNQUFNLElBQUksRUFBRSxxQkFDWiw4REFBQ29CO1FBQUlDLFdBQVdaLFVBQVVFLFdBQVc7a0JBQUU7Ozs7OztJQUczQyxvQkFBb0I7SUFFcEIsTUFBTVcsWUFBWSxFQUFFO0lBQ3BCLElBQUl0QixFQUFFLENBQUMsRUFBRSxHQUFHLEdBQUc7UUFDWHNCLFVBQVVDLElBQUksZUFDViw4REFBQ0M7WUFBT0gsV0FBV1osVUFBVUEsU0FBUztZQUFFZ0IsTUFBTSxZQUFZekIsRUFBRSxDQUFDLEVBQUUsR0FBRyxNQUFPMEIsQ0FBQUEsU0FBUzFCLEVBQUUsQ0FBQyxFQUFFLEVBQUUsTUFBTTtzQkFDM0YsNEVBQUMyQjtnQkFDR0MsZUFBWTtnQkFDWkMsV0FBVTtnQkFDVkMsZUFBWTtnQkFDWkMsT0FBTTtnQkFDTkMsTUFBSztnQkFDTEMsT0FBTTtnQkFDTkMsU0FBUTswQkFFUiw0RUFBQ0M7b0JBQ0dDLE1BQUs7b0JBQ0xDLEdBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7SUFLdEIsQ0FBQztJQUNELElBQUlyQyxFQUFFLENBQUMsRUFBRSxHQUFJQyxVQUFXO1FBQ3BCcUIsVUFBVUMsSUFBSSxlQUNWLDhEQUFDekIsa0RBQUlBO1lBQUN1QixXQUFXWixVQUFVQSxTQUFTO1lBQUVnQixNQUFNLFlBQVl6QixFQUFFLENBQUMsRUFBRSxHQUFHLE1BQU8wQixDQUFBQSxTQUFTMUIsRUFBRSxDQUFDLEVBQUUsRUFBRSxNQUFNOzs7Ozs7SUFJckcsQ0FBQztJQUVELHFCQUNJLDhEQUFDb0I7UUFBSUMsV0FBV1osVUFBVUUsV0FBVztrQkFDakMsNEVBQUNTO1lBQUlDLFdBQVduQixZQUFZLGdCQUFnQixXQUFXO3NCQUNsRG9COzs7Ozs7Ozs7OztBQUlqQixDQUFDO0dBOUV1QnZCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvb3ZlcmxheS9DaGFuZ2VDaC5qcz80NjFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hhbmdlQ2goeyBjaCwgdG90YWxfY2ggfSkge1xyXG5cclxuICAgIGNvbnN0IFtpc1Zpc2libGUsIHNldElzVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICAvL3Nob3cgb3Igbm90IHNob3dcclxuICAgIGNvbnN0IHRvZ2dsZVZpc2liaWxpdHkgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IDMwMCkge1xyXG4gICAgICAgICAgICBzZXRJc1Zpc2libGUodHJ1ZSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRJc1Zpc2libGUoZmFsc2UpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRvZ2dsZVZpc2liaWxpdHkpXHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0b2dnbGVWaXNpYmlsaXR5KVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGNvbnN0IGJ0bl9zdHlsZSA9IChcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN5bWJvbF9zdHlsZTogJyB3LTUvNiB0ZXh0LXppbmMtMjAwIHRleHQtMnhsIGZvbnQtYm9sZCBmb250LXNlcmlmICcsXHJcbiAgICAgICAgICAgIGJ0bl9zdHlsZTogXCIgcC0yIHJvdW5kZWQgc2hhZG93LW1kIGJvcmRlciBib3JkZXItZ3JheS04MDAgYmctWyM0RjUyNkNdIGhvdmVyOmJnLW5ldXRyYWwtNDAwXCIsXHJcbiAgICAgICAgICAgIHNldF9vdmVybGF5OiBcImZpeGVkIGJvdHRvbS0yIGxlZnQtMiBtZDpib3R0b20tNSBtZDpsZWZ0LTUgXCIsXHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBjbGlja0JUVCA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gMDtcclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhjaClcclxuXHJcbiAgICBpZiAoY2ggPT0gbnVsbCkgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YnRuX3N0eWxlLnNldF9vdmVybGF5fT4gPC9kaXY+XHJcbiAgICApXHJcblxyXG4gICAgLy9jb25zb2xlLmxvZyhjaFsxXSlcclxuXHJcbiAgICBjb25zdCBtZW51X2xpc3QgPSBbXTtcclxuICAgIGlmIChjaFsxXSA+IDEpIHtcclxuICAgICAgICBtZW51X2xpc3QucHVzaChcclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2J0bl9zdHlsZS5idG5fc3R5bGV9IGhyZWY9e1wiL21hbmdhL1wiICsgY2hbMF0gKyBcIi9cIiArIChwYXJzZUludChjaFsxXSwgMTApIC0gMSl9PlxyXG4gICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZm9jdXNhYmxlPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtcHJlZml4PVwiZmFzXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInctOCBoLTggbWQ6dy04IG1kOmgtOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcm9sZT1cImltZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA0NDggNTEyXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwid2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTM0LjkgMjg5LjVsLTIyLjItMjIuMmMtOS40LTkuNC05LjQtMjQuNiAwLTMzLjlMMjA3IDM5YzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDE5NC4zIDE5NC4zYzkuNCA5LjQgOS40IDI0LjYgMCAzMy45TDQxMyAyODkuNGMtOS41IDkuNS0yNSA5LjMtMzQuMy0uNEwyNjQgMTY4LjZWNDU2YzAgMTMuMy0xMC43IDI0LTI0IDI0aC0zMmMtMTMuMyAwLTI0LTEwLjctMjQtMjRWMTY4LjZMNjkuMiAyODkuMWMtOS4zIDkuOC0yNC44IDEwLTM0LjMuNHpcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgaWYgKGNoWzFdIDwgKHRvdGFsX2NoKSkge1xyXG4gICAgICAgIG1lbnVfbGlzdC5wdXNoKFxyXG4gICAgICAgICAgICA8TGluayBjbGFzc05hbWU9e2J0bl9zdHlsZS5idG5fc3R5bGV9IGhyZWY9e1wiL21hbmdhL1wiICsgY2hbMF0gKyBcIi9cIiArIChwYXJzZUludChjaFsxXSwgMTApICsgMSl9PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YnRuX3N0eWxlLnNldF9vdmVybGF5fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2lzVmlzaWJsZSA/ICdvcGFjaXR5LTEwMCcgOiAnb3BhY2l0eS0wJ30+XHJcbiAgICAgICAgICAgICAgICB7bWVudV9saXN0fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJDaGFuZ2VDaCIsImNoIiwidG90YWxfY2giLCJpc1Zpc2libGUiLCJzZXRJc1Zpc2libGUiLCJ0b2dnbGVWaXNpYmlsaXR5Iiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImJ0bl9zdHlsZSIsInN5bWJvbF9zdHlsZSIsInNldF9vdmVybGF5IiwiY2xpY2tCVFQiLCJldmVudCIsImRvY3VtZW50IiwiYm9keSIsInNjcm9sbFRvcCIsImRvY3VtZW50RWxlbWVudCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJtZW51X2xpc3QiLCJwdXNoIiwiYnV0dG9uIiwiaHJlZiIsInBhcnNlSW50Iiwic3ZnIiwiYXJpYS1oaWRkZW4iLCJmb2N1c2FibGUiLCJkYXRhLXByZWZpeCIsImNsYXNzIiwicm9sZSIsInhtbG5zIiwidmlld0JveCIsInBhdGgiLCJmaWxsIiwiZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/overlay/ChangeCh.js\n"));

/***/ })

});