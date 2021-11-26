import Vue from 'vue'
import select from 'select-dom'
import { decode, formatMoney } from 'lib/util'
import cart from 'lib/cart'
import state from 'lib/appState'

Vue.component('product-upsell-item', {
  props: [
    'product',
    'decode'
  ],
  data () {
    let product
    if (!!this.decode && this.product) {
      product = JSON.parse(decode(this.product))
    } else {
      product = (this.product || {
        title: '',
        price: '',
        compareAtPrice: '',
        featuredImage: '',
        variants: [],
        firstAvailableVariant: {},
        optionNames: [],
        optionsWithValues: []
      })
    }

    return {
      ...product
    }
  },
  methods: {
    addToCart () {
      cart.add({
        id: this.firstAvailableVariant.id,
        quantity: 1
      }).then(() => {
        const addToCartStatus = this.$refs.addToCartStatus
        if (addToCartStatus) {
          addToCartStatus.setAttribute('aria-hidden', false)

          setTimeout(() => {
            addToCartStatus.setAttribute('aria-hidden', true)
          }, 1000)
        }
        cart.get().then((data) => {
          state.cart = data
          state.isMiniCartOpen = true

          // tracking
          _learnq.push(['track', 'Added to Cart', {
            Name: this.title,
            ProductID: this.id,
            Categories: this.collections,
            ImageURL: `https:${this.featuredImage}`,
            URL: `${window.BARREL.secureUrl}/products/${this.handle}`,
            Brand: this.vendor,
            Price: formatMoney(this.price),
            CompareAtPrice: formatMoney(this.compareAtPriceMax)
          }]);

          const addToCartButton = this.$refs.addToCartButton
          if (addToCartButton) {
            const buttonText = select('.button__el', addToCartButton)
            if (!buttonText) {
              return
            }
            buttonText.textContent = 'Added'
            addToCartButton.disabled = true
          }
        })
      })
    }
  }
})
