<template>
  <form
    :class="className"
    action="/cart"
    method="post"
    novalidate
    data-cart-id="cart-grid"
  >
    <div
      v-if="totalItems > 0"
      class="cart-grid__inner"
    >
      <div :class="classContainer">
        <slot name="header">

        </slot>
        <slot
          name="main"
          v-bind="{
            cartData
          }"
        />
      </div>
    </div>
  </form>
</template>

<script>

import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  name: 'CartGrid',
  props: {
    className: {
      type: String,
      default: 'cart-grid'
    },
    classContainer: {
      type: String,
      default: ''
    },
    classItem: {
      type: String,
      default: ''
    }
  },
  setup () {
    const store = useStore()

    const totalItems = computed(() => store.getters.totalItems)

    const cartData = computed(() => store.getters.cartData)

    return {
      totalItems,
      cartData
    }
  }
}
</script>
