import Vue from 'vue'
import { decode } from 'lib/util'

Vue.component('text-input', {
  props: {
    name: String,
    label: String,
    ariaLabelledBy: String,
    type: {
      type: String,
      default: 'text'
    },
    modifier: {
      type: String,
      default: 'default'
    },
    autocorrect: Boolean,
    autocapitalize: Boolean,
    initialValueGetter: Function,
    placeholder: String,
    error: String,
    required: Boolean,
    validateMethod: Function,
    srOnly: Boolean
  },
  data () {
    const data = {
      isValid: true,
      isActive: false,
      showErrorMessage: false,
      randomID: 'text-input-' + Math.floor(Math.random() * 1000),
      errorText: decode(this.error)
    }

    if (this.initialValueGetter && this.initialValueGetter.bind !== 'undefined') {
      data['inputValue'] = this.initialValueGetter(this.name)
    } else {
      data['inputValue'] = ''
    }

    return data
  },
  watch: {
    inputValue () {
      this.$emit('change', {
        value: this.inputValue,
        name: this.name
      })
    }
  },
  mounted () {
    this.$emit('change', {
      value: this.inputValue,
      name: this.name
    })
    if (this.inputValue) this.setActive()
  },
  methods: {
    validate () {
      if (this.validateMethod) {
        this.isValid = this.validateMethod({
          value: this.inputValue,
          name: this.name
        })
      } else if (this.required && !this.inputValue) {
        this.isValid = false
      } else {
        this.isValid = true
      }
      return this.isValid
    },
    setActive () {
      this.isActive = true
    },
    unsetActive () {
      if (!this.inputValue) this.isActive = false
    },
    refresh () {
      setTimeout(() => {
        this.inputValue = this.$refs.input.value
        if (this.inputValue) this.setActive()
      }, 0)
    }
  },
  template: `
  <div class="text-input" :class="['text-input--' + modifier, {'has-error': !isValid}]">
    <div class="text-input__wrapper">
      <label
        v-if="label || modifier === 'default'"
        :for="randomID"
        :class="['text-input__label', {'is-active': isActive, 'sr-only': srOnly}]">
        {{(label ? label : placeholder)}}
      </label>
      <input
        ref="input"
        class="text-input__el p2"
        :id="randomID"
        :type="type"
        :name="name"
        :ariaLabelledBy="ariaLabelledBy"
        :autocorrect="autocorrect"
        :autocapitalize="autocapitalize"
        :placeholder="placeholder"
        v-model="inputValue"
        v-on:input="$emit('input', $event.target.value)"
        v-on:focus="setActive"
        v-on:blur="unsetActive" />
    </div>
    <transition name="fade">
      <p v-if="!isValid" class="text-input__error red" v-html="errorText"></p>
    </transition>
  </div>`
})
