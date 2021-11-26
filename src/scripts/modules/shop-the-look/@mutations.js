export const mutations = {
  mutateSetSelectedProduct (state, selectedProduct) {
    state.selectedProduct = selectedProduct
  },
  mutateSetFocusEl (state, focusEl) {
    state.focusEl = focusEl
  }
}

export const actions = {
  setSelectedProduct ({commit, state}, selectedProduct) {
    commit('mutateSetSelectedProduct', selectedProduct)
  },
  setFocusEl ({commit, state}, focusEl) {
    commit('mutateSetFocusEl', focusEl)
  }
}
