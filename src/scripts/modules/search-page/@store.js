import Vue from 'vue'
import Vuex from 'vuex'
import { mutations, actions } from './@mutations'
import { getters } from './@getters'
import { getSearchTabFromUrl } from './@util'

Vue.use(Vuex)

const defaults = {
  tabs: ([]),
  activatedType: '',
  searchTerms: '',
  currentPage: 1,
  searchResults: ([])
}

export default new Vuex.Store({
  state: Object.assign({},
    defaults,
    getSearchTabFromUrl()
  ),
  getters,
  actions,
  mutations
})
