/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkshopify_base_2_0"] = self["webpackChunkshopify_base_2_0"] || []).push([["main"],{

/***/ "./src/scripts/entries/main.js":
/*!*************************************!*\
  !*** ./src/scripts/entries/main.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lib_init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lib/init */ \"./src/scripts/lib/init.js\");\n/* harmony import */ var lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lib/utils */ \"./src/scripts/lib/utils.js\");\n/* harmony import */ var styles_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styles/main.css */ \"./src/styles/main.css\");\n\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  if ((0,lib_utils__WEBPACK_IMPORTED_MODULE_1__.isIEorEdge)()) (0,lib_utils__WEBPACK_IMPORTED_MODULE_1__.set)(document.body, 'ie');\n\n  if ((0,lib_utils__WEBPACK_IMPORTED_MODULE_1__.isTouch)()) {\n    document.body.classList.remove('no-touch');\n  }\n\n  (0,lib_init__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().mount();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9lbnRyaWVzL21haW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG9waWZ5LWJhc2UtMi4wLy4vc3JjL3NjcmlwdHMvZW50cmllcy9tYWluLmpzPzBiNDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGluaXQgZnJvbSAnbGliL2luaXQnXG5pbXBvcnQge3NldCwgaXNJRW9yRWRnZSwgaXNUb3VjaH0gZnJvbSAnbGliL3V0aWxzJ1xuXG5pbXBvcnQgJ3N0eWxlcy9tYWluLmNzcydcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgaWYgKGlzSUVvckVkZ2UoKSkgc2V0KGRvY3VtZW50LmJvZHksICdpZScpXG5cbiAgaWYgKGlzVG91Y2goKSkge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm8tdG91Y2gnKVxuICB9XG5cbiAgaW5pdCgpLm1vdW50KClcbn0pXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/entries/main.js\n");

/***/ }),

/***/ "./src/scripts/modules/pdp/@mutations.js":
/*!***********************************************!*\
  !*** ./src/scripts/modules/pdp/@mutations.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mutations\": function() { return /* binding */ mutations; },\n/* harmony export */   \"actions\": function() { return /* binding */ actions; }\n/* harmony export */ });\nvar mutations = {\n  page: function page(state, _page) {\n    state.page = _page;\n  }\n};\nvar actions = {\n  setPage: function setPage(_ref, page) {\n    var commit = _ref.commit,\n        state = _ref.state;\n    commit('page', page);\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tb2R1bGVzL3BkcC9AbXV0YXRpb25zLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUhBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hvcGlmeS1iYXNlLTIuMC8uL3NyYy9zY3JpcHRzL21vZHVsZXMvcGRwL0BtdXRhdGlvbnMuanM/MjE5MiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgbXV0YXRpb25zID0ge1xuICBwYWdlIChzdGF0ZSwgcGFnZSkge1xuICAgIHN0YXRlLnBhZ2UgPSBwYWdlXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGFjdGlvbnMgPSB7XG4gIHNldFBhZ2UgKHsgY29tbWl0LCBzdGF0ZSB9LCBwYWdlKSB7XG4gICAgY29tbWl0KCdwYWdlJywgcGFnZSlcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/modules/pdp/@mutations.js\n");

/***/ }),

/***/ "./src/scripts/modules/pdp/@store.js":
/*!*******************************************!*\
  !*** ./src/scripts/modules/pdp/@store.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ \"./node_modules/core-js/modules/es.object.assign.js\");\n/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm-bundler.js\");\n/* harmony import */ var _mutations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./@mutations */ \"./src/scripts/modules/pdp/@mutations.js\");\n\n\n\nvar defaults = {\n  page: 'plp'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,vuex__WEBPACK_IMPORTED_MODULE_2__.createStore)({\n  namespaced: true,\n  state: Object.assign({}, defaults),\n  actions: _mutations__WEBPACK_IMPORTED_MODULE_1__.actions,\n  mutations: _mutations__WEBPACK_IMPORTED_MODULE_1__.mutations\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tb2R1bGVzL3BkcC9Ac3RvcmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFOQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Nob3BpZnktYmFzZS0yLjAvLi9zcmMvc2NyaXB0cy9tb2R1bGVzL3BkcC9Ac3RvcmUuanM/MTk3MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3Z1ZXgnXG5pbXBvcnQgeyBtdXRhdGlvbnMsIGFjdGlvbnMgfSBmcm9tICcuL0BtdXRhdGlvbnMnXG5cbmNvbnN0IGRlZmF1bHRzID0ge1xuICBwYWdlOiAncGxwJ1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdG9yZSh7XG4gIG5hbWVzcGFjZWQ6IHRydWUsXG4gIHN0YXRlOiBPYmplY3QuYXNzaWduKHt9LFxuICAgIGRlZmF1bHRzXG4gICksXG4gIGFjdGlvbnMsXG4gIG11dGF0aW9uc1xufSlcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/modules/pdp/@store.js\n");

