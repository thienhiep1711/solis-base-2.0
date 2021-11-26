import Vue from 'vue'
import store from 'modules/search-page/@store'
import { mapGetters } from 'vuex'

export default el => new Vue({
  el,
  store,
  computed: {
    ...mapGetters([
      'activatedTab',
      'heroText'
    ])
  }
})
