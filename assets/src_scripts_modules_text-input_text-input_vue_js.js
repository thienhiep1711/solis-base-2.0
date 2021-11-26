"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwknd_nation"] = self["webpackChunkwknd_nation"] || []).push([["src_scripts_modules_text-input_text-input_vue_js"],{

/***/ "./src/scripts/modules/text-input/text-input.vue.js":
/*!**********************************************************!*\
  !*** ./src/scripts/modules/text-input/text-input.vue.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ \"./node_modules/core-js/modules/es.function.name.js\");\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.js\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lib_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lib/util */ \"./src/scripts/lib/util.js\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_2___default().component('text-input', {\n  props: {\n    name: String,\n    label: String,\n    ariaLabelledBy: String,\n    type: {\n      type: String,\n      default: 'text'\n    },\n    modifier: {\n      type: String,\n      default: 'default'\n    },\n    autocorrect: Boolean,\n    autocapitalize: Boolean,\n    initialValueGetter: Function,\n    placeholder: String,\n    error: String,\n    required: Boolean,\n    validateMethod: Function,\n    srOnly: Boolean\n  },\n  data: function data() {\n    var data = {\n      isValid: true,\n      isActive: false,\n      showErrorMessage: false,\n      randomID: 'text-input-' + Math.floor(Math.random() * 1000),\n      errorText: (0,lib_util__WEBPACK_IMPORTED_MODULE_1__.decode)(this.error)\n    };\n\n    if (this.initialValueGetter && this.initialValueGetter.bind !== 'undefined') {\n      data['inputValue'] = this.initialValueGetter(this.name);\n    } else {\n      data['inputValue'] = '';\n    }\n\n    return data;\n  },\n  watch: {\n    inputValue: function inputValue() {\n      this.$emit('change', {\n        value: this.inputValue,\n        name: this.name\n      });\n    }\n  },\n  mounted: function mounted() {\n    this.$emit('change', {\n      value: this.inputValue,\n      name: this.name\n    });\n    if (this.inputValue) this.setActive();\n  },\n  methods: {\n    validate: function validate() {\n      if (this.validateMethod) {\n        this.isValid = this.validateMethod({\n          value: this.inputValue,\n          name: this.name\n        });\n      } else if (this.required && !this.inputValue) {\n        this.isValid = false;\n      } else {\n        this.isValid = true;\n      }\n\n      return this.isValid;\n    },\n    setActive: function setActive() {\n      this.isActive = true;\n    },\n    unsetActive: function unsetActive() {\n      if (!this.inputValue) this.isActive = false;\n    },\n    refresh: function refresh() {\n      var _this = this;\n\n      setTimeout(function () {\n        _this.inputValue = _this.$refs.input.value;\n        if (_this.inputValue) _this.setActive();\n      }, 0);\n    }\n  },\n  template: \"\\n  <div class=\\\"text-input\\\" :class=\\\"['text-input--' + modifier, {'has-error': !isValid}]\\\">\\n    <div class=\\\"text-input__wrapper\\\">\\n      <label\\n        v-if=\\\"label || modifier === 'default'\\\"\\n        :for=\\\"randomID\\\"\\n        :class=\\\"['text-input__label', {'is-active': isActive, 'sr-only': srOnly}]\\\">\\n        {{(label ? label : placeholder)}}\\n      </label>\\n      <input\\n        ref=\\\"input\\\"\\n        class=\\\"text-input__el p2\\\"\\n        :id=\\\"randomID\\\"\\n        :type=\\\"type\\\"\\n        :name=\\\"name\\\"\\n        :ariaLabelledBy=\\\"ariaLabelledBy\\\"\\n        :autocorrect=\\\"autocorrect\\\"\\n        :autocapitalize=\\\"autocapitalize\\\"\\n        :placeholder=\\\"placeholder\\\"\\n        v-model=\\\"inputValue\\\"\\n        v-on:input=\\\"$emit('input', $event.target.value)\\\"\\n        v-on:focus=\\\"setActive\\\"\\n        v-on:blur=\\\"unsetActive\\\" />\\n    </div>\\n    <transition name=\\\"fade\\\">\\n      <p v-if=\\\"!isValid\\\" class=\\\"text-input__error red\\\" v-html=\\\"errorText\\\"></p>\\n    </transition>\\n  </div>\"\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tb2R1bGVzL3RleHQtaW5wdXQvdGV4dC1pbnB1dC52dWUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFuQkE7QUFxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXpCQTtBQTJCQTtBQWpGQSIsInNvdXJjZXMiOlsid2VicGFjazovL3drbmQtbmF0aW9uLy4vc3JjL3NjcmlwdHMvbW9kdWxlcy90ZXh0LWlucHV0L3RleHQtaW5wdXQudnVlLmpzPzY2Y2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5pbXBvcnQgeyBkZWNvZGUgfSBmcm9tICdsaWIvdXRpbCdcblxuVnVlLmNvbXBvbmVudCgndGV4dC1pbnB1dCcsIHtcbiAgcHJvcHM6IHtcbiAgICBuYW1lOiBTdHJpbmcsXG4gICAgbGFiZWw6IFN0cmluZyxcbiAgICBhcmlhTGFiZWxsZWRCeTogU3RyaW5nLFxuICAgIHR5cGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICd0ZXh0J1xuICAgIH0sXG4gICAgbW9kaWZpZXI6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdkZWZhdWx0J1xuICAgIH0sXG4gICAgYXV0b2NvcnJlY3Q6IEJvb2xlYW4sXG4gICAgYXV0b2NhcGl0YWxpemU6IEJvb2xlYW4sXG4gICAgaW5pdGlhbFZhbHVlR2V0dGVyOiBGdW5jdGlvbixcbiAgICBwbGFjZWhvbGRlcjogU3RyaW5nLFxuICAgIGVycm9yOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IEJvb2xlYW4sXG4gICAgdmFsaWRhdGVNZXRob2Q6IEZ1bmN0aW9uLFxuICAgIHNyT25seTogQm9vbGVhblxuICB9LFxuICBkYXRhICgpIHtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgaXNWYWxpZDogdHJ1ZSxcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcbiAgICAgIHNob3dFcnJvck1lc3NhZ2U6IGZhbHNlLFxuICAgICAgcmFuZG9tSUQ6ICd0ZXh0LWlucHV0LScgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKSxcbiAgICAgIGVycm9yVGV4dDogZGVjb2RlKHRoaXMuZXJyb3IpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaW5pdGlhbFZhbHVlR2V0dGVyICYmIHRoaXMuaW5pdGlhbFZhbHVlR2V0dGVyLmJpbmQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBkYXRhWydpbnB1dFZhbHVlJ10gPSB0aGlzLmluaXRpYWxWYWx1ZUdldHRlcih0aGlzLm5hbWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGFbJ2lucHV0VmFsdWUnXSA9ICcnXG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGFcbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICBpbnB1dFZhbHVlICgpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIHtcbiAgICAgICAgdmFsdWU6IHRoaXMuaW5wdXRWYWx1ZSxcbiAgICAgICAgbmFtZTogdGhpcy5uYW1lXG4gICAgICB9KVxuICAgIH1cbiAgfSxcbiAgbW91bnRlZCAoKSB7XG4gICAgdGhpcy4kZW1pdCgnY2hhbmdlJywge1xuICAgICAgdmFsdWU6IHRoaXMuaW5wdXRWYWx1ZSxcbiAgICAgIG5hbWU6IHRoaXMubmFtZVxuICAgIH0pXG4gICAgaWYgKHRoaXMuaW5wdXRWYWx1ZSkgdGhpcy5zZXRBY3RpdmUoKVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgdmFsaWRhdGUgKCkge1xuICAgICAgaWYgKHRoaXMudmFsaWRhdGVNZXRob2QpIHtcbiAgICAgICAgdGhpcy5pc1ZhbGlkID0gdGhpcy52YWxpZGF0ZU1ldGhvZCh7XG4gICAgICAgICAgdmFsdWU6IHRoaXMuaW5wdXRWYWx1ZSxcbiAgICAgICAgICBuYW1lOiB0aGlzLm5hbWVcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5yZXF1aXJlZCAmJiAhdGhpcy5pbnB1dFZhbHVlKSB7XG4gICAgICAgIHRoaXMuaXNWYWxpZCA9IGZhbHNlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmlzVmFsaWQgPSB0cnVlXG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkXG4gICAgfSxcbiAgICBzZXRBY3RpdmUgKCkge1xuICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWVcbiAgICB9LFxuICAgIHVuc2V0QWN0aXZlICgpIHtcbiAgICAgIGlmICghdGhpcy5pbnB1dFZhbHVlKSB0aGlzLmlzQWN0aXZlID0gZmFsc2VcbiAgICB9LFxuICAgIHJlZnJlc2ggKCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9IHRoaXMuJHJlZnMuaW5wdXQudmFsdWVcbiAgICAgICAgaWYgKHRoaXMuaW5wdXRWYWx1ZSkgdGhpcy5zZXRBY3RpdmUoKVxuICAgICAgfSwgMClcbiAgICB9XG4gIH0sXG4gIHRlbXBsYXRlOiBgXG4gIDxkaXYgY2xhc3M9XCJ0ZXh0LWlucHV0XCIgOmNsYXNzPVwiWyd0ZXh0LWlucHV0LS0nICsgbW9kaWZpZXIsIHsnaGFzLWVycm9yJzogIWlzVmFsaWR9XVwiPlxuICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWlucHV0X193cmFwcGVyXCI+XG4gICAgICA8bGFiZWxcbiAgICAgICAgdi1pZj1cImxhYmVsIHx8IG1vZGlmaWVyID09PSAnZGVmYXVsdCdcIlxuICAgICAgICA6Zm9yPVwicmFuZG9tSURcIlxuICAgICAgICA6Y2xhc3M9XCJbJ3RleHQtaW5wdXRfX2xhYmVsJywgeydpcy1hY3RpdmUnOiBpc0FjdGl2ZSwgJ3NyLW9ubHknOiBzck9ubHl9XVwiPlxuICAgICAgICB7eyhsYWJlbCA/IGxhYmVsIDogcGxhY2Vob2xkZXIpfX1cbiAgICAgIDwvbGFiZWw+XG4gICAgICA8aW5wdXRcbiAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICBjbGFzcz1cInRleHQtaW5wdXRfX2VsIHAyXCJcbiAgICAgICAgOmlkPVwicmFuZG9tSURcIlxuICAgICAgICA6dHlwZT1cInR5cGVcIlxuICAgICAgICA6bmFtZT1cIm5hbWVcIlxuICAgICAgICA6YXJpYUxhYmVsbGVkQnk9XCJhcmlhTGFiZWxsZWRCeVwiXG4gICAgICAgIDphdXRvY29ycmVjdD1cImF1dG9jb3JyZWN0XCJcbiAgICAgICAgOmF1dG9jYXBpdGFsaXplPVwiYXV0b2NhcGl0YWxpemVcIlxuICAgICAgICA6cGxhY2Vob2xkZXI9XCJwbGFjZWhvbGRlclwiXG4gICAgICAgIHYtbW9kZWw9XCJpbnB1dFZhbHVlXCJcbiAgICAgICAgdi1vbjppbnB1dD1cIiRlbWl0KCdpbnB1dCcsICRldmVudC50YXJnZXQudmFsdWUpXCJcbiAgICAgICAgdi1vbjpmb2N1cz1cInNldEFjdGl2ZVwiXG4gICAgICAgIHYtb246Ymx1cj1cInVuc2V0QWN0aXZlXCIgLz5cbiAgICA8L2Rpdj5cbiAgICA8dHJhbnNpdGlvbiBuYW1lPVwiZmFkZVwiPlxuICAgICAgPHAgdi1pZj1cIiFpc1ZhbGlkXCIgY2xhc3M9XCJ0ZXh0LWlucHV0X19lcnJvciByZWRcIiB2LWh0bWw9XCJlcnJvclRleHRcIj48L3A+XG4gICAgPC90cmFuc2l0aW9uPlxuICA8L2Rpdj5gXG59KVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/modules/text-input/text-input.vue.js\n");

/***/ })

}]);