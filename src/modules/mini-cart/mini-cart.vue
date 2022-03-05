<template>
  <sel-slideout
    class="sel-slideout--minicart"
    v-model:is-active="isOpended"
    activator-selector=".js-cart-slideout"
  >
    <div
      class="mini-cart"
    >
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
import { computed, reactive, toRefs, watch } from 'vue'
import { useStore } from 'vuex'
import useCart from 'uses/useCart'

export default {
  name: 'MiniCart',
  setup () {
    const store = useStore()
    const { toggleCart } = useCart()
    const state = reactive({
      isOpended: false
    })

    const isOpended = computed(() => store.state.app.isMiniCartOpen)

    watch(isOpended, newValue => {
      if (newValue && !state.isOpended) {
        state.isOpended = true
      }
    })

    watch(state, newValue => {
      if (!newValue.isOpended) {
        toggleCart()
        state.isOpended = false
      }
    })

    return {
      ...toRefs(state)
    }
  }
}
</script>
