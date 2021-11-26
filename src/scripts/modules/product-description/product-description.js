import Vue from 'vue'
import animate from 'mixins/animate'

export default el => {
  return new Vue({
    el,
    mixins: [animate],
    data () {
      return {
        product: window.BARREL.product,
        activeAccordion: false
      }
    },
    methods: {
      toggleAccordion (reference) {
        if (this.activeAccordion === reference) {
          this.activeAccordion = false
        } else {
          this.activeAccordion = reference
        }
      },
      height (reference) {
        if (this.activeAccordion !== reference) {
          return 0
        }

        return this.$refs[reference].getBoundingClientRect().height + 'px'
      }
    }
  })
}
