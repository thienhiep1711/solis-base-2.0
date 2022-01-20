import { initVueComponent, initComponent } from 'lib/components'

import BaseModules from 'modules/base-modules/base-modules.vue'
import Picture from 'modules/picture/picture'
import Carousel from 'modules/carousel/carousel.vue'

initComponent(Picture, 'picture')
initVueComponent(Carousel, 'Carousel', 'carousel')
initVueComponent(BaseModules, 'BaseModules', 'base-modules')
