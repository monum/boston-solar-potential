webpackHotUpdate_N_E("pages/results",{

/***/ "./components/Maps/MapboxMap.js":
/*!**************************************!*\
  !*** ./components/Maps/MapboxMap.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Map; });\n/* harmony import */ var _Users_nnamdiojibe_boston_solar_potential_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-map-gl */ \"./node_modules/react-map-gl/dist/esm/index.js\");\n/* harmony import */ var react_mapbox_gl_geocoder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-mapbox-gl-geocoder */ \"./node_modules/react-mapbox-gl-geocoder/dist/index.es.js\");\n\n\n\nvar _jsxFileName = \"/Users/nnamdiojibe/boston-solar-potential/components/Maps/MapboxMap.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_nnamdiojibe_boston_solar_potential_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nconst accessToken = \"pk.eyJ1Ijoibm9qaWJlIiwiYSI6ImNrcHloOXg1OTA0M3cyb21uYW83d2V3MGwifQ.GlZLAGPrDIf1lihGKJIBqw\";\nfunction Map() {\n  _s();\n\n  const {\n    0: viewport,\n    1: setViewport\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])({\n    latitude: 42.4211,\n    longitude: -71.6903,\n    width: \"100vw\",\n    height: \"100vh\",\n    zoom: 10,\n    scrollZoom: false\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: \"absolute no-flex\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_mapbox_gl_geocoder__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      mapboxApiAccessToken: accessToken\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_map_gl__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _objectSpread(_objectSpread({}, viewport), {}, {\n      mapboxApiAccessToken: accessToken,\n      mapStyle: \"mapbox://styles/mapbox/satellite-v9\",\n      onViewportChange: viewport => {\n        setViewport(viewport);\n      }\n    }), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 7\n  }, this);\n}\n\n_s(Map, \"xe+mwzS6d82EzjNL+x3W7qj6ZmA=\");\n\n_c = Map;\n\nvar _c;\n\n$RefreshReg$(_c, \"Map\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYXBzL01hcGJveE1hcC5qcz9jZWI0Il0sIm5hbWVzIjpbImFjY2Vzc1Rva2VuIiwiTWFwIiwidmlld3BvcnQiLCJzZXRWaWV3cG9ydCIsInVzZVN0YXRlIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJ3aWR0aCIsImhlaWdodCIsInpvb20iLCJzY3JvbGxab29tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsTUFBTUEsV0FBVyxHQUFHLDBGQUFwQjtBQUVpQixTQUFTQyxHQUFULEdBQWU7QUFBQTs7QUFFNUIsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCQyxzREFBUSxDQUFDO0FBQ3ZDQyxZQUFRLEVBQUUsT0FENkI7QUFFdkNDLGFBQVMsRUFBRSxDQUFDLE9BRjJCO0FBR3ZDQyxTQUFLLEVBQUUsT0FIZ0M7QUFJdkNDLFVBQU0sRUFBRSxPQUorQjtBQUt2Q0MsUUFBSSxFQUFFLEVBTGlDO0FBTXZDQyxjQUFVLEVBQUU7QUFOMkIsR0FBRCxDQUF4QztBQWFBLHNCQUNFO0FBQUssYUFBUyxFQUFDLGtCQUFmO0FBQUEsNEJBQ0UscUVBQUMsZ0VBQUQ7QUFDRSwwQkFBb0IsRUFBRVY7QUFEeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBTUUscUVBQUMsb0RBQUQsa0NBQ01FLFFBRE47QUFFRSwwQkFBb0IsRUFBRUYsV0FGeEI7QUFHRSxjQUFRLEVBQUMscUNBSFg7QUFJRSxzQkFBZ0IsRUFBRUUsUUFBUSxJQUFJO0FBQzVCQyxtQkFBVyxDQUFDRCxRQUFELENBQVg7QUFDRDtBQU5IO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW9CRDs7R0FuQ3VCRCxHOztLQUFBQSxHIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9NYXBzL01hcGJveE1hcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdE1hcEdMIGZyb20gXCJyZWFjdC1tYXAtZ2xcIlxuaW1wb3J0IEdlb2NvZGVyIGZyb20gJ3JlYWN0LW1hcGJveC1nbC1nZW9jb2Rlcic7XG5cbmNvbnN0IGFjY2Vzc1Rva2VuID0gXCJway5leUoxSWpvaWJtOXFhV0psSWl3aVlTSTZJbU5yY0hsb09YZzFPVEEwTTNjeWIyMXVZVzgzZDJWM01Hd2lmUS5HbFpMQUdQckRJZjFsaWhHS0pJQnF3XCI7XG5cbiAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFwKCkge1xuICAgIFxuICAgIGNvbnN0IFt2aWV3cG9ydCwgc2V0Vmlld3BvcnRdID0gdXNlU3RhdGUoe1xuICAgICAgbGF0aXR1ZGU6IDQyLjQyMTEsXG4gICAgICBsb25naXR1ZGU6IC03MS42OTAzLFxuICAgICAgd2lkdGg6IFwiMTAwdndcIixcbiAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxuICAgICAgem9vbTogMTAsXG4gICAgICBzY3JvbGxab29tOiBmYWxzZSxcbiAgICB9KTtcbiAgICBcblxuICBcblxuICBcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBuby1mbGV4XCI+XG4gICAgICAgIDxHZW9jb2RlclxuICAgICAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuPXthY2Nlc3NUb2tlbn0gXG4gICAgICAgICBcbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgIDxSZWFjdE1hcEdMXG4gICAgICAgICAgey4uLnZpZXdwb3J0fVxuICAgICAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuPXthY2Nlc3NUb2tlbn1cbiAgICAgICAgICBtYXBTdHlsZT1cIm1hcGJveDovL3N0eWxlcy9tYXBib3gvc2F0ZWxsaXRlLXY5XCJcbiAgICAgICAgICBvblZpZXdwb3J0Q2hhbmdlPXt2aWV3cG9ydCA9PiB7XG4gICAgICAgICAgICBzZXRWaWV3cG9ydCh2aWV3cG9ydCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICA8L1JlYWN0TWFwR0w+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4gXG4gIFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Maps/MapboxMap.js\n");

/***/ })

})