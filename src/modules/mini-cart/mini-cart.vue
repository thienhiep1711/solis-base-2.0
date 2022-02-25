<template>
  <sel-slideout
    class="sel-slideout--minicart"
    v-model:is-active="isOpened"
    activator-selector=".js-cart-slideout"
  >
    <div class="mini-cart">
      <div class="mini-cart__inner">
        <div class="mini-cart__header">
          <slot name="header"></slot>
        </div>
        <div class="mini-cart__main">
          <slot name="main"></slot>
        </div>
      </div>
    </div>
  </sel-slideout>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'MiniCart',
  setup () {
    const isOpened = ref(false)

    return {
      isOpened
    }
  }
}
</script>
