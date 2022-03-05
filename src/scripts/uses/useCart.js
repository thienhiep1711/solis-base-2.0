import { ref } from 'vue'
import cart from 'lib/cart'
import { useStore } from 'vuex'

export default () => {
  const store = useStore()
  const isFetching = ref(false)
  const errorMessage = ref(null)

  const get = async () => {
    return store.dispatch('getCart')
  }

  const change = async (data) => {
    const response = await cart.change(data)
    store.commit('refreshCart', response)
  }

  const add = (data) => {
    return store.dispatch('addToCart', data)
  }

  const remove = ({ id, quantity = 0 }) => {
    return store.dispatch('updateItemQuantity', {
      id: id,
      quantity: quantity
    })
  }

  const toggleCart = () => {
    store.dispatch('toggleMiniCart')
    get()
  }

  return {
    isFetching,
    errorMessage,
    get,
    change,
    add,
    remove,
    toggleCart
  }
}
