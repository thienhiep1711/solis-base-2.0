import Vue from 'vue'

Vue.component('quantity-selector', {
  props: {
    initial: {
      type: Number,
      default: NaN
    },
    min: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      default: NaN
    },
    disabled: Boolean
  },
  data: function () {
    return {
      value: this.initial
    }
  },
  computed: {
    increasable () {
      return this.value < this.max || !this.max
    },
    decreasable () {
      return this.value > this.min
    }
  },
  watch: {
    max (value) {
      this.value = value
    }
  },
  methods: {
    decrease () {
      this.setValue(--this.value)
    },
    increase () {
      this.setValue(++this.value)
    },
    onInputChange (event) {
      const value = parseInt(event.target.value)

      if (isNaN(value)) {
        return this.overrideInputValue(this.value)
      }

      this.setValue(value)
    },
    setValue (value) {
      const oldValue = this.value

      const newValue = Math.max(
        this.min,
        value
      )

      this.value = this.max
        ? Math.min(this.max, newValue)
        : newValue

      if (oldValue === this.value) {
        this.overrideInputValue(this.value)
      }

      this.$emit('change', this.value)
    },
    overrideInputValue (value) {
      this.$refs.input.value = value
    }
  },
  template: `
  <div class="quantity-selector">
    <button
      class="quantity-selector__action"
      type="button"
      v-on:click="decrease"
      :disabled="!decreasable || disabled"
      aria-label="Reduce product quantity by one">
    </button>
    <input
      class="quantity-selector__field"
      type="number"
      :value="value"
      @change="onInputChange"
      :min="min"
      :max="max"
      :disabled="disabled"
      aria-label="Quantity"
      aria-live="polite"
      ref="input">
    <button
      class="quantity-selector__action quantity-selector__action--plus"
      type="button"
      v-on:click="increase"
      :disabled="!increasable || disabled"
      aria-label="Increase product quantity by one">
    </button>
  </div>
  `
})
