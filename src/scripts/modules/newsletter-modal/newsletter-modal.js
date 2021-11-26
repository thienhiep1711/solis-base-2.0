import Vue from 'vue'
import Cookies from 'cookies-js'
import on from 'dom-event'
import { trapFocus } from 'lib/util'

const COOKIE_NAME = 'newsletter_modal'
const EXPIRE_TIME = 60 * 60 * 24 * 7 // set cookie expire time to 7 days

export default el => new Vue({
  el,
  data () {
    return {
      isActive: false,
      delay: null,
      focusEl: null
    }
  },
  methods: {
    initNewsletterModal () {
      const cookie = Boolean(Cookies.get(COOKIE_NAME))

      if (!cookie) {
        setTimeout(() => {
          this.isActive = true
        }, this.delay)

        setTimeout(() => {
          const newsletterModalWrapper = this.$refs.newsletterModalWrapper
          if (newsletterModalWrapper) {
            this.focusEl = document.activeElement
            newsletterModalWrapper.focus()
            trapFocus(newsletterModalWrapper)
          }
        }, this.delay + 300)
      }
    },
    closeNewsletterModal (delay = null) {
      Cookies.set(COOKIE_NAME, '1', {expires: EXPIRE_TIME})
      if (delay > 0) {
        setTimeout(() => {
          this.isActive = false
        }, delay)
      } else {
        this.isActive = false
      }

      if (this.focusEl) {
        this.focusEl.focus()
      }
    },
    handleSuccessSignUp (isSuccessSignUp) {
      if (isSuccessSignUp) {
        this.closeNewsletterModal(this.delay)
      }
    },
    keyDownHandler (e) {
      if (this.isActive && e.key === 'Escape') {
        this.closeNewsletterModal()
      }
    }
  },
  mounted () {
    this.delay = el.getAttribute('data-modal-delay') * 1000
    this.initNewsletterModal()
    on(window, 'keydown', this.keyDownHandler)
  }
})
