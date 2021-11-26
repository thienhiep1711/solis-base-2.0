import Vue from 'vue'
import {
  handleize
} from 'lib/util'

const qs = Math.ceil(Date.now() / 60 / 60 / 24) // Changes once a day
const URL = window.FILE_CDN

Vue.component('color-circle', {
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'image'
    },
    optionName: {
      type: String,
      default: ''
    },
    optionValue: {
      type: String,
      default: ''
    }
  },
  computed: {
    imageSrc () {
      return `${URL}${handleize(this.title)}.png?${qs}`
    },
    styles () {
      return {
        'backgroundImage': `url(${this.imageSrc})`,
        'backgroundColor': `${this.title}`
      }
    },
    checkboxID () {
      return `option-${this.optionName}-${this.optionValue}-${Math.floor(Math.random() * 1000)}`
    }
  },
  template: `
    <div
      :title="title"
      class="color-circle"
      @click="$emit('click')"
      :class="{'is-active': isActive}"
      :style="styles">
      <label
        :class="{'is-active': isActive}"
        :for="checkboxID"
        class="absolute fill color-circle__label">
        <input
          type="radio"
          :id="checkboxID"
          class="absolute fill color-circle__input"
          :name="optionName"
          :value="optionValue"/>
        <span class="sr-only">{{ optionValue }}</span>
      </label>
    </div>
  `
})
