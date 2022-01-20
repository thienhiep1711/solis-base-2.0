<template>
  <div class="header-cart">
    <sel-icon class-name="icon--header-cart" icon-name="icon-bag" />
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
