import Vue from 'vue'

Vue.component('afterpay-priceline', {
  props: {
    amount: Number,
    isGiftCard: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      required: true
    }
  },
  watch: {
    amount () {
      this.afterPayInstance.config.amount = this.amount
      this.afterPayInstance.config.giftCard = this.isGiftCard
      this.afterPayInstance.refresh()
    }
  },
  mounted () {
    if (window.presentAfterpay) {
      /* eslint-disable */
      this.afterPayInstance = new presentAfterpay({
        priceSelector: `#${this.id}`,
        ...window.__AP_CONFIG__,
        amount: this.amount,
        giftCard: this.isGiftCard,
        hideInterestFree: true
      })
      // if (document.getElementById(this.id)) return null
      this.afterPayInstance.init()
      /* eslint-enable */
    }
  },
  template: `
    <div class="afterpay-priceline-wrapper">
      <div class="afterpay-priceline" :id="id"></div>
    </div>
  `
})