/***/ }),

/***/ "./src/scripts/modules/pdp/pdp.js":
/*!****************************************!*\
  !*** ./src/scripts/modules/pdp/pdp.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./@store */ \"./src/scripts/modules/pdp/@store.js\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm-bundler.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (el) {\n  var app = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)({\n    name: \"Pdp\",\n    setup: function setup() {\n      var store = (0,vuex__WEBPACK_IMPORTED_MODULE_2__.useStore)();\n      console.log('test local store', store);\n    },\n    data: function data() {\n      return {\n        value: 'pdp'\n      };\n    }\n  });\n  app.use(_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  app.mount(el);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tb2R1bGVzL3BkcC9wZHAuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQVZBO0FBWUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hvcGlmeS1iYXNlLTIuMC8uL3NyYy9zY3JpcHRzL21vZHVsZXMvcGRwL3BkcC5qcz9hNTQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUFwcCB9IGZyb20gJ3Z1ZSdcbmltcG9ydCBzdG9yZSBmcm9tICcuL0BzdG9yZSdcbmltcG9ydCB7IHVzZVN0b3JlIH0gZnJvbSAndnVleCdcblxuZXhwb3J0IGRlZmF1bHQgKGVsKSA9PiB7XG4gIGNvbnN0IGFwcCA9IGNyZWF0ZUFwcCh7XG4gICAgbmFtZTogXCJQZHBcIixcbiAgICBzZXR1cCAoKSB7XG4gICAgICBjb25zdCBzdG9yZSA9IHVzZVN0b3JlKClcbiAgICAgIGNvbnNvbGUubG9nKCd0ZXN0IGxvY2FsIHN0b3JlJywgc3RvcmUpXG4gICAgfSxcbiAgICBkYXRhICgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlOiAncGRwJ1xuICAgICAgfVxuICAgIH1cbiAgfSlcbiAgYXBwLnVzZShzdG9yZSlcbiAgYXBwLm1vdW50KGVsKVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/modules/pdp/pdp.js\n");

/***/ }),

/***/ "./src/scripts/modules/plp/@mutations.js":
/*!***********************************************!*\
  !*** ./src/scripts/modules/plp/@mutations.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mutations\": function() { return /* binding */ mutations; },\n/* harmony export */   \"actions\": function() { return /* binding */ actions; }\n/* harmony export */ });\nvar mutations = {\n  page: function page(state, _page) {\n    state.page = _page;\n  }\n};\nvar actions = {\n  setPage: function setPage(_ref, page) {\n    var commit = _ref.commit,\n        state = _ref.state;\n    commit('page', page);\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tb2R1bGVzL3BscC9AbXV0YXRpb25zLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUhBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hvcGlmeS1iYXNlLTIuMC8uL3NyYy9zY3JpcHRzL21vZHVsZXMvcGxwL0BtdXRhdGlvbnMuanM/NTA5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgbXV0YXRpb25zID0ge1xuICBwYWdlIChzdGF0ZSwgcGFnZSkge1xuICAgIHN0YXRlLnBhZ2UgPSBwYWdlXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGFjdGlvbnMgPSB7XG4gIHNldFBhZ2UgKHsgY29tbWl0LCBzdGF0ZSB9LCBwYWdlKSB7XG4gICAgY29tbWl0KCdwYWdlJywgcGFnZSlcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/modules/plp/@mutations.js\n");

/***/ }),

