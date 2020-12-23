module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/index.module.scss */ \"./styles/index.module.scss\");\n/* harmony import */ var _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ \"@material-ui/core/TextField\");\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Fab */ \"@material-ui/core/Fab\");\n/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Add */ \"@material-ui/icons/Add\");\n/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _jsxFileName = \"/home/julio/relogiodigital/pages/index.js\";\n//import { render } from 'node-sass';\n\n\n\n\n\n //import NavigationIcon from '@material-ui/icons/Navigation';\n\nfunction home(props) {\n  const {\n    0: date,\n    1: setDate\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(new Date());\n  const {\n    0: hour,\n    1: setHour\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('');\n  const {\n    0: minute,\n    1: setMinute\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('');\n  const second = 1;\n  var {\n    0: events,\n    1: setEvents\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]);\n  var {\n    0: contador,\n    1: setContador\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0); //Replaces componentDidMount and componentWillUnmount\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    var timerID = setInterval(() => tick(), 1000);\n    var timer2 = setInterval(() => check(), 1000);\n    return function cleanup() {\n      clearInterval(timerID);\n      clearInterval(timer2);\n    };\n  });\n\n  function tick() {\n    setDate(new Date());\n  }\n\n  function check() {\n    if (hour == date.getHours() && minute == date.getMinutes() && second == date.getSeconds()) {\n      alert('hello');\n    }\n  }\n\n  const agendarHorario = () => {\n    events.push({\n      name: `evento ${contador}`,\n      hora: hour,\n      minuto: minute\n    });\n    setContador(contador + 1);\n    console.log(events);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.form,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: [date.getHours(), \":\", date.getMinutes(), \":\", date.getSeconds()]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n      children: [\"Your time is: \", hour, \":\", minute]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      onChange: event => setHour(event.target.value),\n      id: \"outlined-basic\",\n      label: \"Hora\",\n      variant: \"outlined\",\n      className: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.timeInput\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      className: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.divisor,\n      children: \":\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      onChange: event => setMinute(event.target.value),\n      id: \"outlined-basic2\",\n      label: \"Minutos\",\n      variant: \"outlined\",\n      className: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.timeInput\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.hourAction\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 15\n    }, this), \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 22\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      onClick: agendarHorario,\n      children: \"aaaaaa\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: events.map(x => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: x.name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 13\n      }, this))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 58,\n    columnNumber: 6\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbImhvbWUiLCJwcm9wcyIsImRhdGUiLCJzZXREYXRlIiwidXNlU3RhdGUiLCJEYXRlIiwiaG91ciIsInNldEhvdXIiLCJtaW51dGUiLCJzZXRNaW51dGUiLCJzZWNvbmQiLCJldmVudHMiLCJzZXRFdmVudHMiLCJjb250YWRvciIsInNldENvbnRhZG9yIiwidXNlRWZmZWN0IiwidGltZXJJRCIsInNldEludGVydmFsIiwidGljayIsInRpbWVyMiIsImNoZWNrIiwiY2xlYW51cCIsImNsZWFySW50ZXJ2YWwiLCJnZXRIb3VycyIsImdldE1pbnV0ZXMiLCJnZXRTZWNvbmRzIiwiYWxlcnQiLCJhZ2VuZGFySG9yYXJpbyIsInB1c2giLCJuYW1lIiwiaG9yYSIsIm1pbnV0byIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZXMiLCJmb3JtIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRpbWVJbnB1dCIsImRpdmlzb3IiLCJob3VyQWN0aW9uIiwibWFwIiwieCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUdlLFNBQVNBLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUNsQyxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLHNEQUFRLENBQUMsSUFBSUMsSUFBSixFQUFELENBQWhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCSCxzREFBUSxDQUFDLEVBQUQsQ0FBaEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0ksTUFBRDtBQUFBLE9BQVNDO0FBQVQsTUFBc0JMLHNEQUFRLENBQUMsRUFBRCxDQUFwQztBQUNBLFFBQU1NLE1BQU0sR0FBRyxDQUFmO0FBQ0EsTUFBSTtBQUFBLE9BQUNDLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCUixzREFBUSxDQUFD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QUFFZCxjQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhCSCxlQW1CRztBQUFBLGdCQUNHaEIsTUFBTSxDQUFDK0IsR0FBUCxDQUFXQyxDQUFDLGlCQUNYO0FBQUEsa0JBQUtBLENBQUMsQ0FBQ2Q7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbkJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUhIO0FBK0JEIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCB7IHJlbmRlciB9IGZyb20gJ25vZGUtc2Fzcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2luZGV4Lm1vZHVsZS5zY3NzJ1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xuaW1wb3J0IEZhYiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9GYWInO1xuaW1wb3J0IEFkZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0FkZCc7XG4vL2ltcG9ydCBOYXZpZ2F0aW9uSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTmF2aWdhdGlvbic7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZShwcm9wcykge1xuICBjb25zdCBbZGF0ZSwgc2V0RGF0ZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpKTtcbiAgY29uc3QgW2hvdXIsIHNldEhvdXJdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFttaW51dGUsIHNldE1pbnV0ZV0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3Qgc2Vjb25kID0gMTtcbiAgdmFyIFtldmVudHMsIHNldEV2ZW50c10gPSB1c2VTdGF0ZShbXSlcbiAgdmFyIFtjb250YWRvciwgc2V0Q29udGFkb3JdID0gdXNlU3RhdGUoMClcbiAvL1JlcGxhY2VzIGNvbXBvbmVudERpZE1vdW50IGFuZCBjb21wb25lbnRXaWxsVW5tb3VudFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHZhciB0aW1lcklEID0gc2V0SW50ZXJ2YWwoICgpID0+IHRpY2soKSwgMTAwMCApO1xuICAgIHZhciB0aW1lcjIgPSBzZXRJbnRlcnZhbCggKCkgPT4gY2hlY2soKSwgMTAwMCApOyBcblxuICAgIHJldHVybiBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcklEKTtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIyKTtcbiAgICAgIH07XG4gfSk7XG5cbiAgZnVuY3Rpb24gdGljaygpIHtcbiAgICBzZXREYXRlKG5ldyBEYXRlKCkpO1xuICAgfVxuXG5cbiAgZnVuY3Rpb24gY2hlY2soKXtcbiAgICBpZiAoaG91ciA9PSBkYXRlLmdldEhvdXJzKCkgJiYgbWludXRlID09IGRhdGUuZ2V0TWludXRlcygpXG4gICAgICAgJiYgc2Vjb25kID09IGRhdGUuZ2V0U2Vjb25kcygpKXtcbiAgICAgICAgYWxlcnQoJ2hlbGxvJyk7XG4gICAgICAgXG4gICAgICB9XG4gICB9XG5cbiAgY29uc3QgYWdlbmRhckhvcmFyaW8gPSAoKSA9PiB7XG5cbiAgICBldmVudHMucHVzaCh7XG4gICAgICBuYW1lOiBgZXZlbnRvICR7Y29udGFkb3J9YCxcbiAgICAgIGhvcmE6IGhvdXIsXG4gICAgICBtaW51dG86IG1pbnV0ZVxuICAgIH0pXG4gICAgc2V0Q29udGFkb3IoY29udGFkb3IrMSlcbiAgICBjb25zb2xlLmxvZyhldmVudHMpXG4gICAgXG4gICAgfVxuXG5cbiAgcmV0dXJuIChcbiAgICBcbiAgICBcbiAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfT5cbiAgICAgICAgXG4gICAgICAgIDxoMT57ZGF0ZS5nZXRIb3VycygpfTp7ZGF0ZS5nZXRNaW51dGVzKCl9OntkYXRlLmdldFNlY29uZHMoKX08L2gxPlxuICAgICAgICA8aDI+WW91ciB0aW1lIGlzOiB7aG91cn06e21pbnV0ZX08L2gyPlxuICAgICAgICA8VGV4dEZpZWxkIG9uQ2hhbmdlPXtldmVudCA9PiBzZXRIb3VyKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgIGlkPVwib3V0bGluZWQtYmFzaWNcIiBsYWJlbD1cIkhvcmFcIiB2YXJpYW50PVwib3V0bGluZWRcIiBcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudGltZUlucHV0fSAvPlxuICAgICAgICA8YSBjbGFzc05hbWUgPSB7c3R5bGVzLmRpdmlzb3J9Pjo8L2E+XG5cbiAgICAgICAgPFRleHRGaWVsZCBvbkNoYW5nZT17ZXZlbnQgPT4gc2V0TWludXRlKGV2ZW50LnRhcmdldC52YWx1ZSl9IFxuICAgICAgICBpZD1cIm91dGxpbmVkLWJhc2ljMlwiIGxhYmVsPVwiTWludXRvc1wiIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIFxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy50aW1lSW5wdXR9Lz5cbiAgICAgICAgPGJyLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ob3VyQWN0aW9ufT48L2Rpdj5cbiAgICAgICAgPGJyIC8+PGJyIC8+IDxiciAvPlxuXG4gICAgICAgIDxidXR0b24gb25DbGljaz17YWdlbmRhckhvcmFyaW99PmFhYWFhYTwvYnV0dG9uPlxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge2V2ZW50cy5tYXAoeCA9PiAoXG4gICAgICAgICAgICA8bGk+e3gubmFtZX08L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgICBcbiAgICApO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./styles/index.module.scss":
/*!**********************************!*\
  !*** ./styles/index.module.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"body\": \"styles_body__17NX2\",\n\t\"form\": \"styles_form__2QOuY\",\n\t\"timeInput\": \"styles_timeInput__1j2Vr\",\n\t\"divisor\": \"styles_divisor__11_Aa\",\n\t\"hourAction\": \"styles_hourAction__3C3Ap\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvaW5kZXgubW9kdWxlLnNjc3M/ODQwOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3R5bGVzL2luZGV4Lm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYm9keVwiOiBcInN0eWxlc19ib2R5X18xN05YMlwiLFxuXHRcImZvcm1cIjogXCJzdHlsZXNfZm9ybV9fMlFPdVlcIixcblx0XCJ0aW1lSW5wdXRcIjogXCJzdHlsZXNfdGltZUlucHV0X18xajJWclwiLFxuXHRcImRpdmlzb3JcIjogXCJzdHlsZXNfZGl2aXNvcl9fMTFfQWFcIixcblx0XCJob3VyQWN0aW9uXCI6IFwic3R5bGVzX2hvdXJBY3Rpb25fXzNDM0FwXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/index.module.scss\n");

/***/ }),

/***/ "@material-ui/core/Fab":
/*!****************************************!*\
  !*** external "@material-ui/core/Fab" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Fab\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9GYWJcIj84NDA2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL0ZhYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0ZhYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/Fab\n");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/TextField\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIj85MTFhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/TextField\n");

/***/ }),

/***/ "@material-ui/icons/Add":
/*!*****************************************!*\
  !*** external "@material-ui/icons/Add" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Add\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQWRkXCI/M2I5NCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbWF0ZXJpYWwtdWkvaWNvbnMvQWRkLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0FkZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/icons/Add\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });