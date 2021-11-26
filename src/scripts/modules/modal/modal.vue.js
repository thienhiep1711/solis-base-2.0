import Vue from 'vue'
import on from 'dom-event'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import { trapFocus } from 'lib/util'

Vue.component('modal', {
  props: [
    'showModal',
    'data',
    'content'
  ],
  methods: {
    close: function (e) {
      this.$emit('close', e)
    }
  },
  mounted () {
    // Escape key closes modal
    on(window, 'keyup', event => {
      if (event.keyCode === 27 && this.showModal) {
        this.close()
      }
    })
  },
  watch: {
    showModal (value) {
      if (!value) {
        clearAllBodyScrollLocks()
        clearTimeout(this.timeout)
        return
      }

      // Trap focus in the modal element
      trapFocus(this.$el)

      // Set focus on close button
      this.timeout = setTimeout(() => {
        this.$refs.closeButton.focus()
      }, 100)

      disableBodyScroll(this.$refs.modalContent)
    }
  }
})
