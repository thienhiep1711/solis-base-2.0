import Vue from 'vue'
import 'modules/product-card/product-card.vue'
import 'modules/carousel/carousel.vue'
import 'modules/image/image.vue'
import animate from 'mixins/animate'

export default el => new Vue({
  el,
  mixins: [animate]
})
