import Vue from 'vue'
import qs from 'query-string'
import animateMixin from 'mixins/animate'
import animate from 'lib/animate'

export default el => {
  return new Vue({
    el,
    mixins: [animateMixin],
    data () {
      return {
        activeForm: 'login'
      }
    },
    mounted () {
      this.convertUrlIDtoQueryString()
      this.changeForm()
    },
    methods: {
      convertUrlIDtoQueryString () {
        if (~location.href.indexOf('#recover')) {
          history.replaceState(null, null, `${location.pathname}?form=recover`)
        }
      },
      changeForm (form = false) {
        const parsed = qs.parse(location.search)
        if (!form && !parsed.form) {
          return
        }
        if (!form) {
          form = parsed.form
        } else {
          parsed.form = form
        }
        this.activeForm = form
        history.replaceState(null, null, `${location.pathname}?${qs.stringify(parsed)}`)

        this.$nextTick(() => animate(this.$el))
      }
    }
  })
}
