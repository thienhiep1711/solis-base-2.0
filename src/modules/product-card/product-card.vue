<template>
  <card
    :title="product.title"
    :featured-image="product.featuredImage"
    :class-name="'card--product ' + className"
    cta-primary-url="google.com"
  >
    <template v-slot:before-content>
      <span>
        {{ product.entity.vendor }}
      </span>
    </template>
    <template v-slot:description>
      <price
        :price="product.entity.price"
        :original-price="product.entity.compareAtPriceMin"
      ></price>
    </template>
    <template v-slot:ctas>
      <sel-button
        :disabled="!product.entity.available"
        @click="addToCart"
      >
        {{ addToCartText }}
      </sel-button>
    </template>
    <template v-slot:after-content>
      Info
    </template>
  </card>
</template>
<script>

import Card from '../card/card.vue'
import Price from '../price/price.vue'
import cart from 'lib/cart'
import './product-card.css'

import useEmitter from 'uses/useEmitter'
import { computed, reactive, toRefs } from '@vue/reactivity'

export default {
  name: 'ProductCard',
  components: {
    Card,
    Price
  },
  props: {
    product: {
      type: Object,
      default: () => {}
    },
    titleClass: {
      type: String,
      default: ''
    },
    className: {
      type: String,
      default: ''
    },
    buttonText: {
      type: String,
      default: 'Add To Cart'
    }
  },
  setup (props) {
    const state = reactive({
      isAdding: false
    })

    const emiiter = useEmitter()

    const addToCartText = computed(() => state.isAdding ? 'Adding' : props.buttonText)

    const addToCart = () => {
      state.isAdding = !state.isAdding

      const variables = {
        id: props.product.initialVariant.id,
        quantity: 1
      }

      cart.add(variables).then(() => {
        state.isAdding = false
      })

      emiiter.emit('add-to-cart')
    }

    return {
      ...toRefs(state),
      addToCartText,
      addToCart
    }
  }
}
</script>
