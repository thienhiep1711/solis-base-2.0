import Vue from 'vue'
import state from 'lib/appState'

export default el => new Vue({
  el,
  data () {
    return {
      state
    }
  },
  methods: {
    toggleMiniCart () {
      // if (!this.state.isMiniCartLoaded) {
      //   import(
      //     /* webpackMode: "lazy" */
      //     'root/modules/mini-cart/mini-cart.js'
      //   ).then(({default: miniCart}) => {
      //     miniCart(select('[data-module="mini-cart"]'))
      //     this.state.isMiniCartLoaded = true
      //     this.state.isMiniCartOpen = !this.state.isMiniCartOpen
      //   })

      //   return
      // }

      this.state.isMiniCartOpen = !this.state.isMiniCartOpen
    }
  },
  computed: {
    itemCount () {
      return (this.state.cart.items || [])
        .reduce((count, item) => {
          count += Number(item.quantity)
          return count
        }, 0)
    },
    itemCountText () {
      return `Your bag - ${this.itemCount} items`
    }
  }
})
