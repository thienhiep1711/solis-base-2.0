import Vue from 'vue'
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
import {disableBodyScroll, clearAllBodyScrollLocks} from 'body-scroll-lock'
import bus from 'lib/bus'
import debounce from 'lodash/debounce'
import find from 'lodash/find'
import {
  normalizeId
} from 'lib/util'

import 'modules/cart-item/cart-item.vue'
import 'modules/quantity-selector/quantity-selector.vue'
import 'modules/image/image.vue'
import 'modules/shipping-calculator/shipping-calculator.vue'
import 'modules/afterpay-priceline/afterpay-priceline.vue'

Vue.component('cart-grid', {
  data () {
    return {
      isGiftMessageOpen: false
    }
  },
  computed: {
    ...mapGetters(['subtotal']),
    ...mapState([
      'app',
      'loading',
      'isBootstrapped',
      'isMobile',
      'removedItem'
    ]),
    isEmpty () {
      return this.cart.items.length === 0
    },
    cart () {
      return this.app.cart
    },
    lineItemData () {
      return this.app.lineItemsData
    },
    reduceLineItemData () {
      if (this.lineItemData) {
        let newArray = []
        this.lineItemData.forEach(element => {
          if (!element) {
            return
          }

          var x = element.product.tags
          newArray.push(x)
        })
        return newArray
      }
    },
    checkForValues () {
      if (this.reduceLineItemData) {
        let sweats = false
        let tees = false
        this.reduceLineItemData.forEach(element => {
          if (element.find(s => s.includes('discount-2-sweats'))) {
            sweats = true
          }
          if (element.find(s => s.includes('discount-2-tees'))) {
            tees = true
          }
        })
        if (sweats && tees) {
          return 'both'
        } else if (sweats) {
          return 'sweats'
        } else if (tees) {
          return 'tees'
        }
      }
    },
    compareAtPriceData: function () {
      if (this.lineItemData) {
        return this.lineItemData.map(node => {
          if (node && node.compareAtPriceV2 && node.compareAtPriceV2.amount) {
            return +node.compareAtPriceV2.amount
          }

          return null
        })
      }
    },
    hasGiftCard () {
      return this.cart.items.some(lineItem => lineItem.handle.includes('gift'))
    }
  },
  watch: {
    'app.isMiniCartOpen' (value) {
      if (value) {
        disableBodyScroll(this.$refs['cart'])
      } else {
        clearAllBodyScrollLocks()
      }
    },
    'removedItem' (item) {
      if (item && Object.keys(item).length > 0) {
        this.updateRemovedItemStatus(item)
      }
    }
  },
  methods: {
    ...mapMutations(['bootstrap']),
    ...mapMutations(['toggleMiniCart']),
    ...mapActions(['getCart', 'getLineItemsData']),
    updateRemovedItemStatus (item) {
      const removedItemStatus = this.$refs.removedItemStatus
      if (!removedItemStatus) {
        return
      }

      removedItemStatus.textContent = `Removed (${item.quantity}) ${item.title} from your cart.`
      removedItemStatus.setAttribute('aria-hidden', false)

      setTimeout(() => {
        removedItemStatus.setAttribute('aria-hidden', true)
      }, 1000)
    },
    toggleGiftMessage () {
      this.isGiftMessageOpen = !this.isGiftMessageOpen
    },
    getVariantTitle (item) {
      const variantTitleArr = []

      for (const option of item.options_with_values) {
        const value = option.value

        switch (option.name.toLowerCase()) {
          case 'size':
            switch (item.product_type.toLowerCase()) {
              case 'tops':
                variantTitleArr.push(`Top: ${value}`)
                break
              case 'bottoms':
                variantTitleArr.push(`Bottom: ${value}`)
                break
              default:
                variantTitleArr.push(value)
            }

            break
          case 'top size':
            variantTitleArr.push(`Top: ${value}`)
            break
          case 'bottom size':
            variantTitleArr.push(`Bottom: ${value}`)
            break
          default:
            variantTitleArr.push(value)
        }
      }

      return variantTitleArr.join(' • ')
    }
  },
  created () {
    this.getLineItemsData()
  },
  mounted () {
    this.bootstrap()
    bus.$on('add-to-cart', this.getCart)
  }
})
