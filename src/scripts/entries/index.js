import {set, isIEorEdge, isTouch} from 'lib/util'
import initializer from 'lib/initializer'
import lazyModule from 'lib/lazy-module'
import animate from 'lib/animate'
const footer = lazyModule('footer', { offset: 120 })

import 'styles/main.css'

initializer({
  'promo-bar': promoBar,
  'header': header,
  'animate': animate,
  'header-cart-icon': headerCartIcon,
  'mini-cart': miniCart,
  'header-search-icon': headerSearchIcon,
  'header-search': headerSearch,
  'picture': picture,
  'product-grid': productGrid,
  'shop-the-look': shopTheLook,
  'video': video,
  'instagram-feed': instagramFeed,
  'carousel': carousel,
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
})
