import { formatMoney, normalizeId } from 'lib/util'

export const getters = {
  subtotal (state) {
    return formatMoney(state.app.cart.total_price)
  },
  storefrontIds (state) {
    const lineItemIds = state.app.cart.items.map(item => item.id)

    return lineItemIds.map(id => (
      normalizeId('ProductVariant', id))
    )
  }
}
