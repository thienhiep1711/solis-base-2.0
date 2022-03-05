import { normalizeId } from 'lib/utils'

export const getters = {
  totalItems (state) {
    return state.app.cart.item_count
  },
  cartData (state) {
    return state.app.cart
  },
  storefrontIds (state) {
    const lineItemIds = state.app.cart.items.map(item => item.id)

    return lineItemIds.map(id => (
      normalizeId('ProductVariant', id))
    )
  }
}
