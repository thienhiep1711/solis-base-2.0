import { createStore } from 'vuex'
import { mutations, actions } from './@mutations'

const defaults = {
  page: 'plp'
}

export default createStore({
  namespaced: true,
  state: Object.assign({},
    defaults
  ),
  actions,
  mutations
})
