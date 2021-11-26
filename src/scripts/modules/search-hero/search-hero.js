import Vue from 'vue'
import store from 'modules/search-page/@store'
import { mapGetters } from 'vuex'
import animate from 'mixins/animate'

export default el => new Vue({
  el,
  mixins: [animate],
  store,
  computed: {
    ...mapGetters([
      'activatedTab',
      'heroText'
    ])
  }
})
