"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/register",{

/***/ "./pages/register.js":
/*!***************************!*\
  !*** ./pages/register.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Register; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nfunction Register() {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                class: \"p-5 mb-1 bg-light jumbotron text-center\",\n                __source: {\n                    fileName: \"E:\\\\xampp\\\\htdocs\\\\belajar\\\\edemy\\\\client\\\\pages\\\\register.js\",\n                    lineNumber: 4,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    class: \"container-fluid py-5\",\n                    __source: {\n                        fileName: \"E:\\\\xampp\\\\htdocs\\\\belajar\\\\edemy\\\\client\\\\pages\\\\register.js\",\n                        lineNumber: 5,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                        class: \"display-5 fw-bold textJumbotron\",\n                        __source: {\n                            fileName: \"E:\\\\xampp\\\\htdocs\\\\belajar\\\\edemy\\\\client\\\\pages\\\\register.js\",\n                            lineNumber: 6,\n                            columnNumber: 11\n                        },\n                        __self: this,\n                        children: \"Register\"\n                    })\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"container col-md-4 offset-md-4 pb-5\",\n                __source: {\n                    fileName: \"E:\\\\xampp\\\\htdocs\\\\belajar\\\\edemy\\\\client\\\\pages\\\\register.js\",\n                    lineNumber: 9,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"form\", {\n                    onSubmit: handleSubmit,\n                    __source: {\n                        fileName: \"E:\\\\xampp\\\\htdocs\\\\belajar\\\\edemy\\\\client\\\\pages\\\\register.js\",\n                        lineNumber: 10,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                        type: \"text\",\n                        class: true,\n                        __source: {\n                            fileName: \"E:\\\\xampp\\\\htdocs\\\\belajar\\\\edemy\\\\client\\\\pages\\\\register.js\",\n                            lineNumber: 11,\n                            columnNumber: 11\n                        },\n                        __self: this\n                    })\n                })\n            })\n        ]\n    }));\n};\n_c = Register;\nvar _c;\n$RefreshReg$(_c, \"Register\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZWdpc3Rlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFlLFFBQVEsQ0FBQ0EsUUFBUSxHQUFHLENBQUM7SUFDbEMsTUFBTTs7aUZBRURDLENBQUc7Z0JBQUNDLEtBQUssRUFBQyxDQUF5Qzs7Ozs7OzsrRkFDakRELENBQUc7b0JBQUNDLEtBQUssRUFBQyxDQUFzQjs7Ozs7OzttR0FDOUJDLENBQUU7d0JBQUNELEtBQUssRUFBQyxDQUFpQzs7Ozs7OztrQ0FBQyxDQUFROzs7O2lGQUd2REQsQ0FBRztnQkFBQ0csU0FBUyxFQUFDLENBQXFDOzs7Ozs7OytGQUNqREMsQ0FBSTtvQkFBQ0MsUUFBUSxFQUFFQyxZQUFZOzs7Ozs7O21HQUN6QkMsQ0FBSzt3QkFBQ0MsSUFBSSxFQUFFLENBQU07d0JBQUVQLEtBQUs7Ozs7Ozs7Ozs7OztBQUtwQyxDQUFDO0tBZnVCRixRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3JlZ2lzdGVyLmpzP2EwOTciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVnaXN0ZXIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwLTUgbWItMSBiZy1saWdodCBqdW1ib3Ryb24gdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkIHB5LTVcIj5cclxuICAgICAgICAgIDxoMSBjbGFzcz1cImRpc3BsYXktNSBmdy1ib2xkIHRleHRKdW1ib3Ryb25cIj5SZWdpc3RlcjwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb2wtbWQtNCBvZmZzZXQtbWQtNCBwYi01XCI+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT17XCJ0ZXh0XCJ9IGNsYXNzIC8+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlZ2lzdGVyIiwiZGl2IiwiY2xhc3MiLCJoMSIsImNsYXNzTmFtZSIsImZvcm0iLCJvblN1Ym1pdCIsImhhbmRsZVN1Ym1pdCIsImlucHV0IiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/register.js\n");

/***/ })

});