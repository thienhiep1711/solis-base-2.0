import {set, isIEorEdge, isTouch} from 'lib/util'
import initializer from 'lib/initializer'
import animate from 'lib/animate'
import promoBar from 'modules/promo-bar/promo-bar'
import header from 'modules/header/header'
import headerCartIcon from 'modules/header-cart-icon/header-cart-icon'
import miniCart from 'modules/mini-cart/mini-cart'
import headerSearchIcon from 'modules/header-search-icon/header-search-icon'
import headerSearch from 'modules/header-search/header-search'
import plp from 'modules/plp/plp'
import footer from 'modules/footer/footer'
import easyLockdownFix from 'lib/easylockdown-fix'

// const carousel = lazyModule('carousel', { offset: 120 })
// const footer = lazyModule('footer', { offset: 120 })

import 'styles/main.css'

initializer({
  'promo-bar': promoBar,
  'header': header,
  'animate': animate,
  'header-cart-icon': headerCartIcon,
  'mini-cart': miniCart,
  'header-search-icon': headerSearchIcon,
  'header-search': headerSearch,
  'plp': plp,
  'footer': footer
})

document.addEventListener('DOMContentLoaded', () => {
  if (isIEorEdge()) set(document.body, 'ie')
  if (window.SENTRY.enabled) {
    Sentry.init({
      dsn: 'https://' + window.SENTRY.dsn
    })
  }

  if (isTouch()) {
    document.body.classList.remove('no-touch')
  }

  animate(document)
  easyLockdownFix()
})
