import { initVue } from 'lib/components'

import MiniCart from 'modules/mini-cart/mini-cart.vue'

export default (el) => {
  initVue({
    components: {
      MiniCart
    }
  }).mount(el)
}
