"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwknd_nation"] = self["webpackChunkwknd_nation"] || []).push([["src_scripts_modules_quiz_quiz_js"],{

/***/ "./src/scripts/modules/quiz/quiz.js":
/*!******************************************!*\
  !*** ./src/scripts/modules/quiz/quiz.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ \"./node_modules/core-js/modules/es.string.search.js\");\n/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ \"./node_modules/core-js/modules/es.object.keys.js\");\n/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ \"./node_modules/core-js/modules/es.array.join.js\");\n/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ \"./node_modules/core-js/modules/es.array.map.js\");\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ \"./node_modules/core-js/modules/es.array.concat.js\");\n/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ \"./node_modules/core-js/modules/es.array.includes.js\");\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ \"./node_modules/core-js/modules/es.string.includes.js\");\n/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ \"./node_modules/core-js/modules/es.string.replace.js\");\n/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ \"./node_modules/core-js/modules/es.function.name.js\");\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ \"./node_modules/core-js/modules/es.array.filter.js\");\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ \"./node_modules/core-js/modules/es.string.split.js\");\n/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.js\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_21__);\n/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! query-string */ \"./node_modules/query-string/index.js\");\n/* harmony import */ var lib_util__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lib/util */ \"./src/scripts/lib/util.js\");\n/* harmony import */ var nanoajax__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! nanoajax */ \"./node_modules/nanoajax/index.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/src/js.cookie.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var modules_quiz_question_quiz_question_vue__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! modules/quiz-question/quiz-question.vue */ \"./src/scripts/modules/quiz-question/quiz-question.vue.js\");\n/* harmony import */ var modules_product_card_product_card_vue__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! modules/product-card/product-card.vue */ \"./src/scripts/modules/product-card/product-card.vue.js\");\n/* harmony import */ var modules_picture_picture_vue__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! modules/picture/picture.vue */ \"./src/scripts/modules/picture/picture.vue.js\");\n/* harmony import */ var modules_color_selector_color_selector_vue__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! modules/color-selector/color-selector.vue */ \"./src/scripts/modules/color-selector/color-selector.vue.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (el) {\n  return new (vue__WEBPACK_IMPORTED_MODULE_21___default())({\n    el: el,\n    data: function data() {\n      var parsed = query_string__WEBPACK_IMPORTED_MODULE_13__.parse(document.location.search);\n      return {\n        state: false,\n        questions: [],\n        currentQuestion: 0,\n        progressIndex: 0,\n        answers: parsed,\n        query: false,\n        tags: [],\n        results: false,\n        resultText: false,\n        noResultText: false\n      };\n    },\n    created: function created() {\n      this.questions = quizData.questions;\n      this.state = 'questions';\n      this.resultText = quizData.resultText;\n      this.noResultText = quizData.noResultText;\n    },\n    mounted: function mounted() {\n      if (Object.keys(this.answers).length > 0) {\n        this.skipToResults();\n      }\n    },\n    computed: {\n      questionsState: function questionsState() {\n        return this.state === 'questions';\n      },\n      loadingState: function loadingState() {\n        return this.state === 'loading';\n      },\n      resultsState: function resultsState() {\n        return this.state === 'results';\n      },\n      questionTitles: function questionTitles() {\n        return this.questions.reduce(function (titles, question) {\n          if (question.title.length > 0) {\n            titles.push(question.title);\n          }\n\n          return titles;\n        }, []);\n      },\n      searchQuery: function searchQuery() {\n        return this.tags.map(function (arr) {\n          return \"(\".concat(arr.map(function (val) {\n            return \"tag:\\\"\".concat(val, \"\\\"\");\n          }).join(' OR '), \")\");\n        }).join(' AND ');\n      },\n      searchUrl: function searchUrl() {\n        return \"\".concat(document.location.origin, \"/search?q=\").concat(this.searchQuery, \"&view=quiz-results-endpoint\");\n      },\n      updatedResultText: function updatedResultText() {\n        return this.resultText.includes('[name]') ? this.resultText.replace('[name]', this.answers.name) : this.resultText;\n      },\n      answersStringified: function answersStringified() {\n        return JSON.stringify(this.answers);\n      }\n    },\n    methods: {\n      skipToQuestion: function skipToQuestion(e) {\n        if (parseInt(e.target.dataset.questionIndex) <= this.progressIndex) {\n          this.currentQuestion = parseInt(e.target.dataset.questionIndex);\n        }\n      },\n      handleAnswer: function handleAnswer(e) {\n        this.answers[e.questionKey] = e.answer;\n        this.updateQuery();\n        this.updateTags();\n\n        if (this.currentQuestion + 1 === this.questions.length) {\n          this.state = 'loading';\n          this.updateURL();\n          this.handleResults(3000);\n        } else {\n          this.currentQuestion++;\n        }\n      },\n      updateQuery: function updateQuery() {\n        this.query = query_string__WEBPACK_IMPORTED_MODULE_13__.stringify(this.answers);\n      },\n      updateTags: function updateTags() {\n        var _this = this;\n\n        this.tags = Object.keys(this.answers).filter(function (key) {\n          return key !== 'name' && key !== 'email';\n        }).map(function (key) {\n          var values = _this.answers[key].split(',');\n\n          if (key === 'skin-type') {\n            values.push('All');\n          }\n\n          return values.map(function (value) {\n            return \"\".concat(key, \"-\").concat((0,lib_util__WEBPACK_IMPORTED_MODULE_14__.handleize)(value));\n          });\n        });\n      },\n      handleResults: function handleResults(delay) {\n        var _this2 = this;\n\n        this.saveResults();\n        nanoajax__WEBPACK_IMPORTED_MODULE_15__.ajax({\n          url: this.searchUrl\n        }, function (code, response) {\n          _this2.results = JSON.parse(response).results;\n        });\n        setTimeout(function (delay) {\n          _this2.state = 'results';\n        }, delay);\n      },\n      saveResults: function saveResults() {\n        js_cookie__WEBPACK_IMPORTED_MODULE_16___default().set('quiz_answers', this.answersStringified);\n      },\n      skipToResults: function skipToResults() {\n        this.updateQuery();\n        this.updateTags();\n        this.state = 'loading';\n        this.handleResults(1000);\n      },\n      updateURL: function updateURL() {\n        var url = \"\".concat(window.location, \"?\").concat(this.query);\n        window.history.pushState('', '', url);\n      },\n      retakeQuiz: function retakeQuiz() {\n        var url = window.location.href.split('?')[0];\n        window.history.pushState('', '', url);\n        var keys = Object.keys(this.answers);\n\n        for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {\n          var key = _keys[_i];\n\n          if (key !== 'name') {\n            this.answers[key] = '';\n          }\n        }\n\n        this.tags = [];\n        this.query = false;\n        this.currentQuestion = 1;\n        this.state = 'questions';\n        console.log(this.state);\n      }\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tb2R1bGVzL3F1aXovcXVpei5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaENBO0FBa0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUNBO0FBQ0E7QUFBQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUE5RUE7QUE5REE7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3drbmQtbmF0aW9uLy4vc3JjL3NjcmlwdHMvbW9kdWxlcy9xdWl6L3F1aXouanM/ODMzOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBxcyBmcm9tICdxdWVyeS1zdHJpbmcnXG5pbXBvcnQgeyBoYW5kbGVpemUgfSBmcm9tICdsaWIvdXRpbCdcbmltcG9ydCBuYW5vIGZyb20gJ25hbm9hamF4J1xuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJ1xuXG5pbXBvcnQgJ21vZHVsZXMvcXVpei1xdWVzdGlvbi9xdWl6LXF1ZXN0aW9uLnZ1ZSdcbmltcG9ydCAnbW9kdWxlcy9wcm9kdWN0LWNhcmQvcHJvZHVjdC1jYXJkLnZ1ZSdcbmltcG9ydCAnbW9kdWxlcy9waWN0dXJlL3BpY3R1cmUudnVlJ1xuaW1wb3J0ICdtb2R1bGVzL2NvbG9yLXNlbGVjdG9yL2NvbG9yLXNlbGVjdG9yLnZ1ZSdcblxuZXhwb3J0IGRlZmF1bHQgZWwgPT4gbmV3IFZ1ZSh7XG4gIGVsLFxuICBkYXRhICgpIHtcbiAgICBjb25zdCBwYXJzZWQgPSBxcy5wYXJzZShkb2N1bWVudC5sb2NhdGlvbi5zZWFyY2gpXG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXRlOiBmYWxzZSxcbiAgICAgIHF1ZXN0aW9uczogW10sXG4gICAgICBjdXJyZW50UXVlc3Rpb246IDAsXG4gICAgICBwcm9ncmVzc0luZGV4OiAwLFxuICAgICAgYW5zd2VyczogcGFyc2VkLFxuICAgICAgcXVlcnk6IGZhbHNlLFxuICAgICAgdGFnczogW10sXG4gICAgICByZXN1bHRzOiBmYWxzZSxcbiAgICAgIHJlc3VsdFRleHQ6IGZhbHNlLFxuICAgICAgbm9SZXN1bHRUZXh0OiBmYWxzZVxuICAgIH1cbiAgfSxcbiAgY3JlYXRlZCAoKSB7XG4gICAgdGhpcy5xdWVzdGlvbnMgPSBxdWl6RGF0YS5xdWVzdGlvbnNcbiAgICB0aGlzLnN0YXRlID0gJ3F1ZXN0aW9ucydcbiAgICB0aGlzLnJlc3VsdFRleHQgPSBxdWl6RGF0YS5yZXN1bHRUZXh0XG4gICAgdGhpcy5ub1Jlc3VsdFRleHQgPSBxdWl6RGF0YS5ub1Jlc3VsdFRleHRcbiAgfSxcbiAgbW91bnRlZCAoKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuYW5zd2VycykubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5za2lwVG9SZXN1bHRzKClcbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgcXVlc3Rpb25zU3RhdGUgKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUgPT09ICdxdWVzdGlvbnMnXG4gICAgfSxcbiAgICBsb2FkaW5nU3RhdGUgKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUgPT09ICdsb2FkaW5nJ1xuICAgIH0sXG4gICAgcmVzdWx0c1N0YXRlICgpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlID09PSAncmVzdWx0cydcbiAgICB9LFxuICAgIHF1ZXN0aW9uVGl0bGVzICgpIHtcbiAgICAgIHJldHVybiB0aGlzLnF1ZXN0aW9ucy5yZWR1Y2UoKHRpdGxlcywgcXVlc3Rpb24pID0+IHtcbiAgICAgICAgaWYgKHF1ZXN0aW9uLnRpdGxlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB0aXRsZXMucHVzaChxdWVzdGlvbi50aXRsZSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aXRsZXNcbiAgICAgIH0sIFtdKVxuICAgIH0sXG4gICAgc2VhcmNoUXVlcnkgKCkge1xuICAgICAgcmV0dXJuIHRoaXMudGFncy5tYXAoYXJyID0+IHtcbiAgICAgICAgcmV0dXJuIGAoJHthcnIubWFwKHZhbCA9PiBgdGFnOlwiJHt2YWx9XCJgKS5qb2luKCcgT1IgJyl9KWBcbiAgICAgIH0pLmpvaW4oJyBBTkQgJylcbiAgICB9LFxuICAgIHNlYXJjaFVybCAoKSB7XG4gICAgICByZXR1cm4gYCR7ZG9jdW1lbnQubG9jYXRpb24ub3JpZ2lufS9zZWFyY2g/cT0ke3RoaXMuc2VhcmNoUXVlcnl9JnZpZXc9cXVpei1yZXN1bHRzLWVuZHBvaW50YFxuICAgIH0sXG4gICAgdXBkYXRlZFJlc3VsdFRleHQgKCkge1xuICAgICAgcmV0dXJuIHRoaXMucmVzdWx0VGV4dC5pbmNsdWRlcygnW25hbWVdJykgPyB0aGlzLnJlc3VsdFRleHQucmVwbGFjZSgnW25hbWVdJywgdGhpcy5hbnN3ZXJzLm5hbWUpIDogdGhpcy5yZXN1bHRUZXh0XG4gICAgfSxcbiAgICBhbnN3ZXJzU3RyaW5naWZpZWQgKCkge1xuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMuYW5zd2VycylcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBza2lwVG9RdWVzdGlvbiAoZSkge1xuICAgICAgaWYgKHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQucXVlc3Rpb25JbmRleCkgPD0gdGhpcy5wcm9ncmVzc0luZGV4KSB7XG4gICAgICAgIHRoaXMuY3VycmVudFF1ZXN0aW9uID0gcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC5xdWVzdGlvbkluZGV4KVxuICAgICAgfVxuICAgIH0sXG4gICAgaGFuZGxlQW5zd2VyIChlKSB7XG4gICAgICB0aGlzLmFuc3dlcnNbZS5xdWVzdGlvbktleV0gPSBlLmFuc3dlclxuICAgICAgdGhpcy51cGRhdGVRdWVyeSgpXG4gICAgICB0aGlzLnVwZGF0ZVRhZ3MoKVxuXG4gICAgICBpZiAoKHRoaXMuY3VycmVudFF1ZXN0aW9uICsgMSkgPT09IHRoaXMucXVlc3Rpb25zLmxlbmd0aCkge1xuICAgICAgICB0aGlzLnN0YXRlID0gJ2xvYWRpbmcnXG4gICAgICAgIHRoaXMudXBkYXRlVVJMKClcbiAgICAgICAgdGhpcy5oYW5kbGVSZXN1bHRzKDMwMDApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmN1cnJlbnRRdWVzdGlvbisrXG4gICAgICB9XG4gICAgfSxcbiAgICB1cGRhdGVRdWVyeSAoKSB7XG4gICAgICB0aGlzLnF1ZXJ5ID0gcXMuc3RyaW5naWZ5KHRoaXMuYW5zd2VycylcbiAgICB9LFxuICAgIHVwZGF0ZVRhZ3MgKCkge1xuICAgICAgdGhpcy50YWdzID0gT2JqZWN0LmtleXModGhpcy5hbnN3ZXJzKVxuICAgICAgICAuZmlsdGVyKGtleSA9PiBrZXkgIT09ICduYW1lJyAmJiBrZXkgIT09ICdlbWFpbCcpXG4gICAgICAgIC5tYXAoa2V5ID0+IHtcbiAgICAgICAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLmFuc3dlcnNba2V5XS5zcGxpdCgnLCcpXG4gICAgICAgICAgaWYgKGtleSA9PT0gJ3NraW4tdHlwZScpIHtcbiAgICAgICAgICAgIHZhbHVlcy5wdXNoKCdBbGwnKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB2YWx1ZXMubWFwKHZhbHVlID0+IHtcbiAgICAgICAgICAgIHJldHVybiBgJHtrZXl9LSR7aGFuZGxlaXplKHZhbHVlKX1gXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIGhhbmRsZVJlc3VsdHMgKGRlbGF5KSB7XG4gICAgICB0aGlzLnNhdmVSZXN1bHRzKClcblxuICAgICAgbmFuby5hamF4KHt1cmw6IHRoaXMuc2VhcmNoVXJsfSwgKGNvZGUsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHRoaXMucmVzdWx0cyA9IEpTT04ucGFyc2UocmVzcG9uc2UpLnJlc3VsdHNcbiAgICAgIH0pXG5cbiAgICAgIHNldFRpbWVvdXQoKGRlbGF5KSA9PiB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSAncmVzdWx0cydcbiAgICAgIH0sIGRlbGF5KVxuICAgIH0sXG4gICAgc2F2ZVJlc3VsdHMgKCkge1xuICAgICAgQ29va2llcy5zZXQoJ3F1aXpfYW5zd2VycycsIHRoaXMuYW5zd2Vyc1N0cmluZ2lmaWVkKVxuICAgIH0sXG4gICAgc2tpcFRvUmVzdWx0cyAoKSB7XG4gICAgICB0aGlzLnVwZGF0ZVF1ZXJ5KClcbiAgICAgIHRoaXMudXBkYXRlVGFncygpXG4gICAgICB0aGlzLnN0YXRlID0gJ2xvYWRpbmcnXG4gICAgICB0aGlzLmhhbmRsZVJlc3VsdHMoMTAwMClcbiAgICB9LFxuICAgIHVwZGF0ZVVSTCAoKSB7XG4gICAgICBsZXQgdXJsID0gYCR7d2luZG93LmxvY2F0aW9ufT8ke3RoaXMucXVlcnl9YFxuICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKCcnLCAnJywgdXJsKVxuICAgIH0sXG4gICAgcmV0YWtlUXVpeiAoKSB7XG4gICAgICBsZXQgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJz8nKVswXVxuICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKCcnLCAnJywgdXJsKVxuXG4gICAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuYW5zd2VycylcbiAgICAgIGZvciAobGV0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgIGlmIChrZXkgIT09ICduYW1lJykge1xuICAgICAgICAgIHRoaXMuYW5zd2Vyc1trZXldID0gJydcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLnRhZ3MgPSBbXVxuICAgICAgdGhpcy5xdWVyeSA9IGZhbHNlXG5cbiAgICAgIHRoaXMuY3VycmVudFF1ZXN0aW9uID0gMVxuXG4gICAgICB0aGlzLnN0YXRlID0gJ3F1ZXN0aW9ucydcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpXG4gICAgfVxuICB9XG59KVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/modules/quiz/quiz.js\n");

/***/ })

}]);