/***/ "./src/scripts/modules/plp/@store.js":
/*!*******************************************!*\
  !*** ./src/scripts/modules/plp/@store.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ \"./node_modules/core-js/modules/es.object.assign.js\");\n/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm-bundler.js\");\n/* harmony import */ var _mutations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./@mutations */ \"./src/scripts/modules/plp/@mutations.js\");\n\n\n\nvar defaults = {\n  page: 'pdp'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,vuex__WEBPACK_IMPORTED_MODULE_2__.createStore)({\n  namespaced: true,\n  state: Object.assign({}, defaults),\n  actions: _mutations__WEBPACK_IMPORTED_MODULE_1__.actions,\n  mutations: _mutations__WEBPACK_IMPORTED_MODULE_1__.mutations\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tb2R1bGVzL3BscC9Ac3RvcmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFOQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Nob3BpZnktYmFzZS0yLjAvLi9zcmMvc2NyaXB0cy9tb2R1bGVzL3BscC9Ac3RvcmUuanM/NjgzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3Z1ZXgnXG5pbXBvcnQgeyBtdXRhdGlvbnMsIGFjdGlvbnMgfSBmcm9tICcuL0BtdXRhdGlvbnMnXG5cbmNvbnN0IGRlZmF1bHRzID0ge1xuICBwYWdlOiAncGRwJ1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdG9yZSh7XG4gIG5hbWVzcGFjZWQ6IHRydWUsXG4gIHN0YXRlOiBPYmplY3QuYXNzaWduKHt9LFxuICAgIGRlZmF1bHRzXG4gICksXG4gIGFjdGlvbnMsXG4gIG11dGF0aW9uc1xufSlcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/modules/plp/@store.js\n");

/***/ }),

/***/ "./src/scripts/modules/plp/plp.js":
/*!****************************************!*\
  !*** ./src/scripts/modules/plp/plp.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./@store */ \"./src/scripts/modules/plp/@store.js\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm-bundler.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (el) {\n  var app = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)({\n    name: \"Plp\",\n    setup: function setup() {\n      var store = (0,vuex__WEBPACK_IMPORTED_MODULE_2__.useStore)();\n      console.log('test local store', store);\n    },\n    data: function data() {\n      return {\n        value: 'plp'\n      };\n    }\n  });\n  app.use(_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  app.mount(el);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tb2R1bGVzL3BscC9wbHAuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQVZBO0FBWUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hvcGlmeS1iYXNlLTIuMC8uL3NyYy9zY3JpcHRzL21vZHVsZXMvcGxwL3BscC5qcz8yOWQyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUFwcCB9IGZyb20gJ3Z1ZSdcbmltcG9ydCBzdG9yZSBmcm9tICcuL0BzdG9yZSdcbmltcG9ydCB7IHVzZVN0b3JlIH0gZnJvbSAndnVleCdcblxuZXhwb3J0IGRlZmF1bHQgKGVsKSA9PiB7XG4gIGNvbnN0IGFwcCA9IGNyZWF0ZUFwcCh7XG4gICAgbmFtZTogXCJQbHBcIixcbiAgICBzZXR1cCAoKSB7XG4gICAgICBjb25zdCBzdG9yZSA9IHVzZVN0b3JlKClcbiAgICAgIGNvbnNvbGUubG9nKCd0ZXN0IGxvY2FsIHN0b3JlJywgc3RvcmUpXG4gICAgfSxcbiAgICBkYXRhICgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlOiAncGxwJ1xuICAgICAgfVxuICAgIH1cbiAgfSlcbiAgYXBwLnVzZShzdG9yZSlcbiAgYXBwLm1vdW50KGVsKVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/modules/plp/plp.js\n");

/***/ }),

/***/ "./src/scripts/modules/test/@mutations.js":
/*!************************************************!*\
  !*** ./src/scripts/modules/test/@mutations.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mutations\": function() { return /* binding */ mutations; },\n/* harmony export */   \"actions\": function() { return /* binding */ actions; }\n/* harmony export */ });\nvar mutations = {\n  active: function active(state, _active) {\n    state.active = _active;\n  }\n};\nvar actions = {\n  setActive: function setActive(_ref, value) {\n    var commit = _ref.commit,\n        state = _ref.state;\n    commit('active', value);\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tb2R1bGVzL3Rlc3QvQG11dGF0aW9ucy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFIQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Nob3BpZnktYmFzZS0yLjAvLi9zcmMvc2NyaXB0cy9tb2R1bGVzL3Rlc3QvQG11dGF0aW9ucy5qcz9hM2YwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBtdXRhdGlvbnMgPSB7XG4gIGFjdGl2ZSAoc3RhdGUsIGFjdGl2ZSkge1xuICAgIHN0YXRlLmFjdGl2ZSA9IGFjdGl2ZVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBhY3Rpb25zID0ge1xuICBzZXRBY3RpdmUgKHsgY29tbWl0LCBzdGF0ZSB9LCB2YWx1ZSkge1xuICAgIGNvbW1pdCgnYWN0aXZlJywgdmFsdWUpXG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/modules/test/@mutations.js\n");

/***/ }),

