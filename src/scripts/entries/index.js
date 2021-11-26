// __webpack_public_path__ = BRRL_PATH(BRRL_PUBLIC_PATH) // eslint-disable-line

import {set, isIEorEdge, isTouch} from 'lib/util'
import initializer from 'lib/initializer'
import lazyModule from 'lib/lazy-module'
import animate from 'lib/animate'
import promoBar from 'modules/promo-bar/promo-bar'
import header from 'modules/header/header'
import headerCartIcon from 'modules/header-cart-icon/header-cart-icon'
import miniCart from 'modules/mini-cart/mini-cart'
import headerSearchIcon from 'modules/header-search-icon/header-search-icon'
import headerSearch from 'modules/header-search/header-search'
import productGrid from 'modules/product-grid/product-grid'
import picture from 'modules/picture/picture'
import shopTheLook from 'modules/shop-the-look/shop-the-look'
import video from 'modules/video/video'

const carousel = lazyModule('carousel', { offset: 120 })
const instagramFeed = lazyModule('instagram-feed', { offset: 120 })
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
