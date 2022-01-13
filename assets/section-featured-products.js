"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkshopify_base_2_0"] = self["webpackChunkshopify_base_2_0"] || []).push([["section-featured-products"],{

/***/ "./src/modules/product-card/product-card.js":
/*!**************************************************!*\
  !*** ./src/modules/product-card/product-card.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _product_card_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-card.css */ "./src/modules/product-card/product-card.css");


/***/ }),

/***/ "./src/scripts/entries/section-featured-products.js":
/*!**********************************************************!*\
  !*** ./src/scripts/entries/section-featured-products.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lib_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lib/components */ \"./src/scripts/lib/components.js\");\n/* harmony import */ var modules_product_card_product_card_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! modules/product-card/product-card.js */ \"./src/modules/product-card/product-card.js\");\n\n\n(0,lib_components__WEBPACK_IMPORTED_MODULE_0__.initComponent)(modules_product_card_product_card_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], 'product-card');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9lbnRyaWVzL3NlY3Rpb24tZmVhdHVyZWQtcHJvZHVjdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFFQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hvcGlmeS1iYXNlLTIuMC8uL3NyYy9zY3JpcHRzL2VudHJpZXMvc2VjdGlvbi1mZWF0dXJlZC1wcm9kdWN0cy5qcz80NWE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluaXRDb21wb25lbnQgfSBmcm9tICdsaWIvY29tcG9uZW50cydcblxuaW1wb3J0IFByb2R1Y3RDYXJkIGZyb20gJ21vZHVsZXMvcHJvZHVjdC1jYXJkL3Byb2R1Y3QtY2FyZC5qcydcblxuaW5pdENvbXBvbmVudChQcm9kdWN0Q2FyZCwgJ3Byb2R1Y3QtY2FyZCcpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/entries/section-featured-products.js\n");

/***/ }),

/***/ "./src/scripts/store/base.js":
/*!***********************************!*\
  !*** ./src/scripts/store/base.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nvar state = {\n  miniCartOpened: false,\n  headerMenuOpened: false\n};\nvar getters = {};\nvar mutations = {};\nvar actions = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  state: state,\n  getters: getters,\n  mutations: mutations,\n  actions: actions\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9zdG9yZS9iYXNlLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBSUE7QUFJQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Nob3BpZnktYmFzZS0yLjAvLi9zcmMvc2NyaXB0cy9zdG9yZS9iYXNlLmpzP2FjMWYiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc3RhdGUgPSB7XG4gIG1pbmlDYXJ0T3BlbmVkOiBmYWxzZSxcbiAgaGVhZGVyTWVudU9wZW5lZDogZmFsc2Vcbn1cblxuY29uc3QgZ2V0dGVycyA9IHtcblxufVxuXG5jb25zdCBtdXRhdGlvbnMgPSB7XG5cbn1cblxuY29uc3QgYWN0aW9ucyA9IHtcblxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHN0YXRlLFxuICBnZXR0ZXJzLFxuICBtdXRhdGlvbnMsXG4gIGFjdGlvbnNcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/store/base.js\n");

/***/ }),

/***/ "./src/scripts/store/cart.js":
/*!***********************************!*\
  !*** ./src/scripts/store/cart.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nvar state = {\n  cart: window.SLS_STATE && window.SLS_STATE.cart || {}\n};\nvar getters = {};\nvar mutations = {};\nvar actions = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  namespaced: true,\n  state: state,\n  getters: getters,\n  mutations: mutations,\n  actions: actions\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9zdG9yZS9jYXJ0LmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUlBO0FBSUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Nob3BpZnktYmFzZS0yLjAvLi9zcmMvc2NyaXB0cy9zdG9yZS9jYXJ0LmpzPzk4NTAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc3RhdGUgPSB7XG4gIGNhcnQ6ICggd2luZG93LlNMU19TVEFURSAmJiB3aW5kb3cuU0xTX1NUQVRFLmNhcnQgKSB8fCB7fVxufVxuXG5jb25zdCBnZXR0ZXJzID0ge1xuXG59XG5cbmNvbnN0IG11dGF0aW9ucyA9IHtcblxufVxuXG5jb25zdCBhY3Rpb25zID0ge1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZXNwYWNlZDogdHJ1ZSxcbiAgc3RhdGUsXG4gIGdldHRlcnMsXG4gIG11dGF0aW9ucyxcbiAgYWN0aW9uc1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/store/cart.js\n");

/***/ }),

/***/ "./src/scripts/store/index.js":
/*!************************************!*\
  !*** ./src/scripts/store/index.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ \"./node_modules/core-js/modules/es.object.keys.js\");\n/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ \"./node_modules/core-js/modules/es.symbol.js\");\n/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ \"./node_modules/core-js/modules/es.array.filter.js\");\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ \"./node_modules/core-js/modules/es.object.get-own-property-descriptor.js\");\n/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ \"./node_modules/core-js/modules/es.object.get-own-property-descriptors.js\");\n/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm-bundler.js\");\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./base */ \"./src/scripts/store/base.js\");\n/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cart */ \"./src/scripts/store/cart.js\");\n\n\n\n\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar store = (0,vuex__WEBPACK_IMPORTED_MODULE_9__.createStore)(_objectSpread(_objectSpread({}, _base__WEBPACK_IMPORTED_MODULE_7__[\"default\"]), {}, {\n  modules: {\n    cart: _cart__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n  }\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (store);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9zdG9yZS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQURBO0FBRkE7QUFPQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Nob3BpZnktYmFzZS0yLjAvLi9zcmMvc2NyaXB0cy9zdG9yZS9pbmRleC5qcz8yMWY4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAndnVleCdcblxuaW1wb3J0IGJhc2UgZnJvbSAnLi9iYXNlJ1xuaW1wb3J0IGNhcnQgZnJvbSAnLi9jYXJ0J1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHtcbiAgLi4uYmFzZSxcbiAgbW9kdWxlczoge1xuICAgIGNhcnRcbiAgfSxcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/store/index.js\n");

/***/ }),

/***/ "./src/modules/product-card/product-card.css":
/*!***************************************************!*\
  !*** ./src/modules/product-card/product-card.css ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9wcm9kdWN0LWNhcmQvcHJvZHVjdC1jYXJkLmNzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG9waWZ5LWJhc2UtMi4wLy4vc3JjL21vZHVsZXMvcHJvZHVjdC1jYXJkL3Byb2R1Y3QtY2FyZC5jc3M/OGYwMSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/product-card/product-card.css\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["commons"], function() { return __webpack_exec__("./src/scripts/entries/section-featured-products.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);