/***/ "./src/scripts/modules/test/@store.js":
/*!********************************************!*\
  !*** ./src/scripts/modules/test/@store.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ \"./node_modules/core-js/modules/es.object.assign.js\");\n/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm-bundler.js\");\n/* harmony import */ var _mutations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./@mutations */ \"./src/scripts/modules/test/@mutations.js\");\n\n\n\nvar defaults = {\n  active: 'manual'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,vuex__WEBPACK_IMPORTED_MODULE_2__.createStore)({\n  namespaced: true,\n  state: Object.assign({}, defaults),\n  actions: _mutations__WEBPACK_IMPORTED_MODULE_1__.actions,\n  mutations: _mutations__WEBPACK_IMPORTED_MODULE_1__.mutations\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tb2R1bGVzL3Rlc3QvQHN0b3JlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBTkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG9waWZ5LWJhc2UtMi4wLy4vc3JjL3NjcmlwdHMvbW9kdWxlcy90ZXN0L0BzdG9yZS5qcz80ZDEzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAndnVleCdcbmltcG9ydCB7IG11dGF0aW9ucywgYWN0aW9ucyB9IGZyb20gJy4vQG11dGF0aW9ucydcblxuY29uc3QgZGVmYXVsdHMgPSB7XG4gIGFjdGl2ZTogJ21hbnVhbCdcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3RvcmUoe1xuICBuYW1lc3BhY2VkOiB0cnVlLFxuICBzdGF0ZTogT2JqZWN0LmFzc2lnbih7fSxcbiAgICBkZWZhdWx0c1xuICApLFxuICBhY3Rpb25zLFxuICBtdXRhdGlvbnNcbn0pXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/modules/test/@store.js\n");

/***/ }),

/***/ "./src/scripts/modules/test/test.js":
/*!******************************************!*\
  !*** ./src/scripts/modules/test/test.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./@store */ \"./src/scripts/modules/test/@store.js\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm-bundler.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (el) {\n  var app = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)({\n    name: \"TestSingle\",\n    setup: function setup() {\n      var store = (0,vuex__WEBPACK_IMPORTED_MODULE_2__.useStore)();\n      console.log(store);\n    },\n    data: function data() {\n      return {\n        value: 'test'\n      };\n    }\n  });\n  app.use(_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  app.mount(el);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tb2R1bGVzL3Rlc3QvdGVzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBVkE7QUFZQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG9waWZ5LWJhc2UtMi4wLy4vc3JjL3NjcmlwdHMvbW9kdWxlcy90ZXN0L3Rlc3QuanM/YzJjYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBcHAgfSBmcm9tICd2dWUnXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9Ac3RvcmUnXG5pbXBvcnQgeyB1c2VTdG9yZSB9IGZyb20gJ3Z1ZXgnXG5cbmV4cG9ydCBkZWZhdWx0IChlbCkgPT4ge1xuICBjb25zdCBhcHAgPSBjcmVhdGVBcHAoe1xuICAgIG5hbWU6IFwiVGVzdFNpbmdsZVwiLFxuICAgIHNldHVwICgpIHtcbiAgICAgIGNvbnN0IHN0b3JlID0gdXNlU3RvcmUoKVxuICAgICAgY29uc29sZS5sb2coc3RvcmUpXG4gICAgfSxcbiAgICBkYXRhICgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlOiAndGVzdCdcbiAgICAgIH1cbiAgICB9XG4gIH0pXG4gIGFwcC51c2Uoc3RvcmUpXG4gIGFwcC5tb3VudChlbClcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/modules/test/test.js\n");

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL21haW4uY3NzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Nob3BpZnktYmFzZS0yLjAvLi9zcmMvc3R5bGVzL21haW4uY3NzPzQzODYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles/main.css\n");

/***/ }),

/***/ "./src/scripts/modules sync recursive ^\\.\\/.*\\.js$":
/*!************************************************!*\
  !*** ./src/scripts/modules/ sync ^\.\/.*\.js$ ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./pdp/@mutations.js": "./src/scripts/modules/pdp/@mutations.js",
	"./pdp/@store.js": "./src/scripts/modules/pdp/@store.js",
	"./pdp/pdp.js": "./src/scripts/modules/pdp/pdp.js",
	"./plp/@mutations.js": "./src/scripts/modules/plp/@mutations.js",
	"./plp/@store.js": "./src/scripts/modules/plp/@store.js",
	"./plp/plp.js": "./src/scripts/modules/plp/plp.js",
	"./test/@mutations.js": "./src/scripts/modules/test/@mutations.js",
	"./test/@store.js": "./src/scripts/modules/test/@store.js",
	"./test/test.js": "./src/scripts/modules/test/test.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/scripts/modules sync recursive ^\\.\\/.*\\.js$";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["commons"], function() { return __webpack_exec__("./src/scripts/entries/main.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);