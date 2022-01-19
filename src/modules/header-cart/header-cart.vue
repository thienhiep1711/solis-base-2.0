<template>
  <div class="header-cart">
    header-cart {{ index }}
  </div>
</template>

<script>
import './header-cart.css';

export default {
  name: "HeaderCart",
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
