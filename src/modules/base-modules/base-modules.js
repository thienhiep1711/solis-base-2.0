import { initVue } from 'lib/components'

import BaseModules from 'modules/base-modules/base-modules.vue'
import Carousel from 'modules/carousel/carousel.vue'

export default (el) => {
  initVue({
    components: {
      BaseModules,
      Carousel
    }
  }).mount(el)
}
