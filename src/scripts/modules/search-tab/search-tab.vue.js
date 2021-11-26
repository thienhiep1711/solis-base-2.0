import Vue from 'vue'
import { mapState, mapActions, mapGetters } from 'vuex'
import { addQueryVar } from 'lib/util'

Vue.component('search-tab', {
  props: [
    'tabs',
    'searchTerms'
  ],
  computed: {
    ...mapState([
      'activatedType'
    ]),
    ...mapGetters([
      'activatedTab',
      'heroText'
    ])
  },
  created () {
    if (!this.activatedTab) {
      this.setActivatedType('product')
    }
    this.setTabs(this.tabs)
    this.setSearchTerms(this.searchTerms)
    document.title = this.heroText
  },
  methods: {
    ...mapActions([
      'setTabs',
      'setActivatedType',
      'setSearchTerms',
      'setCurrentPage'
    ]),
    handleClick (tab) {
      this.setCurrentPage(1)
      const newUrl = addQueryVar('tab', tab.type)
      window.history.replaceState({}, document.title, newUrl)
      this.setActivatedType(tab.type)
      document.title = this.heroText
    }
  }
})
