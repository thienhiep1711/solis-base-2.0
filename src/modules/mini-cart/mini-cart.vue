<template>
  <sel-slideout
    v-model:is-active="isActive"
    activator-selector=".js-cart-slideout"
  >
    <div class="mini-cart">
      <div class="mini-cart__inner">
        <div class="mini-cart__header">Mini cart</div>
        <div class="mini-cart__main"></div>
        <div class="mini-cart__footer"></div>
      </div>
    </div>
  </sel-slideout>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'MiniCart',
  setup () {
    const isActive = ref(false)

    return {
      isActive
    }
  }
}
</script>
