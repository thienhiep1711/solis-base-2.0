import Vue from 'vue'
import Vuex from 'vuex'
import { mutations } from './@mutations'
import { actions } from './@actions'
import { getters } from './@getters'
import appState from 'lib/appState'

Vue.use(Vuex)

const state = {
  app: appState,
  isBootstrapped: false,
  loading: false,
  removedItem: {}
}

const CartGridStore = new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})

window.refreshCart = () => {
  CartGridStore.dispatch('getCart')
}

export default CartGridStore
