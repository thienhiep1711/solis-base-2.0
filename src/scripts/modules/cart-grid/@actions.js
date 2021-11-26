import cart from 'lib/cart'
import StorefrontClient from 'lib/storefront-client'

const storefrontClient = new StorefrontClient({
  shop: window.BARREL.shop,
  accessToken: window.BARREL.storefrontAccessToken
})

export const actions = {
  getCart ({ commit, state, dispatch }, payload) {
    commit('setLoading', true)
    return cart
      .get()
      .then(data => {
        commit('refreshCart', data)
        dispatch('getLineItemsData')
      })
  },

  getLineItemsData ({ commit, getters, dispatch }) {
    storefrontClient.fetch({
      query: `query($ids: [ID!]!) {
        nodes(ids: $ids) {
          ... on ProductVariant {
            id
            product {
              tags
            }
            compareAtPriceV2 {
              amount
            }
          }
        }
      }`,
      variables: {
        ids: getters.storefrontIds
      }
    })
      .then(({ data: { nodes } }) => {
        commit('setLineItemsData', nodes)
      })
  },

  updateItemQuantity ({commit, state, dispatch}, { quantity, id }) {
    if (!id) {
      return
    }

    commit('setLoading', true)

    const { items } = state.app.cart
    const item = items.find(i => i.variant_id === id)

    return cart
      .change({ quantity, id })
      .then(data => {
        commit('refreshCart', data)
        dispatch('getLineItemsData')

        if (quantity === 0) {
          commit('setRemovedItem', item)
        }
      })
  },

  addToCart ({dispatch, state}, { id, quantity }) {
    const { items } = state.app.cart

    // Adds the requested `quantity` to the current item.quantity
    const item = items.find(i => i.variant_id === id)
    const totalQuantity = item
      ? item.quantity + quantity
      : quantity

    return dispatch('updateItemQuantity', { id, quantity: totalQuantity })
  },

  trackAddToCart ({dispatch, state}, { product, id }) {
    const variant = product.variants.find(({id: _id}) => _id === id)

    fbq && fbq('track', 'AddToCart', {
      value: (Number(variant.price) / 100),
      currency: 'USD',
      content_name: variant.name,
      content_type: 'product',
      content_ids: [id]
    })
  }
}
