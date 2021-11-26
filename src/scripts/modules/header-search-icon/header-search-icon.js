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
    toggleSearchOverlay () {
      this.state.headerSearchToggle = document.activeElement
      this.state.isSearchOpen = !this.state.isSearchOpen
    }
  }
})
