import Vue from 'vue'
import store from './@store'
import { mapState, mapActions } from 'vuex'
import animate from 'mixins/animate'
import 'modules/shop-the-look-item/shop-the-look-item.vue'
import 'modules/modal/modal.vue'

export default el => new Vue({
  el,
  mixins: [animate],
  store,
  computed: {
    ...mapState([
      'selectedProduct',
      'focusEl'
    ])
  },
  methods: {
    ...mapActions([
      'setSelectedProduct'
    ]),
    closeModal () {
      this.setSelectedProduct(null)
      this.focusEl.focus()
    }
  }
})
