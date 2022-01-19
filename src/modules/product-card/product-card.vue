<template>
  <div>
    {{ title }}
  </div>
  <slot></slot>
</template>
<script>

import Card from '../card/card.vue';
import './product-card.css';

export default {
  name: "ProductCard",
  components: {
    Card
  },
  props: {
    title: {
      type: String,
      default: 'test'
    }
  },
  data () {
    return {
      isActive: false
    }
  },
}
</script>
