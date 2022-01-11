import { createStore } from 'vuex'
import { mutations, actions } from './@mutations'

const defaults = {
  active: 'manual'
}

export default createStore({
  namespaced: true,
  state: Object.assign({},
    defaults
  ),
  actions,
  mutations
})
