import Vue from 'vue'
import 'modules/product-card/product-card.vue'
import 'modules/quick-add-to-cart/quick-add-to-cart.vue'
import 'modules/image/image.vue'
import animate from 'mixins/animate'

export default el => new Vue({
  el,
  mixins: [animate]
})
