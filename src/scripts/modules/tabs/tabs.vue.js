import Vue from 'vue'

Vue.component('tabs', {
  props: [
    'tabs',
    'displayPrefixOnly'
  ],
  data () {
    return {
      selectedTab: 0
    }
  },
  methods: {
    getTitle (title = '') {
      return this.displayPrefixOnly ? title.split('-')[0] : title
    }
  }
})
