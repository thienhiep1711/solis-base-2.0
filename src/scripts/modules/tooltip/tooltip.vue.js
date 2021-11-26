import Vue from 'vue'
import ClickOutside from 'vue-click-outside'
import {isTouch} from 'lib/util'

Vue.component('tooltip', {
  props: [
    'offset'
  ],
  data: function () {
    return {
      isActive: false
    }
  },
  methods: {
    showTooltip (show, forTouch) {
      if (!!isTouch() !== forTouch) {
        return
      }
      this.isActive = !!show
    },
    hideTooltip () {
      this.isActive = false
    }
  },
  directives: {
    ClickOutside
  },
  template: `
  <div class="tooltip relative"
    v-on:mouseover="showTooltip(true, false)"
    v-on:click="showTooltip(!isActive, true)"
    v-on:mouseleave="showTooltip(false, false)">
    <i class="tooltip__icon">
        <svg viewBox="0 0 1792 1792">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-question" x="0" y="0"></use>
        </svg>
      </i>
    <transition name="fade-in-down">
      <p
        v-if="isActive"
        class="tooltip__content p2"
        :class="'offset--' + offset"
        v-click-outside="hideTooltip">
        <span class="tooltip__content-inner">
          <slot name="contents" />
        </span>
      </p>
    </transition>
  </div>`
})
