import Vue from 'vue'
import animate from 'mixins/animate'

export default el => new Vue({
  el,
  mixins: [animate]
})
