webpackHotUpdate_N_E("pages/results",{

/***/ "./components/Maps/MapboxMap.js":
/*!**************************************!*\
  !*** ./components/Maps/MapboxMap.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mapbox-gl */ \"./node_modules/mapbox-gl/dist/mapbox-gl.js\");\n/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/nnamdiojibe/boston-solar-potential/components/Maps/MapboxMap.js\",\n    _s = $RefreshSig$();\n\n\n\n\nconst Mapbox = () => {\n  _s();\n\n  const mapContainerRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  const {\n    0: lng,\n    1: setLng\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(-71.0579);\n  const {\n    0: lat,\n    1: setLat\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(34);\n  const {\n    0: zoom,\n    1: setZoom\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(1.5);\n  mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default.a.accessToken = \"pk.eyJ1Ijoibm9qaWJlIiwiYSI6ImNrcHloOXg1OTA0M3cyb21uYW83d2V3MGwifQ.GlZLAGPrDIf1lihGKJIBqw\"; // Initialize map when component mounts\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    const map = new mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default.a.Map({\n      container: mapContainerRef.current,\n      style: 'mapbox://styles/mapbox/satellite-v9',\n      center: [lng, lat],\n      zoom: zoom,\n      scrollZoom: false\n    }); // Add navigation control (the +/- zoom buttons)\n\n    map.addControl(new mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default.a.NavigationControl(), 'top-right');\n    map.on('move', () => {\n      setLng(map.getCenter().lng.toFixed(4));\n      setLat(map.getCenter().lat.toFixed(4));\n      setZoom(map.getZoom().toFixed(2));\n    }); // Clean up on unmount\n\n    return () => map.remove();\n  }, []); // eslint-disable-line react-hooks/exhaustive-deps\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"absolute w-full h-full\",\n      ref: mapContainerRef\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 5\n  }, undefined);\n};\n\n_s(Mapbox, \"+wND2F+UpPzH0zEqIfVK3+PjhtU=\");\n\n_c = Mapbox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Mapbox);\n\nvar _c;\n\n$RefreshReg$(_c, \"Mapbox\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYXBzL01hcGJveE1hcC5qcz9jZWI0Il0sIm5hbWVzIjpbIk1hcGJveCIsIm1hcENvbnRhaW5lclJlZiIsInVzZVJlZiIsImxuZyIsInNldExuZyIsInVzZVN0YXRlIiwibGF0Iiwic2V0TGF0Iiwiem9vbSIsInNldFpvb20iLCJtYXBib3hnbCIsImFjY2Vzc1Rva2VuIiwidXNlRWZmZWN0IiwibWFwIiwiTWFwIiwiY29udGFpbmVyIiwiY3VycmVudCIsInN0eWxlIiwiY2VudGVyIiwic2Nyb2xsWm9vbSIsImFkZENvbnRyb2wiLCJOYXZpZ2F0aW9uQ29udHJvbCIsIm9uIiwiZ2V0Q2VudGVyIiwidG9GaXhlZCIsImdldFpvb20iLCJyZW1vdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBR0EsTUFBTUEsTUFBTSxHQUFHLE1BQU07QUFBQTs7QUFDbkIsUUFBTUMsZUFBZSxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBOUI7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsR0FBRDtBQUFBLE9BQU1DO0FBQU4sTUFBZ0JDLHNEQUFRLENBQUMsQ0FBQyxPQUFGLENBQTlCO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLEdBQUQ7QUFBQSxPQUFNQztBQUFOLE1BQWdCRixzREFBUSxDQUFDLEVBQUQsQ0FBOUI7QUFDQSxRQUFNO0FBQUEsT0FBQ0csSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JKLHNEQUFRLENBQUMsR0FBRCxDQUFoQztBQUNBSyxrREFBUSxDQUFDQyxXQUFULEdBQXVCLDBGQUF2QixDQUxtQixDQVFuQjs7QUFDQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2QsVUFBTUMsR0FBRyxHQUFHLElBQUlILGdEQUFRLENBQUNJLEdBQWIsQ0FBaUI7QUFDM0JDLGVBQVMsRUFBRWQsZUFBZSxDQUFDZSxPQURBO0FBRTNCQyxXQUFLLEVBQUUscUNBRm9CO0FBRzNCQyxZQUFNLEVBQUUsQ0FBQ2YsR0FBRCxFQUFNRyxHQUFOLENBSG1CO0FBSTNCRSxVQUFJLEVBQUVBLElBSnFCO0FBSzNCVyxnQkFBVSxFQUFFO0FBTGUsS0FBakIsQ0FBWixDQURjLENBU2Q7O0FBQ0FOLE9BQUcsQ0FBQ08sVUFBSixDQUFlLElBQUlWLGdEQUFRLENBQUNXLGlCQUFiLEVBQWYsRUFBaUQsV0FBakQ7QUFFQVIsT0FBRyxDQUFDUyxFQUFKLENBQU8sTUFBUCxFQUFlLE1BQU07QUFDbkJsQixZQUFNLENBQUNTLEdBQUcsQ0FBQ1UsU0FBSixHQUFnQnBCLEdBQWhCLENBQW9CcUIsT0FBcEIsQ0FBNEIsQ0FBNUIsQ0FBRCxDQUFOO0FBQ0FqQixZQUFNLENBQUNNLEdBQUcsQ0FBQ1UsU0FBSixHQUFnQmpCLEdBQWhCLENBQW9Ca0IsT0FBcEIsQ0FBNEIsQ0FBNUIsQ0FBRCxDQUFOO0FBQ0FmLGFBQU8sQ0FBQ0ksR0FBRyxDQUFDWSxPQUFKLEdBQWNELE9BQWQsQ0FBc0IsQ0FBdEIsQ0FBRCxDQUFQO0FBQ0QsS0FKRCxFQVpjLENBa0JkOztBQUNBLFdBQU8sTUFBTVgsR0FBRyxDQUFDYSxNQUFKLEVBQWI7QUFDRCxHQXBCUSxFQW9CTixFQXBCTSxDQUFULENBVG1CLENBNkJYOztBQUVSLHNCQUNFO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsd0JBQWY7QUFBd0MsU0FBRyxFQUFFekI7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQUtELENBcENEOztHQUFNRCxNOztLQUFBQSxNO0FBc0NTQSxxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTWFwcy9NYXBib3hNYXAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IG1hcGJveGdsIGZyb20gJ21hcGJveC1nbCc7XG5cblxuY29uc3QgTWFwYm94ID0gKCkgPT4ge1xuICBjb25zdCBtYXBDb250YWluZXJSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IFtsbmcsIHNldExuZ10gPSB1c2VTdGF0ZSgtNzEuMDU3OSk7XG4gIGNvbnN0IFtsYXQsIHNldExhdF0gPSB1c2VTdGF0ZSgzNCk7XG4gIGNvbnN0IFt6b29tLCBzZXRab29tXSA9IHVzZVN0YXRlKDEuNSk7XG4gIG1hcGJveGdsLmFjY2Vzc1Rva2VuID0gXCJway5leUoxSWpvaWJtOXFhV0psSWl3aVlTSTZJbU5yY0hsb09YZzFPVEEwTTNjeWIyMXVZVzgzZDJWM01Hd2lmUS5HbFpMQUdQckRJZjFsaWhHS0pJQnF3XCI7XG5cblxuICAvLyBJbml0aWFsaXplIG1hcCB3aGVuIGNvbXBvbmVudCBtb3VudHNcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBtYXAgPSBuZXcgbWFwYm94Z2wuTWFwKHtcbiAgICAgIGNvbnRhaW5lcjogbWFwQ29udGFpbmVyUmVmLmN1cnJlbnQsXG4gICAgICBzdHlsZTogJ21hcGJveDovL3N0eWxlcy9tYXBib3gvc2F0ZWxsaXRlLXY5JyxcbiAgICAgIGNlbnRlcjogW2xuZywgbGF0XSxcbiAgICAgIHpvb206IHpvb20sXG4gICAgICBzY3JvbGxab29tOiBmYWxzZSxcbiAgICB9KTtcblxuICAgIC8vIEFkZCBuYXZpZ2F0aW9uIGNvbnRyb2wgKHRoZSArLy0gem9vbSBidXR0b25zKVxuICAgIG1hcC5hZGRDb250cm9sKG5ldyBtYXBib3hnbC5OYXZpZ2F0aW9uQ29udHJvbCgpLCAndG9wLXJpZ2h0Jyk7XG5cbiAgICBtYXAub24oJ21vdmUnLCAoKSA9PiB7XG4gICAgICBzZXRMbmcobWFwLmdldENlbnRlcigpLmxuZy50b0ZpeGVkKDQpKTtcbiAgICAgIHNldExhdChtYXAuZ2V0Q2VudGVyKCkubGF0LnRvRml4ZWQoNCkpO1xuICAgICAgc2V0Wm9vbShtYXAuZ2V0Wm9vbSgpLnRvRml4ZWQoMikpO1xuICAgIH0pO1xuXG4gICAgLy8gQ2xlYW4gdXAgb24gdW5tb3VudFxuICAgIHJldHVybiAoKSA9PiBtYXAucmVtb3ZlKCk7XG4gIH0sIFtdKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYWJzb2x1dGUgdy1mdWxsIGgtZnVsbCcgcmVmPXttYXBDb250YWluZXJSZWZ9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYXBib3g7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Maps/MapboxMap.js\n");

/***/ })

})