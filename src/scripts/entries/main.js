import { set, isIEorEdge, isTouch } from 'lib/utils'
import { initComponent, initVueComponent } from 'lib/components'

import Hero from 'modules/hero/hero'
import Picture from 'modules/picture/picture'
import Carousel from 'modules/carousel/carousel.vue'
import MiniCart from 'modules/mini-cart/mini-cart'
import CartGrid from 'modules/cart-grid/cart-grid'

initComponent(Hero, 'hero')
initComponent(Picture, 'picture')
initComponent(MiniCart, 'mini-cart')
initComponent(CartGrid, 'cart-grid')
initVueComponent(Carousel, 'Carousel', 'carousel')

document.addEventListener('DOMContentLoaded', () => {
  if (isIEorEdge()) set(document.body, 'ie')

  if (isTouch()) {
    document.body.classList.remove('no-touch')
  }
})
