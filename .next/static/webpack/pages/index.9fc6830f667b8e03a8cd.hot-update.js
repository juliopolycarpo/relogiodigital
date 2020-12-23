webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/index.module.scss */ \"./styles/index.module.scss\");\n/* harmony import */ var _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ \"./node_modules/@material-ui/core/esm/TextField/index.js\");\n/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Fab */ \"./node_modules/@material-ui/core/esm/Fab/index.js\");\n/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Add */ \"./node_modules/@material-ui/icons/Add.js\");\n/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/home/julio/relogiodigital/pages/index.js\",\n    _s = $RefreshSig$();\n\n//import { render } from 'node-sass';\n\n\n\n\n\n //import NavigationIcon from '@material-ui/icons/Navigation';\n\nfunction home(props) {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(new Date()),\n      date = _useState[0],\n      setDate = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      hour = _useState2[0],\n      setHour = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      minute = _useState3[0],\n      setMinute = _useState3[1];\n\n  var second = 1;\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      events = _useState4[0],\n      setEvents = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      contador = _useState5[0],\n      setContador = _useState5[1]; //Replaces componentDidMount and componentWillUnmount\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var timerID = setInterval(function () {\n      return tick();\n    }, 1000);\n    var timer2 = setInterval(function () {\n      return check();\n    }, 1000);\n    return function cleanup() {\n      clearInterval(timerID);\n      clearInterval(timer2);\n    };\n  });\n\n  function tick() {\n    setDate(new Date());\n  }\n\n  function check() {\n    if (hour == date.getHours() && minute == date.getMinutes() && second == date.getSeconds()) {\n      alert('hello');\n    }\n  }\n\n  var agendarHorario = function agendarHorario() {\n    events.push({\n      name: \"evento \".concat(contador),\n      hora: hour,\n      minuto: minute\n    });\n    setContador(contador + 1);\n    console.log(events);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.form,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: [date.getHours(), \":\", date.getMinutes(), \":\", date.getSeconds()]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n      children: [\"Your time is: \", hour, \":\", minute]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      onChange: function onChange(event) {\n        return setHour(event.target.value);\n      },\n      id: \"outlined-basic\",\n      label: \"Hora\",\n      variant: \"outlined\",\n      className: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.timeInput\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      className: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.divisor,\n      children: \":\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      onChange: function onChange(event) {\n        return setMinute(event.target.value);\n      },\n      id: \"outlined-basic2\",\n      label: \"Minutos\",\n      variant: \"outlined\",\n      className: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.timeInput\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.hourAction\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 15\n    }, this), \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 22\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      onClick: agendarHorario,\n      children: \"aaaaaa\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: events.map(function (x) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: x.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 58,\n    columnNumber: 6\n  }, this);\n}\n\n_s(home, \"2xxfHKB/+tt7cwqrl0zZ6vEp+FU=\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJob21lIiwicHJvcHMiLCJ1c2VTdGF0ZSIsIkRhdGUiLCJkYXRlIiwic2V0RGF0ZSIsImhvdXIiLCJzZXRIb3VyIiwibWludXRlIiwic2V0TWludXRlIiwic2Vjb25kIiwiZXZlbnRzIiwic2V0RXZlbnRzIiwiY29udGFkb3IiLCJzZXRDb250YWRvciIsInVzZUVmZmVjdCIsInRpbWVySUQiLCJzZXRJbnRlcnZhbCIsInRpY2siLCJ0aW1lcjIiLCJjaGVjayIsImNsZWFudXAiLCJjbGVhckludGVydmFsIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwiZ2V0U2Vjb25kcyIsImFsZXJ0IiwiYWdlbmRhckhvcmFyaW8iLCJwdXNoIiwibmFtZSIsImhvcmEiLCJtaW51dG8iLCJjb25zb2xlIiwibG9nIiwic3R5bGVzIiwiZm9ybSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJ0aW1lSW5wdXQiLCJkaXZpc29yIiwiaG91ckFjdGlvbiIsIm1hcCIsIngiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBR2UsU0FBU0EsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ1ZDLHNEQUFRLENBQUMsSUFBSUMsSUFBSixFQUFELENBREU7QUFBQSxNQUMzQkMsSUFEMkI7QUFBQSxNQUNyQkMsT0FEcUI7O0FBQUEsbUJBRVZILHNEQUFRLENBQUMsRUFBRCxDQUZFO0FBQUEsTUFFM0JJLElBRjJCO0FBQUEsTUFFckJDLE9BRnFCOztBQUFBLG1CQUdOTCxzREFBUSxDQUFDLEVBQUQsQ0FIRjtBQUFBLE1BRzNCTSxNQUgyQjtBQUFBLE1BR25CQyxTQUhtQjs7QUFJbEMsTUFBTUMsTUFBTSxHQUFHLENBQWY7O0FBSmtDLG1CQUtSUixzREFBUSxDQUFDLEVBQUQsQ0FMQTtBQUFBLE1BSzdC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O0FBQUEsWUFkSCxlQWNTO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFkVCxvQkFjZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWRoQixlQWdCRztBQUFRLGFBQU8sRUFBRWQsY0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQkgsZUFtQkc7QUFBQSxnQkFDR2hCLE1BQU0sQ0FBQytCLEdBQVAsQ0FBVyxVQUFBQyxDQUFDO0FBQUEsNEJBQ1g7QUFBQSxvQkFBS0EsQ0FBQyxDQUFDZDtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFc7QUFBQSxPQUFaO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQW5CSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFISDtBQStCRDs7R0EzRXVCN0IsSSIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdub2RlLXNhc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9pbmRleC5tb2R1bGUuc2NzcydcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcbmltcG9ydCBGYWIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRmFiJztcbmltcG9ydCBBZGRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BZGQnO1xuLy9pbXBvcnQgTmF2aWdhdGlvbkljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL05hdmlnYXRpb24nO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWUocHJvcHMpIHtcbiAgY29uc3QgW2RhdGUsIHNldERhdGVdID0gdXNlU3RhdGUobmV3IERhdGUoKSk7XG4gIGNvbnN0IFtob3VyLCBzZXRIb3VyXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbbWludXRlLCBzZXRNaW51dGVdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IHNlY29uZCA9IDE7XG4gIHZhciBbZXZlbnRzLCBzZXRFdmVudHNdID0gdXNlU3RhdGUoW10pXG4gIHZhciBbY29udGFkb3IsIHNldENvbnRhZG9yXSA9IHVzZVN0YXRlKDApXG4gLy9SZXBsYWNlcyBjb21wb25lbnREaWRNb3VudCBhbmQgY29tcG9uZW50V2lsbFVubW91bnRcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB2YXIgdGltZXJJRCA9IHNldEludGVydmFsKCAoKSA9PiB0aWNrKCksIDEwMDAgKTtcbiAgICB2YXIgdGltZXIyID0gc2V0SW50ZXJ2YWwoICgpID0+IGNoZWNrKCksIDEwMDAgKTsgXG5cbiAgICByZXR1cm4gZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGltZXJJRCk7XG4gICAgICBjbGVhckludGVydmFsKHRpbWVyMik7XG4gICAgICB9O1xuIH0pO1xuXG4gIGZ1bmN0aW9uIHRpY2soKSB7XG4gICAgc2V0RGF0ZShuZXcgRGF0ZSgpKTtcbiAgIH1cblxuXG4gIGZ1bmN0aW9uIGNoZWNrKCl7XG4gICAgaWYgKGhvdXIgPT0gZGF0ZS5nZXRIb3VycygpICYmIG1pbnV0ZSA9PSBkYXRlLmdldE1pbnV0ZXMoKVxuICAgICAgICYmIHNlY29uZCA9PSBkYXRlLmdldFNlY29uZHMoKSl7XG4gICAgICAgIGFsZXJ0KCdoZWxsbycpO1xuICAgICAgIFxuICAgICAgfVxuICAgfVxuXG4gIGNvbnN0IGFnZW5kYXJIb3JhcmlvID0gKCkgPT4ge1xuXG4gICAgZXZlbnRzLnB1c2goe1xuICAgICAgbmFtZTogYGV2ZW50byAke2NvbnRhZG9yfWAsXG4gICAgICBob3JhOiBob3VyLFxuICAgICAgbWludXRvOiBtaW51dGVcbiAgICB9KVxuICAgIHNldENvbnRhZG9yKGNvbnRhZG9yKzEpXG4gICAgY29uc29sZS5sb2coZXZlbnRzKVxuICAgIFxuICAgIH1cblxuXG4gIHJldHVybiAoXG4gICAgXG4gICAgXG4gICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybX0+XG4gICAgICAgIFxuICAgICAgICA8aDE+e2RhdGUuZ2V0SG91cnMoKX06e2RhdGUuZ2V0TWludXRlcygpfTp7ZGF0ZS5nZXRTZWNvbmRzKCl9PC9oMT5cbiAgICAgICAgPGgyPllvdXIgdGltZSBpczoge2hvdXJ9OnttaW51dGV9PC9oMj5cbiAgICAgICAgPFRleHRGaWVsZCBvbkNoYW5nZT17ZXZlbnQgPT4gc2V0SG91cihldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICBpZD1cIm91dGxpbmVkLWJhc2ljXCIgbGFiZWw9XCJIb3JhXCIgdmFyaWFudD1cIm91dGxpbmVkXCIgXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnRpbWVJbnB1dH0gLz5cbiAgICAgICAgPGEgY2xhc3NOYW1lID0ge3N0eWxlcy5kaXZpc29yfT46PC9hPlxuXG4gICAgICAgIDxUZXh0RmllbGQgb25DaGFuZ2U9e2V2ZW50ID0+IHNldE1pbnV0ZShldmVudC50YXJnZXQudmFsdWUpfSBcbiAgICAgICAgaWQ9XCJvdXRsaW5lZC1iYXNpYzJcIiBsYWJlbD1cIk1pbnV0b3NcIiB2YXJpYW50PVwib3V0bGluZWRcIiBcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudGltZUlucHV0fS8+XG4gICAgICAgIDxici8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaG91ckFjdGlvbn0+PC9kaXY+XG4gICAgICAgIDxiciAvPjxiciAvPiA8YnIgLz5cblxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2FnZW5kYXJIb3JhcmlvfT5hYWFhYWE8L2J1dHRvbj5cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHtldmVudHMubWFwKHggPT4gKFxuICAgICAgICAgICAgPGxpPnt4Lm5hbWV9PC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgXG4gICAgKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})