import Vue from 'vue'
import { formatPrice } from 'lib/util'
import state from 'lib/appState'

Vue.component('shipping-calculator', {
  props: {
    goal: Number
  },
  data () {
    return {
      state
    }
  },
  computed: {
    goalReached () {
      return (this.goal <= this.state.cart.total_price)
    },
    goalStarted () {
      return (this.state.cart.total_price > 0)
    },
    progress () {
      const progress = this.state.cart.total_price * 100 / this.goal

      return `${progress > 100 ? 100 : progress}%`
    },
    price () {
      return formatPrice(this.goal - this.state.cart.total_price)
    }
  },
  beforeUpdate () {
    if (this.goalReached) this.$refs.indicator.style.width = '100%'
  }
})
