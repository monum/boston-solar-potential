webpackHotUpdate_N_E("pages/results",{

/***/ "./components/Maps/MapboxMap.js":
/*!**************************************!*\
  !*** ./components/Maps/MapboxMap.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Map; });\n/* harmony import */ var _Users_nnamdiojibe_boston_solar_potential_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/SearchBar/SearchBar */ \"./components/SearchBar/SearchBar.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-map-gl */ \"./node_modules/react-map-gl/dist/esm/index.js\");\n/* harmony import */ var react_mapbox_gl_geocoder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-mapbox-gl-geocoder */ \"./node_modules/react-mapbox-gl-geocoder/dist/index.es.js\");\n\n\n\nvar _jsxFileName = \"/Users/nnamdiojibe/boston-solar-potential/components/Maps/MapboxMap.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_nnamdiojibe_boston_solar_potential_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nconst accessToken = \"pk.eyJ1Ijoibm9qaWJlIiwiYSI6ImNrcHloOXg1OTA0M3cyb21uYW83d2V3MGwifQ.GlZLAGPrDIf1lihGKJIBqw\";\nfunction Map() {\n  _s();\n\n  const {\n    0: viewport,\n    1: setViewport\n  } = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])({\n    latitude: 42.3602,\n    longitude: -71.0579,\n    width: \"100vw\",\n    height: \"100vh\",\n    zoom: 17,\n    scrollZoom: false\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: \"absolute w-full h-full block\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_map_gl__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _objectSpread(_objectSpread({\n      className: \"content-center align-middle\"\n    }, viewport), {}, {\n      scrollZoom: false,\n      mapboxApiAccessToken: accessToken,\n      mapStyle: \"mapbox://styles/mapbox/satellite-v9\",\n      onViewportChange: viewport => {\n        setViewport(viewport);\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_mapbox_gl_geocoder__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        className: \"left-20 top-0\",\n        mapboxApiAccessToken: accessToken\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 11\n      }, this)\n    }), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 7\n  }, this);\n}\n\n_s(Map, \"elxUfj9x7qk6vbktwZ1We6heWyA=\");\n\n_c = Map;\n\nvar _c;\n\n$RefreshReg$(_c, \"Map\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYXBzL01hcGJveE1hcC5qcz9jZWI0Il0sIm5hbWVzIjpbImFjY2Vzc1Rva2VuIiwiTWFwIiwidmlld3BvcnQiLCJzZXRWaWV3cG9ydCIsInVzZVN0YXRlIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJ3aWR0aCIsImhlaWdodCIsInpvb20iLCJzY3JvbGxab29tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsV0FBVyxHQUFHLDBGQUFwQjtBQUVpQixTQUFTQyxHQUFULEdBQWU7QUFBQTs7QUFFNUIsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCQyxzREFBUSxDQUFDO0FBQ3ZDQyxZQUFRLEVBQUUsT0FENkI7QUFFdkNDLGFBQVMsRUFBRSxDQUFDLE9BRjJCO0FBR3ZDQyxTQUFLLEVBQUUsT0FIZ0M7QUFJdkNDLFVBQU0sRUFBRSxPQUorQjtBQUt2Q0MsUUFBSSxFQUFFLEVBTGlDO0FBTXZDQyxjQUFVLEVBQUU7QUFOMkIsR0FBRCxDQUF4QztBQVdBLHNCQUNFO0FBQUssYUFBUyxFQUFDLDhCQUFmO0FBQUEsMkJBR0UscUVBQUMsb0RBQUQ7QUFDRSxlQUFTLEVBQUU7QUFEYixPQUVNUixRQUZOO0FBR0UsZ0JBQVUsRUFBRSxLQUhkO0FBSUUsMEJBQW9CLEVBQUVGLFdBSnhCO0FBS0UsY0FBUSxFQUFDLHFDQUxYO0FBTUUsc0JBQWdCLEVBQUVFLFFBQVEsSUFBSTtBQUM1QkMsbUJBQVcsQ0FBQ0QsUUFBRCxDQUFYO0FBQ0QsT0FSSDtBQUFBLDZCQVdFLHFFQUFDLGdFQUFEO0FBQ0EsaUJBQVMsRUFBRSxlQURYO0FBRUEsNEJBQW9CLEVBQUVGO0FBRnRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBdUJEOztHQXBDdUJDLEc7O0tBQUFBLEciLCJmaWxlIjoiLi9jb21wb25lbnRzL01hcHMvTWFwYm94TWFwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNlYXJjaEJhciBmcm9tIFwiY29tcG9uZW50cy9TZWFyY2hCYXIvU2VhcmNoQmFyXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RNYXBHTCBmcm9tIFwicmVhY3QtbWFwLWdsXCJcbmltcG9ydCBHZW9jb2RlciBmcm9tICdyZWFjdC1tYXBib3gtZ2wtZ2VvY29kZXInO1xuXG5jb25zdCBhY2Nlc3NUb2tlbiA9IFwicGsuZXlKMUlqb2libTlxYVdKbElpd2lZU0k2SW1OcmNIbG9PWGcxT1RBME0zY3liMjF1WVc4M2QyVjNNR3dpZlEuR2xaTEFHUHJESWYxbGloR0tKSUJxd1wiO1xuXG4gIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hcCgpIHtcbiAgICBcbiAgICBjb25zdCBbdmlld3BvcnQsIHNldFZpZXdwb3J0XSA9IHVzZVN0YXRlKHtcbiAgICAgIGxhdGl0dWRlOiA0Mi4zNjAyLFxuICAgICAgbG9uZ2l0dWRlOiAtNzEuMDU3OSxcbiAgICAgIHdpZHRoOiBcIjEwMHZ3XCIsXG4gICAgICBoZWlnaHQ6IFwiMTAwdmhcIixcbiAgICAgIHpvb206IDE3LFxuICAgICAgc2Nyb2xsWm9vbTogZmFsc2UsXG4gICAgfSk7XG5cblxuICBcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB3LWZ1bGwgaC1mdWxsIGJsb2NrXCI+XG4gICAgICAgIFxuXG4gICAgICAgIDxSZWFjdE1hcEdMXG4gICAgICAgICAgY2xhc3NOYW1lPXtcImNvbnRlbnQtY2VudGVyIGFsaWduLW1pZGRsZVwifVxuICAgICAgICAgIHsuLi52aWV3cG9ydH1cbiAgICAgICAgICBzY3JvbGxab29tPXtmYWxzZX1cbiAgICAgICAgICBtYXBib3hBcGlBY2Nlc3NUb2tlbj17YWNjZXNzVG9rZW59XG4gICAgICAgICAgbWFwU3R5bGU9XCJtYXBib3g6Ly9zdHlsZXMvbWFwYm94L3NhdGVsbGl0ZS12OVwiXG4gICAgICAgICAgb25WaWV3cG9ydENoYW5nZT17dmlld3BvcnQgPT4ge1xuICAgICAgICAgICAgc2V0Vmlld3BvcnQodmlld3BvcnQpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBcbiAgICAgICAgICA8R2VvY29kZXJcbiAgICAgICAgICBjbGFzc05hbWU9e1wibGVmdC0yMCB0b3AtMFwifVxuICAgICAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuPXthY2Nlc3NUb2tlbn0gXG4gICAgICAgICAvPlxuICAgICAgICAgIFxuICAgICAgICA8L1JlYWN0TWFwR0w+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4gXG4gIFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Maps/MapboxMap.js\n");

/***/ })

})