import Vue from 'vue'
import store from 'modules/search-page/@store'
import { mapState } from 'vuex'

export default el => new Vue({
  el,
  store,
  computed: {
    ...mapState([
      'searchResults'
    ])
  }
})
