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
      <sel-button>Add to cart</sel-button>
    </template>
    <template v-slot:after-content>
      Info
    </template>
  </card>
</template>
<script>

import Card from '../card/card.vue'
import Price from '../price/price.vue'
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
    }
  },
  data () {
    return {
      isActive: false
    }
  }
}
</script>
