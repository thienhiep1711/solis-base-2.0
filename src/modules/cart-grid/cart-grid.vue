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
import { computed, onMounted } from 'vue'
import useEmitter from 'uses/useEmitter'
import useCart from 'uses/useCart'

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

    const emitter = useEmitter()

    const { toggleCart } = useCart()

    const totalItems = computed(() => store.getters.totalItems)

    const cartData = computed(() => store.getters.cartData)

    onMounted(() => {
      emitter.on('add-to-cart', () => {
        toggleCart()
      })
    })

    return {
      totalItems,
      cartData
    }
  }
}
</script>
