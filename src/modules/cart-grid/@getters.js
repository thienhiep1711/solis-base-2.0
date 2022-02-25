export const getters = {
  totalItems (state) {
    return state.app.cart.item_count
  },
  cartData (state) {
    return state.app.cart
  }
}
