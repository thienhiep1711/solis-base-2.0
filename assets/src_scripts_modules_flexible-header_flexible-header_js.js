"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwknd_nation"] = self["webpackChunkwknd_nation"] || []).push([["src_scripts_modules_flexible-header_flexible-header_js"],{

/***/ "./src/scripts/modules/flexible-header/flexible-header.js":
/*!****************************************************************!*\
  !*** ./src/scripts/modules/flexible-header/flexible-header.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var select_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! select-dom */ \"./node_modules/select-dom/index.js\");\n/* harmony import */ var select_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(select_dom__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dom_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dom-event */ \"./node_modules/dom-event/index.js\");\n/* harmony import */ var dom_event__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dom_event__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar STICKY_SELECTOR = '.js-sticky-flexible-header';\nvar SITE_HEADER_SELECTOR = '.js-site-header';\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (el) {\n  var headerEl = select_dom__WEBPACK_IMPORTED_MODULE_0___default()(SITE_HEADER_SELECTOR);\n  var stickyEl = select_dom__WEBPACK_IMPORTED_MODULE_0___default()(STICKY_SELECTOR);\n  var isSticky = el.getAttribute('data-sticky') === 'true';\n\n  var main = function main() {\n    var headerHeight = headerEl ? headerEl.offsetHeight : 0;\n\n    if (stickyEl && isSticky) {\n      stickyEl.setAttribute('style', \"top: \".concat(headerHeight, \"px\"));\n    } else {\n      stickyEl.setAttribute('style', 'position: static');\n    }\n  };\n\n  main();\n  dom_event__WEBPACK_IMPORTED_MODULE_1___default()(window, 'resize', main);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tb2R1bGVzL2ZsZXhpYmxlLWhlYWRlci9mbGV4aWJsZS1oZWFkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3drbmQtbmF0aW9uLy4vc3JjL3NjcmlwdHMvbW9kdWxlcy9mbGV4aWJsZS1oZWFkZXIvZmxleGlibGUtaGVhZGVyLmpzPzc2NzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNlbGVjdCBmcm9tICdzZWxlY3QtZG9tJ1xuaW1wb3J0IG9uIGZyb20gJ2RvbS1ldmVudCdcblxuY29uc3QgU1RJQ0tZX1NFTEVDVE9SID0gJy5qcy1zdGlja3ktZmxleGlibGUtaGVhZGVyJ1xuY29uc3QgU0lURV9IRUFERVJfU0VMRUNUT1IgPSAnLmpzLXNpdGUtaGVhZGVyJ1xuXG5leHBvcnQgZGVmYXVsdCAoZWwpID0+IHtcbiAgY29uc3QgaGVhZGVyRWwgPSBzZWxlY3QoU0lURV9IRUFERVJfU0VMRUNUT1IpXG4gIGNvbnN0IHN0aWNreUVsID0gc2VsZWN0KFNUSUNLWV9TRUxFQ1RPUilcbiAgY29uc3QgaXNTdGlja3kgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3RpY2t5JykgPT09ICd0cnVlJ1xuXG4gIGNvbnN0IG1haW4gPSAoKSA9PiB7XG4gICAgY29uc3QgaGVhZGVySGVpZ2h0ID0gaGVhZGVyRWwgPyBoZWFkZXJFbC5vZmZzZXRIZWlnaHQgOiAwXG4gICAgaWYgKHN0aWNreUVsICYmIGlzU3RpY2t5KSB7XG4gICAgICBzdGlja3lFbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYHRvcDogJHtoZWFkZXJIZWlnaHR9cHhgKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdGlja3lFbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3Bvc2l0aW9uOiBzdGF0aWMnKVxuICAgIH1cbiAgfVxuXG4gIG1haW4oKVxuICBvbih3aW5kb3csICdyZXNpemUnLCBtYWluKVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/modules/flexible-header/flexible-header.js\n");

/***/ })

}]);