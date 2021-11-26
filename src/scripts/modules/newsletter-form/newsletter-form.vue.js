import Vue from 'vue'
import jsonp from 'jsonp'
import nanoajax from 'nanoajax'
import { decode } from 'lib/util'
import 'modules/text-input/text-input.vue'

Vue.component('newsletter-form', {
  props: [
    'provider',
    'mailchimpUrl',
    'klaviyoUrl',
    'klaviyoGroup',
    'errorText',
    'successText',
    'subscribedText',
    'showNameField'
  ],
  data () {
    return {
      callbackFnName: 'newsletterSuccess',
      query: {
        ...(this.provider === 'klaviyo' && { g: this.klaviyoGroup }),
        ...(this.showNameField && { '$fields': '$first_name' })
      },
      response: false,
      hasError: false
    }
  },
  computed: {
    responseText () {
      return decode(this.response)
    }
  },
  methods: {
    onInputChange ({name, value}) {
      this.query[name] = value
    },
    submit (e) {
      e.preventDefault()

      const isValid = this.$children.every(c => c.validate())
      if (!isValid) {
        this.response = ''
        this.hasError = true
        return
      }

      const query = Object.keys(this.query).map(k => {
        let value = this.query[k]
        if (this.provider === 'mailchimp') {
          value = encodeURIComponent(value)
        }
        return `${k}=${value}`
      }).join('&')

      if (this.provider === 'mailchimp') {
        jsonp(`${this.mailchimpUrl}&${query}`, {
          param: 'c'
        }, this.mailchimpResponseHandler)
      } else if (this.provider === 'klaviyo') {
        nanoajax.ajax({
          body: query,
          url: this.klaviyoUrl,
          action: 'POST'
        }, this.klaviyoResponseHandler)
      }
    },
    mailchimpResponseHandler (err, data) {
      if (err) {
        this.response = this.errorText
        return
      }
      if (data && data['msg']) {
        this.response = data['msg']
      }
    },
    klaviyoResponseHandler (status, data) {
      if (Number(status) !== 200) {
        this.response = this.errorText
        this.hasError = true
        return
      }
      const parsed = JSON.parse(data)
      if (parsed && parsed['success']) {
        this.hasError = false
        this.response = parsed.data.is_subscribed ? this.subscribedText : this.successText
        this.$emit('success', true)
      } else {
        this.hasError = true
        this.response = this.errorText
      }
    },
    isValidEmail ({ value }) {
      return /\S+@\S+\.\S+/.test(value)
    }
  }
})
