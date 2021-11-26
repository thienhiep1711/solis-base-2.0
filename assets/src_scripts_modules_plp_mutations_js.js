"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwknd_nation"] = self["webpackChunkwknd_nation"] || []).push([["src_scripts_modules_plp_mutations_js"],{

/***/ "./src/scripts/modules/plp/@mutations.js":
/*!***********************************************!*\
  !*** ./src/scripts/modules/plp/@mutations.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mutations\": function() { return /* binding */ mutations; },\n/* harmony export */   \"actions\": function() { return /* binding */ actions; }\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ \"./node_modules/core-js/modules/es.array.map.js\");\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ \"./node_modules/core-js/modules/es.array.sort.js\");\n/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.promise.js */ \"./node_modules/core-js/modules/es.promise.js\");\n/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _connectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./@connectors */ \"./src/scripts/modules/plp/@connectors.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./@util */ \"./src/scripts/modules/plp/@util.js\");\n\n\n\n\n\n\nvar mutations = {\n  changeCollection: function changeCollection(state, handle) {\n    state.collection.handle = handle;\n  },\n  changeCollectionData: function changeCollectionData(state, _ref) {\n    var menu = _ref.menu,\n        products = _ref.products,\n        collection = _ref.collection;\n    state.menu = menu;\n    state.collection = collection;\n    state.products = (products || []).map(function (product) {\n      return (0,_util__WEBPACK_IMPORTED_MODULE_5__.interpretTags)(product, state.acceptedFilters);\n    });\n    state.facets = (0,_util__WEBPACK_IMPORTED_MODULE_5__.aggregateProductOptionsWithTags)(state.products, state.acceptedFilters);\n    state.mounted = true;\n  },\n  changeAjaxingFlag: function changeAjaxingFlag(state, ajaxing) {\n    state.ajaxing = ajaxing;\n  },\n  changeLoadingState: function changeLoadingState(state, isLoading) {\n    state.loading = isLoading;\n  },\n  updateSelectedFacets: function updateSelectedFacets(state, facet) {\n    state.selectedFacets = (0,_util__WEBPACK_IMPORTED_MODULE_5__.toggleSelectedFilter)(state.selectedFacets, facet);\n  },\n  resetSelectedFacets: function resetSelectedFacets(state) {\n    state.selectedFacets = [];\n  },\n  updateSort: function updateSort(state, sort) {\n    state.sort = sort;\n  },\n  toggleFilterMenu: function toggleFilterMenu(state, show) {\n    state.showFilterMenu = show;\n  },\n  toggleCollectionMenu: function toggleCollectionMenu(state, show) {\n    state.showCollectionMenu = show;\n  },\n  toggleCompactView: function toggleCompactView(state, show) {\n    state.compactView = show;\n  },\n  updateFlowExperience: function updateFlowExperience(state, experience) {\n    state.experience = experience;\n  }\n};\nvar actions = {\n  fetchCollection: function fetchCollection(_ref2, _ref3) {\n    var commit = _ref2.commit,\n        state = _ref2.state;\n    var _ref3$handle = _ref3.handle,\n        handle = _ref3$handle === void 0 ? state.collection.handle : _ref3$handle,\n        _ref3$ajaxing = _ref3.ajaxing,\n        ajaxing = _ref3$ajaxing === void 0 ? true : _ref3$ajaxing,\n        _ref3$initial = _ref3.initial,\n        initial = _ref3$initial === void 0 ? false : _ref3$initial,\n        _ref3$resetSelectedFa = _ref3.resetSelectedFacets,\n        resetSelectedFacets = _ref3$resetSelectedFa === void 0 ? true : _ref3$resetSelectedFa,\n        _ref3$explodeColor = _ref3.explodeColor,\n        explodeColor = _ref3$explodeColor === void 0 ? false : _ref3$explodeColor;\n    !initial && commit('changeLoadingState', true);\n    return new Promise(function (resolve, reject) {\n      (0,_connectors__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(handle, state, function (res) {\n        var menu = res.menu,\n            collection = res.collection,\n            products = res.products;\n        commit('changeCollectionData', {\n          menu: menu,\n          collection: collection,\n          products: explodeColor ? (0,_util__WEBPACK_IMPORTED_MODULE_5__.explodeProductsByColor)(products) : products\n        });\n        ajaxing && commit('changeAjaxingFlag', ajaxing);\n        !initial && resetSelectedFacets && commit('resetSelectedFacets');\n        commit('toggleCollectionMenu', false);\n        commit('changeLoadingState', false);\n        resolve();\n      });\n    });\n  },\n  updateSelectedFacets: function updateSelectedFacets(_ref4, facet) {\n    var commit = _ref4.commit,\n        state = _ref4.state;\n    commit('changeAjaxingFlag', true);\n    commit('updateSelectedFacets', facet);\n  },\n  updateSort: function updateSort(_ref5, sort) {\n    var commit = _ref5.commit,\n        state = _ref5.state;\n    commit('updateSort', sort);\n  },\n  toggleFilterMenu: function toggleFilterMenu(_ref6, show) {\n    var commit = _ref6.commit,\n        state = _ref6.state;\n    commit('toggleFilterMenu', show);\n  },\n  toggleCollectionMenu: function toggleCollectionMenu(_ref7, show) {\n    var commit = _ref7.commit,\n        state = _ref7.state;\n    commit('toggleCollectionMenu', show);\n  },\n  toggleCompactView: function toggleCompactView(_ref8, show) {\n    var commit = _ref8.commit,\n        state = _ref8.state;\n    commit('toggleCompactView', show);\n    commit('changeAjaxingFlag', true);\n  },\n  resetSelectedFacets: function resetSelectedFacets(_ref9) {\n    var commit = _ref9.commit,\n        state = _ref9.state;\n    commit('resetSelectedFacets');\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tb2R1bGVzL3BscC9AbXV0YXRpb25zLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF6Q0E7QUE0Q0E7QUFDQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQXBEQSIsInNvdXJjZXMiOlsid2VicGFjazovL3drbmQtbmF0aW9uLy4vc3JjL3NjcmlwdHMvbW9kdWxlcy9wbHAvQG11dGF0aW9ucy5qcz81MDk4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZXF1ZXN0IGZyb20gJy4vQGNvbm5lY3RvcnMnXG5pbXBvcnQge1xuICBhZ2dyZWdhdGVQcm9kdWN0T3B0aW9uc1dpdGhUYWdzLFxuICB0b2dnbGVTZWxlY3RlZEZpbHRlcixcbiAgaW50ZXJwcmV0VGFncyxcbiAgZXhwbG9kZVByb2R1Y3RzQnlDb2xvclxufSBmcm9tICcuL0B1dGlsJ1xuXG5leHBvcnQgY29uc3QgbXV0YXRpb25zID0ge1xuICBjaGFuZ2VDb2xsZWN0aW9uIChzdGF0ZSwgaGFuZGxlKSB7XG4gICAgc3RhdGUuY29sbGVjdGlvbi5oYW5kbGUgPSBoYW5kbGVcbiAgfSxcbiAgY2hhbmdlQ29sbGVjdGlvbkRhdGEgKHN0YXRlLCB7XG4gICAgbWVudSxcbiAgICBwcm9kdWN0cyxcbiAgICBjb2xsZWN0aW9uXG4gIH0pIHtcbiAgICBzdGF0ZS5tZW51ID0gbWVudVxuICAgIHN0YXRlLmNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uXG4gICAgc3RhdGUucHJvZHVjdHMgPSAocHJvZHVjdHMgfHwgW10pLm1hcChwcm9kdWN0ID0+IGludGVycHJldFRhZ3MocHJvZHVjdCwgc3RhdGUuYWNjZXB0ZWRGaWx0ZXJzKSlcbiAgICBzdGF0ZS5mYWNldHMgPSBhZ2dyZWdhdGVQcm9kdWN0T3B0aW9uc1dpdGhUYWdzKHN0YXRlLnByb2R1Y3RzLCBzdGF0ZS5hY2NlcHRlZEZpbHRlcnMpXG4gICAgc3RhdGUubW91bnRlZCA9IHRydWVcbiAgfSxcbiAgY2hhbmdlQWpheGluZ0ZsYWcgKHN0YXRlLCBhamF4aW5nKSB7XG4gICAgc3RhdGUuYWpheGluZyA9IGFqYXhpbmdcbiAgfSxcbiAgY2hhbmdlTG9hZGluZ1N0YXRlIChzdGF0ZSwgaXNMb2FkaW5nKSB7XG4gICAgc3RhdGUubG9hZGluZyA9IGlzTG9hZGluZ1xuICB9LFxuICB1cGRhdGVTZWxlY3RlZEZhY2V0cyAoc3RhdGUsIGZhY2V0KSB7XG4gICAgc3RhdGUuc2VsZWN0ZWRGYWNldHMgPSB0b2dnbGVTZWxlY3RlZEZpbHRlcihzdGF0ZS5zZWxlY3RlZEZhY2V0cywgZmFjZXQpXG4gIH0sXG4gIHJlc2V0U2VsZWN0ZWRGYWNldHMgKHN0YXRlKSB7XG4gICAgc3RhdGUuc2VsZWN0ZWRGYWNldHMgPSBbXVxuICB9LFxuICB1cGRhdGVTb3J0IChzdGF0ZSwgc29ydCkge1xuICAgIHN0YXRlLnNvcnQgPSBzb3J0XG4gIH0sXG4gIHRvZ2dsZUZpbHRlck1lbnUgKHN0YXRlLCBzaG93KSB7XG4gICAgc3RhdGUuc2hvd0ZpbHRlck1lbnUgPSBzaG93XG4gIH0sXG4gIHRvZ2dsZUNvbGxlY3Rpb25NZW51IChzdGF0ZSwgc2hvdykge1xuICAgIHN0YXRlLnNob3dDb2xsZWN0aW9uTWVudSA9IHNob3dcbiAgfSxcbiAgdG9nZ2xlQ29tcGFjdFZpZXcgKHN0YXRlLCBzaG93KSB7XG4gICAgc3RhdGUuY29tcGFjdFZpZXcgPSBzaG93XG4gIH0sXG4gIHVwZGF0ZUZsb3dFeHBlcmllbmNlICAoc3RhdGUsIGV4cGVyaWVuY2UpIHtcbiAgICBzdGF0ZS5leHBlcmllbmNlID0gZXhwZXJpZW5jZVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBhY3Rpb25zID0ge1xuICBmZXRjaENvbGxlY3Rpb24gKHtjb21taXQsIHN0YXRlfSwge1xuICAgIGhhbmRsZSA9IHN0YXRlLmNvbGxlY3Rpb24uaGFuZGxlLFxuICAgIGFqYXhpbmcgPSB0cnVlLFxuICAgIGluaXRpYWwgPSBmYWxzZSxcbiAgICByZXNldFNlbGVjdGVkRmFjZXRzID0gdHJ1ZSxcbiAgICBleHBsb2RlQ29sb3IgPSBmYWxzZVxuICB9KSB7XG4gICAgIWluaXRpYWwgJiYgY29tbWl0KCdjaGFuZ2VMb2FkaW5nU3RhdGUnLCB0cnVlKVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHJlcXVlc3QoaGFuZGxlLCBzdGF0ZSwgcmVzID0+IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIG1lbnUsXG4gICAgICAgICAgY29sbGVjdGlvbixcbiAgICAgICAgICBwcm9kdWN0c1xuICAgICAgICB9ID0gcmVzXG5cbiAgICAgICAgY29tbWl0KCdjaGFuZ2VDb2xsZWN0aW9uRGF0YScsIHtcbiAgICAgICAgICBtZW51LFxuICAgICAgICAgIGNvbGxlY3Rpb24sXG4gICAgICAgICAgcHJvZHVjdHM6IGV4cGxvZGVDb2xvciA/IGV4cGxvZGVQcm9kdWN0c0J5Q29sb3IocHJvZHVjdHMpIDogcHJvZHVjdHNcbiAgICAgICAgfSlcblxuICAgICAgICBhamF4aW5nICYmIGNvbW1pdCgnY2hhbmdlQWpheGluZ0ZsYWcnLCBhamF4aW5nKVxuXG4gICAgICAgICFpbml0aWFsICYmIHJlc2V0U2VsZWN0ZWRGYWNldHMgJiYgY29tbWl0KCdyZXNldFNlbGVjdGVkRmFjZXRzJylcbiAgICAgICAgY29tbWl0KCd0b2dnbGVDb2xsZWN0aW9uTWVudScsIGZhbHNlKVxuICAgICAgICBjb21taXQoJ2NoYW5nZUxvYWRpbmdTdGF0ZScsIGZhbHNlKVxuICAgICAgICByZXNvbHZlKClcbiAgICAgIH0pXG4gICAgfSlcbiAgfSxcbiAgdXBkYXRlU2VsZWN0ZWRGYWNldHMgKHtjb21taXQsIHN0YXRlfSwgZmFjZXQpIHtcbiAgICBjb21taXQoJ2NoYW5nZUFqYXhpbmdGbGFnJywgdHJ1ZSlcbiAgICBjb21taXQoJ3VwZGF0ZVNlbGVjdGVkRmFjZXRzJywgZmFjZXQpXG4gIH0sXG4gIHVwZGF0ZVNvcnQgKHtjb21taXQsIHN0YXRlfSwgc29ydCkge1xuICAgIGNvbW1pdCgndXBkYXRlU29ydCcsIHNvcnQpXG4gIH0sXG4gIHRvZ2dsZUZpbHRlck1lbnUgKHtjb21taXQsIHN0YXRlfSwgc2hvdykge1xuICAgIGNvbW1pdCgndG9nZ2xlRmlsdGVyTWVudScsIHNob3cpXG4gIH0sXG4gIHRvZ2dsZUNvbGxlY3Rpb25NZW51ICh7Y29tbWl0LCBzdGF0ZX0sIHNob3cpIHtcbiAgICBjb21taXQoJ3RvZ2dsZUNvbGxlY3Rpb25NZW51Jywgc2hvdylcbiAgfSxcbiAgdG9nZ2xlQ29tcGFjdFZpZXcgKHtjb21taXQsIHN0YXRlfSwgc2hvdykge1xuICAgIGNvbW1pdCgndG9nZ2xlQ29tcGFjdFZpZXcnLCBzaG93KVxuICAgIGNvbW1pdCgnY2hhbmdlQWpheGluZ0ZsYWcnLCB0cnVlKVxuICB9LFxuICByZXNldFNlbGVjdGVkRmFjZXRzICh7Y29tbWl0LCBzdGF0ZX0pIHtcbiAgICBjb21taXQoJ3Jlc2V0U2VsZWN0ZWRGYWNldHMnKVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/modules/plp/@mutations.js\n");

/***/ })

}]);