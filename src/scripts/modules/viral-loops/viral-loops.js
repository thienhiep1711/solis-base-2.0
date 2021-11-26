import Vue from 'vue'
import select from 'select-dom'
import on from 'dom-event'

export default el => new Vue({
  el,
  data () {
    return {
      isIdentified: false,
      isFormLoading: true,
      isMilestonesLoading: true
    }
  },
  methods: {
    isValidEmail ({ value }) {
      const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

      if (value === '' || !emailRegex.test(value)) {
        return false
      }

      return true
    },
    signUp () {
      // validate
      const isValid = this.$children
        .filter(c => (typeof c.validate !== 'undefined'))
        .map(c => c.validate())
        .every(res => res)

      if (isValid) {
        if (window.campaign) {
          window.campaign.identify({
            firstname: this.$refs.firstName ? this.$refs.firstName.$refs.input.value : '',
            lastname: this.$refs.lastName ? this.$refs.lastName.$refs.input.value : '',
            email: this.$refs.email.$refs.input.value
          }, () => {
            window.location.href = window.location.href
          })
        }
      }
    },
    setIdentified () {
      if (window.campaign) {
        this.updateLoadingStatus()

        if (window.campaign.identified) {
          this.isIdentified = true
        }
      }
    },
    updateLoadingStatus () {
      const formIframe = select('iframe', this.$refs.formWrapper)
      const milestonesIframe = select('iframe', this.$refs.formWrapper)

      if (formIframe) {
        on(formIframe, 'load', () => {
          this.isFormLoading = false
        })

        setTimeout(() => {
          this.isFormLoading = false
        }, 1000)
      }

      if (milestonesIframe) {
        on(milestonesIframe, 'load', () => {
          this.isMilestonesLoading = false
        })

        setTimeout(() => {
          this.isMilestonesLoading = false
        }, 1000)
      }
    }
  },
  mounted () {
    setTimeout(() => {
      if (window.campaign) {
        this.setIdentified()
      } else {
        setTimeout(this.setIdentified, 500)
      }
    }, 200)
  }
})
