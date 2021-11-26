import Vue from 'vue'
import animate from 'mixins/animate'
import bus from 'lib/bus'
import 'modules/product-form/product-form.vue'
import 'modules/modal/modal.vue'
import 'modules/tabs/tabs.vue'

export default el => new Vue({
  el,
  mixins: [animate],
  computed: {
    onItemAdded () {
      bus.$emit('add-to-cart')
      state.isMiniCartOpen = true
    }
  }
})
