import Vue from 'vue'
import store from 'modules/shop-the-look/@store'
import { mapState, mapActions } from 'vuex'

Vue.component('shop-the-look-item', {
  store,
  computed: {
    ...mapState([
      'selectedProduct'
    ])
  },
  methods: {
    ...mapActions([
      'setSelectedProduct',
      'setFocusEl'
    ]),
    openModal (productId) {
      this.setSelectedProduct(productId)
      this.setFocusEl(document.activeElement)
    }
  }
})
