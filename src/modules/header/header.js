import './header.css'

import { initVue } from 'lib/components'
import NavTrigger from 'modules/nav-trigger/nav-trigger.vue'
import HeaderCart from 'modules/header-cart/header-cart.vue'
import SearchTrigger from 'modules/search-trigger/search-trigger.vue'

export default (el) => {
  initVue({
    components: {
      NavTrigger,
      HeaderCart,
      SearchTrigger
    }
  }).mount(el)
}
