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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Register; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _s = $RefreshSig$();\nfunction Register() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), name = ref[0], setName = ref[1];\n    var handleSubmit = function(e) {\n        e.preventDefault();\n        console.table({\n            name: name,\n            email: email,\n            password: password\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                class: \"p-5 mb-1 bg-light jumbotron text-center\",\n                __source: {\n                    fileName: \"E:\\\\xampp\\\\htdocs\\\\belajar\\\\edemy\\\\client\\\\pages\\\\register.js\",\n                    lineNumber: 11,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    class: \"container-fluid py-5\",\n                    __source: {\n                        fileName: \"E:\\\\xampp\\\\htdocs\\\\belajar\\\\edemy\\\\client\\\\pages\\\\register.js\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                        class: \"display-5 fw-bold textJumbotron\",\n                        __source: {\n                            fileName: \"E:\\\\xampp\\\\htdocs\\\\belajar\\\\edemy\\\\client\\\\pages\\\\register.js\",\n                            lineNumber: 13,\n                            columnNumber: 11\n                        },\n                        __self: this,\n                        children: \"Register\"\n                    })\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"container col-md-4 offset-md-4 pb-5 mt-1\",\n                __source: {\n                    fileName: \"E:\\\\xampp\\\\htdocs\\\\belajar\\\\edemy\\\\client\\\\pages\\\\register.js\",\n                    lineNumber: 16,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"form\", {\n                    onSubmit: handleSubmit,\n                    __source: {\n                        fileName: \"E:\\\\xampp\\\\htdocs\\\\belajar\\\\edemy\\\\client\\\\pages\\\\register.js\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                        type: \"text\",\n                        className: \"form-control mb-4 p-4\",\n                        value: name,\n                        onChange: function(e) {\n                            return setName(e.target.value);\n                        },\n                        placeholder: \"Enter Name\",\n                        required: true,\n                        __source: {\n                            fileName: \"E:\\\\xampp\\\\htdocs\\\\belajar\\\\edemy\\\\client\\\\pages\\\\register.js\",\n                            lineNumber: 18,\n                            columnNumber: 11\n                        },\n                        __self: this\n                    })\n                })\n            })\n        ]\n    }));\n};\n_s(Register, \"zh+HvXX3zxuqMkvNfneES9FE1vU=\");\n_c = Register;\nvar _c;\n$RefreshReg$(_c, \"Register\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZWdpc3Rlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWdDOztBQUNqQixRQUFRLENBQUNDLFFBQVEsR0FBRyxDQUFDOztJQUNsQyxHQUFLLENBQW1CRCxHQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBRSxJQUE1QkUsSUFBSSxHQUFhRixHQUFZLEtBQXZCRyxPQUFPLEdBQUlILEdBQVk7SUFFcEMsR0FBSyxDQUFDSSxZQUFZLEdBQUcsUUFBUSxDQUFQQyxDQUFDLEVBQUssQ0FBQztRQUMzQkEsQ0FBQyxDQUFDQyxjQUFjO1FBQ2hCQyxPQUFPLENBQUNDLEtBQUssQ0FBQyxDQUFDO1lBQUNOLElBQUksRUFBSkEsSUFBSTtZQUFFTyxLQUFLLEVBQUxBLEtBQUs7WUFBRUMsUUFBUSxFQUFSQSxRQUFRO1FBQUMsQ0FBQztJQUN6QyxDQUFDO0lBQ0QsTUFBTTs7aUZBRURDLENBQUc7Z0JBQUNDLEtBQUssRUFBQyxDQUF5Qzs7Ozs7OzsrRkFDakRELENBQUc7b0JBQUNDLEtBQUssRUFBQyxDQUFzQjs7Ozs7OzttR0FDOUJDLENBQUU7d0JBQUNELEtBQUssRUFBQyxDQUFpQzs7Ozs7OztrQ0FBQyxDQUFROzs7O2lGQUd2REQsQ0FBRztnQkFBQ0csU0FBUyxFQUFDLENBQTBDOzs7Ozs7OytGQUN0REMsQ0FBSTtvQkFBQ0MsUUFBUSxFQUFFWixZQUFZOzs7Ozs7O21HQUN6QmEsQ0FBSzt3QkFDSkMsSUFBSSxFQUFFLENBQU07d0JBQ1pKLFNBQVMsRUFBQyxDQUF1Qjt3QkFDakNLLEtBQUssRUFBRWpCLElBQUk7d0JBQ1hrQixRQUFRLEVBQUUsUUFBUSxDQUFQZixDQUFDOzRCQUFLRixNQUFNLENBQU5BLE9BQU8sQ0FBQ0UsQ0FBQyxDQUFDZ0IsTUFBTSxDQUFDRixLQUFLOzt3QkFDdkNHLFdBQVcsRUFBQyxDQUFZO3dCQUN4QkMsUUFBUTs7Ozs7Ozs7Ozs7O0FBTXBCLENBQUM7R0E1QnVCdEIsUUFBUTtLQUFSQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3JlZ2lzdGVyLmpzP2EwOTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVnaXN0ZXIoKSB7XHJcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLnRhYmxlKHsgbmFtZSwgZW1haWwsIHBhc3N3b3JkIH0pO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwLTUgbWItMSBiZy1saWdodCBqdW1ib3Ryb24gdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkIHB5LTVcIj5cclxuICAgICAgICAgIDxoMSBjbGFzcz1cImRpc3BsYXktNSBmdy1ib2xkIHRleHRKdW1ib3Ryb25cIj5SZWdpc3RlcjwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb2wtbWQtNCBvZmZzZXQtbWQtNCBwYi01IG10LTFcIj5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPXtcInRleHRcIn1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG1iLTQgcC00XCJcclxuICAgICAgICAgICAgdmFsdWU9e25hbWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgTmFtZVwiXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlJlZ2lzdGVyIiwibmFtZSIsInNldE5hbWUiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwidGFibGUiLCJlbWFpbCIsInBhc3N3b3JkIiwiZGl2IiwiY2xhc3MiLCJoMSIsImNsYXNzTmFtZSIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/register.js\n");

/***/ })

});