import Vue from 'vue'
import { enableBodyScroll, disableBodyScroll } from 'body-scroll-lock'
import { trapFocus, removeTrapFocus } from '@shopify/theme-a11y'
import select from 'select-dom'
import on from 'dom-event'
import nanoajax from 'nanoajax'

export default el => new Vue({
  el,
  data () {
    return {
      showModal: false,
      previouslyFocusedElement: '',
      query: null,
      error: false
    }
  },
  watch: {
    showModal () {
      const focusElements = select.all('a, button, input', this.$refs.modal)
      const inputEl = select('.text-input__el', this.$refs.modal)
      if (inputEl && focusElements) {
        if (this.showModal) {
          this.$nextTick(() => {
            trapFocus(this.$refs.modal, {
              elementToFocus: inputEl
            })
          })
        } else {
          removeTrapFocus(this.$refs.modal)
          this.$refs.openButton.focus()
        }
      }
      focusElements.map((element) => {
        on(element, 'keydown', (e) => {
          if (e.keyCode === 27) {
            this.closeModal()
          }
        })
      })
    }
  },
  methods: {
    openModal () {
      this.showModal = true
      disableBodyScroll(document.body)
    },
    closeModal () {
      this.showModal = false
      enableBodyScroll(document.body)
    },
    onInputChange ({value}) {
      this.query = value
    },
    submit () {
      nanoajax.ajax({
        method: 'POST',
        url: `/password?password=${this.query}`,
        cors: true
      }, (code, response) => {
        if (response.indexOf('data-password') > -1) {
          this.error = true
          return
        }
        this.$refs.storefront_password.submit()
      })
    }
  }
})
