import Vue from 'vue'
import animate from 'mixins/animate'
import 'modules/product-upsell-item/product-upsell-item.vue'

export default el => new Vue({
  el,
  mixins: [animate]
})
