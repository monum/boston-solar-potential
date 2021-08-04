webpackHotUpdate_N_E("pages/results",{

/***/ "./components/Maps/MapboxMap.js":
/*!**************************************!*\
  !*** ./components/Maps/MapboxMap.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mapbox-gl */ \"./node_modules/mapbox-gl/dist/mapbox-gl.js\");\n/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/nnamdiojibe/boston-solar-potential/components/Maps/MapboxMap.js\",\n    _s = $RefreshSig$();\n\n\n\n\nconst Mapbox = () => {\n  _s();\n\n  const mapContainerRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  const {\n    0: lng,\n    1: setLng\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(5);\n  const {\n    0: lat,\n    1: setLat\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(34);\n  const {\n    0: zoom,\n    1: setZoom\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(1.5);\n  mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default.a.accessToken = \"pk.eyJ1Ijoibm9qaWJlIiwiYSI6ImNrcHloOXg1OTA0M3cyb21uYW83d2V3MGwifQ.GlZLAGPrDIf1lihGKJIBqw\"; // Initialize map when component mounts\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    const map = new mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default.a.Map({\n      container: mapContainerRef.current,\n      style: 'mapbox://styles/mapbox/satellite-v9',\n      center: [lng, lat],\n      zoom: zoom,\n      scrollZoom: false\n    }); // Add navigation control (the +/- zoom buttons)\n\n    map.addControl(new mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default.a.NavigationControl(), 'top-right');\n    map.on('move', () => {\n      setLng(map.getCenter().lng.toFixed(4));\n      setLat(map.getCenter().lat.toFixed(4));\n      setZoom(map.getZoom().toFixed(2));\n    }); // Clean up on unmount\n\n    return () => map.remove();\n  }, []); // eslint-disable-line react-hooks/exhaustive-deps\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"sidebarStyle\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [\"Longitude: \", lng, \" | Latitude: \", lat, \" | Zoom: \", zoom]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"map-container\",\n      ref: mapContainerRef\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 5\n  }, undefined);\n};\n\n_s(Mapbox, \"hlfu9UiZfyM4BKY96Q+icSRfqg4=\");\n\n_c = Mapbox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Mapbox);\n\nvar _c;\n\n$RefreshReg$(_c, \"Mapbox\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYXBzL01hcGJveE1hcC5qcz9jZWI0Il0sIm5hbWVzIjpbIk1hcGJveCIsIm1hcENvbnRhaW5lclJlZiIsInVzZVJlZiIsImxuZyIsInNldExuZyIsInVzZVN0YXRlIiwibGF0Iiwic2V0TGF0Iiwiem9vbSIsInNldFpvb20iLCJtYXBib3hnbCIsImFjY2Vzc1Rva2VuIiwidXNlRWZmZWN0IiwibWFwIiwiTWFwIiwiY29udGFpbmVyIiwiY3VycmVudCIsInN0eWxlIiwiY2VudGVyIiwic2Nyb2xsWm9vbSIsImFkZENvbnRyb2wiLCJOYXZpZ2F0aW9uQ29udHJvbCIsIm9uIiwiZ2V0Q2VudGVyIiwidG9GaXhlZCIsImdldFpvb20iLCJyZW1vdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBR0EsTUFBTUEsTUFBTSxHQUFHLE1BQU07QUFBQTs7QUFDbkIsUUFBTUMsZUFBZSxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBOUI7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsR0FBRDtBQUFBLE9BQU1DO0FBQU4sTUFBZ0JDLHNEQUFRLENBQUMsQ0FBRCxDQUE5QjtBQUNBLFFBQU07QUFBQSxPQUFDQyxHQUFEO0FBQUEsT0FBTUM7QUFBTixNQUFnQkYsc0RBQVEsQ0FBQyxFQUFELENBQTlCO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCSixzREFBUSxDQUFDLEdBQUQsQ0FBaEM7QUFDQUssa0RBQVEsQ0FBQ0MsV0FBVCxHQUF1QiwwRkFBdkIsQ0FMbUIsQ0FRbkI7O0FBQ0FDLHlEQUFTLENBQUMsTUFBTTtBQUNkLFVBQU1DLEdBQUcsR0FBRyxJQUFJSCxnREFBUSxDQUFDSSxHQUFiLENBQWlCO0FBQzNCQyxlQUFTLEVBQUVkLGVBQWUsQ0FBQ2UsT0FEQTtBQUUzQkMsV0FBSyxFQUFFLHFDQUZvQjtBQUczQkMsWUFBTSxFQUFFLENBQUNmLEdBQUQsRUFBTUcsR0FBTixDQUhtQjtBQUkzQkUsVUFBSSxFQUFFQSxJQUpxQjtBQUszQlcsZ0JBQVUsRUFBRTtBQUxlLEtBQWpCLENBQVosQ0FEYyxDQVNkOztBQUNBTixPQUFHLENBQUNPLFVBQUosQ0FBZSxJQUFJVixnREFBUSxDQUFDVyxpQkFBYixFQUFmLEVBQWlELFdBQWpEO0FBRUFSLE9BQUcsQ0FBQ1MsRUFBSixDQUFPLE1BQVAsRUFBZSxNQUFNO0FBQ25CbEIsWUFBTSxDQUFDUyxHQUFHLENBQUNVLFNBQUosR0FBZ0JwQixHQUFoQixDQUFvQnFCLE9BQXBCLENBQTRCLENBQTVCLENBQUQsQ0FBTjtBQUNBakIsWUFBTSxDQUFDTSxHQUFHLENBQUNVLFNBQUosR0FBZ0JqQixHQUFoQixDQUFvQmtCLE9BQXBCLENBQTRCLENBQTVCLENBQUQsQ0FBTjtBQUNBZixhQUFPLENBQUNJLEdBQUcsQ0FBQ1ksT0FBSixHQUFjRCxPQUFkLENBQXNCLENBQXRCLENBQUQsQ0FBUDtBQUNELEtBSkQsRUFaYyxDQWtCZDs7QUFDQSxXQUFPLE1BQU1YLEdBQUcsQ0FBQ2EsTUFBSixFQUFiO0FBQ0QsR0FwQlEsRUFvQk4sRUFwQk0sQ0FBVCxDQVRtQixDQTZCWDs7QUFFUixzQkFDRTtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLGNBQWY7QUFBQSw2QkFDRTtBQUFBLGtDQUNjdkIsR0FEZCxtQkFDZ0NHLEdBRGhDLGVBQzhDRSxJQUQ5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBTUU7QUFBSyxlQUFTLEVBQUMsZUFBZjtBQUErQixTQUFHLEVBQUVQO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFVRCxDQXpDRDs7R0FBTUQsTTs7S0FBQUEsTTtBQTJDU0EscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL01hcHMvTWFwYm94TWFwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBtYXBib3hnbCBmcm9tICdtYXBib3gtZ2wnO1xuXG5cbmNvbnN0IE1hcGJveCA9ICgpID0+IHtcbiAgY29uc3QgbWFwQ29udGFpbmVyUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBbbG5nLCBzZXRMbmddID0gdXNlU3RhdGUoNSk7XG4gIGNvbnN0IFtsYXQsIHNldExhdF0gPSB1c2VTdGF0ZSgzNCk7XG4gIGNvbnN0IFt6b29tLCBzZXRab29tXSA9IHVzZVN0YXRlKDEuNSk7XG4gIG1hcGJveGdsLmFjY2Vzc1Rva2VuID0gXCJway5leUoxSWpvaWJtOXFhV0psSWl3aVlTSTZJbU5yY0hsb09YZzFPVEEwTTNjeWIyMXVZVzgzZDJWM01Hd2lmUS5HbFpMQUdQckRJZjFsaWhHS0pJQnF3XCI7XG5cblxuICAvLyBJbml0aWFsaXplIG1hcCB3aGVuIGNvbXBvbmVudCBtb3VudHNcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBtYXAgPSBuZXcgbWFwYm94Z2wuTWFwKHtcbiAgICAgIGNvbnRhaW5lcjogbWFwQ29udGFpbmVyUmVmLmN1cnJlbnQsXG4gICAgICBzdHlsZTogJ21hcGJveDovL3N0eWxlcy9tYXBib3gvc2F0ZWxsaXRlLXY5JyxcbiAgICAgIGNlbnRlcjogW2xuZywgbGF0XSxcbiAgICAgIHpvb206IHpvb20sXG4gICAgICBzY3JvbGxab29tOiBmYWxzZSxcbiAgICB9KTtcblxuICAgIC8vIEFkZCBuYXZpZ2F0aW9uIGNvbnRyb2wgKHRoZSArLy0gem9vbSBidXR0b25zKVxuICAgIG1hcC5hZGRDb250cm9sKG5ldyBtYXBib3hnbC5OYXZpZ2F0aW9uQ29udHJvbCgpLCAndG9wLXJpZ2h0Jyk7XG5cbiAgICBtYXAub24oJ21vdmUnLCAoKSA9PiB7XG4gICAgICBzZXRMbmcobWFwLmdldENlbnRlcigpLmxuZy50b0ZpeGVkKDQpKTtcbiAgICAgIHNldExhdChtYXAuZ2V0Q2VudGVyKCkubGF0LnRvRml4ZWQoNCkpO1xuICAgICAgc2V0Wm9vbShtYXAuZ2V0Wm9vbSgpLnRvRml4ZWQoMikpO1xuICAgIH0pO1xuXG4gICAgLy8gQ2xlYW4gdXAgb24gdW5tb3VudFxuICAgIHJldHVybiAoKSA9PiBtYXAucmVtb3ZlKCk7XG4gIH0sIFtdKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc2lkZWJhclN0eWxlJz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICBMb25naXR1ZGU6IHtsbmd9IHwgTGF0aXR1ZGU6IHtsYXR9IHwgWm9vbToge3pvb219XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFwLWNvbnRhaW5lcicgcmVmPXttYXBDb250YWluZXJSZWZ9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYXBib3g7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Maps/MapboxMap.js\n");

/***/ })

})