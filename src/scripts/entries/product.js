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
import picture from 'modules/picture/picture'
import video from 'modules/video/video'
import productForm from 'modules/product-form/product-form'
import productDescription from 'modules/product-description/product-description'
import productUpsell from 'modules/product-upsell/product-upsell'
import productGallery from 'modules/product-gallery/product-gallery'
import pdpOnScrollNav from 'modules/pdp-on-scroll-nav/pdp-on-scroll-nav'
import relatedProducts from 'modules/related-products/related-products'
import recentlyViewed from 'modules/recently-viewed/recently-viewed'
import footer from 'modules/footer/footer'

const instagramFeed = lazyModule('instagram-feed', { offset: 120 })
// const footer = lazyModule('footer', { offset: 120 })
// const video = lazyModule('video', { offset: 120 })

import 'styles/main.css'

initializer({
  'promo-bar': promoBar,
  'animate': animate,
  'header': header,
  'header-cart-icon': headerCartIcon,
  'header-search-icon': headerSearchIcon,
  'header-search': headerSearch,
  'instagram-feed': instagramFeed,
  'picture': picture,
  'video': video,
  'pdp-on-scroll-nav': pdpOnScrollNav,
  'product-upsell': productUpsell,
  'product-description': productDescription,
  'product-gallery': productGallery,
  'product-form': productForm,
  'related-products': relatedProducts,
  'recently-viewed': recentlyViewed,
  'mini-cart': miniCart,
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
