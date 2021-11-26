import Vue from 'vue'
import { mapState, mapMutations } from 'vuex'
import { trapFocus, removeTrapFocus } from '@shopify/theme-a11y'
import on from 'dom-event'
import 'modules/shipping-calculator/shipping-calculator.vue'
import 'modules/cart-grid/cart-grid.vue'

Vue.component('mini-cart', {
  computed: {
    ...mapState(['app']),
    cart () {
      return this.app.cart
    }
  },
  methods: {
    ...mapMutations(['toggleMiniCart']),
    closeMiniCartOnEscape (event) {
      if (event.key === 'Escape' && this.app['isMiniCartOpen']) {
        this.app['isMiniCartOpen'] = !this.app['isMiniCartOpen']
      }
    },
    setCartGridHeight () {
      const cartHeader = this.$refs.cartHeader
      const cartGrid = this.$refs.cartGrid.$refs.cartMain
      const shippingCalculator = this.$refs.shippingCalculator.$el

      if (cartHeader && cartGrid) {
        cartGrid.style.height = `calc(100% - ${cartHeader.clientHeight + shippingCalculator.clientHeight}px)`
      }
    }
  },
  watch: {
    'app.isMiniCartOpen' (value) {
      if (value) {
        this.app['previouslyFocusedElement'] = document.activeElement
        this.$nextTick(() => {
          trapFocus(this.$el, {
            elementToFocus: this.$refs.miniCart
          })
          this.setCartGridHeight()
          if (typeof window.Rebuy !== 'undefined') window.Rebuy.init()
        })
      } else {
        removeTrapFocus(this.$el)
        this.app['previouslyFocusedElement'].focus()
      }
    }
  },
  mounted () {
    on(window, 'keydown', this.closeMiniCartOnEscape)
  }
})
