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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Register; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _s = $RefreshSig$();\nfunction Register() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), name = ref[0], setName = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), email = ref1[0], setEmail = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), password = ref2[0], setPassword = ref2[1];\n    var handleSubmit = function(e) {\n        e.preventDefault();\n        console.table({\n            name: name,\n            email: email,\n            password: password\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"p-5 mb-1 bg-light jumbotron text-center\",\n                __source: {\n                    fileName: \"E:\\\\xampp\\\\htdocs\\\\belajar\\\\edemy\\\\client\\\\pages\\\\register.js\",\n                    lineNumber: 12,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"container-fluid py-5\",\n                    __source: {\n                        fileName: \"E:\\\\xampp\\\\htdocs\\\\belajar\\\\edemy\\\\client\\\\pages\\\\register.js\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                        className: \"display-5 fw-bold textJumbotron\",\n                        __source: {\n                            fileName: \"E:\\\\xampp\\\\htdocs\\\\belajar\\\\edemy\\\\client\\\\pages\\\\register.js\",\n                            lineNumber: 14,\n                            columnNumber: 11\n                        },\n                        __self: this,\n                        children: \"Register\"\n                    })\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                classNameName: \"container col-md-4 offset-md-4 pb-5 mt-3\",\n                __source: {\n                    fileName: \"E:\\\\xampp\\\\htdocs\\\\belajar\\\\edemy\\\\client\\\\pages\\\\register.js\",\n                    lineNumber: 17,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"form\", {\n                        onSubmit: handleSubmit,\n                        __source: {\n                            fileName: \"E:\\\\xampp\\\\htdocs\\\\belajar\\\\edemy\\\\client\\\\pages\\\\register.js\",\n                            lineNumber: 18,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                            type: \"text\",\n                            className: \"form-control mb-4 p-4\",\n                            value: name,\n                            onChange: function(e) {\n                                return setName(e.target.value);\n                            },\n                            placeholder: \"Enter Name\",\n                            required: true,\n                            __source: {\n                                fileName: \"E:\\\\xampp\\\\htdocs\\\\belajar\\\\edemy\\\\client\\\\pages\\\\register.js\",\n                                lineNumber: 19,\n                                columnNumber: 11\n                            },\n                            __self: this\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"form\", {\n                        onSubmit: handleSubmit,\n                        __source: {\n                            fileName: \"E:\\\\xampp\\\\htdocs\\\\belajar\\\\edemy\\\\client\\\\pages\\\\register.js\",\n                            lineNumber: 28,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                            type: \"email\",\n                            className: \"form-control mb-4 p-4\",\n                            value: email,\n                            onChange: function(e) {\n                                return setEmail(e.target.value);\n                            },\n                            placeholder: \"Enter Email\",\n                            required: true,\n                            __source: {\n                                fileName: \"E:\\\\xampp\\\\htdocs\\\\belajar\\\\edemy\\\\client\\\\pages\\\\register.js\",\n                                lineNumber: 29,\n                                columnNumber: 11\n                            },\n                            __self: this\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"form\", {\n                        onSubmit: handleSubmit,\n                        __source: {\n                            fileName: \"E:\\\\xampp\\\\htdocs\\\\belajar\\\\edemy\\\\client\\\\pages\\\\register.js\",\n                            lineNumber: 38,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                            type: \"password\",\n                            className: \"form-control mb-4 p-4\",\n                            value: password,\n                            onChange: function(e) {\n                                return setPassword(e.target.value);\n                            },\n                            placeholder: \"Enter Password\",\n                            required: true,\n                            __source: {\n                                fileName: \"E:\\\\xampp\\\\htdocs\\\\belajar\\\\edemy\\\\client\\\\pages\\\\register.js\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            },\n                            __self: this\n                        })\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_s(Register, \"vbqcGr/6BaaK1ETmInB26GkyFIw=\");\n_c = Register;\nvar _c;\n$RefreshReg$(_c, \"Register\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZWdpc3Rlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWdDOztBQUNqQixRQUFRLENBQUNDLFFBQVEsR0FBRyxDQUFDOztJQUNsQyxHQUFLLENBQW1CRCxHQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBRSxJQUE1QkUsSUFBSSxHQUFhRixHQUFZLEtBQXZCRyxPQUFPLEdBQUlILEdBQVk7SUFDcEMsR0FBSyxDQUFxQkEsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUUsSUFBOUJJLEtBQUssR0FBY0osSUFBWSxLQUF4QkssUUFBUSxHQUFJTCxJQUFZO0lBQ3RDLEdBQUssQ0FBMkJBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFFLElBQXBDTSxRQUFRLEdBQWlCTixJQUFZLEtBQTNCTyxXQUFXLEdBQUlQLElBQVk7SUFDNUMsR0FBSyxDQUFDUSxZQUFZLEdBQUcsUUFBUSxDQUFQQyxDQUFDLEVBQUssQ0FBQztRQUMzQkEsQ0FBQyxDQUFDQyxjQUFjO1FBQ2hCQyxPQUFPLENBQUNDLEtBQUssQ0FBQyxDQUFDO1lBQUNWLElBQUksRUFBSkEsSUFBSTtZQUFFRSxLQUFLLEVBQUxBLEtBQUs7WUFBRUUsUUFBUSxFQUFSQSxRQUFRO1FBQUMsQ0FBQztJQUN6QyxDQUFDO0lBQ0QsTUFBTTs7aUZBRURPLENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUF5Qzs7Ozs7OzsrRkFDckRELENBQUc7b0JBQUNDLFNBQVMsRUFBQyxDQUFzQjs7Ozs7OzttR0FDbENDLENBQUU7d0JBQUNELFNBQVMsRUFBQyxDQUFpQzs7Ozs7OztrQ0FBQyxDQUFROzs7O2tGQUczREQsQ0FBRztnQkFBQ0csYUFBYSxFQUFDLENBQTBDOzs7Ozs7Ozt5RkFDMURDLENBQUk7d0JBQUNDLFFBQVEsRUFBRVYsWUFBWTs7Ozs7Ozt1R0FDekJXLENBQUs7NEJBQ0pDLElBQUksRUFBRSxDQUFNOzRCQUNaTixTQUFTLEVBQUMsQ0FBdUI7NEJBQ2pDTyxLQUFLLEVBQUVuQixJQUFJOzRCQUNYb0IsUUFBUSxFQUFFLFFBQVEsQ0FBUGIsQ0FBQztnQ0FBS04sTUFBTSxDQUFOQSxPQUFPLENBQUNNLENBQUMsQ0FBQ2MsTUFBTSxDQUFDRixLQUFLOzs0QkFDdkNHLFdBQVcsRUFBQyxDQUFZOzRCQUN4QkMsUUFBUTs7Ozs7Ozs7O3lGQUdYUixDQUFJO3dCQUFDQyxRQUFRLEVBQUVWLFlBQVk7Ozs7Ozs7dUdBQ3pCVyxDQUFLOzRCQUNKQyxJQUFJLEVBQUUsQ0FBTzs0QkFDYk4sU0FBUyxFQUFDLENBQXVCOzRCQUNqQ08sS0FBSyxFQUFFakIsS0FBSzs0QkFDWmtCLFFBQVEsRUFBRSxRQUFRLENBQVBiLENBQUM7Z0NBQUtKLE1BQU0sQ0FBTkEsUUFBUSxDQUFDSSxDQUFDLENBQUNjLE1BQU0sQ0FBQ0YsS0FBSzs7NEJBQ3hDRyxXQUFXLEVBQUMsQ0FBYTs0QkFDekJDLFFBQVE7Ozs7Ozs7Ozt5RkFHWFIsQ0FBSTt3QkFBQ0MsUUFBUSxFQUFFVixZQUFZOzs7Ozs7O3VHQUN6QlcsQ0FBSzs0QkFDSkMsSUFBSSxFQUFFLENBQVU7NEJBQ2hCTixTQUFTLEVBQUMsQ0FBdUI7NEJBQ2pDTyxLQUFLLEVBQUVmLFFBQVE7NEJBQ2ZnQixRQUFRLEVBQUUsUUFBUSxDQUFQYixDQUFDO2dDQUFLRixNQUFNLENBQU5BLFdBQVcsQ0FBQ0UsQ0FBQyxDQUFDYyxNQUFNLENBQUNGLEtBQUs7OzRCQUMzQ0csV0FBVyxFQUFDLENBQWdCOzRCQUM1QkMsUUFBUTs7Ozs7Ozs7Ozs7OztBQU1wQixDQUFDO0dBakR1QnhCLFFBQVE7S0FBUkEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9yZWdpc3Rlci5qcz9hMDk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlZ2lzdGVyKCkge1xyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc29sZS50YWJsZSh7IG5hbWUsIGVtYWlsLCBwYXNzd29yZCB9KTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNSBtYi0xIGJnLWxpZ2h0IGp1bWJvdHJvbiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIHB5LTVcIj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJkaXNwbGF5LTUgZnctYm9sZCB0ZXh0SnVtYm90cm9uXCI+UmVnaXN0ZXI8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWVOYW1lPVwiY29udGFpbmVyIGNvbC1tZC00IG9mZnNldC1tZC00IHBiLTUgbXQtM1wiPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9e1widGV4dFwifVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbWItNCBwLTRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBOYW1lXCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9e1wiZW1haWxcIn1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG1iLTQgcC00XCJcclxuICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBFbWFpbFwiXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPXtcInBhc3N3b3JkXCJ9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBtYi00IHAtNFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJSZWdpc3RlciIsIm5hbWUiLCJzZXROYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwidGFibGUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImNsYXNzTmFtZU5hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/register.js\n");

/***/ })

});