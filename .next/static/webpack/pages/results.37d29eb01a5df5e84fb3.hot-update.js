webpackHotUpdate_N_E("pages/results",{

/***/ "./components/Maps/MapboxMap.js":
/*!**************************************!*\
  !*** ./components/Maps/MapboxMap.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mapbox-gl */ \"./node_modules/mapbox-gl/dist/mapbox-gl.js\");\n/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/nnamdiojibe/boston-solar-potential/components/Maps/MapboxMap.js\",\n    _s = $RefreshSig$();\n\n\n\n\nconst Mapbox = () => {\n  _s();\n\n  const mapContainerRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  const {\n    0: lng,\n    1: setLng\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(-71.0579);\n  const {\n    0: lat,\n    1: setLat\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(42.3602);\n  const {\n    0: zoom,\n    1: setZoom\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(17);\n  mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default.a.accessToken = \"pk.eyJ1Ijoibm9qaWJlIiwiYSI6ImNrcHloOXg1OTA0M3cyb21uYW83d2V3MGwifQ.GlZLAGPrDIf1lihGKJIBqw\"; // Initialize map when component mounts\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    const map = new mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default.a.Map({\n      container: mapContainerRef.current,\n      style: 'mapbox://styles/mapbox/satellite-v9',\n      center: [lng, lat],\n      zoom: zoom,\n      scrollZoom: false\n    }); // Add navigation control (the +/- zoom buttons)\n\n    map.addControl(new mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default.a.NavigationControl(), 'bottom-right');\n    map.on('move', () => {\n      setLng(map.getCenter().lng.toFixed(4));\n      setLat(map.getCenter().lat.toFixed(4));\n      setZoom(map.getZoom().toFixed(2));\n    }); // Clean up on unmount\n\n    return () => map.remove();\n  }, []); // eslint-disable-line react-hooks/exhaustive-deps\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"absolute w-full h-full object-contain\",\n      ref: mapContainerRef\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 5\n  }, undefined);\n};\n\n_s(Mapbox, \"TgNubvBiNq3gCI96+RniErI+13A=\");\n\n_c = Mapbox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Mapbox);\n\nvar _c;\n\n$RefreshReg$(_c, \"Mapbox\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYXBzL01hcGJveE1hcC5qcz9jZWI0Il0sIm5hbWVzIjpbIk1hcGJveCIsIm1hcENvbnRhaW5lclJlZiIsInVzZVJlZiIsImxuZyIsInNldExuZyIsInVzZVN0YXRlIiwibGF0Iiwic2V0TGF0Iiwiem9vbSIsInNldFpvb20iLCJtYXBib3hnbCIsImFjY2Vzc1Rva2VuIiwidXNlRWZmZWN0IiwibWFwIiwiTWFwIiwiY29udGFpbmVyIiwiY3VycmVudCIsInN0eWxlIiwiY2VudGVyIiwic2Nyb2xsWm9vbSIsImFkZENvbnRyb2wiLCJOYXZpZ2F0aW9uQ29udHJvbCIsIm9uIiwiZ2V0Q2VudGVyIiwidG9GaXhlZCIsImdldFpvb20iLCJyZW1vdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBR0EsTUFBTUEsTUFBTSxHQUFHLE1BQU07QUFBQTs7QUFDbkIsUUFBTUMsZUFBZSxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBOUI7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsR0FBRDtBQUFBLE9BQU1DO0FBQU4sTUFBZ0JDLHNEQUFRLENBQUMsQ0FBQyxPQUFGLENBQTlCO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLEdBQUQ7QUFBQSxPQUFNQztBQUFOLE1BQWdCRixzREFBUSxDQUFDLE9BQUQsQ0FBOUI7QUFDQSxRQUFNO0FBQUEsT0FBQ0csSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JKLHNEQUFRLENBQUMsRUFBRCxDQUFoQztBQUNBSyxrREFBUSxDQUFDQyxXQUFULEdBQXVCLDBGQUF2QixDQUxtQixDQVFuQjs7QUFDQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2QsVUFBTUMsR0FBRyxHQUFHLElBQUlILGdEQUFRLENBQUNJLEdBQWIsQ0FBaUI7QUFDM0JDLGVBQVMsRUFBRWQsZUFBZSxDQUFDZSxPQURBO0FBRTNCQyxXQUFLLEVBQUUscUNBRm9CO0FBRzNCQyxZQUFNLEVBQUUsQ0FBQ2YsR0FBRCxFQUFNRyxHQUFOLENBSG1CO0FBSTNCRSxVQUFJLEVBQUVBLElBSnFCO0FBSzNCVyxnQkFBVSxFQUFFO0FBTGUsS0FBakIsQ0FBWixDQURjLENBU2Q7O0FBQ0FOLE9BQUcsQ0FBQ08sVUFBSixDQUFlLElBQUlWLGdEQUFRLENBQUNXLGlCQUFiLEVBQWYsRUFBaUQsY0FBakQ7QUFFQVIsT0FBRyxDQUFDUyxFQUFKLENBQU8sTUFBUCxFQUFlLE1BQU07QUFDbkJsQixZQUFNLENBQUNTLEdBQUcsQ0FBQ1UsU0FBSixHQUFnQnBCLEdBQWhCLENBQW9CcUIsT0FBcEIsQ0FBNEIsQ0FBNUIsQ0FBRCxDQUFOO0FBQ0FqQixZQUFNLENBQUNNLEdBQUcsQ0FBQ1UsU0FBSixHQUFnQmpCLEdBQWhCLENBQW9Ca0IsT0FBcEIsQ0FBNEIsQ0FBNUIsQ0FBRCxDQUFOO0FBQ0FmLGFBQU8sQ0FBQ0ksR0FBRyxDQUFDWSxPQUFKLEdBQWNELE9BQWQsQ0FBc0IsQ0FBdEIsQ0FBRCxDQUFQO0FBQ0QsS0FKRCxFQVpjLENBa0JkOztBQUNBLFdBQU8sTUFBTVgsR0FBRyxDQUFDYSxNQUFKLEVBQWI7QUFDRCxHQXBCUSxFQW9CTixFQXBCTSxDQUFULENBVG1CLENBNkJYOztBQUVSLHNCQUNFO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUUsdUNBQWhCO0FBQXlELFNBQUcsRUFBRXpCO0FBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFLRCxDQXBDRDs7R0FBTUQsTTs7S0FBQUEsTTtBQXNDU0EscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL01hcHMvTWFwYm94TWFwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBtYXBib3hnbCBmcm9tICdtYXBib3gtZ2wnO1xuXG5cbmNvbnN0IE1hcGJveCA9ICgpID0+IHtcbiAgY29uc3QgbWFwQ29udGFpbmVyUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBbbG5nLCBzZXRMbmddID0gdXNlU3RhdGUoLTcxLjA1NzkpO1xuICBjb25zdCBbbGF0LCBzZXRMYXRdID0gdXNlU3RhdGUoNDIuMzYwMik7XG4gIGNvbnN0IFt6b29tLCBzZXRab29tXSA9IHVzZVN0YXRlKDE3KTtcbiAgbWFwYm94Z2wuYWNjZXNzVG9rZW4gPSBcInBrLmV5SjFJam9pYm05cWFXSmxJaXdpWVNJNkltTnJjSGxvT1hnMU9UQTBNM2N5YjIxdVlXODNkMlYzTUd3aWZRLkdsWkxBR1ByRElmMWxpaEdLSklCcXdcIjtcblxuXG4gIC8vIEluaXRpYWxpemUgbWFwIHdoZW4gY29tcG9uZW50IG1vdW50c1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG1hcCA9IG5ldyBtYXBib3hnbC5NYXAoe1xuICAgICAgY29udGFpbmVyOiBtYXBDb250YWluZXJSZWYuY3VycmVudCxcbiAgICAgIHN0eWxlOiAnbWFwYm94Oi8vc3R5bGVzL21hcGJveC9zYXRlbGxpdGUtdjknLFxuICAgICAgY2VudGVyOiBbbG5nLCBsYXRdLFxuICAgICAgem9vbTogem9vbSxcbiAgICAgIHNjcm9sbFpvb206IGZhbHNlLFxuICAgIH0pO1xuXG4gICAgLy8gQWRkIG5hdmlnYXRpb24gY29udHJvbCAodGhlICsvLSB6b29tIGJ1dHRvbnMpXG4gICAgbWFwLmFkZENvbnRyb2wobmV3IG1hcGJveGdsLk5hdmlnYXRpb25Db250cm9sKCksICdib3R0b20tcmlnaHQnKTtcblxuICAgIG1hcC5vbignbW92ZScsICgpID0+IHtcbiAgICAgIHNldExuZyhtYXAuZ2V0Q2VudGVyKCkubG5nLnRvRml4ZWQoNCkpO1xuICAgICAgc2V0TGF0KG1hcC5nZXRDZW50ZXIoKS5sYXQudG9GaXhlZCg0KSk7XG4gICAgICBzZXRab29tKG1hcC5nZXRab29tKCkudG9GaXhlZCgyKSk7XG4gICAgfSk7XG5cbiAgICAvLyBDbGVhbiB1cCBvbiB1bm1vdW50XG4gICAgcmV0dXJuICgpID0+IG1hcC5yZW1vdmUoKTtcbiAgfSwgW10pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImFic29sdXRlIHctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvbnRhaW5cIn0gcmVmPXttYXBDb250YWluZXJSZWZ9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYXBib3g7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Maps/MapboxMap.js\n");

/***/ })

})