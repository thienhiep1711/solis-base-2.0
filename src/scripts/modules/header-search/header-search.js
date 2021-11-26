import Vue from 'vue'
import state from 'lib/appState'
import on from 'dom-event'
import ClickOutside from 'vue-click-outside'

export default el => new Vue({
  el,
  data () {
    return {
      state
    }
  },
  methods: {
    handleKeydown (event) {
      if (document.activeElement === this.$refs.searchInput && event.keyCode === 9 && !event.shiftKey) {
        event.preventDefault()
        this.state.headerSearchToggle.focus()
        this.state.isSearchOpen = !this.state.isSearchOpen
      }
    },
    handleClickOutside (event) {
      if (this.state.isSearchOpen && !event.target.closest('.js-header-search-toggle') && !event.target.classList.contains('.js-header-search-toggle')) {
        this.hideHeaderSearch()
      }
    },
    hideHeaderSearch () {
      this.state.isSearchOpen = false
      this.state.headerSearchToggle.focus()
    }
  },
  watch: {
    'state.isSearchOpen' (value) {
      if (value) {
        setTimeout(() => {
          this.$refs.searchInput.focus()
        }, 201)
      }
    }
  },
  mounted () {
    on(window, 'keydown', (event) => {
      if (event.key === 'Escape' && this.state.isSearchOpen) {
        this.hideHeaderSearch()
      }
    })
  },
  directives: {
    ClickOutside
  }
})
