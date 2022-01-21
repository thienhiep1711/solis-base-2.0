import { initComponent, initVueComponent } from 'lib/components'

import TopBar from 'modules/topbar/topbar.js'
import Logo from 'modules/logo/logo.js'
import Header from 'modules/header/header.js'
import NavTrigger from 'modules/nav-trigger/nav-trigger.vue'
import HeaderCart from 'modules/header-cart/header-cart.vue'
import SearchTrigger from 'modules/search-trigger/search-trigger.vue'

initComponent(TopBar, 'topbar')
initComponent(Logo, 'logo')
initComponent(Header, 'header')
initVueComponent(HeaderCart, 'HeaderCart', 'header-cart')
initVueComponent(NavTrigger, 'NavTrigger', 'nav-trigger')
initVueComponent(SearchTrigger, 'SearchTrigger', 'search-trigger')
