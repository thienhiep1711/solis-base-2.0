<template>
  <div
    class="header-cart js-cart-slideout"
  >
    <sel-icon
      class="icon icon-cart icon-cart--header"
      icon-name="icon-cart"
    />
  </div>
</template>

<script>
import './header-cart.css'

export default {
  name: 'HeaderCart',
  props: {
    index: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isActive: false
    }
  }
}
</script>
