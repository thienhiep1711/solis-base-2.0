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
import bus from 'lib/bus'
import './product-card.css'

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
  data () {
    return {
      isAdding: false
    }
  },
  computed: {
    addToCartText () {
      return this.isAdding ? 'Adding' : this.buttonText
    }
  },
  methods: {
    addToCart () {
      this.isAdding = true
      const variables = {
        id: this.product.initialVariant.id,
        quantity: 1
      }
      cart.add(variables).then(() => {
        this.isAdding = false
        bus.$emit('add-to-cart')
      })
    }
  }
}
</script>
