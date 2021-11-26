import Vue from 'vue'
import Vuex from 'vuex'
import { mutations, actions } from './@mutations'

Vue.use(Vuex)

const state = {
  selectedProduct: null,
  focusEl: null
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
