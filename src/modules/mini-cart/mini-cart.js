import { initVue } from 'lib/components'

import store from 'modules/cart-grid/@store'
import MiniCart from 'modules/mini-cart/mini-cart.vue'
import CartGrid from 'modules/cart-grid/cart-grid.vue'
import CartItem from 'modules/cart-item/cart-item.vue'

import './mini-cart.css'

export default (el) => {
  const app = initVue({
    name: 'MiniCartApp',
    components: {
      MiniCart,
      CartGrid,
      CartItem
    }
  })
  app.use(store)
  app.mount(el)
}
