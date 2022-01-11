import { createStore } from 'vuex'

import base from './base'
import cart from './cart'

const store = createStore({
  ...base,
  modules: {
    cart,
  },
})

export default store
