"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwknd_nation"] = self["webpackChunkwknd_nation"] || []).push([["src_scripts_modules_product-description_product-description_js"],{

/***/ "./src/scripts/modules/product-description/product-description.js":
/*!************************************************************************!*\
  !*** ./src/scripts/modules/product-description/product-description.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.js\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mixins_animate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mixins/animate */ \"./src/scripts/mixins/animate.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (el) {\n  return new (vue__WEBPACK_IMPORTED_MODULE_1___default())({\n    el: el,\n    mixins: [mixins_animate__WEBPACK_IMPORTED_MODULE_0__[\"default\"]],\n    data: function data() {\n      return {\n        product: window.BARREL.product,\n        activeAccordion: false\n      };\n    },\n    methods: {\n      toggleAccordion: function toggleAccordion(reference) {\n        if (this.activeAccordion === reference) {\n          this.activeAccordion = false;\n        } else {\n          this.activeAccordion = reference;\n        }\n      },\n      height: function height(reference) {\n        if (this.activeAccordion !== reference) {\n          return 0;\n        }\n\n        return this.$refs[reference].getBoundingClientRect().height + 'px';\n      }\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tb2R1bGVzL3Byb2R1Y3QtZGVzY3JpcHRpb24vcHJvZHVjdC1kZXNjcmlwdGlvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFkQTtBQVRBO0FBMEJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2tuZC1uYXRpb24vLi9zcmMvc2NyaXB0cy9tb2R1bGVzL3Byb2R1Y3QtZGVzY3JpcHRpb24vcHJvZHVjdC1kZXNjcmlwdGlvbi5qcz9mOTQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IGFuaW1hdGUgZnJvbSAnbWl4aW5zL2FuaW1hdGUnXG5cbmV4cG9ydCBkZWZhdWx0IGVsID0+IHtcbiAgcmV0dXJuIG5ldyBWdWUoe1xuICAgIGVsLFxuICAgIG1peGluczogW2FuaW1hdGVdLFxuICAgIGRhdGEgKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcHJvZHVjdDogd2luZG93LkJBUlJFTC5wcm9kdWN0LFxuICAgICAgICBhY3RpdmVBY2NvcmRpb246IGZhbHNlXG4gICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICB0b2dnbGVBY2NvcmRpb24gKHJlZmVyZW5jZSkge1xuICAgICAgICBpZiAodGhpcy5hY3RpdmVBY2NvcmRpb24gPT09IHJlZmVyZW5jZSkge1xuICAgICAgICAgIHRoaXMuYWN0aXZlQWNjb3JkaW9uID0gZmFsc2VcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmFjdGl2ZUFjY29yZGlvbiA9IHJlZmVyZW5jZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgaGVpZ2h0IChyZWZlcmVuY2UpIHtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlQWNjb3JkaW9uICE9PSByZWZlcmVuY2UpIHtcbiAgICAgICAgICByZXR1cm4gMFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuJHJlZnNbcmVmZXJlbmNlXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgKyAncHgnXG4gICAgICB9XG4gICAgfVxuICB9KVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/modules/product-description/product-description.js\n");

/***/ })

}]);