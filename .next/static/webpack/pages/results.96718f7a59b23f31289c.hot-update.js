webpackHotUpdate_N_E("pages/results",{

/***/ "./components/Maps/MapboxMap.js":
/*!**************************************!*\
  !*** ./components/Maps/MapboxMap.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Map; });\n/* harmony import */ var _Users_nnamdiojibe_boston_solar_potential_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/SearchBar/SearchBar */ \"./components/SearchBar/SearchBar.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-map-gl */ \"./node_modules/react-map-gl/dist/esm/index.js\");\n/* harmony import */ var react_mapbox_gl_geocoder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-mapbox-gl-geocoder */ \"./node_modules/react-mapbox-gl-geocoder/dist/index.es.js\");\n\n\n\nvar _jsxFileName = \"/Users/nnamdiojibe/boston-solar-potential/components/Maps/MapboxMap.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_nnamdiojibe_boston_solar_potential_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nconst accessToken = \"pk.eyJ1Ijoibm9qaWJlIiwiYSI6ImNrcHloOXg1OTA0M3cyb21uYW83d2V3MGwifQ.GlZLAGPrDIf1lihGKJIBqw\";\nfunction Map() {\n  _s();\n\n  const {\n    0: viewport,\n    1: setViewport\n  } = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])({\n    latitude: 42.3602,\n    longitude: -71.0579,\n    width: \"100vw\",\n    height: \"100vh\",\n    zoom: 17,\n    scrollZoom: false\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: \"absolute mb-20 w-full\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_map_gl__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _objectSpread(_objectSpread({\n      className: \"mb-20 absolute flex\"\n    }, viewport), {}, {\n      scrollZoom: false,\n      mapboxApiAccessToken: accessToken,\n      mapStyle: \"mapbox://styles/mapbox/satellite-v9\",\n      onViewportChange: viewport => {\n        setViewport(viewport);\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_mapbox_gl_geocoder__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        className: \"left-20 top-20 z\",\n        mapboxApiAccessToken: accessToken\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 11\n      }, this)\n    }), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 7\n  }, this);\n}\n\n_s(Map, \"elxUfj9x7qk6vbktwZ1We6heWyA=\");\n\n_c = Map;\n\nvar _c;\n\n$RefreshReg$(_c, \"Map\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYXBzL01hcGJveE1hcC5qcz9jZWI0Il0sIm5hbWVzIjpbImFjY2Vzc1Rva2VuIiwiTWFwIiwidmlld3BvcnQiLCJzZXRWaWV3cG9ydCIsInVzZVN0YXRlIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJ3aWR0aCIsImhlaWdodCIsInpvb20iLCJzY3JvbGxab29tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsV0FBVyxHQUFHLDBGQUFwQjtBQUVpQixTQUFTQyxHQUFULEdBQWU7QUFBQTs7QUFFNUIsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCQyxzREFBUSxDQUFDO0FBQ3ZDQyxZQUFRLEVBQUUsT0FENkI7QUFFdkNDLGFBQVMsRUFBRSxDQUFDLE9BRjJCO0FBR3ZDQyxTQUFLLEVBQUUsT0FIZ0M7QUFJdkNDLFVBQU0sRUFBRSxPQUorQjtBQUt2Q0MsUUFBSSxFQUFFLEVBTGlDO0FBTXZDQyxjQUFVLEVBQUU7QUFOMkIsR0FBRCxDQUF4QztBQVdBLHNCQUNFO0FBQUssYUFBUyxFQUFDLHVCQUFmO0FBQUEsMkJBR0UscUVBQUMsb0RBQUQ7QUFDRSxlQUFTLEVBQUU7QUFEYixPQUVNUixRQUZOO0FBR0UsZ0JBQVUsRUFBRSxLQUhkO0FBSUUsMEJBQW9CLEVBQUVGLFdBSnhCO0FBS0UsY0FBUSxFQUFDLHFDQUxYO0FBTUUsc0JBQWdCLEVBQUVFLFFBQVEsSUFBSTtBQUM1QkMsbUJBQVcsQ0FBQ0QsUUFBRCxDQUFYO0FBQ0QsT0FSSDtBQUFBLDZCQVdFLHFFQUFDLGdFQUFEO0FBQ0EsaUJBQVMsRUFBRSxrQkFEWDtBQUVBLDRCQUFvQixFQUFFRjtBQUZ0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXVCRDs7R0FwQ3VCQyxHOztLQUFBQSxHIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9NYXBzL01hcGJveE1hcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTZWFyY2hCYXIgZnJvbSBcImNvbXBvbmVudHMvU2VhcmNoQmFyL1NlYXJjaEJhclwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0TWFwR0wgZnJvbSBcInJlYWN0LW1hcC1nbFwiXG5pbXBvcnQgR2VvY29kZXIgZnJvbSAncmVhY3QtbWFwYm94LWdsLWdlb2NvZGVyJztcblxuY29uc3QgYWNjZXNzVG9rZW4gPSBcInBrLmV5SjFJam9pYm05cWFXSmxJaXdpWVNJNkltTnJjSGxvT1hnMU9UQTBNM2N5YjIxdVlXODNkMlYzTUd3aWZRLkdsWkxBR1ByRElmMWxpaEdLSklCcXdcIjtcblxuICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYXAoKSB7XG4gICAgXG4gICAgY29uc3QgW3ZpZXdwb3J0LCBzZXRWaWV3cG9ydF0gPSB1c2VTdGF0ZSh7XG4gICAgICBsYXRpdHVkZTogNDIuMzYwMixcbiAgICAgIGxvbmdpdHVkZTogLTcxLjA1NzksXG4gICAgICB3aWR0aDogXCIxMDB2d1wiLFxuICAgICAgaGVpZ2h0OiBcIjEwMHZoXCIsXG4gICAgICB6b29tOiAxNyxcbiAgICAgIHNjcm9sbFpvb206IGZhbHNlLFxuICAgIH0pO1xuXG5cbiAgXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbWItMjAgdy1mdWxsXCI+XG4gICAgICAgIFxuXG4gICAgICAgIDxSZWFjdE1hcEdMXG4gICAgICAgICAgY2xhc3NOYW1lPXtcIm1iLTIwIGFic29sdXRlIGZsZXhcIn1cbiAgICAgICAgICB7Li4udmlld3BvcnR9XG4gICAgICAgICAgc2Nyb2xsWm9vbT17ZmFsc2V9XG4gICAgICAgICAgbWFwYm94QXBpQWNjZXNzVG9rZW49e2FjY2Vzc1Rva2VufVxuICAgICAgICAgIG1hcFN0eWxlPVwibWFwYm94Oi8vc3R5bGVzL21hcGJveC9zYXRlbGxpdGUtdjlcIlxuICAgICAgICAgIG9uVmlld3BvcnRDaGFuZ2U9e3ZpZXdwb3J0ID0+IHtcbiAgICAgICAgICAgIHNldFZpZXdwb3J0KHZpZXdwb3J0KTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgXG4gICAgICAgICAgPEdlb2NvZGVyXG4gICAgICAgICAgY2xhc3NOYW1lPXtcImxlZnQtMjAgdG9wLTIwIHpcIn1cbiAgICAgICAgICBtYXBib3hBcGlBY2Nlc3NUb2tlbj17YWNjZXNzVG9rZW59IFxuICAgICAgICAgLz5cbiAgICAgICAgICBcbiAgICAgICAgPC9SZWFjdE1hcEdMPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuIFxuICBcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Maps/MapboxMap.js\n");

/***/ })

})