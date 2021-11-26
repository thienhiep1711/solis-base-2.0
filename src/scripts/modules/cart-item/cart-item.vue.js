import Vue from 'vue'
import { formatMoney } from 'lib/util'
import debounce from 'lodash/debounce'
import { mapState } from 'vuex'

Vue.component('cart-item', {
  props: {
    url: String,
    image: String,
    title: String,
    discountTag: Array,
    price: Number,
    discountedPrice: Number,
    quantity: Number,
    index: Number,
    item: Object,
    type: String,
    variantId: Number,
    variantTitle: String,
    compareAtPrice: Number
  },
  data () {
    return {
      maxQuantity: Number.POSITIVE_INFINITY
    }
  },
  methods: {
    updateQuantity: debounce(function (quantity) {
      this.$store.dispatch('updateItemQuantity', {
        quantity,
        id: this.variantId
      }).then(() => {
        if (quantity > this.quantity) {
          this.maxQuantity = this.quantity
        }
      })
    }, 450),
    remove () {
      this.$store.dispatch('updateItemQuantity', {
        quantity: 0,
        id: this.variantId
      })
    },
    updateCartItemStatus () {
      const cartItemStatus = this.$refs.cartItemStatus[0]
      if (!cartItemStatus) {
        return
      }

      cartItemStatus.textContent = `Updated: Quantity: ${this.quantity}, ${this.totalFormattedPrice}`
      cartItemStatus.setAttribute('aria-hidden', false)
      setTimeout(() => {
        cartItemStatus.setAttribute('aria-hidden', true)
      }, 1000)
    }
  },
  computed: {
    ...mapState(['app']),
    formattedPrice () {
      return formatMoney(this.price)
    },
    isGiftCard () {
      return this.type.toLowerCase() === 'gift card'
    },
    totalFormattedPrice () {
      return formatMoney(this.price * this.quantity)
    },
    totalDiscountedPrice () {
      return formatMoney(this.discountedPrice * this.quantity)
    },
    isDiscounted () {
      if (this.totalDiscountedPrice < this.totalFormattedPrice) {
        return true
      }
      return false
    },
    totalCompareAtPrice () {
      return (this.compareAtPrice === undefined || this.compareAtPrice === null || this.compareAtPrice * 100 <= this.price) ? false : formatMoney(this.compareAtPrice * 100 * this.quantity)
    }
  },
  watch: {
    'quantity' () {
      this.updateCartItemStatus()
    }
  }
})
