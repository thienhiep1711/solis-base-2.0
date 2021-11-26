import Vue from 'vue'
import state from 'lib/appState'
import {handleize} from 'lib/util'
import Vue2TouchEvents from 'vue2-touch-events'

Vue.use(Vue2TouchEvents, {
  swipeTolerance: 60
})

export default el => new Vue({
  el,
  data () {
    return {
      key: 'color',
      activeIndex: 0,
      state,
      product: window.BARREL.product,
      isDesktop: window.innerWidth > 1000
    }
  },
  watch: {
    'state.activeVariant' () {
      this.activeIndex = 0
    }
  },
  methods: {
    resizeImage (str = '', size = 100) {
      return str.replace(/[.](jpe?g|png|gif)/i, `_${size}x.$1`)
    },
    nextImage () {
      if (this.activeIndex >= this.images.length - 1) {
        return
      }
      this.activeIndex += 1
    },
    prevImage () {
      if (this.activeIndex > 0) {
        this.activeIndex -= 1
      }
    }
  },
  computed: {
    imageHandle () {
      for (let i = 0; i < this.product.options.length; i++) {
        const {options = []} = this.product
        const variant = this.state.activeVariant

        if (handleize(options[i]) === this.key) {
          const value = variant[`option${i + 1}`]

          if (!value) {
            return false
          }
          return `${this.key}-${handleize(value)}`.toLowerCase()
        }
      }
      return false
    },
    images () {
      const {images = []} = this.product
      const filtered = images.filter(({src = ''}) => ~src.indexOf(this.imageHandle))
      return filtered.length ? filtered : []
    },
    featuredImage () {
      return this.resizeImage((this.images[this.activeIndex] || {}).src || '', 800)
    },
    zoomableImage () {
      return (this.images[this.activeIndex] || {}).src || ''
    }
  }
})
