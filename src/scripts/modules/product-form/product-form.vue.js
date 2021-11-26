import Vue from 'vue'
import cart from 'lib/cart'
import state from 'lib/appState'
import bus from 'lib/bus'
import { addQueryVar, formatMoney } from 'lib/util'
import VueScrollTo from 'vue-scrollto'
import modalContentMixin from 'mixins/modal-content'

Vue.use(VueScrollTo)
Vue.component('product-form', {
  mixins: [modalContentMixin],
  props: [
    'enableMiniCart',
    'addToCartText',
    'soldOutText',
    'showPriceInButton',
    'unavailableText',
    'selectedVariant',
    'bundleDiscountMessageFormat'
  ],
  data () {
    const product = window.BARREL.product
    const productVariants = window.BARREL.variants
    return {
      state,
      product,
      productVariants,
      quantity: 1,
      min: 1,
      showModal: false
    }
  },
  watch: {
    'state.selectedOptions': {
      handler () {
        this.pickActiveVariant()
        this.updateQuantity()
        this.updateURL()
      },
      deep: true
    },
    'activeVariant': {
      handler () {
        this.updateProductStatus()
      }
    },
    deep: true
  },
  mounted () {
    const variant = this.product.variants.find(v => v.id === +this.selectedVariant)
    state.selectedOptions = this.product['options_with_values'].reduce((obj, option, index) => {
      obj[option.name] = variant ? variant.options[index] : option.values[0]
      return obj
    }, {})
  },
  methods: {
    updateQuantity () {
      // Variant doesn't exists or is sold out
      if (
        !this.hasVariant ||
        !this.activeVariant.available
      ) {
        this.quantity = 0
        return
      }

      const inventoryQuantity = this.activeVariant.inventory_quantity
      const quantity = this.quantity

      const newQuantity = inventoryQuantity
        ? Math.min(quantity, inventoryQuantity)
        : quantity

      this.quantity = Math.max(this.min, newQuantity)
    },
    pickActiveVariant () {
      const {
        variants = [],
        options = []
      } = this.product

      for (let i = 0; i < variants.length; i++) {
        const variant = variants[i]
        const isMatch = options.every((option, _i) => {
          return (
            variant[`option${_i + 1}`] === state.selectedOptions[option]
          )
        })
        if (isMatch) {
          state.activeVariant = variant
          break
        } else {
          state.activeVariant = {}
        }
      }
    },
    updateSelectedOption (name, value) {
      state.selectedOptions[name] = value
    },
    onSelectChange ({ name, value }) {
      this.updateSelectedOption(name, value)
    },
    addToCart () {
      const addToCartStatus = this.$refs.addToCartStatus
      if (addToCartStatus) {
        addToCartStatus.setAttribute('aria-hidden', false)

        setTimeout(() => {
          addToCartStatus.setAttribute('aria-hidden', true)
        }, 1000)
      }

      // if (!this.state.isMiniCartLoaded) {
      //   this.importMiniCart()
      // }

      cart.add({
        id: this.activeVariant.id,
        quantity: this.quantity
      }).then(this.onItemAdded)
    },
    getOptionValue (option) {
      if (state.selectedOptions) {
        return state.selectedOptions[option]
      }
    },
    updateProductStatus () {
      const productStatus = this.$refs.productStatus
      if (!productStatus) {
        return
      }

      productStatus.textContent = this.liveRegionText()
      productStatus.setAttribute('aria-hidden', false)

      setTimeout(() => {
        productStatus.setAttribute('aria-hidden', true)
      }, 1000)
    },
    liveRegionText () {
      let liveRegionText = '[Availability] [Regular] [$$] [Sale] [$]'

      if (Object.keys(this.activeVariant).length === 0) {
        return 'Unavailable'
      }

      // Update availability
      const availability = this.activeVariant.available ? '' : 'Sold out,'
      liveRegionText = liveRegionText.replace('[Availability]', availability)

      // Update pricing information
      let regularLabel = ''
      let regularPrice = formatMoney(this.activeVariant.price)

      let saleLabel = ''
      let salePrice = ''

      if (this.activeVariant.compare_at_price > this.activeVariant.price) {
        regularLabel = 'Regular price'
        regularPrice = formatMoney(this.activeVariant.compare_at_price) + ','

        saleLabel = 'Sale price'
        salePrice = formatMoney(this.activeVariant.price)
      }

      liveRegionText = liveRegionText
        .replace('[Regular]', regularLabel)
        .replace('[$$]', regularPrice)
        .replace('[Sale]', saleLabel)
        .replace('[$]', salePrice)
        .trim()

      return liveRegionText
    },
    onItemAdded () {
      bus.$emit('add-to-cart')
      state.isMiniCartOpen = true
    },
    updateURL () {
      if (this.activeVariant.id) {
        window.history.replaceState('', '', addQueryVar('variant', this.activeVariant.id))
      }
    }
  },
  computed: {
    formattedPrice () {
      return formatMoney(this.activeVariant.price)
    },
    hasVariant () {
      return Object.keys(this.activeVariant).length
    },
    maximumQuantity () {
      /**
       * Variant does't exist or
       * is sellable when out of stock or
       * is out of stock
       */
      if (
        !this.hasVariant ||
        this.activeVariant.inventory_policy === 'continue' ||
        !this.activeVariant.available
      ) {
        return null
      }

      return this.activeVariant.inventory_quantity !== -1 ? this.activeVariant.inventory_quantity : Number.POSITIVE_INFINITY
    },
    activeVariant () {
      return this.state.activeVariant
    },
    selectedOptions () {
      return this.state.selectedOptions
    },
    submitButtonText () {
      if (!this.hasVariant) {
        return this.unavailableText
      }

      if (this.preOrder && this.preOrder.enable && this.hasVariant) {
        return this.preOrder.buttonText
      }

      return this.activeVariant.available
        ? this.addToCartText
        : this.soldOutText
    },
    isOnSale () {
      if (this.activeVariant) {
        return this.activeVariant.compare_at_price > this.activeVariant.price
      }

      return this.product.compare_at_price > this.product.price
    },
    formattedCompareAtPrice () {
      return formatMoney(this.activeVariant.compare_at_price)
    },
    isBundle () {
      return this.product.type.toLowerCase() === 'sets'
    },
    bundleDiscountMessage () {
      const priceDiff = this.activeVariant.compare_at_price - this.activeVariant.price
      const discountAmount = formatMoney(priceDiff)
      const discountPercent = Math.round(priceDiff * 100 / this.activeVariant.compare_at_price) + '%'

      return this.bundleDiscountMessageFormat
        .replace('{discount_amount}', discountAmount)
        .replace('{discount_percent}', discountPercent)
    },
    preOrder () {
      if (this.activeVariant) {
        return this.productVariants.find(item => item.id === this.activeVariant.id)
      }
    },
    preOrderMessage() {
      if (this.preOrder && this.preOrder.enable && this.hasVariant) {
        return this.preOrder.message
      }
    }
  }
})
