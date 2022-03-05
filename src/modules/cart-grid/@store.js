import { createStore } from 'vuex'
import { mutations } from './@mutations'
import { actions } from './@actions'
import { getters } from './@getters'
import appState from 'lib/appState'

const defaults = {
  app: appState,
  loading: false
}

export default createStore({
  namespaced: true,
  state: defaults,
  getters,
  mutations,
  actions
})
