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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Register; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _s = $RefreshSig$();\nfunction Register() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), name = ref[0], setName = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), email = ref1[0], setEmail = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), password = ref2[0], setPassword = ref2[1];\n    var handleSubmit = function(e) {\n        e.preventDefault();\n        console.table({\n            name: name,\n            email: email,\n            password: password\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"p-5 mb-1 bg-light jumbotron text-center\",\n                __source: {\n                    fileName: \"E:\\\\xampp\\\\htdocs\\\\belajar\\\\edemy\\\\client\\\\pages\\\\register.js\",\n                    lineNumber: 13,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"container-fluid py-5\",\n                    __source: {\n                        fileName: \"E:\\\\xampp\\\\htdocs\\\\belajar\\\\edemy\\\\client\\\\pages\\\\register.js\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                        className: \"display-5 fw-bold textJumbotron\",\n                        __source: {\n                            fileName: \"E:\\\\xampp\\\\htdocs\\\\belajar\\\\edemy\\\\client\\\\pages\\\\register.js\",\n                            lineNumber: 15,\n                            columnNumber: 11\n                        },\n                        __self: this,\n                        children: \"Register\"\n                    })\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"container col-md-4 offset-md-4 pb-5 mt-3\",\n                __source: {\n                    fileName: \"E:\\\\xampp\\\\htdocs\\\\belajar\\\\edemy\\\\client\\\\pages\\\\register.js\",\n                    lineNumber: 18,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"form\", {\n                    onSubmit: handleSubmit,\n                    __source: {\n                        fileName: \"E:\\\\xampp\\\\htdocs\\\\belajar\\\\edemy\\\\client\\\\pages\\\\register.js\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                            type: \"text\",\n                            className: \"form-control mb-4 p-4\",\n                            value: name,\n                            onChange: function(e) {\n                                return setName(e.target.value);\n                            },\n                            placeholder: \"Enter Name\",\n                            required: true,\n                            __source: {\n                                fileName: \"E:\\\\xampp\\\\htdocs\\\\belajar\\\\edemy\\\\client\\\\pages\\\\register.js\",\n                                lineNumber: 20,\n                                columnNumber: 11\n                            },\n                            __self: this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                            type: \"email\",\n                            className: \"form-control mb-4 p-4\",\n                            value: email,\n                            onChange: function(e) {\n                                return setEmail(e.target.value);\n                            },\n                            placeholder: \"Enter Email\",\n                            required: true,\n                            __source: {\n                                fileName: \"E:\\\\xampp\\\\htdocs\\\\belajar\\\\edemy\\\\client\\\\pages\\\\register.js\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            },\n                            __self: this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                            type: \"password\",\n                            className: \"form-control mb-4 p-4\",\n                            value: password,\n                            onChange: function(e) {\n                                return setPassword(e.target.value);\n                            },\n                            placeholder: \"Enter Password\",\n                            required: true,\n                            __source: {\n                                fileName: \"E:\\\\xampp\\\\htdocs\\\\belajar\\\\edemy\\\\client\\\\pages\\\\register.js\",\n                                lineNumber: 36,\n                                columnNumber: 11\n                            },\n                            __self: this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                            type: \"submit\",\n                            className: \"\",\n                            __source: {\n                                fileName: \"E:\\\\xampp\\\\htdocs\\\\belajar\\\\edemy\\\\client\\\\pages\\\\register.js\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            },\n                            __self: this,\n                            children: \"Submit\"\n                        })\n                    ]\n                })\n            })\n        ]\n    }));\n};\n_s(Register, \"vbqcGr/6BaaK1ETmInB26GkyFIw=\");\n_c = Register;\nvar _c;\n$RefreshReg$(_c, \"Register\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZWdpc3Rlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE2QjtBQUNHOztBQUNqQixRQUFRLENBQUNFLFFBQVEsR0FBRyxDQUFDOztJQUNsQyxHQUFLLENBQW1CRCxHQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBRSxJQUE1QkUsSUFBSSxHQUFhRixHQUFZLEtBQXZCRyxPQUFPLEdBQUlILEdBQVk7SUFDcEMsR0FBSyxDQUFxQkEsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUUsSUFBOUJJLEtBQUssR0FBY0osSUFBWSxLQUF4QkssUUFBUSxHQUFJTCxJQUFZO0lBQ3RDLEdBQUssQ0FBMkJBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFFLElBQXBDTSxRQUFRLEdBQWlCTixJQUFZLEtBQTNCTyxXQUFXLEdBQUlQLElBQVk7SUFDNUMsR0FBSyxDQUFDUSxZQUFZLEdBQUcsUUFBUSxDQUFQQyxDQUFDLEVBQUssQ0FBQztRQUMzQkEsQ0FBQyxDQUFDQyxjQUFjO1FBQ2hCQyxPQUFPLENBQUNDLEtBQUssQ0FBQyxDQUFDO1lBQUNWLElBQUksRUFBSkEsSUFBSTtZQUFFRSxLQUFLLEVBQUxBLEtBQUs7WUFBRUUsUUFBUSxFQUFSQSxRQUFRO1FBQUMsQ0FBQztJQUN6QyxDQUFDO0lBQ0QsTUFBTTs7aUZBRURPLENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUF5Qzs7Ozs7OzsrRkFDckRELENBQUc7b0JBQUNDLFNBQVMsRUFBQyxDQUFzQjs7Ozs7OzttR0FDbENDLENBQUU7d0JBQUNELFNBQVMsRUFBQyxDQUFpQzs7Ozs7OztrQ0FBQyxDQUFROzs7O2lGQUczREQsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQTBDOzs7Ozs7O2dHQUN0REUsQ0FBSTtvQkFBQ0MsUUFBUSxFQUFFVCxZQUFZOzs7Ozs7Ozs2RkFDekJVLENBQUs7NEJBQ0pDLElBQUksRUFBRSxDQUFNOzRCQUNaTCxTQUFTLEVBQUMsQ0FBdUI7NEJBQ2pDTSxLQUFLLEVBQUVsQixJQUFJOzRCQUNYbUIsUUFBUSxFQUFFLFFBQVEsQ0FBUFosQ0FBQztnQ0FBS04sTUFBTSxDQUFOQSxPQUFPLENBQUNNLENBQUMsQ0FBQ2EsTUFBTSxDQUFDRixLQUFLOzs0QkFDdkNHLFdBQVcsRUFBQyxDQUFZOzRCQUN4QkMsUUFBUTs7Ozs7Ozs7NkZBRVROLENBQUs7NEJBQ0pDLElBQUksRUFBRSxDQUFPOzRCQUNiTCxTQUFTLEVBQUMsQ0FBdUI7NEJBQ2pDTSxLQUFLLEVBQUVoQixLQUFLOzRCQUNaaUIsUUFBUSxFQUFFLFFBQVEsQ0FBUFosQ0FBQztnQ0FBS0osTUFBTSxDQUFOQSxRQUFRLENBQUNJLENBQUMsQ0FBQ2EsTUFBTSxDQUFDRixLQUFLOzs0QkFDeENHLFdBQVcsRUFBQyxDQUFhOzRCQUN6QkMsUUFBUTs7Ozs7Ozs7NkZBRVROLENBQUs7NEJBQ0pDLElBQUksRUFBRSxDQUFVOzRCQUNoQkwsU0FBUyxFQUFDLENBQXVCOzRCQUNqQ00sS0FBSyxFQUFFZCxRQUFROzRCQUNmZSxRQUFRLEVBQUUsUUFBUSxDQUFQWixDQUFDO2dDQUFLRixNQUFNLENBQU5BLFdBQVcsQ0FBQ0UsQ0FBQyxDQUFDYSxNQUFNLENBQUNGLEtBQUs7OzRCQUMzQ0csV0FBVyxFQUFDLENBQWdCOzRCQUM1QkMsUUFBUTs7Ozs7Ozs7NkZBRVR6Qix3Q0FBTTs0QkFBQ29CLElBQUksRUFBQyxDQUFROzRCQUFDTCxTQUFTLEVBQUMsQ0FBRTs7Ozs7OztzQ0FBQyxDQUVuQzs7Ozs7OztBQUtWLENBQUM7R0FoRHVCYixRQUFRO0tBQVJBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVnaXN0ZXIuanM/YTA5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWdpc3RlcigpIHtcclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnNvbGUudGFibGUoeyBuYW1lLCBlbWFpbCwgcGFzc3dvcmQgfSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTUgbWItMSBiZy1saWdodCBqdW1ib3Ryb24gdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBweS01XCI+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZGlzcGxheS01IGZ3LWJvbGQgdGV4dEp1bWJvdHJvblwiPlJlZ2lzdGVyPC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNvbC1tZC00IG9mZnNldC1tZC00IHBiLTUgbXQtM1wiPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9e1widGV4dFwifVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbWItNCBwLTRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBOYW1lXCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT17XCJlbWFpbFwifVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbWItNCBwLTRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIEVtYWlsXCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT17XCJwYXNzd29yZFwifVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbWItNCBwLTRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFBhc3N3b3JkXCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiQnV0dG9uIiwidXNlU3RhdGUiLCJSZWdpc3RlciIsIm5hbWUiLCJzZXROYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwidGFibGUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/register.js\n");

/***/ })

});