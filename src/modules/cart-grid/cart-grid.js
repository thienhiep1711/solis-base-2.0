import { initVue } from 'lib/components'
import store from './@store'

import CartGrid from './cart-grid.vue'
import CartItem from 'modules/cart-item/cart-item.vue'
import './cart-grid.css'

export default (el) => {
  const app = initVue({
    name: 'CartGridApp',
    components: {
      CartGrid,
      CartItem
    }
  })
  app.use(store)
  app.mount(el)
}
