import { createStore } from 'vuex'
import { mutations, actions } from './@mutations'

const defaults = {
  page: 'pdp'
}

export default createStore({
  namespaced: true,
  state: Object.assign({},
    defaults
  ),
  actions,
  mutations
})
