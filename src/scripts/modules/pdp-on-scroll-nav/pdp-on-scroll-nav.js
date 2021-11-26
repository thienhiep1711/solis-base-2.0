import Vue from 'vue'
import scroll from 'raf-scroll.js'
import select from 'select-dom'
import state from 'lib/appState'
import { docOffset, getImageWithSize, formatMoney } from 'lib/util'
import animate from 'lib/animate'
import 'modules/select-input/select-input.vue'

const SITE_HEADER_SELECTOR = '.js-site-header'
const BREAKPOINT = 768

export default el => new Vue({
  el,
  data () {
    const product = window.BARREL.product
    return {
      state,
      product,
      headerHeight: 0,
      isMobile: true
    }
  },
  computed: {
    variant () {
      return state.activeVariant
    },
    featuredImage () {
      const fullSizeImage = (this.variant && this.variant.featured_image)
        ? this.variant.featured_image.src
        : this.product.featured_image
      return getImageWithSize(fullSizeImage, 150)
    }
  },
  methods: {
    formatMoney,
    scrollHandler () {
      const offsetTop = docOffset(this.$refs.anchor).top + this.$refs.anchor.offsetHeight - this.headerHeight
      scroll((y, prevY) => {
        if (y >= offsetTop && y > prevY) {
          document.body.classList.add('pdp-on-scroll-nav--active')
        } else if (y >= offsetTop && y === prevY) {
          // do nothing, just keep class activated
        } else {
          document.body.classList.remove('pdp-on-scroll-nav--active')
        }
      })
    },
    resizeHandler () {
      const headerEl = select(SITE_HEADER_SELECTOR)
      this.headerHeight = headerEl ? headerEl.offsetHeight : 0
      this.isMobile = window.innerWidth < BREAKPOINT
    }
  },
  mounted () {
    this.resizeHandler()
    this.scrollHandler()
    window.addEventListener('resize', this.resizeHandler)

    this.$nextTick(() => animate(this.$el, true, true))
  },
  destroyed () {
    window.removeEventListener('resize', this.resizeHandler)
  }
})
