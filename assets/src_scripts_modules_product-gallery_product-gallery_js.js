"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwknd_nation"] = self["webpackChunkwknd_nation"] || []).push([["src_scripts_modules_product-gallery_product-gallery_js"],{

/***/ "./src/scripts/modules/product-gallery/product-gallery.js":
/*!****************************************************************!*\
  !*** ./src/scripts/modules/product-gallery/product-gallery.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ \"./node_modules/core-js/modules/es.array.concat.js\");\n/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ \"./node_modules/core-js/modules/es.array.filter.js\");\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ \"./node_modules/core-js/modules/es.array.map.js\");\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ \"./node_modules/core-js/modules/es.string.split.js\");\n/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.find-index.js */ \"./node_modules/core-js/modules/es.array.find-index.js\");\n/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.js\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var lib_appState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lib/appState */ \"./src/scripts/lib/appState.js\");\n/* harmony import */ var lib_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lib/util */ \"./src/scripts/lib/util.js\");\n/* harmony import */ var vue_zoom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-zoom */ \"./node_modules/vue-zoom/dist/vue-zoom.js\");\n/* harmony import */ var vue_zoom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(vue_zoom__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var select_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! select-dom */ \"./node_modules/select-dom/index.js\");\n/* harmony import */ var select_dom__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(select_dom__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var vue2_touch_events__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vue2-touch-events */ \"./node_modules/vue2-touch-events/index.js\");\n/* harmony import */ var vue2_touch_events__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(vue2_touch_events__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var lib_flickity_custom_page_dots__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lib/flickity-custom-page-dots */ \"./src/scripts/lib/flickity-custom-page-dots.js\");\n/* harmony import */ var modules_carousel_carousel_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! modules/carousel/carousel.vue */ \"./src/scripts/modules/carousel/carousel.vue.js\");\n/* harmony import */ var modules_zoomable_image_enhanced_zoomable_image_enhanced_vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! modules/zoomable-image-enhanced/zoomable-image-enhanced.vue */ \"./src/scripts/modules/zoomable-image-enhanced/zoomable-image-enhanced.vue.js\");\n/* harmony import */ var modules_video_video_vue__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! modules/video/video.vue */ \"./src/scripts/modules/video/video.vue.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_16___default().use((vue2_touch_events__WEBPACK_IMPORTED_MODULE_11___default()), {\n  swipeTolerance: 60\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (el) {\n  return new (vue__WEBPACK_IMPORTED_MODULE_16___default())({\n    el: el,\n    components: {\n      vZoom: (vue_zoom__WEBPACK_IMPORTED_MODULE_9___default())\n    },\n    data: function data() {\n      return {\n        key: 'color',\n        activeMedia: {},\n        state: lib_appState__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        product: window.BARREL.product,\n        showButton: true,\n        showVideo: false,\n        showYoutubeVideo: false,\n        hideGradient: false\n      };\n    },\n    computed: {\n      imageHandle: function imageHandle() {\n        for (var i = 0; i < this.product.options.length; i++) {\n          var _this$product$options = this.product.options,\n              options = _this$product$options === void 0 ? [] : _this$product$options;\n          var variant = this.state.activeVariant;\n\n          if ((0,lib_util__WEBPACK_IMPORTED_MODULE_8__.handleize)(options[i]) === this.key) {\n            var value = variant[\"option\".concat(i + 1)];\n\n            if (!value) {\n              return false;\n            }\n\n            return \"\".concat(this.key, \"-\").concat((0,lib_util__WEBPACK_IMPORTED_MODULE_8__.handleize)(value)).toLowerCase();\n          }\n        }\n\n        return false;\n      },\n      activeColor: function activeColor() {\n        for (var i = 0; i < this.product.options.length; i++) {\n          var _this$product$options2 = this.product.options,\n              options = _this$product$options2 === void 0 ? [] : _this$product$options2;\n          var variant = this.state.activeVariant;\n\n          if ((0,lib_util__WEBPACK_IMPORTED_MODULE_8__.handleize)(options[i]) === this.key) {\n            var value = variant[\"option\".concat(i + 1)];\n\n            if (!value) {\n              return false;\n            }\n\n            return (0,lib_util__WEBPACK_IMPORTED_MODULE_8__.handleize)(value);\n          }\n        }\n\n        return false;\n      },\n      media: function media() {\n        var _this = this;\n\n        if (this.activeColor && this.product.media) {\n          var filtered = this.product.media.filter(function (_ref) {\n            var _ref$alt = _ref.alt,\n                alt = _ref$alt === void 0 ? '' : _ref$alt;\n            return !alt || !~alt.indexOf('(') || ~(0,lib_util__WEBPACK_IMPORTED_MODULE_8__.handleize)(alt.toLowerCase()).indexOf(\"(\".concat(_this.activeColor, \")\"));\n          });\n          return filtered.length ? filtered : [];\n        }\n\n        return this.product.media;\n      },\n      featuredImage: function featuredImage() {\n        return this.activeMedia.src;\n      },\n      videoSourceList: function videoSourceList() {\n        if (this.activeMedia.media_type !== 'video') {\n          return [];\n        }\n\n        var length = this.activeMedia.sources.length;\n        return this.activeMedia.sources.map(function (source, index) {\n          var width = source.width;\n          var media;\n\n          if (index < length - 2) {\n            if (width < 240) {\n              media = 'all and (max-width: 480px)';\n            } else if (width < 360) {\n              media = 'all and (max-width: 720px)';\n            } else if (width < 512) {\n              media = 'all and (max-width: 1024px)';\n            } else {\n              media = '';\n            }\n          } else {\n            media = '';\n          }\n\n          return {\n            src: source.url,\n            type: source.mime_type,\n            media: media\n          };\n        });\n      },\n      youtubeId: function youtubeId() {\n        return this.activeMedia.external_id;\n      },\n      badge: function badge() {\n        var altBadge = typeof this.activeMedia.alt === 'string' ? this.activeMedia.alt.split('::') : [];\n\n        if (altBadge.length >= 2) {\n          return altBadge[altBadge.length - 1];\n        }\n\n        return false;\n      }\n    },\n    watch: {\n      activeColor: function activeColor() {\n        var media = this.media;\n\n        if (media.length) {\n          this.handleThumbnailClick(media[0]);\n        }\n      }\n    },\n    methods: {\n      handleThumbnailClick: function handleThumbnailClick(media) {\n        var _this2 = this;\n\n        var updateSlide = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n        this.activeMedia = media;\n        this.showVideo = this.activeMedia.media_type === 'video';\n        this.showYoutubeVideo = this.activeMedia.media_type === 'external_video';\n        var pageDots = select_dom__WEBPACK_IMPORTED_MODULE_10___default().all('.flickity-page-dots .dot', this.$el);\n\n        if (pageDots.length > 0) {\n          var index = this.media.findIndex(function (media) {\n            return media === _this2.activeMedia;\n          });\n          (0,lib_util__WEBPACK_IMPORTED_MODULE_8__.unset)(pageDots, 'is-selected');\n\n          if (pageDots[index]) {\n            (0,lib_util__WEBPACK_IMPORTED_MODULE_8__.set)(pageDots[index], 'is-selected');\n          }\n        }\n\n        if (lib_flickity_custom_page_dots__WEBPACK_IMPORTED_MODULE_12__[\"default\"] && updateSlide) {\n          var flkty = lib_flickity_custom_page_dots__WEBPACK_IMPORTED_MODULE_12__[\"default\"].data('.product-gallery__list .flickity');\n\n          var _index = this.media.findIndex(function (media) {\n            return media === _this2.activeMedia;\n          });\n\n          flkty.selectCell(_index, false, false);\n        }\n      },\n      mediaThumbnail: function mediaThumbnail(media) {\n        return (0,lib_util__WEBPACK_IMPORTED_MODULE_8__.getImageWithSize)(media.preview_image.src, '140');\n      },\n      handleChangeSlide: function handleChangeSlide(index) {\n        this.handleThumbnailClick(this.media[index]);\n      },\n      nextImage: function nextImage() {\n        var _this3 = this;\n\n        var media = this.media;\n        var index = media.findIndex(function (media) {\n          return media === _this3.activeMedia;\n        });\n        var activeMedia = this.activeMedia;\n\n        if (index === media.length - 1) {\n          activeMedia = media[0];\n        } else {\n          activeMedia = media[index + 1];\n        }\n\n        this.handleThumbnailClick(activeMedia);\n      },\n      prevImage: function prevImage() {\n        var _this4 = this;\n\n        var media = this.media;\n        var index = media.findIndex(function (media) {\n          return media === _this4.activeMedia;\n        });\n        var activeMedia = this.activeMedia;\n\n        if (index === 0) {\n          activeMedia = media[media.length - 1];\n        } else {\n          activeMedia = media[index - 1];\n        }\n\n        this.handleThumbnailClick(activeMedia);\n      },\n      badgeImage: function badgeImage(badge) {\n        return window.FILE_CDN + badge + '-badge.svg';\n      }\n    },\n    created: function created() {\n      this.activeMedia = this.media[0];\n    },\n    mounted: function mounted() {\n      if (this.media.length < 7) {\n        this.showButton = false;\n      }\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tb2R1bGVzL3Byb2R1Y3QtZ2FsbGVyeS9wcm9kdWN0LWdhbGxlcnkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFBQTs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUE1RkE7QUE4RkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBQ0E7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUFBOztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBM0RBO0FBNkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE1TEE7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3drbmQtbmF0aW9uLy4vc3JjL3NjcmlwdHMvbW9kdWxlcy9wcm9kdWN0LWdhbGxlcnkvcHJvZHVjdC1nYWxsZXJ5LmpzP2Q1NWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5pbXBvcnQgc3RhdGUgZnJvbSAnbGliL2FwcFN0YXRlJ1xuaW1wb3J0IHsgaGFuZGxlaXplLCBnZXRJbWFnZVdpdGhTaXplLCBzZXQsIHVuc2V0IH0gZnJvbSAnbGliL3V0aWwnXG5pbXBvcnQgdlpvb20gZnJvbSAndnVlLXpvb20nXG5pbXBvcnQgc2VsZWN0IGZyb20gJ3NlbGVjdC1kb20nXG5pbXBvcnQgVnVlMlRvdWNoRXZlbnRzIGZyb20gJ3Z1ZTItdG91Y2gtZXZlbnRzJ1xuaW1wb3J0IEZsaWNraXR5IGZyb20gJ2xpYi9mbGlja2l0eS1jdXN0b20tcGFnZS1kb3RzJ1xuaW1wb3J0ICdtb2R1bGVzL2Nhcm91c2VsL2Nhcm91c2VsLnZ1ZSdcbmltcG9ydCAnbW9kdWxlcy96b29tYWJsZS1pbWFnZS1lbmhhbmNlZC96b29tYWJsZS1pbWFnZS1lbmhhbmNlZC52dWUnXG5pbXBvcnQgJ21vZHVsZXMvdmlkZW8vdmlkZW8udnVlJ1xuXG5WdWUudXNlKFZ1ZTJUb3VjaEV2ZW50cywge1xuICBzd2lwZVRvbGVyYW5jZTogNjBcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGVsID0+IG5ldyBWdWUoe1xuICBlbCxcbiAgY29tcG9uZW50czoge1xuICAgIHZab29tXG4gIH0sXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBrZXk6ICdjb2xvcicsXG4gICAgICBhY3RpdmVNZWRpYToge30sXG4gICAgICBzdGF0ZSxcbiAgICAgIHByb2R1Y3Q6IHdpbmRvdy5CQVJSRUwucHJvZHVjdCxcbiAgICAgIHNob3dCdXR0b246IHRydWUsXG4gICAgICBzaG93VmlkZW86IGZhbHNlLFxuICAgICAgc2hvd1lvdXR1YmVWaWRlbzogZmFsc2UsXG4gICAgICBoaWRlR3JhZGllbnQ6IGZhbHNlXG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGltYWdlSGFuZGxlICgpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9kdWN0Lm9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qge29wdGlvbnMgPSBbXX0gPSB0aGlzLnByb2R1Y3RcbiAgICAgICAgY29uc3QgdmFyaWFudCA9IHRoaXMuc3RhdGUuYWN0aXZlVmFyaWFudFxuXG4gICAgICAgIGlmIChoYW5kbGVpemUob3B0aW9uc1tpXSkgPT09IHRoaXMua2V5KSB7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSB2YXJpYW50W2BvcHRpb24ke2kgKyAxfWBdXG5cbiAgICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGAke3RoaXMua2V5fS0ke2hhbmRsZWl6ZSh2YWx1ZSl9YC50b0xvd2VyQ2FzZSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0sXG4gICAgYWN0aXZlQ29sb3IgKCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb2R1Y3Qub3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB7IG9wdGlvbnMgPSBbXSB9ID0gdGhpcy5wcm9kdWN0XG4gICAgICAgIGNvbnN0IHZhcmlhbnQgPSB0aGlzLnN0YXRlLmFjdGl2ZVZhcmlhbnRcblxuICAgICAgICBpZiAoaGFuZGxlaXplKG9wdGlvbnNbaV0pID09PSB0aGlzLmtleSkge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gdmFyaWFudFtgb3B0aW9uJHtpICsgMX1gXVxuXG4gICAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZWl6ZSh2YWx1ZSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9LFxuICAgIG1lZGlhICgpIHtcbiAgICAgIGlmICh0aGlzLmFjdGl2ZUNvbG9yICYmIHRoaXMucHJvZHVjdC5tZWRpYSkge1xuICAgICAgICBjb25zdCBmaWx0ZXJlZCA9IHRoaXMucHJvZHVjdC5tZWRpYS5maWx0ZXIoKHsgYWx0ID0gJycgfSkgPT4ge1xuICAgICAgICAgIHJldHVybiAhYWx0IHx8ICF+YWx0LmluZGV4T2YoJygnKSB8fCB+aGFuZGxlaXplKGFsdC50b0xvd2VyQ2FzZSgpKS5pbmRleE9mKGAoJHt0aGlzLmFjdGl2ZUNvbG9yfSlgKVxuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiBmaWx0ZXJlZC5sZW5ndGggPyBmaWx0ZXJlZCA6IFtdXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnByb2R1Y3QubWVkaWFcbiAgICB9LFxuICAgIGZlYXR1cmVkSW1hZ2UgKCkge1xuICAgICAgcmV0dXJuIHRoaXMuYWN0aXZlTWVkaWEuc3JjXG4gICAgfSxcbiAgICB2aWRlb1NvdXJjZUxpc3QgKCkge1xuICAgICAgaWYgKHRoaXMuYWN0aXZlTWVkaWEubWVkaWFfdHlwZSAhPT0gJ3ZpZGVvJykge1xuICAgICAgICByZXR1cm4gW11cbiAgICAgIH1cblxuICAgICAgY29uc3QgbGVuZ3RoID0gdGhpcy5hY3RpdmVNZWRpYS5zb3VyY2VzLmxlbmd0aFxuXG4gICAgICByZXR1cm4gdGhpcy5hY3RpdmVNZWRpYS5zb3VyY2VzLm1hcCgoc291cmNlLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCB3aWR0aCA9IHNvdXJjZS53aWR0aFxuICAgICAgICBsZXQgbWVkaWFcblxuICAgICAgICBpZiAoaW5kZXggPCBsZW5ndGggLSAyKSB7XG4gICAgICAgICAgaWYgKHdpZHRoIDwgMjQwKSB7XG4gICAgICAgICAgICBtZWRpYSA9ICdhbGwgYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSdcbiAgICAgICAgICB9IGVsc2UgaWYgKHdpZHRoIDwgMzYwKSB7XG4gICAgICAgICAgICBtZWRpYSA9ICdhbGwgYW5kIChtYXgtd2lkdGg6IDcyMHB4KSdcbiAgICAgICAgICB9IGVsc2UgaWYgKHdpZHRoIDwgNTEyKSB7XG4gICAgICAgICAgICBtZWRpYSA9ICdhbGwgYW5kIChtYXgtd2lkdGg6IDEwMjRweCknXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lZGlhID0gJydcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWVkaWEgPSAnJ1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzcmM6IHNvdXJjZS51cmwsXG4gICAgICAgICAgdHlwZTogc291cmNlLm1pbWVfdHlwZSxcbiAgICAgICAgICBtZWRpYVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeW91dHViZUlkICgpIHtcbiAgICAgIHJldHVybiB0aGlzLmFjdGl2ZU1lZGlhLmV4dGVybmFsX2lkXG4gICAgfSxcbiAgICBiYWRnZSAoKSB7XG4gICAgICBjb25zdCBhbHRCYWRnZSA9IHR5cGVvZiB0aGlzLmFjdGl2ZU1lZGlhLmFsdCA9PT0gJ3N0cmluZycgPyB0aGlzLmFjdGl2ZU1lZGlhLmFsdC5zcGxpdCgnOjonKSA6IFtdXG5cbiAgICAgIGlmIChhbHRCYWRnZS5sZW5ndGggPj0gMikge1xuICAgICAgICByZXR1cm4gYWx0QmFkZ2VbYWx0QmFkZ2UubGVuZ3RoIC0gMV1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9LFxuICB3YXRjaDoge1xuICAgIGFjdGl2ZUNvbG9yICgpIHtcbiAgICAgIGNvbnN0IG1lZGlhID0gdGhpcy5tZWRpYVxuXG4gICAgICBpZiAobWVkaWEubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlVGh1bWJuYWlsQ2xpY2sobWVkaWFbMF0pXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgaGFuZGxlVGh1bWJuYWlsQ2xpY2sgKG1lZGlhLCB1cGRhdGVTbGlkZSA9IGZhbHNlKSB7XG4gICAgICB0aGlzLmFjdGl2ZU1lZGlhID0gbWVkaWFcbiAgICAgIHRoaXMuc2hvd1ZpZGVvID0gdGhpcy5hY3RpdmVNZWRpYS5tZWRpYV90eXBlID09PSAndmlkZW8nXG4gICAgICB0aGlzLnNob3dZb3V0dWJlVmlkZW8gPSB0aGlzLmFjdGl2ZU1lZGlhLm1lZGlhX3R5cGUgPT09ICdleHRlcm5hbF92aWRlbydcblxuICAgICAgY29uc3QgcGFnZURvdHMgPSBzZWxlY3QuYWxsKCcuZmxpY2tpdHktcGFnZS1kb3RzIC5kb3QnLCB0aGlzLiRlbClcblxuICAgICAgaWYgKHBhZ2VEb3RzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLm1lZGlhLmZpbmRJbmRleChtZWRpYSA9PiBtZWRpYSA9PT0gdGhpcy5hY3RpdmVNZWRpYSlcblxuICAgICAgICB1bnNldChwYWdlRG90cywgJ2lzLXNlbGVjdGVkJylcblxuICAgICAgICBpZiAocGFnZURvdHNbaW5kZXhdKSB7XG4gICAgICAgICAgc2V0KHBhZ2VEb3RzW2luZGV4XSwgJ2lzLXNlbGVjdGVkJylcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoRmxpY2tpdHkgJiYgdXBkYXRlU2xpZGUpIHtcbiAgICAgICAgY29uc3QgZmxrdHkgPSBGbGlja2l0eS5kYXRhKCcucHJvZHVjdC1nYWxsZXJ5X19saXN0IC5mbGlja2l0eScpXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5tZWRpYS5maW5kSW5kZXgobWVkaWEgPT4gbWVkaWEgPT09IHRoaXMuYWN0aXZlTWVkaWEpXG5cbiAgICAgICAgZmxrdHkuc2VsZWN0Q2VsbChpbmRleCwgZmFsc2UsIGZhbHNlKVxuICAgICAgfVxuICAgIH0sXG4gICAgbWVkaWFUaHVtYm5haWwgKG1lZGlhKSB7XG4gICAgICByZXR1cm4gZ2V0SW1hZ2VXaXRoU2l6ZShtZWRpYS5wcmV2aWV3X2ltYWdlLnNyYywgJzE0MCcpXG4gICAgfSxcbiAgICBoYW5kbGVDaGFuZ2VTbGlkZSAoaW5kZXgpIHtcbiAgICAgIHRoaXMuaGFuZGxlVGh1bWJuYWlsQ2xpY2sodGhpcy5tZWRpYVtpbmRleF0pXG4gICAgfSxcbiAgICBuZXh0SW1hZ2UgKCkge1xuICAgICAgY29uc3QgbWVkaWEgPSB0aGlzLm1lZGlhXG4gICAgICBjb25zdCBpbmRleCA9IG1lZGlhLmZpbmRJbmRleChtZWRpYSA9PiBtZWRpYSA9PT0gdGhpcy5hY3RpdmVNZWRpYSlcbiAgICAgIGxldCBhY3RpdmVNZWRpYSA9IHRoaXMuYWN0aXZlTWVkaWFcblxuICAgICAgaWYgKGluZGV4ID09PSBtZWRpYS5sZW5ndGggLSAxKSB7XG4gICAgICAgIGFjdGl2ZU1lZGlhID0gbWVkaWFbMF1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFjdGl2ZU1lZGlhID0gbWVkaWFbaW5kZXggKyAxXVxuICAgICAgfVxuXG4gICAgICB0aGlzLmhhbmRsZVRodW1ibmFpbENsaWNrKGFjdGl2ZU1lZGlhKVxuICAgIH0sXG4gICAgcHJldkltYWdlICgpIHtcbiAgICAgIGNvbnN0IG1lZGlhID0gdGhpcy5tZWRpYVxuICAgICAgY29uc3QgaW5kZXggPSBtZWRpYS5maW5kSW5kZXgobWVkaWEgPT4gbWVkaWEgPT09IHRoaXMuYWN0aXZlTWVkaWEpXG4gICAgICBsZXQgYWN0aXZlTWVkaWEgPSB0aGlzLmFjdGl2ZU1lZGlhXG5cbiAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICBhY3RpdmVNZWRpYSA9IG1lZGlhW21lZGlhLmxlbmd0aCAtIDFdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhY3RpdmVNZWRpYSA9IG1lZGlhW2luZGV4IC0gMV1cbiAgICAgIH1cblxuICAgICAgdGhpcy5oYW5kbGVUaHVtYm5haWxDbGljayhhY3RpdmVNZWRpYSlcbiAgICB9LFxuICAgIGJhZGdlSW1hZ2UgKGJhZGdlKSB7XG4gICAgICByZXR1cm4gd2luZG93LkZJTEVfQ0ROICsgYmFkZ2UgKyAnLWJhZGdlLnN2ZydcbiAgICB9XG4gIH0sXG4gIGNyZWF0ZWQgKCkge1xuICAgIHRoaXMuYWN0aXZlTWVkaWEgPSB0aGlzLm1lZGlhWzBdXG4gIH0sXG4gIG1vdW50ZWQgKCkge1xuICAgIGlmICh0aGlzLm1lZGlhLmxlbmd0aCA8IDcpIHtcbiAgICAgIHRoaXMuc2hvd0J1dHRvbiA9IGZhbHNlXG4gICAgfVxuICB9XG59KVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/modules/product-gallery/product-gallery.js\n");

/***/ })

}]);