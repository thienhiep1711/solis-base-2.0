import { initComponent, initVueComponent } from 'lib/components'

import TopBar from 'modules/top-bar/top-bar.js'
import HeaderCart from 'modules/header-cart/header-cart.vue'

initComponent(TopBar, 'top-bar')
initVueComponent(HeaderCart, 'HeaderCart', 'header-cart')
