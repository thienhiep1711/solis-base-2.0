import Vue from 'vue'
import Tweezer from 'tweezer.js'
import 'modules/color-circle/color-circle.vue.js'

const handleize = value => {
  if (!value) return ''
  return value.toLowerCase().replace(/[ /]/g, '-')
}

Vue.component('color-selector', {
  props: {
    active: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      default () {
        return []
      }
    }
  },
  updated () {
    const active = handleize(this.active)
    const containerEl = this.$refs.list
    const activeEl = this.$refs[active][0]

    const containerWidth = containerEl.offsetWidth
    const colorOffset = activeEl.offsetLeft
    const colorWidth = activeEl.offsetWidth
    const middle = containerWidth / 2
    const scroll = Math.min(
      Math.max(0, (colorOffset + (colorWidth / 2)) - middle),
      activeEl.offsetWidth * this.options.length
    )

    new Tweezer({
      start: containerEl.scrollLeft,
      end: scroll,
      duration: 150
    })
      .on('tick', v => (containerEl.scrollLeft = v))
      .begin()
  },
  methods: {
    incrementActive (decrement = false) {
      const currentIndex = this.options.indexOf(this.active)
      let newIndex = currentIndex

      if (decrement && !!currentIndex) {
        newIndex = currentIndex - 1
      }

      if (!decrement && currentIndex < (this.options.length - 1)) {
        newIndex = currentIndex + 1
      }

      this.$emit('change', this.options[newIndex])
    }
  },
  computed: {
    hasOverflow () {
      return (this.options || []).length > 5
    }
  },
  filters: {
    handleize
  },
  template: `
    <div class="color-selector" :class="{'color-selector--has-arrow': hasOverflow}">
      <i
        v-if="hasOverflow"
        class="color-selector__arrow color-selector__arrow--left"
        @click="incrementActive(true)">
        <svg viewBox="0 0 13.5 33.8">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-arrow-left" x="0" y="0"></use>
        </svg>
      </i>
      <div class="color-selector__list-wrapper">
        <ul class="color-selector__list" ref="list">
          <li
            class="color-selector__list-item"
            @click="$emit('change', option)"
            v-for="(option, i) in options"
            :ref="option | handleize">
              <div>
                <img
                  is="color-circle"
                  type="css"
                  :title="option"
                  :option-value="option"
                  option-name="color"
                  @click=""
                  :is-active="(option === active)" />
              </div>
          </li>
        </ul>
      </div>
      <i
        v-if="hasOverflow"
        class="color-selector__arrow color-selector__arrow--right"
        @click="incrementActive(false)">
        <svg viewBox="0 0 13.5 33.8">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-arrow-right" x="0" y="0"></use>
        </svg>
      </i>
    </div>
  `
})
