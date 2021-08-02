webpackHotUpdate_N_E("pages/index",{

/***/ "./components/SearchBar/SearchBar.js":
/*!*******************************************!*\
  !*** ./components/SearchBar/SearchBar.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SearchBar; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/Users/nnamdiojibe/boston-solar-potential/components/SearchBar/SearchBar.js\",\n    _s = $RefreshSig$();\n\n //components\n\nconst token = \"pk.eyJ1Ijoibm9qaWJlIiwiYSI6ImNrcHloOXg1OTA0M3cyb21uYW83d2V3MGwifQ.GlZLAGPrDIf1lihGKJIBqw\";\nfunction SearchBar() {\n  _s();\n\n  //Wait for the component to load before attempting to inject any data\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    //listen to the input form for text being inserted\n    const search = document.getElementById(\"search\");\n    const matchList = document.getElementById(\"match-list\");\n\n    const searchBoston = async searchText => {\n      const res = await fetch('https://data.boston.gov/datastore/odata3.0/c4b7331e-e213-45a5-adda-052e4dd31d41?$format=json');\n      const data = await res.json();\n      const addresses = data.value;\n      let matches = addresses.filter(address => {\n        const regex = new RegExp(`^${searchText}`, 'gi');\n        return address.MAIL_ADDRESS.match(regex);\n      });\n\n      if (searchText.length == 0) {\n        matches = [];\n      }\n\n      ;\n      outputHTML(matches);\n    };\n\n    const outputHTML = matches => {\n      if (matches.length > 0) {\n        const html = matches.map(match => `\n            <button class=\"md:hover:bg-gray-400 hover:bg-gray-400 text-left p-2 block w-full border-b text-black border-gray-200  bg-white \">\n            ${match.MAIL_ADDRESS}, ${match.CITY} \n            </button>\n            `).join('');\n        matchList.innerHTML = html;\n      } else {\n        const html = ``;\n        matchList.innerHTML = html;\n      }\n    };\n\n    search.addEventListener('input', () => searchBoston(search.value));\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n    autoComplete: \"off\",\n    class: \"w-full mt-4 flex px-4 ml-auto\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n      type: \"text\",\n      id: \"search\",\n      class: \"w-full border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white\",\n      placeholder: \"Enter Your Address\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      class: \"flex-none rounded-r bg-red-500 text-white font-bold p-4 uppercase border-t border-b border-r \",\n      children: \"Check My Roof\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 56,\n    columnNumber: 5\n  }, this);\n} //search files and filter\n\n_s(SearchBar, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = SearchBar;\n\nvar _c;\n\n$RefreshReg$(_c, \"SearchBar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2hCYXIvU2VhcmNoQmFyLmpzPzMwZjUiXSwibmFtZXMiOlsidG9rZW4iLCJTZWFyY2hCYXIiLCJ1c2VFZmZlY3QiLCJzZWFyY2giLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibWF0Y2hMaXN0Iiwic2VhcmNoQm9zdG9uIiwic2VhcmNoVGV4dCIsInJlcyIsImZldGNoIiwiZGF0YSIsImpzb24iLCJhZGRyZXNzZXMiLCJ2YWx1ZSIsIm1hdGNoZXMiLCJmaWx0ZXIiLCJhZGRyZXNzIiwicmVnZXgiLCJSZWdFeHAiLCJNQUlMX0FERFJFU1MiLCJtYXRjaCIsImxlbmd0aCIsIm91dHB1dEhUTUwiLCJodG1sIiwibWFwIiwiQ0lUWSIsImpvaW4iLCJpbm5lckhUTUwiLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztDQUNBOztBQUVBLE1BQU1BLEtBQUssR0FBRywwRkFBZDtBQUdlLFNBQVNDLFNBQVQsR0FBcUI7QUFBQTs7QUFDaEM7QUFFQUMseURBQVMsQ0FBQyxNQUFNO0FBQ1o7QUFDSixVQUFNQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixRQUF4QixDQUFmO0FBQ0EsVUFBTUMsU0FBUyxHQUFHRixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBbEI7O0FBR0EsVUFBTUUsWUFBWSxHQUFHLE1BQU1DLFVBQU4sSUFBb0I7QUFDckMsWUFBTUMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBQyw4RkFBRCxDQUF2QjtBQUNBLFlBQU1DLElBQUksR0FBRyxNQUFNRixHQUFHLENBQUNHLElBQUosRUFBbkI7QUFDQSxZQUFNQyxTQUFTLEdBQUdGLElBQUksQ0FBQ0csS0FBdkI7QUFFQSxVQUFJQyxPQUFPLEdBQUdGLFNBQVMsQ0FBQ0csTUFBVixDQUFpQkMsT0FBTyxJQUFJO0FBQ3RDLGNBQU1DLEtBQUssR0FBRyxJQUFJQyxNQUFKLENBQVksSUFBR1gsVUFBVyxFQUExQixFQUE2QixJQUE3QixDQUFkO0FBRUEsZUFBT1MsT0FBTyxDQUFDRyxZQUFSLENBQXFCQyxLQUFyQixDQUEyQkgsS0FBM0IsQ0FBUDtBQUNILE9BSmEsQ0FBZDs7QUFNQSxVQUFHVixVQUFVLENBQUNjLE1BQVgsSUFBcUIsQ0FBeEIsRUFBMEI7QUFDdEJQLGVBQU8sR0FBRyxFQUFWO0FBQ0g7O0FBQUE7QUFFRFEsZ0JBQVUsQ0FBQ1IsT0FBRCxDQUFWO0FBQ0gsS0FoQkQ7O0FBa0JBLFVBQU1RLFVBQVUsR0FBR1IsT0FBTyxJQUFJO0FBQzFCLFVBQUdBLE9BQU8sQ0FBQ08sTUFBUixHQUFpQixDQUFwQixFQUFzQjtBQUNsQixjQUFNRSxJQUFJLEdBQUdULE9BQU8sQ0FBQ1UsR0FBUixDQUFZSixLQUFLLElBQUs7QUFDL0M7QUFDQSxjQUFjQSxLQUFLLENBQUNELFlBQWEsS0FBSUMsS0FBSyxDQUFDSyxJQUFLO0FBQ2hEO0FBQ0EsYUFKeUIsRUFJVkMsSUFKVSxDQUlMLEVBSkssQ0FBYjtBQU1BckIsaUJBQVMsQ0FBQ3NCLFNBQVYsR0FBc0JKLElBQXRCO0FBQ0gsT0FSRCxNQVVJO0FBQ0EsY0FBTUEsSUFBSSxHQUFJLEVBQWQ7QUFDQWxCLGlCQUFTLENBQUNzQixTQUFWLEdBQXNCSixJQUF0QjtBQUNIO0FBQ0osS0FmRDs7QUFpQkFyQixVQUFNLENBQUMwQixnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxNQUFLdEIsWUFBWSxDQUFDSixNQUFNLENBQUNXLEtBQVIsQ0FBbEQ7QUFDSCxHQTFDWSxDQUFUO0FBNENBLHNCQUVBO0FBQU0sZ0JBQVksRUFBQyxLQUFuQjtBQUF5QixTQUFLLEVBQUMsK0JBQS9CO0FBQUEsNEJBQ0k7QUFBTyxVQUFJLEVBQUMsTUFBWjtBQUFtQixRQUFFLEVBQUMsUUFBdEI7QUFBK0IsV0FBSyxFQUFDLCtFQUFyQztBQUFxSCxpQkFBVyxFQUFDO0FBQWpJO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQVEsV0FBSyxFQUFDLCtGQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRkE7QUFXSCxDLENBS0Q7O0dBL0R3QmIsUzs7S0FBQUEsUyIsImZpbGUiOiIuL2NvbXBvbmVudHMvU2VhcmNoQmFyL1NlYXJjaEJhci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuLy9jb21wb25lbnRzXG5cbmNvbnN0IHRva2VuID0gXCJway5leUoxSWpvaWJtOXFhV0psSWl3aVlTSTZJbU5yY0hsb09YZzFPVEEwTTNjeWIyMXVZVzgzZDJWM01Hd2lmUS5HbFpMQUdQckRJZjFsaWhHS0pJQnF3XCJcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2hCYXIoKSB7XG4gICAgLy9XYWl0IGZvciB0aGUgY29tcG9uZW50IHRvIGxvYWQgYmVmb3JlIGF0dGVtcHRpbmcgdG8gaW5qZWN0IGFueSBkYXRhXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAvL2xpc3RlbiB0byB0aGUgaW5wdXQgZm9ybSBmb3IgdGV4dCBiZWluZyBpbnNlcnRlZFxuICAgIGNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoXCIpO1xuICAgIGNvbnN0IG1hdGNoTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWF0Y2gtbGlzdFwiKTtcbiAgICBcblxuICAgIGNvbnN0IHNlYXJjaEJvc3RvbiA9IGFzeW5jIHNlYXJjaFRleHQgPT4ge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9kYXRhLmJvc3Rvbi5nb3YvZGF0YXN0b3JlL29kYXRhMy4wL2M0YjczMzFlLWUyMTMtNDVhNS1hZGRhLTA1MmU0ZGQzMWQ0MT8kZm9ybWF0PWpzb24nKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgIGNvbnN0IGFkZHJlc3NlcyA9IGRhdGEudmFsdWU7XG4gICAgXG4gICAgICAgIGxldCBtYXRjaGVzID0gYWRkcmVzc2VzLmZpbHRlcihhZGRyZXNzID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChgXiR7c2VhcmNoVGV4dH1gLCAnZ2knKTtcblxuICAgICAgICAgICAgcmV0dXJuIGFkZHJlc3MuTUFJTF9BRERSRVNTLm1hdGNoKHJlZ2V4KVxuICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgaWYoc2VhcmNoVGV4dC5sZW5ndGggPT0gMCl7XG4gICAgICAgICAgICBtYXRjaGVzID0gW107XG4gICAgICAgIH07XG4gICAgXG4gICAgICAgIG91dHB1dEhUTUwobWF0Y2hlcyk7XG4gICAgfTtcbiAgICBcbiAgICBjb25zdCBvdXRwdXRIVE1MID0gbWF0Y2hlcyA9PiB7XG4gICAgICAgIGlmKG1hdGNoZXMubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICBjb25zdCBodG1sID0gbWF0Y2hlcy5tYXAobWF0Y2ggPT4gYFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1kOmhvdmVyOmJnLWdyYXktNDAwIGhvdmVyOmJnLWdyYXktNDAwIHRleHQtbGVmdCBwLTIgYmxvY2sgdy1mdWxsIGJvcmRlci1iIHRleHQtYmxhY2sgYm9yZGVyLWdyYXktMjAwICBiZy13aGl0ZSBcIj5cbiAgICAgICAgICAgICR7bWF0Y2guTUFJTF9BRERSRVNTfSwgJHttYXRjaC5DSVRZfSBcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgYCkuam9pbignJyk7XG4gICAgXG4gICAgICAgICAgICBtYXRjaExpc3QuaW5uZXJIVE1MID0gaHRtbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBjb25zdCBodG1sID0gYGA7XG4gICAgICAgICAgICBtYXRjaExpc3QuaW5uZXJIVE1MID0gaHRtbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBzZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PnNlYXJjaEJvc3RvbihzZWFyY2gudmFsdWUpKTtcbn0pO1xuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIFxuICAgIDxmb3JtIGF1dG9Db21wbGV0ZT1cIm9mZlwiIGNsYXNzPVwidy1mdWxsIG10LTQgZmxleCBweC00IG1sLWF1dG9cIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJzZWFyY2hcIiBjbGFzcz1cInctZnVsbCBib3JkZXItdCBtci0wIGJvcmRlci1iIGJvcmRlci1sIHRleHQtZ3JheS04MDAgYm9yZGVyLWdyYXktMjAwIGJnLXdoaXRlXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBZb3VyIEFkZHJlc3NcIi8+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJmbGV4LW5vbmUgcm91bmRlZC1yIGJnLXJlZC01MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcC00IHVwcGVyY2FzZSBib3JkZXItdCBib3JkZXItYiBib3JkZXItciBcIj5cbiAgICAgICAgICAgIENoZWNrIE15IFJvb2ZcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICBcbjwvZm9ybT5cblxuICAgICk7XG59XG5cblxuXG5cbi8vc2VhcmNoIGZpbGVzIGFuZCBmaWx0ZXJcblxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SearchBar/SearchBar.js\n");

/***/ })

})