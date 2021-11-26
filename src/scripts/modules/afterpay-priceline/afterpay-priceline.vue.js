import Vue from 'vue'

Vue.component('afterpay-priceline', {
  props: {
    amount: Number,
    load: Boolean,
    isGiftCard: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      required: true
    },
    isMiniCartOpen: false
  },
  data () {
    return {
      isLoaded: false
    }
  },

  watch: {
    amount () {
      if (!window.presentAfterpay) return
      this.afterPayInstance.config.amount = this.amount
      this.afterPayInstance.config.giftCard = this.isGiftCard
      this.afterPayInstance.refresh()
    },
    isMiniCartOpen (value) {
      if (value && !this.isLoaded) {
        if (window.presentAfterpay) {
          this.initAfterPay()
        } else {
          this.loadJs()
        }
      }
    }
  },
  mounted () {
    if (this.load) {
      window.addEventListener('scroll', () => {
        setTimeout(() => {
          if (window.presentAfterpay) {
            this.initAfterPay()
          } else {
            this.loadJs()
          }
        }, 1000)
      }, {once: true});
    }
  },
  methods: {
    initAfterPay () {
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
        this.isLoaded = true
      }
    },
    loadJs (url = 'https://static-us.afterpay.com/javascript/present-afterpay.js') {
      const script = document.createElement('script')
      script.src = url
      script.onload = this.initAfterPay
      document.documentElement.firstChild.appendChild(script)
    }
  },
  template: `
    <div class="afterpay-priceline-wrapper">
      <div class="afterpay-priceline" :id="id"></div>
    </div>
  `
})
