import { initVue } from 'lib/components'

import ProductCard from 'modules/product-card/product-card.vue'

export default (el) => {
  initVue({
    components: {
      ProductCard
    }
  }).mount(el)
}
