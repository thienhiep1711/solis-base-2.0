export const mutations = {
  setLoading (state, isLoading) {
    state.loading = isLoading
  },
  refreshCart (state, data) {
    state.loading = false

    if (data.errors) {
      state.app.cart.errors = data.errors
    } else {
      state.app.cart = data
    }
  },
  toggleMiniCart (state) {
    state.app.isMiniCartOpen = !state.app.isMiniCartOpen
  },
  setRemovedItem (state, item) {
    state.removedItem = item
  },
  setLineItemsData (state, nodes) {
    state.app.lineItemsData = nodes
  }
}
